1 pip install django==4.2
2. pip install mssql-django # me permite conectarme a sql server
3. https://learn.microsoft.com/en-us/sql/connect/odbc/download-odbc-driver-for-sql-server?view=sql-server-ver16  # Instalamos el ODBC para que django se conecte a la BD MS SQLSERVER
4. python manage.py inspectdb > helpdesk/models.py # para importar la BD al ORM

# Para crear un proyecto con DJango
django-admin startproject nombre

# Ingresamos a la carpeta del proyecto y ejecutamos:
python manage.py runserver

# Creación de aplicación 
python manage.py startapp