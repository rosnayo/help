from rest_framework import serializers
from .models import AuthUser, TblTicket, TblSeguimiento, TblContactos, TblUbigeo, TblEmpresa, TblMaestra, TblPersonas, TblTipos
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import (
    TokenObtainPairSerializer
)
from django.contrib.auth.models import User

class  TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblTicket
        fields = '__all__'
    
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        return representation
     

class  SeguimientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblSeguimiento
        fields = '__all__'

    def to_representation(self,instance):
        representation = super().to_representation(instance)
        return representation
    
class  PersonasSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblPersonas
        fields = '__all__'

    def to_representation(self,instance):
        representation = super().to_representation(instance)
        return representation
    
class  EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblEmpresa
        fields = '__all__'

    def to_representation(self,instance):
        representation = super().to_representation(instance)
        return representation
    
class  ContactosSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblContactos
        fields = '__all__'
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        return representation
     
class  TiposSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblTipos
        fields = '__all__'

    def to_representation(self,instance):
        representation = super().to_representation(instance)
        return representation
    
class  MaestraSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblMaestra
        fields = '__all__'

    def to_representation(self,instance):
        representation = super().to_representation(instance)
        return representation
    
class  UbigeoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblUbigeo
        fields = '__all__'

    def to_representation(self,instance):
        representation = super().to_representation(instance)
        return representation
            
User = get_user_model()

class TblPersonasSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblPersonas
        fields = ('user_id','id_empresa', 'nombres', 'apellidos', 'direccion', 'id_ubigeo', 'celular', 'habilitado', 'tipo_usuario', 'usuario_registro', 'usuario_modificacion')

    def to_representation(self,instance):
        representation = super().to_representation(instance)
        return representation
    
# User = get_user_model()
# class RegisterUserSerializer(serializers.ModelSerializer):
#     tbl_personas = TblPersonasSerializer()

#     class Meta:
#         model = User
#         fields = ('id', 'username', 'password', 'is_superuser', 'first_name', 'last_name', 'email', 'is_staff', 'is_active', 'date_joined', 'tbl_personas')
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         user_data = validated_data.pop('tbl_personas')
#         user = User.objects.create_user(
#         username=validated_data['username'],
#         password=validated_data['password'],
#         is_superuser=validated_data['is_superuser'],
#         email=validated_data['email'],
#         first_name=validated_data['first_name'],
#         last_name=validated_data['last_name'],
#         is_staff=validated_data['is_staff'],
#         is_active=validated_data['is_active'],
#     )
#         # Seteo el user_id en TblPersonas usando el auth_user object
#         user_data['user_id'] = user
#         tbl_personas = TblPersonas.objects.create(**user_data)

#         return user

class UserFullSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','first_name','last_name','email','password']
        extra_kwargs = {'password':{'write_only':True}}
        
class RegisterUserSerializer(serializers.ModelSerializer):
    user = UserFullSerializer()
    
    class Meta:
        model = TblPersonas
        fields = ('user','id_empresa','nombres','apellidos','direccion','id_ubigeo','celular','imagen','habilitado','tipo_usuario')
        
    def create(self,validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create_user(**user_data)
        client = TblPersonas.objects.create(user=user,**validated_data)
        return client


class LoginSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(self,user):
        token = super().get_token(user)
        token['usu_nom'] = user.username
        token['usu_id'] = user.id
        
        return token