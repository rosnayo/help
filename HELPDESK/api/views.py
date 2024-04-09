from django.http import JsonResponse
# Me permite poner la interface de pueba de rest framework
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from rest_framework import generics
################################################

#importo todos los serializadores que voy a usar en este archivo
from .serializers import TicketSerializer, PersonasSerializer, SeguimientoSerializer, EmpresaSerializer, ContactosSerializer, TiposSerializer, MaestraSerializer, UbigeoSerializer, RegisterUserSerializer
from .models import  TblTicket, TblPersonas, TblMaestra, TblEmpresa, TblContactos,TblUbigeo,TblSeguimiento, TblTipos

# Create your views here.
@api_view(['GET']) # Indico los metodos que va a poder recibir esta vista, en este caso solo GET
def index(request):
    context = {
        'status':True,
        'message':'Bienvenido a mi API'
    }
    
    return Response(context)

###### API CON DJANGO REST FRAMWORK ############
         
@api_view(['GET','POST'])
################# POST Y GET PERSONAS
def Personas(request):
    if  request.method == 'GET':
        
        # Traigo todos las personas de la BD y los paso por el serializer para adaptarlos al formato json
        #personas = TblPersonas.objects.filter().order_by('+apellido')   # ordenado por apellido de forma ascendente
        lista_personas = TblPersonas.objects.all()
        serializer = PersonasSerializer(lista_personas, many=True)   # help
        context = {
            'status':True,
            'content':serializer.data
        }
    elif request.method == 'POST':
        serializer =  PersonasSerializer(data = request.data)
        if serializer.is_valid():
            obj_persona =  serializer.save() # Guarda la persona en la BD
            context ={
                'status': True,
                'id':obj_persona.pk,
                'message':'Se agrego correctamente',
                'content':PersonasSerializer(obj_persona).data
            }
        else:
             context ={
                 'status': False,
                 'message':'No se pudo agregar el ticket',
                 'error':serializer.errors
             }

    return Response(context)


class  PersonasPerfilView(APIView):
    def get_objects(self,pk):
        try:
            return  TblPersonas.objects.get(user_id=pk)
        except TblPersonas.DoesNotExist:
            raise Http404
    
    def get(self,request, pk):
        data = self.get_objects(pk)
        serializer = PersonasSerializer(data) 
        return Response(serializer.data)

class  PersonasDetailView(APIView):
    def get_objects(self,pk):
        try:
            return  TblPersonas.objects.get(id_persona=pk)
        except TblPersonas.DoesNotExist:
            raise Http404
    
    def get(self,request, pk):
        data = self.get_objects(pk)
        serializer = PersonasSerializer(data) 
        return Response(serializer.data)


    def put(self, request, pk, format=None):
        # Intenta obtener la instancia de Tipos usando el primary key (pk)
        try:
            person = TblPersonas.objects.get(pk=pk)
        except TblPersonas.DoesNotExist:
            raise Http404

        # Serializa los datos de actualización
        serializer = PersonasSerializer(person, data=request.data)
        # Verifica si los datos son válidos
        if serializer.is_valid():
            # Guarda los datos actualizados en la base de datos
            serializer.save()
            return Response({
                'status': True,
                'message': 'Tipo actualizado exitosamente',
                'content': serializer.data
            })
        else:
            # Si los datos no son válidos, devuelve un error
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        # Intenta obtener la instancia de Tipo usando el primary key (pk)
        try:
            person = TblPersonas.objects.get(pk=pk)
        except TblPersonas.DoesNotExist:
            raise Http404
        # Elimina la instancia de maestra de la base de datos
        person.delete()

        return Response({
            'status': False,
            'message': 'Registro eliminado exitosamente',
            'errors': None
        })

@api_view(['GET','POST'])
################# POST Y GET TICKETS
def Tickets(request):
    if  request.method == 'GET':
        
        # Traigo todos los ticket de la BD y los paso por el serializer para adaptarlos al formato json
        tickets = TblTicket.objects.filter().order_by('-fec_creacion')   # ordenado por fecha de creaci[on de forma descendente
        serializer = TicketSerializer(tickets,many=True)   # 
        context = {
            'status':True,
            'content':serializer.data
        }
    elif request.method == 'POST':
        serializer =  TicketSerializer(data=request.DATA)
        if serializer.is_valid():
            obj_ticket =  serializer.save() # Guarda el nuevo ticket en la BD
            context ={
                'status': True,
                'id':obj_ticket.pk,
                'message':'Se agrego correctamente',
                'content':TicketSerializer(obj_ticket).data
            }
        else:
             context ={
                 'status': False,
                 'message':'No se pudo agregar el ticket',
                 'error':serializer.errors
             }
             
    return Response(context)

