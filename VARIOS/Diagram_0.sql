/*
   miércoles, 13 de marzo de 202422:11:48
   Usuario: sa
   Servidor: DADDYBEAR
   Base de datos: HELPDESK
   Aplicación: 
*/

/* Para evitar posibles problemas de pérdida de datos, debe revisar este script detalladamente antes de ejecutarlo fuera del contexto del diseñador de base de datos.*/
BEGIN TRANSACTION
SET QUOTED_IDENTIFIER ON
SET ARITHABORT ON
SET NUMERIC_ROUNDABORT OFF
SET CONCAT_NULL_YIELDS_NULL ON
SET ANSI_NULLS ON
SET ANSI_PADDING ON
SET ANSI_WARNINGS ON
COMMIT
BEGIN TRANSACTION
GO
ALTER TABLE dbo.tbl_tipos SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
select Has_Perms_By_Name(N'dbo.tbl_tipos', 'Object', 'ALTER') as ALT_Per, Has_Perms_By_Name(N'dbo.tbl_tipos', 'Object', 'VIEW DEFINITION') as View_def_Per, Has_Perms_By_Name(N'dbo.tbl_tipos', 'Object', 'CONTROL') as Contr_Per BEGIN TRANSACTION
GO
ALTER TABLE dbo.tbl_maestra ADD CONSTRAINT
	FK_tbl_maestra_tbl_tipos FOREIGN KEY
	(
	id_tipos
	) REFERENCES dbo.tbl_tipos
	(
	id_tipos
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.tbl_maestra SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
select Has_Perms_By_Name(N'dbo.tbl_maestra', 'Object', 'ALTER') as ALT_Per, Has_Perms_By_Name(N'dbo.tbl_maestra', 'Object', 'VIEW DEFINITION') as View_def_Per, Has_Perms_By_Name(N'dbo.tbl_maestra', 'Object', 'CONTROL') as Contr_Per 