from django.contrib import admin
from .models import *

#admin.site.register(TblEmpresa)
#admin.site.register(TblContactos)
admin.site.register(TblTipos)
admin.site.register(TblMaestra)
admin.site.register(TblPersonas)
admin.site.register(TblUbigeo)
admin.site.register(TblTicket)
admin.site.register(TblSeguimiento)
# Register your models here.

##### XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxx
@admin.register(TblEmpresa)
class EmpresaAdmin(admin.ModelAdmin):
    list_display = ('ruc', 'razon_social','direccion','telefono','web')
    search_fields = ['departamento','provincia', 'distrito']  # Aqui van los campos de busqueda
    
   
    
@admin.register(TblContactos)
class ContactosAdmin(admin.ModelAdmin):
    list_display = ('nombres', 'apellidos', 'email','telefono','celular','cargo')
    search_fields = ['razon_social']
    
      





   