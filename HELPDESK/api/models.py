# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.contrib.auth.models import User 


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150, db_collation='Modern_Spanish_CI_AS')

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255, db_collation='Modern_Spanish_CI_AS')
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100, db_collation='Modern_Spanish_CI_AS')

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128, db_collation='Modern_Spanish_CI_AS')
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150, db_collation='Modern_Spanish_CI_AS')
    first_name = models.CharField(max_length=150, db_collation='Modern_Spanish_CI_AS')
    last_name = models.CharField(max_length=150, db_collation='Modern_Spanish_CI_AS')
    email = models.CharField(max_length=254, db_collation='Modern_Spanish_CI_AS')
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'

class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)

class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)

class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(db_collation='Modern_Spanish_CI_AS', blank=True, null=True)
    object_repr = models.CharField(max_length=200, db_collation='Modern_Spanish_CI_AS')
    action_flag = models.SmallIntegerField()
    change_message = models.TextField(db_collation='Modern_Spanish_CI_AS')
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'

class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100, db_collation='Modern_Spanish_CI_AS')
    model = models.CharField(max_length=100, db_collation='Modern_Spanish_CI_AS')

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)

class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255, db_collation='Modern_Spanish_CI_AS')
    name = models.CharField(max_length=255, db_collation='Modern_Spanish_CI_AS')
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'

class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40, db_collation='Modern_Spanish_CI_AS')
    session_data = models.TextField(db_collation='Modern_Spanish_CI_AS')
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Sysdiagrams(models.Model):
    name = models.CharField(max_length=128, db_collation='Modern_Spanish_CI_AS')
    principal_id = models.IntegerField()
    diagram_id = models.AutoField(primary_key=True)
    version = models.IntegerField(blank=True, null=True)
    definition = models.BinaryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sysdiagrams'
        unique_together = (('principal_id', 'name'),)


