/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `antecedentes` (
  `idAntecedentes` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idBeneficiario` int(10) unsigned NOT NULL,
  `casa` enum('propia','rentada','prestada') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `serviciosBasicos` tinyint(1) DEFAULT NULL,
  `personalesPatologicos` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `personalesNoPatologicos` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `padreVivo` tinyint(1) DEFAULT NULL,
  `enfermedadesPadre` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `madreVivo` tinyint(1) DEFAULT NULL,
  `enfermedadesMadre` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `numHermanos` int(10) unsigned NOT NULL,
  `numHermanosVivos` int(10) unsigned DEFAULT NULL,
  `enfermedadesHermanos` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `otrosHermanos` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `menarquia` int(10) unsigned DEFAULT NULL,
  `ritmo` int(10) unsigned DEFAULT NULL,
  `fum` date DEFAULT NULL,
  `gestaciones` int(10) unsigned DEFAULT NULL,
  `partos` int(10) unsigned DEFAULT NULL,
  `abortos` int(10) unsigned DEFAULT NULL,
  `cesareas` int(10) unsigned DEFAULT NULL,
  `ivsa` int(10) unsigned DEFAULT NULL,
  `metodosAnticonceptivos` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idAntecedentes`),
  KEY `antecedentes_idbeneficiario_foreign` (`idBeneficiario`),
  CONSTRAINT `antecedentes_idbeneficiario_foreign` FOREIGN KEY (`idBeneficiario`) REFERENCES `beneficiarios` (`idBeneficiario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `archivos` (
  `idArchivo` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idBeneficiario` int(10) unsigned NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idArchivo`),
  KEY `archivos_idbeneficiario_foreign` (`idBeneficiario`),
  CONSTRAINT `archivos_idbeneficiario_foreign` FOREIGN KEY (`idBeneficiario`) REFERENCES `beneficiarios` (`idBeneficiario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `beneficiarios` (
  `idBeneficiario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombreBeneficiario` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `edad` int(10) unsigned NOT NULL,
  `idEscolaridad` int(10) unsigned NOT NULL,
  `sexo` enum('H','M') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `enfermedad` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activo` tinyint(1) NOT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idBeneficiario`),
  KEY `beneficiarios_idescolaridad_foreign` (`idEscolaridad`),
  CONSTRAINT `beneficiarios_idescolaridad_foreign` FOREIGN KEY (`idEscolaridad`) REFERENCES `escolaridades` (`idEscolaridad`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consulta_medica` (
  `idConsultaMedica` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idBeneficiario` int(10) unsigned NOT NULL,
  `padecimientoActual` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `taDerecho` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `taIzquierdo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `frecuenciaCardiaca` int(10) unsigned DEFAULT NULL,
  `frecuenciaRespiratoria` int(10) unsigned DEFAULT NULL,
  `temperatura` decimal(2,1) DEFAULT NULL,
  `peso` decimal(5,2) DEFAULT NULL,
  `talla` decimal(5,2) DEFAULT NULL,
  `cabezaCuello` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `torax` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `abdomen` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extremidades` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `neurologicoEstadoMental` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `otros` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `diagnosticos` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `plan de tratamiento` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idConsultaMedica`),
  KEY `consulta_medica_idbeneficiario_foreign` (`idBeneficiario`),
  CONSTRAINT `consulta_medica_idbeneficiario_foreign` FOREIGN KEY (`idBeneficiario`) REFERENCES `beneficiarios` (`idBeneficiario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consulta_nutricional` (
  `idConsultaNutricional` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idBeneficiario` int(10) unsigned NOT NULL,
  `ocupacion` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `horariosComida` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cantidadDestinadaAlimentos` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apetito` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `distension` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estreñimiento` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `flatulencias` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vomitos` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `caries` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `edema` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mareo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zumbido` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cefaleas` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `disnea` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `poliuria` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `actividadFisica` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `horasSueño` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `comidasAlDia` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lugarComida` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `preparaComida` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `comeEntreComidas` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alimentosPreferidos` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alimentosOdiados` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `suplementos` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicamentosActuales` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `consumoAguaNatural` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recordatorioDesayuno` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recordatorioColacionMañana` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recordatorioComida` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recordatorioColacionTarde` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recordatorioCena` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `peso` decimal(5,2) DEFAULT NULL,
  `altura` decimal(5,2) DEFAULT NULL,
  `tipoDieta` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `kilocaloriasTotales` decimal(7,2) DEFAULT NULL,
  `porcentajeHidratosCarbono` decimal(5,2) DEFAULT NULL,
  `kilocaloriasHidratosCarbono` decimal(7,2) DEFAULT NULL,
  `porcentajeProteinas` decimal(5,2) DEFAULT NULL,
  `porcentajeGrasas` decimal(5,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idConsultaNutricional`),
  KEY `consulta_nutricional_idbeneficiario_foreign` (`idBeneficiario`),
  CONSTRAINT `consulta_nutricional_idbeneficiario_foreign` FOREIGN KEY (`idBeneficiario`) REFERENCES `beneficiarios` (`idBeneficiario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `escolaridades` (
  `idEscolaridad` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombreEscolaridad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idEscolaridad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estados_mexico` (
  `idEstado` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombreEstado` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `siglas` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idEstado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evaluacion` (
  `idEvaluacion` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombreEvaluacion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idEvaluacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evaluaciones_preguntas` (
  `idEvaluacionPregunta` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `evaluacionPregunta` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idEvaluacionPregunta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evaluaciones_respuestas` (
  `idEvaluacionRespuesta` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idOpcionEvaluacion` int(10) unsigned NOT NULL,
  `idBeneficiario` int(10) unsigned NOT NULL,
  `otraRespuesta` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idEvaluacionRespuesta`),
  KEY `evaluaciones_respuestas_idopcionevaluacion_foreign` (`idOpcionEvaluacion`),
  KEY `evaluaciones_respuestas_idbeneficiario_foreign` (`idBeneficiario`),
  CONSTRAINT `evaluaciones_respuestas_idbeneficiario_foreign` FOREIGN KEY (`idBeneficiario`) REFERENCES `beneficiarios` (`idBeneficiario`) ON DELETE CASCADE,
  CONSTRAINT `evaluaciones_respuestas_idopcionevaluacion_foreign` FOREIGN KEY (`idOpcionEvaluacion`) REFERENCES `opcion_evaluacion` (`idOpcionEvaluacion`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evaluaciones_respuestas_ofrecidas` (
  `idRespuestaOfrecida` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `respuesta` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idRespuestaOfrecida`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `formularios` (
  `idFormulario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idFormulario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jornada_beneficiario` (
  `idJornadaBeneficiario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idJornada` int(10) unsigned NOT NULL,
  `idBeneficiario` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idJornadaBeneficiario`),
  KEY `jornada_beneficiario_idjornada_foreign` (`idJornada`),
  KEY `jornada_beneficiario_idbeneficiario_foreign` (`idBeneficiario`),
  CONSTRAINT `jornada_beneficiario_idbeneficiario_foreign` FOREIGN KEY (`idBeneficiario`) REFERENCES `beneficiarios` (`idBeneficiario`) ON DELETE CASCADE,
  CONSTRAINT `jornada_beneficiario_idjornada_foreign` FOREIGN KEY (`idJornada`) REFERENCES `jornadas` (`idJornada`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jornadas` (
  `idJornada` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha` date NOT NULL,
  `localidad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `municipio` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idEstado` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idJornada`),
  KEY `jornadas_idestado_foreign` (`idEstado`),
  CONSTRAINT `jornadas_idestado_foreign` FOREIGN KEY (`idEstado`) REFERENCES `estados_mexico` (`idEstado`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notas` (
  `idNota` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idBeneficiario` int(10) unsigned NOT NULL,
  `idTipoNota` int(10) unsigned NOT NULL,
  `comentario` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idNota`),
  KEY `notas_idbeneficiario_foreign` (`idBeneficiario`),
  KEY `notas_idtiponota_foreign` (`idTipoNota`),
  CONSTRAINT `notas_idbeneficiario_foreign` FOREIGN KEY (`idBeneficiario`) REFERENCES `beneficiarios` (`idBeneficiario`) ON DELETE CASCADE,
  CONSTRAINT `notas_idtiponota_foreign` FOREIGN KEY (`idTipoNota`) REFERENCES `tipo_nota` (`idTipoNota`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `opcion_evaluacion` (
  `idOpcionEvaluacion` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idEvaluacion` int(10) unsigned NOT NULL,
  `idEvaluacionPregunta` int(10) unsigned NOT NULL,
  `idRespuestaOfrecida` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idOpcionEvaluacion`),
  KEY `opcion_evaluacion_idevaluacion_foreign` (`idEvaluacion`),
  KEY `opcion_evaluacion_idevaluacionpregunta_foreign` (`idEvaluacionPregunta`),
  KEY `opcion_evaluacion_idrespuestaofrecida_foreign` (`idRespuestaOfrecida`),
  CONSTRAINT `opcion_evaluacion_idevaluacion_foreign` FOREIGN KEY (`idEvaluacion`) REFERENCES `evaluacion` (`idEvaluacion`),
  CONSTRAINT `opcion_evaluacion_idevaluacionpregunta_foreign` FOREIGN KEY (`idEvaluacionPregunta`) REFERENCES `evaluaciones_preguntas` (`idEvaluacionPregunta`) ON DELETE CASCADE,
  CONSTRAINT `opcion_evaluacion_idrespuestaofrecida_foreign` FOREIGN KEY (`idRespuestaOfrecida`) REFERENCES `evaluaciones_respuestas_ofrecidas` (`idRespuestaOfrecida`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `opcion_formulario` (
  `idOpcionFormulario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idFormulario` int(10) unsigned NOT NULL,
  `idPregunta` int(10) unsigned NOT NULL,
  `idPoolRespuesta` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idOpcionFormulario`),
  KEY `opcion_formulario_idformulario_foreign` (`idFormulario`),
  KEY `opcion_formulario_idpregunta_foreign` (`idPregunta`),
  KEY `opcion_formulario_idpoolrespuesta_foreign` (`idPoolRespuesta`),
  CONSTRAINT `opcion_formulario_idformulario_foreign` FOREIGN KEY (`idFormulario`) REFERENCES `formularios` (`idFormulario`) ON DELETE CASCADE,
  CONSTRAINT `opcion_formulario_idpoolrespuesta_foreign` FOREIGN KEY (`idPoolRespuesta`) REFERENCES `pool_respuestas` (`idPoolRespuesta`) ON DELETE CASCADE,
  CONSTRAINT `opcion_formulario_idpregunta_foreign` FOREIGN KEY (`idPregunta`) REFERENCES `preguntas` (`idPregunta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pool_respuestas` (
  `idPoolRespuesta` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `respuesta` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idPoolRespuesta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `preguntas` (
  `idPregunta` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pregunta` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idPregunta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `privilegios` (
  `idPrivilegio` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombrePrivilegio` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idPrivilegio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `privilegios_roles` (
  `idRol` int(10) unsigned NOT NULL,
  `idPrivilegio` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  KEY `privilegios_roles_idrol_foreign` (`idRol`),
  KEY `privilegios_roles_idprivilegio_foreign` (`idPrivilegio`),
  CONSTRAINT `privilegios_roles_idprivilegio_foreign` FOREIGN KEY (`idPrivilegio`) REFERENCES `privilegios` (`idPrivilegio`) ON DELETE CASCADE,
  CONSTRAINT `privilegios_roles_idrol_foreign` FOREIGN KEY (`idRol`) REFERENCES `roles` (`idRol`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reportes` (
  `idReporte` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `consulta` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idReporte`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `respuestas` (
  `idRespuesta` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idOpcionFormulario` int(10) unsigned NOT NULL,
  `idBeneficiario` int(10) unsigned NOT NULL,
  `textoRespuesta` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idRespuesta`),
  KEY `respuestas_idopcionformulario_foreign` (`idOpcionFormulario`),
  KEY `respuestas_idbeneficiario_foreign` (`idBeneficiario`),
  CONSTRAINT `respuestas_idbeneficiario_foreign` FOREIGN KEY (`idBeneficiario`) REFERENCES `beneficiarios` (`idBeneficiario`) ON DELETE CASCADE,
  CONSTRAINT `respuestas_idopcionformulario_foreign` FOREIGN KEY (`idOpcionFormulario`) REFERENCES `opcion_formulario` (`idOpcionFormulario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `idRol` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombreRol` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idRol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tamizajes` (
  `idTamizaje` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idBeneficiario` int(10) unsigned NOT NULL,
  `presionArterial` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `peso` decimal(5,2) DEFAULT NULL,
  `circunferenciaCintura` decimal(5,2) DEFAULT NULL,
  `circunferenciaCadera` decimal(5,2) DEFAULT NULL,
  `glucosaCapilar` decimal(5,2) DEFAULT NULL,
  `talla` decimal(4,2) DEFAULT NULL,
  `indiceCinturaCadera` decimal(5,3) DEFAULT NULL,
  `comentario` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idTamizaje`),
  KEY `tamizajes_idbeneficiario_foreign` (`idBeneficiario`),
  CONSTRAINT `tamizajes_idbeneficiario_foreign` FOREIGN KEY (`idBeneficiario`) REFERENCES `beneficiarios` (`idBeneficiario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_nota` (
  `idTipoNota` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idTipoNota`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `idUsuario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idRol` int(10) unsigned NOT NULL,
  `usuario` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contraseña` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idUsuario`),
  KEY `usuarios_idrol_foreign` (`idRol`),
  CONSTRAINT `usuarios_idrol_foreign` FOREIGN KEY (`idRol`) REFERENCES `roles` (`idRol`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1);
INSERT INTO `migrations` VALUES (2,'2014_10_12_100000_create_password_resets_table',1);
INSERT INTO `migrations` VALUES (3,'2019_08_19_000000_create_failed_jobs_table',1);
INSERT INTO `migrations` VALUES (4,'2020_10_01_190912_create_rbac_tables',1);
INSERT INTO `migrations` VALUES (5,'2020_10_01_193342_create_reportes_table',1);
INSERT INTO `migrations` VALUES (6,'2020_10_01_193509_create_evaluaciones_tables',1);
INSERT INTO `migrations` VALUES (7,'2020_10_01_195134_create_beneficiarios_tables',1);
INSERT INTO `migrations` VALUES (8,'2020_10_01_203349_create_jornadas_tables',1);
INSERT INTO `migrations` VALUES (9,'2020_10_01_204608_create_formularios_tables',1);
INSERT INTO `migrations` VALUES (10,'2020_10_02_233641_cambiar_llave_evaluaciones_respuestas',2);
INSERT INTO `migrations` VALUES (11,'2020_10_03_000116_create_antecedentes_table',3);
INSERT INTO `migrations` VALUES (12,'2020_10_03_002636_create_consulta_medica_table',4);
INSERT INTO `migrations` VALUES (13,'2020_10_03_004054_create_consulta_nutricional_table',5);
