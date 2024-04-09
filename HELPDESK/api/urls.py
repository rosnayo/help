from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

urlpatterns = [
    #path('', views.index),
    path('empresa',views.EmpresaView.as_view()),
    path('empresa/<int:pk>/', views.EmpresaDetailView.as_view()),
    path('contactos',views.ContactosView.as_view()),
    path('contactos/<int:pk>/', views.ContactosDetailView.as_view()),
    path('personas',views.Personas),
    path('personas/<int:pk>/', views.PersonasDetailView.as_view()),
    path('perfil/<int:pk>/', views.PersonasPerfilView.as_view()),
    path('tickets',views.Tickets),
    path('tickets/<int:pk>/', views.TicketsDetailView.as_view()),
    path('seguimiento',views.SeguimientoView.as_view()),
    path('seguimiento/<int:pk>',views.SeguimientoDetailView.as_view()),
    path('tipos',views.TiposView.as_view()),
    path('tipos/<int:pk>',views.TiposDetailView.as_view()),
    path('maestra',views.TiposView.as_view()),
    path('maestra/<int:pk>',views.TiposDetailView.as_view()),
    path('ubigeo',views.UbigeoView.as_view()),
    path('ubigeo/<int:pk>',views.UbigeoDetailView.as_view()),
    path('registrouser',views.RegisterUserView.as_view()),
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
