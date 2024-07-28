"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/signup', methods=['POST'])
def create_user():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    is_active = request.json.get('is_active', None)

    if not email or not password: 
        return jsonify({"msg":"An email and a password are required"}), 400
    
    #Verificar si usuario ya existe
    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"msg":"This user already exists"}), 400
    #Crear usuario y guardarlo en base de datos
    new_user = User(email=email, password=password, is_active=is_active)
    db.session.add(new_user)
    db.commit()
    #Crear un token
    access_token = create_access_token(identity=new_user.id)

    return jsonify({"msg":"User created successfully", "access_token":access_token, "email":user.email}), 201


# Crea una ruta para autenticar a los usuarios y devolver el token JWT
# La función create_access_token() se utiliza para generar el JWT
@api.route("/login", methods=["POST", "GET"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    # Consulta la base de datos por el nombre de usuario y la contraseña
    user = User.query.filter_by(email=email, password=password).first()

    if user is None:
        # el usuario no se encontró en la base de datos
        return jsonify({"msg": "Bad username or password"}), 401
    
    # Crea un nuevo token con el id de usuario dentro
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id, "email":user.email})



# Protege una ruta con jwt_required, bloquea las peticiones sin un JWT válido
@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    return jsonify({"id": user.id}), 200