class  TicketsDetailView(APIView):
    def get_objects(self,pk):
        try:
            return  TblTicket.objects.get(id_ticket=pk)
        except TblTicket.DoesNotExist:
            raise Http404
    
    def get(self,request, pk):
        data = self.get_objects(pk)
        serializer = TicketSerializer(data) 
        return Response(serializer.data)


    def put(self, request, pk, format=None):
        # Intenta obtener la instancia de Tipos usando el primary key (pk)
        try:
            person = TblTicket.objects.get(pk=pk)
        except TblTicket.DoesNotExist:
            raise Http404

        # Serializa los datos de actualización
        serializer = TicketSerializer(person, data=request.data)
        # Verifica si los datos son válidos
        if serializer.is_valid():
            # Guarda los datos actualizados en la base de datos
            serializer.save()
            return Response({
                'status': True,
                'message': 'Registro actualizado exitosamente',
                'content': serializer.data
            })
        else:
            # Si los datos no son válidos, devuelve un error
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        # Intenta obtener la instancia de Tipo usando el primary key (pk)
        try:
            ticket = TblTicket.objects.get(pk=pk)
        except TblTicket.DoesNotExist:
            raise Http404
        # Elimina la instancia de maestra de la base de datos
        ticket.delete()

        return Response({
            'status': False,
            'message': 'Registro eliminado exitosamente',
            'errors': None
        })

################# POST Y GET SEGUIMIENTO DE TICKETS
# DEBE PERMITIR INGRESAR EL ID_TICKET PARA MOSTRAR SOLO LOS QUE CORRESPONDE AL TICKET
class  SeguimientoView(APIView):
    def get(self,request):
        data = TblSeguimiento.objects.all()
        serializer = SeguimientoSerializer(data,many=True)
        context ={
                 'status': True,
                 'content':serializer.data
        }
        return Response(context)
    
    def post(self,request):
        serializer = SeguimientoSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save() # Guarda el nuevo ticket en la BD
            context ={
                'status': True,
                'message':'Se agrego correctamente',
                'content':serializer.data
            }
        else:
             context ={
                 'status': False,
                 'message':'No se pudo agregar el ticket',
                 'error':serializer.errors
             }

        return Response(context)