class TblContactos(models.Model):
    id_contactos = models.AutoField(primary_key=True)
    id_empresa = models.ForeignKey('TblEmpresa', models.DO_NOTHING, db_column='id_empresa')
    nombres = models.CharField(max_length=250, db_collation='Modern_Spanish_CI_AS')
    apellidos = models.CharField(max_length=250, db_collation='Modern_Spanish_CI_AS')
    email = models.CharField(max_length=250, db_collation='Modern_Spanish_CI_AS')
    telefono = models.CharField(max_length=50, db_collation='Modern_Spanish_CI_AS', blank=True, null=True)
    celular = models.CharField(max_length=50, db_collation='Modern_Spanish_CI_AS', blank=True, null=True)
    cargo = models.CharField(max_length=250, db_collation='Modern_Spanish_CI_AS', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tbl_contactos'


class TblEmpresa(models.Model):
    id_empresa = models.AutoField(primary_key=True)
    ruc = models.CharField(max_length=50, db_collation='Modern_Spanish_CI_AS')
    razon_social = models.CharField(max_length=250, db_collation='Modern_Spanish_CI_AS')
    direccion = models.CharField(max_length=250, db_collation='Modern_Spanish_CI_AS')
    id_ubigeo = models.ForeignKey('TblUbigeo', models.DO_NOTHING, db_column='id_ubigeo')
    telefono = models.CharField(max_length=50, db_collation='Modern_Spanish_CI_AS')
    web = models.CharField(max_length=250, db_collation='Modern_Spanish_CI_AS')
    tipo_empresa = models.IntegerField()
    
    class Meta:
        managed = False
        db_table = 'tbl_empresa'
        
    def __str__(self):
        return self.razon_social


class TblMaestra(models.Model):
    id_tipo_ticket = models.AutoField(primary_key=True)
    id_tipos = models.IntegerField(null=False)
    nombre = models.CharField(max_length=200, db_collation='Modern_Spanish_CI_AS')
    habilitado = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'tbl_maestra'

    def __str__(self):
        return f"{self.id_tipo_ticket}, {self.id_tipos}, {self.nombre}, {self.habilitado}"

class TblPersonas(models.Model):
    id_persona = models.AutoField(primary_key=True)
    user = models.OneToOneField(User,on_delete=models.RESTRICT)
    # user_id = models.ForeignKey(AuthUser, models.DO_NOTHING)
    id_empresa = models.ForeignKey(TblEmpresa, models.DO_NOTHING, db_column='id_empresa')
    nombres = models.CharField(max_length=250, db_collation='Modern_Spanish_CI_AS')
    apellidos = models.CharField(max_length=250, db_collation='Modern_Spanish_CI_AS')
    direccion = models.CharField(max_length=250, db_collation='Modern_Spanish_CI_AS')
    id_ubigeo = models.ForeignKey('TblUbigeo', models.DO_NOTHING, db_column='id_ubigeo')
    celular = models.CharField(max_length=20, db_collation='Modern_Spanish_CI_AS')
    imagen = models.CharField(max_length=250, db_collation='Modern_Spanish_CI_AS', blank=True, null=True)
    habilitado = models.BooleanField()
    tipo_usuario = models.IntegerField()
    fec_creacion = models.DateTimeField(auto_now=True)
    fec_modificacion = models.DateTimeField(auto_now=True)
    usuario_registro = models.IntegerField(null=True)
    usuario_modificacion = models.IntegerField(null=True)

    class Meta:
        managed = False
        db_table = 'tbl_personas'
        
    def __str__(self):
        return self.user.username


class TblTicket(models.Model):
    id_ticket = models.IntegerField(primary_key=True)
    id_empresa = models.ForeignKey(TblEmpresa, models.DO_NOTHING, db_column='id_empresa')
    id_tipo_ticket = models.IntegerField()
    titulo = models.CharField(max_length=250, db_collation='Modern_Spanish_CI_AS')
    descripcion = models.TextField(db_collation='Modern_Spanish_CI_AS')
    estado = models.IntegerField()
    fec_creacion = models.DateTimeField(auto_now=True)
    fec_asignacion = models.DateTimeField(auto_now=True)
    adjunto = models.CharField(max_length=50, db_collation='Modern_Spanish_CI_AS', blank=True, null=True)
    id_persona_registro = models.ForeignKey(TblPersonas, models.DO_NOTHING, db_column='id_persona_registro')
    id_persona_asignado = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tbl_ticket'

class TblSeguimiento(models.Model):
    id_seguimiento = models.IntegerField(primary_key=True)
    id_ticket = models.ForeignKey('TblTicket', models.DO_NOTHING, db_column='id_ticket')
    descripcion = models.TextField(db_collation='Modern_Spanish_CI_AS')
    fec_creacion = models.DateTimeField(auto_now=True)
    fec_asignacion = models.DateTimeField(auto_now=True)
    adjunto = models.CharField(max_length=50, db_collation='Modern_Spanish_CI_AS', blank=True, null=True)
    id_persona_asignado = models.ForeignKey(TblPersonas, models.DO_NOTHING, db_column='id_persona_asignado')

    class Meta:
        managed = False
        db_table = 'tbl_seguimiento'


class TblTipos(models.Model):
    id_tipos = models.AutoField(primary_key=True)
    id_empresa = models.ForeignKey(TblEmpresa, models.DO_NOTHING, db_column='id_empresa')
    nombre = models.CharField(max_length=250, db_collation='Modern_Spanish_CI_AS')
    habilitado = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'tbl_tipos'
    
    def __str__(self):
        return self.nombre
        # return f"{self.id_tipos}, {self.nombre}, {self.habilitado}"
    

class TblUbigeoManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().extra(select={'department': "substring(id_ubigeo_inei,1,2)",'province': "substring(id_ubigeo_inei,3,2)",
        'district': "substring(id_ubigeo_inei,5,2)"})

    def get_distinct_departments(self):
        return self.get_queryset().order_by('department').values_list('department', flat=True).distinct()

    def get_distinct_provinces(self, department):
        return self.get_queryset().filter(department=department).order_by('province').values_list('province', flat=True).distinct()

    def get_distinct_districts(self, department, province):
        return self.get_queryset().filter(department=department, province=province).order_by('district').values_list('district', flat=True).distinct()
    
class TblUbigeo(models.Model):
    id_ubigeo = models.AutoField(primary_key=True)
    id_ubigeo_inei = models.CharField(max_length=6, db_collation='Modern_Spanish_CI_AS', blank=True, null=True)
    departamento = models.CharField(max_length=250, db_collation='Modern_Spanish_CI_AS', blank=True, null=True)
    provincia = models.CharField(max_length=250, db_collation='Modern_Spanish_CI_AS', blank=True, null=True)
    distrito = models.CharField(max_length=250, db_collation='Modern_Spanish_CI_AS', blank=True, null=True)
    cod_postal = models.CharField(max_length=50, db_collation='Modern_Spanish_CI_AS', blank=True, null=True)

    objects = TblUbigeoManager()
    
    class Meta:
        managed = False
        db_table = 'tbl_ubigeo'

    @classmethod
    def get_distinct_departments(cls):
        return cls.objects.order_by('departamento').values_list('departamento', flat=True).distinct()

    @classmethod
    def get_distinct_provinces(cls, department):
        return cls.objects.filter(departamento=department).order_by('provincia').values_list('provincia', flat=True).distinct()

    @classmethod
    def get_distinct_districts(cls, department, province):
        return cls.objects.filter(departamento=department, provincia=province).order_by('distrito').values_list('distrito', flat=True).distinct()
  
    def __str__(self):
        return f"{self.departamento}, {self.provincia}, {self.distrito}"