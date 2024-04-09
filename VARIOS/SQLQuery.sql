
select * from tbl_empresa
select * from tbl_tipos
select * from tbl_maestra
select * from auth_user
select * from tbl_personas
select * from tbl_ubigeo where id_ubigeo = '3600' 

select * from tbl_ticket
select * from tbl_seguimiento


select substring(id_ubigeo_inei,1,2) as depto, substring(id_ubigeo_inei,3,2) as prov,
        substring(id_ubigeo_inei,5,2) as dist from tbl_ubigeo

select substring(tbl_ubigeo.id_ubigeo_inei,1,2) as department from tbl_ubigeo


select * from tbl_PERSONAS
USE [HELPDESK]
GO

select * from auth_user
select * from tbl_personas

 from auth_user where id = 10