######## DETALLE DE SEGUIMIENTO
class  SeguimientoDetailView(APIView):
    def get_objects(self,pk):
        try:
            return  TblSeguimiento.objects.get(id_seguimiento=pk)
        except TblSeguimiento.DoesNotExist:
            raise Http404
    
    def get(self,request, pk):
        data = self.get_objects(pk)
        serializer = SeguimientoSerializer(data) 
        return Response(serializer.data)
           
    def put(self,request,pk):
        data = self.get_objects(pk)
        serializer = SeguimientoSerializer(data,data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            context = {
                'status':True,
                'content':serializer.data
            }
            return Response(serializer.data)
        
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    
           
    def delete(self,request,pk):
        data = self.get_objects(pk)
        data.delete()
        return Response({
            'status': False,
            'message': 'Seguimiento eliminado exitosamente',
            'errors': None
        })

########## EMPRESA

class  EmpresaView(APIView):
    def get(self,request):
        data = TblEmpresa.objects.all()
        serializer = EmpresaSerializer(data,many=True)
        context ={
                 'status': True,
                 'content':serializer.data
        }
        return Response(context)
    
    def post(self,request):
        serializer = EmpresaSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save() # Guarda el nuevo ticket en la BD
            context ={
                'status': True,
                'message':'Se agrego correctamente',
                'content':serializer.data
            }
        else:
             context ={
                 'status': False,
                 'message':'No se pudo agregar el ticket',
                 'error':serializer.errors
             }

        return Response(context)

class  EmpresaDetailView(APIView):
    def get_objects(self,pk):
        try:
            return  TblEmpresa.objects.get(id_empresa=pk)
        except TblEmpresa.DoesNotExist:
            raise Http404
    
    def get(self,request, pk):
        data = self.get_objects(pk)
        serializer = EmpresaSerializer(data) 
        return Response(serializer.data)


    def put(self, request, pk, format=None):
        # Intenta obtener la instancia de Empresa usando el primary key (pk)
        try:
            empresa = TblEmpresa.objects.get(pk=pk)
        except TblEmpresa.DoesNotExist:
            raise Http404

        # Serializa los datos de actualización
        serializer = EmpresaSerializer(empresa, data=request.data)
        # Verifica si los datos son válidos
        if serializer.is_valid():
            # Guarda los datos actualizados en la base de datos
            serializer.save()
            return Response({
                'status': True,
                'message': 'Empresa actualizada exitosamente',
                'content': serializer.data
            })
        else:
            # Si los datos no son válidos, devuelve un error
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        # Intenta obtener la instancia de Empresa usando el primary key (pk)
        try:
            empresa = TblEmpresa.objects.get(pk=pk)
        except TblEmpresa.DoesNotExist:
            raise Http404

        # Verifica si el usuario tiene permiso para eliminar la instancia de Empresa
        self.permission_classes = (IsAuthenticated,)

        # Elimina la instancia de Empresa de la base de datos
        empresa.delete()

        return Response({
            'status': False,
            'message': 'Empresa eliminada exitosamente',
            'errors': None
        })

class  ContactosView(APIView):
    def get(self,request):
        data = TblContactos.objects.all()
        serializer = ContactosSerializer(data,many=True)
        context ={
                 'status': True,
                 'content':serializer.data
        }
        return Response(context)
    
    def post(self,request):
        serializer = ContactosSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save() # Guarda el nuevo ticket en la BD
            context ={
                'status': True,
                'message':'Se agrego correctamente',
                'content':serializer.data
            }
        else:
             context ={
                 'status': False,
                 'message':'No se pudo agregar el ticket',
                 'error':serializer.errors
             }

        return Response(context)

class  ContactosDetailView(APIView):
    def get_objects(self,pk):
        try:
            return  TblContactos.objects.get(id_contactos=pk)
        except TblContactos.DoesNotExist:
            raise Http404
    
    def get(self,request, pk):
        data = self.get_objects(pk)
        serializer = ContactosSerializer(data) 
        return Response(serializer.data)


    def put(self, request, pk, format=None):
        # Intenta obtener la instancia de Empresa usando el primary key (pk)
        try:
            empresa = TblContactos.objects.get(pk=pk)
        except TblContactos.DoesNotExist:
            raise Http404

        # Serializa los datos de actualización
        serializer = ContactosSerializer(empresa, data=request.data)
        # Verifica si los datos son válidos
        if serializer.is_valid():
            # Guarda los datos actualizados en la base de datos
            serializer.save()
            return Response({
                'status': True,
                'message': 'Empresa actualizada exitosamente',
                'content': serializer.data
            })
        else:
            # Si los datos no son válidos, devuelve un error
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        # Intenta obtener la instancia de Empresa usando el primary key (pk)
        try:
            empresa = TblContactos.objects.get(pk=pk)
        except TblContactos.DoesNotExist:
            raise Http404
        # Elimina la instancia de Empresa de la base de datos
        empresa.delete()

        return Response({
            'status': False,
            'message': 'Empresa eliminada exitosamente',
            'errors': None
        })

class  TiposView(APIView):
    def get(self,request):
        data = TblTipos.objects.all()
        serializer = TiposSerializer(data,many=True)
        context ={
                 'status': True,
                 'content':serializer.data
        }
        return Response(context)
    
    def post(self,request):
        serializer = TiposSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save() # Guarda el nuevo tipo en la BD
            context ={
                'status': True,
                'message':'Se agrego correctamente',
                'content':serializer.data
            }
        else:
             context ={
                 'status': False,
                 'message':'No se pudo agregar el tipo',
                 'error':serializer.errors
             }

        return Response(context)
    
class  TiposDetailView(APIView):
    def get_objects(self,pk):
        try:
            return  TblTipos.objects.get(id_tipos=pk)
        except TblTipos.DoesNotExist:
            raise Http404
    
    def get(self,request, pk):
        data = self.get_objects(pk)
        serializer = TiposSerializer(data) 
        return Response(serializer.data)


    def put(self, request, pk, format=None):
        # Intenta obtener la instancia de Tipos usando el primary key (pk)
        try:
            tipo = TblTipos.objects.get(pk=pk)
        except TblTipos.DoesNotExist:
            raise Http404

        # Serializa los datos de actualización
        serializer = TiposSerializer(tipo, data=request.data)
        # Verifica si los datos son válidos
        if serializer.is_valid():
            # Guarda los datos actualizados en la base de datos
            serializer.save()
            return Response({
                'status': True,
                'message': 'Tipo actualizado exitosamente',
                'content': serializer.data
            })
        else:
            # Si los datos no son válidos, devuelve un error
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        # Intenta obtener la instancia de Tipo usando el primary key (pk)
        try:
            tipo = TblTipos.objects.get(pk=pk)
        except TblTipos.DoesNotExist:
            raise Http404
        # Elimina la instancia de Tipo de la base de datos
        tipo.delete()

        return Response({
            'status': False,
            'message': 'Tipo eliminado exitosamente',
            'errors': None
        })

class  MaestraView(APIView):
    def get(self,request):
        data = TblMaestra.objects.all()
        serializer = MaestraSerializer(data,many=True)
        context ={
                 'status': True,
                 'content':serializer.data
        }
        return Response(context)
    
    def post(self,request):
        serializer = MaestraSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save() # Guarda el nuevo tipo en la BD
            context ={
                'status': True,
                'message':'Se agrego correctamente',
                'content':serializer.data
            }
        else:
             context ={
                 'status': False,
                 'message':'No se pudo agregar el tipo',
                 'error':serializer.errors
             }

        return Response(context)
    
class  MaestraDetailView(APIView):
    def get_objects(self,pk):
        try:
            return  TblMaestra.objects.get(id_tipos=pk)
        except TblMaestra.DoesNotExist:
            raise Http404
    
    def get(self,request, pk):
        data = self.get_objects(pk)
        serializer = MaestraSerializer(data) 
        return Response(serializer.data)


    def put(self, request, pk, format=None):
        # Intenta obtener la instancia de Tipos usando el primary key (pk)
        try:
            maestra = TblMaestra.objects.get(pk=pk)
        except TblMaestra.DoesNotExist:
            raise Http404

        # Serializa los datos de actualización
        serializer = MaestraSerializer(maestra, data=request.data)
        # Verifica si los datos son válidos
        if serializer.is_valid():
            # Guarda los datos actualizados en la base de datos
            serializer.save()
            return Response({
                'status': True,
                'message': 'Tipo actualizado exitosamente',
                'content': serializer.data
            })
        else:
            # Si los datos no son válidos, devuelve un error
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        # Intenta obtener la instancia de Tipo usando el primary key (pk)
        try:
            maestra = TblMaestra.objects.get(pk=pk)
        except TblMaestra.DoesNotExist:
            raise Http404
        # Elimina la instancia de maestra de la base de datos
        maestra.delete()

        return Response({
            'status': False,
            'message': 'Registro eliminado exitosamente',
            'errors': None
        })

class  UbigeoView(APIView):
    def get(self,request):
        data = TblUbigeo.objects.all()
        serializer = UbigeoSerializer(data,many=True)
        context ={
                 'status': True,
                 'content':serializer.data
        }
        return Response(context)
    
    def post(self,request):
        serializer = UbigeoSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save() # Guarda el nuevo tipo en la BD
            context ={
                'status': True,
                'message':'Se agrego correctamente',
                'content':serializer.data
            }
        else:
             context ={
                 'status': False,
                 'message':'No se pudo agregar el tipo',
                 'error':serializer.errors
             }

        return Response(context)

class  UbigeoDetailView(APIView):
    def get_objects(self,pk):
        try:
            return  TblUbigeo.objects.get(id_ubigeo=pk)
        except TblUbigeo.DoesNotExist:
            raise Http404
    
    def get(self,request, pk):
        data = self.get_objects(pk)
        serializer = UbigeoSerializer(data) 
        return Response(serializer.data)


    def put(self, request, pk, format=None):
        # Intenta obtener la instancia de Tipos usando el primary key (pk)
        try:
            maestra = TblUbigeo.objects.get(pk=pk)
        except TblUbigeo.DoesNotExist:
            raise Http404

        # Serializa los datos de actualización
        serializer = UbigeoSerializer(maestra, data=request.data)
        # Verifica si los datos son válidos
        if serializer.is_valid():
            # Guarda los datos actualizados en la base de datos
            serializer.save()
            return Response({
                'status': True,
                'message': 'Tipo actualizado exitosamente',
                'content': serializer.data
            })
        else:
            # Si los datos no son válidos, devuelve un error
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        # Intenta obtener la instancia de Tipo usando el primary key (pk)
        try:
            maestra = TblUbigeo.objects.get(pk=pk)
        except TblUbigeo.DoesNotExist:
            raise Http404
        # Elimina la instancia de maestra de la base de datos
        maestra.delete()

        return Response({
            'status': False,
            'message': 'Registro eliminado exitosamente',
            'errors': None
        })

User = get_user_model()

class RegisterUserView(generics.CreateAPIView):
    serializer_class = RegisterUserSerializer
    queryset = User.objects.all()