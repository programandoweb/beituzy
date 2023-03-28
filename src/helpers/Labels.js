import Store from "./Store";
const es  = {
  labelQuiereQueaprendas1:"Tu empresa quiere que aprendas",
  labelQuiereQueaprendas2:"La compañía para la que trabajas está interesada en que mejores tus habilidades o adquieras nuevos conocimientos. Busca aquí el logo de tu empresa y entra a tu salón virtual.",
  labelbooks1:"Libros recomendados",
  labelbooks2:"La lectura no debe faltar en el ámbito LaborAble",
  labelConference:"Conferencia",
  labelHoraInicio:"Hora de inicio",
  labelHoraFinal:"Hora cerrar acceso",
  labelCategoria:"Categoria",
  labelCourseManageSelect:"Tipo de curso",
  labelBlogLaborable1:"Blog LaborAble",
  labelBlogLaborable2:"Noticias importantes del mundo laboral",
  labelBlogLaborable3:"Ver todas las noticias",
  labelConferenciaLaborable:"Conferencias LaborAble",
  LabelDescripcionDelCargo:"Descripción de la vacante",
  aboutEnterprice:"Háblanos sobre la empresa",
  labelGrupo:"Grupo",
  LaborableReferenciasLaborales:"Experiencia laboral",
  LabelMarketingJobVacanciesText1:"Bolsa de empleo.",
  LabelMarketingJobVacanciesText2:"Las mejores empresas suscritas en nuestro website, publican ofertas cada día.",
  LabelMarketingJobVacanciesText3:"Ver todos los empleos disponibles",
  LabelDownload:"Descargar",
  LabelAnios:"Años",
  LabelGenerar:"Generar",
  LabelGeneradorReportes:"Generador de reportes",
  labelIrAlHome:"Ir a la página principal",
  labelFechaPedido:"Fecha del Pedido",
  labelPDF:"Generar PDF",
  LaborableReferencias:"Referencias Personales",
  Laborablehabilidades:"Habilidades",
  LaborableNivel:"Niveles de estudio aprobados",
  PerfilLaboral:"Perfil Laboral",
  labelCompletar:"Completar",
  labelRevisionEmpresa:"Activar Empresas",
  descripcionVacante:"Descripción de la vacante",
  fechaPostulacion:"Fecha de Postulación",
  response:"Respuesta",
  estatus:"Estatus",
  telefono:"Teléfono",
  email:"Correo Electrónico",
  direccion:"Dirección",
  nit:"NIT",
  namecomercialDIAN:"Razón social registrada en DIAN",
  namecomercial:"Nombre Comercial",
  empresaInformation:"Información empresarial",
  LabelsPerfilEmpresa:"Perfil de la empresa",
  LabelsVacante:"Vacante",
  LabelsCandidatos:"Candidatos",
  LabelsPostulaciones:"Postulaciones",
  Postularme:"Postularme",
  Postulado:"Postulado",
  labelJogCategories:"Área administrativa",
  labelJogTitle:"Título de la vacante",
  LabelsVerResultadosTest:"Ver resultados del test",
  LabelsTestCompetenciaVocacional:"Test de Competencias Laborales",
  LabelsPerfilLaborable:"Perfil laborable",
  LabelsTitle:"Título",
  LabelsConcepto:"Concepto",
  LabelsEmpresa:"Empresas",
  LabelsOfertasEmpleo:"Ofertas de empleos",
  LabelsBolsaEmpleo:"Bolsa de empleos",
  LabelsTestVocacionalPresentacion:"Presentación",
  LabelsTestVocacional:"Test vocacional",
  LabelsAreaEvaluativa:"Seleccione Área a Evaluar",
  Exams:"Exámenes",
  LabelsAprobado:"Aprobado",
  LabelsNoAprobado:"Aún No aprobado",
  LabelNotaAlcanzada:"Nota alcanzada",
  LabelDescripcion2:"Descripción",
  LabelFecha:"Fecha",
  LabelPregunta:"Pregunta",
  LabelEvaluar:"Evaluar",
  LabelCantidadCursos2:"Cursos",
  LabelCantidadDias2:"Días",
  labelCourseOferta:"Oferta",
  LabelCantidadCursos:"Cantidad cursos",
  LabelCantidadDias:"Cantidad días",
  LabelEstatusManual:"Aprobación Manual",
  LabelDate:"Fecha",
  LabelMontoPago:"Monto",
  LabelDescripcion:"Descripción / Código",
  MenuPagosNoEfectivos:"Pagos no procesados ó rechazados",
  MenuPagosEfectivos:"Pagos procesados satisfactorios",
  MenuPagos:"Pagos y Pedidos",
  LabelProduct:"Producto",
  LabelEstatus:"Estado",
  LabelComprar:"Comprar",
  LabelIrAlCurso:"Ir al curso",
  LabelBalance:"Balance personal",
  LabelMonto:"Monto de la inversión",
  LabelCurso:"Curso",
  LabelResumenCompra:"Resumen de la compra",
  LabeltituloCompraSegura2:"Nos apoyamos en una de las plataformas más seguras como lo es PayU",
  LabeltituloCompraSegura:"Compra seguro",
  LabeltituloMembresiaPay:"También puedes adquirir una membresía y ahorras +más+",
  LabelPay:"Pagar ahora",
  labelPorSolo:"Por sólo",
  PlansCompra:"Compra",
  PlansComprar:"Comprar",
  PlansConfigEdit:"Editor de Membresías",
  labelSelectPlan:"Elige una membresía y empieza a estudiar",
  labelSelectPlanST:"Construye tu carrera profesional en un mismo lugar",
  labelClickParaContinuar:"Por favor, haga click para continuar",
  labelConfirmacionNewsLetter:"Gracias por confirmar tu registro",
  labelTestimonios:"Testimonios",
  labelOnDestacar:"Destacar perfil",
  labelOffDestacar:"Eliminar destacado del perfil",
  labelPostTitle:"Título del artículo",
  labelPostArticulo:"Artículo",
  labelPost:"Artículos",
  labelCMS:"CMS",
  labelProductosSeleccionados:"Estos son los productos que usted ha seleccionado",
  labelVideoLlamadasTitleInput:"Ingrese el título de la reunión",
  labelVideoLlamadasIntro:"Enfóquese en la reunión y haga clic en Grabar para dejar que se ocupe de la toma de notas la transcripción",
  labelVideoLlamadasTitle:"Videoconferencias y mensajería simplificadas a través de la Web",
  labelVideoLlamadas:"Video Llamadas",
  labelUserWriteChat:"Usuario(s) Escribiendo ...",
  labelSelectSupportMaterialPlus:"Puedes Seleccionar más archivos de apoyo",
  labelSelectSupportMaterial:"Selecciona el archivo de apoyo",
  labelSupportMaterial:"Material de apoyo",
  labelReactionsLike:"Me Gusta",
  labelReactionsIloveIt:"Me encanta",
  labelReactionsIEnjoy:"Me divierte",
  labelReactionsAmazesMe:"Me asombra",
  labelReactionsItSaddensMe:"Me entristece",
  labelReactionsItDisgustsMe:"Me enoja",
  labelOtherThemes:"Otros temas interesantes del autor",
  labelh4Login:"Inicio de sesión",
  labelForcedLogin:"Inicia sesión para aportar tus comentarios",
  labelEstatus:"Estatus",
  labelAreYouSure:"¿Estás seguro, chequeaste los precio de las Membresías?",
  labelOpine:"Opinar",
  labelCoursePricePack:"Paquetes",
  labelCoursePricePlane:"Membresía",
  labelCoursePrice:"Precio",
  labelCourseObservation:"Observación",
  labelCourseApprove:"Aprobar",
  labelCourseToRefuse:"Rechazar",
  labelCourseRemove:"Eliminar",
  labelCourseAdmin:"Área administrativa",
  LabelForumFirtsPost:"Sé el primero en comentar este foro ...",
  Open:"Foro abierto",
  Forum:"Foros",
  labelForumResponde:"Escribe un comentario al foro",
  labelForumParticipants:"Participantes",
  labelForumReply:"Contestar",
  labelForumLike:"Me gusta",
  labelForumEmpty:"Esperando...",
  labelForumTitle:"Tema del foro",
  labelForumDescription:"Descripción del foro",
  labelForumCreate:"Crear tema del foro",
  labelTabProgram:"Programa",
  labelTabThemes:"Temas",
  labelTabForum:"Foro",
  labelTabProjects:"Proyectos",
  labelTabStudents:"Estudiantes",
  lang:"es",
  labelBy:"Por",
  Page404Line1:"Vaya, parece que esta página no existe.",
  Page404Line2:"Aunque ya sabes que esto de existir es muy relativo.",
  Page404Line3:"Cuando quieras, puedes enviarnos un email a hola@laborable.com.co y te ayudamos.",
  CoursesEveryone:"Todos",
  CoursesApproved:"Aprobados",
  CoursesByRevision:"Por revisión",
  Courses:"Cursos",
  labelConfirm:"Confirmar",
  labelFormOptionLabel:"Opción de respuesta",
  labelFormOptionFalse:"Opción incorrecta",
  labelFormOptionTrue:"Opción correcta",
  labelFormAddItems:"Agregar opción de respuestas",
  labelFormContentFullDescription:"Descripción completa",
  labelFormContentDescription:"Descripción",
  labelFormCocntentTitle:"Título del contenido",
  labelBtn1:"Exploración",
  labelBtn2:"Capacitación",
  labelBtn3:"Entrenamiento",
  labelBtn4:"Bolsa de empleo",
  LabelImageCaptionUpload:"El tamaño que debe tener las imágenes debe ser de 1680px de ancho por 640px  de alto y peso máximo de 1MB",
  labelTestQuestion:"Preguntas del test",
  labelTestTitle:"Título del test",
  labelTestBasic:"Descripción básica del test",
  labelTestFull:"Descripción completa del test",
  Test:"Test vocacional",
  labelTestProfessionnel:"Test vocacional",
  labelAbilities:"Habilidades",
  labelBanners:"Banners",
  labelCancel:"Cancelar",
  labelChore:"Tarea / Taller / Exámen",
  labelEvaluationQuestions:"Preguntas",
  labelEvaluationPercentage:"Porcentaje",
  labelEvaluationDate:"Fecha",
  labelEvaluationDescription:"Descripción",
  labelEvaluationTitle:"Título",
  labelYes:"Si",
  labelNot:"No",
  labelCourseContent:"Crea contenido",
  labelCourseUnitys:"Crea más unidades",
  labelCourseFirtsUnity:"Crea tu primera unidad",
  labelFirtsCondition:"Por favor crea una unidad para continuar",
  labelChores:"Homework / Workshop / Exam",
  labelCourseFirtsCourse:"Crea tu primer curso",
  labelCourseEvaluationQuestionsDesc:"Pregunta descriptiva...",
  labelCourseEvaluationOption:"Opción",
  labelCourseEvaluationOption1:"Opción Correcta",
  labelCourseEvaluationOption2:"Opción 1",
  labelCourseEvaluationOption3:"Opción 2",
  labelCourseEvaluationOption4:"Opción 3",
  labelCourseEvaluationOptions:"Opciones",
  labelCourseEvaluationQuestions:"Pregunta",
  labelCourseEvaluationUnit:"Unidad asociada",
  labelCourseEvaluationDescription:"Descripción y explicación de la evaluación",
  labelCourseEvaluation:"Evaluación",
  labelCourseEvaluationTitle:"Título de evaluación",
  labelCourseUnitsPresentation:"Presentación de la unidad en youtube",
  labelCourseUnitsDescription:"Descripción básica de la Unidades del curso",
  labelCourseUnitsDescriptionFull:"Descripción completa de la Unidades del curso",
  labelCourseUnitsTitle:"Título de la unidad del curso",
  labelCourseUnits:"Unidades del curso",
  labelCourseTags:"Palabras claves separadas por comas (,)",
  labelCourseDescriptionBasic:"Descripción básica del curso",
  labelCourseDescription:"Descripción completa del curso",
  labelCourseTitle:"Título del curso",
  labelCourseManageBasicInfo:"Información básica y SEO",
  menuDocenteStudents:"Estudiantes",
  menuDocenteCourses:"Cursos",
  menuDocente2:"Menú Academico",
  menuDocente:"Academico",
  packages:"Paquetes",
  plans:"Membresías",
  plansConfig:"Membresías",
  requiredLegend:" Los campos marcados con * son requeridos para completar ",
  contacts:"Medios de contactos",
  emailServer:"Servidor de correo",
  FROM_NAME:"Nombre del remitente",
  SMTP_PORT:"Puerto",
  SMTP_HOST:"Servidor de correo",
  rowsForpage:"filas por página",
  all:"Todo",
  configuracionWebsite:"Configuración del Website",
  configuracionMaestros:"Configuración maestra",
  socialNetworks:"Redes",
  careerCategory:"Carreras",
  courseCategory:"Cursos",
  trm:"trm",
  symbol:"Símbolo",
  coin:"moneda",
  langs:"Idiomas",
  SystemConfig:"Configuración Maestra",
  WebsiteConfig:"Configuración del Website",
  PlansConfig:"Configuración de Membresías",
  configuracionSistema:"Configuración del sistema",
  ConfirmDelete:"¿Está seguro que desea eliminar este registro?",
  Delete:"Borrar",
  Add:"Agregar",
  NotChange:"No hacer Cambios",
  Users:"Usuarios",
  Edit:"Editar",
  UsersGroups:"Grupo de usuarios",
  Sadminc:"Sadminc",
  UsersConfig:"Configuración de Usuarios",
  academico:"Académico",
  configuracionUsuarios:"Configuración de Usuarios",
  menuAdministration:"Menú administrativo",
  areaAdministration:"Área Administrativa",
  menuAdmin:"Administración",
  whatsapp:"WhatsApp",
  tiktok:"Tik Tok",
  youtube:"Youtube",
  url:"URL del sitio web",
  linkedIn:"LinkedIn",
  instagram:"Instagram",
  pinterest:"Pinterest",
  facebook:"Facebook",
  celular:"Celular",
  graduate:"Graduado en",
  graduate2:"Selecciona la profesión que tienes",
  howDoYouIdentifyYourself:"¿Cómo te identificas?",
  professionalEspecialidades2:"Agrega acá las especialidades con las que te identificas",
  professionalEspecialidades:"Especialidades",
  professionalDescription:"Descripción Profesional",
  saveChanges:"Guardar Cambios",
  aboutMe:"Háblanos un poco sobre tí",
  cityAndCountry:"Ciudad y país donde vives",
  birthDay:"Cumpleaños",
  usuario:"Usuario",
  names:"Nombre(s)",
  primerApellido:"Primer apellido",
  segundoApellido:"Segundo apellido",
  contactInformation:"Información de contacto",
  professionalInformation:"Información profesional",
  themesInterest:"Temas de interés",
  personalInformation:"Información personal",
  selectImage:"Seleccionar imagen",
  recommendedImage:"Imagen de usuario (recomendado 900 x 900)",
  imagAccount:"Imagen de la cuenta",
  editUser:"Editar datos del usuario",
  editUser2:"Editar los datos del usuario",
  Home:"Inicio",
  Profile:"Perfil",
  MyAccount:"Mi Cuenta",
  namesParent:"Su nombre",
  names2Parent:"Apellidos",
  registerRecover:"Recuperar contraseña",
  menuSignOff:"Cerrar Sesión",
  confirmTitle:"Confirmación de usuario registrado",
  confirmDescription:"Por medidas de seguridad, confirmamos los usuarios que se están registrando en el sistema",
  waiting:"Espere...",
  close:"Cerrar",
  welcome:"Bienvenid@",
  slider1:"¿Qué aprende en este momento?",
  slider2:"Tendencias",
  slider3:"Aprende en 30 minutos y actúa",
  login:"Cédula o nombre de usuario",
  phone:"Teléfono",
  subject:"Asunto",
  email:"Correo electrónico",
  required:"Requerido",
  optional:"Opcional",
  register:"Registrarme",
  noRegister:"NO registrarme",
  continue:"Continuar registro",
  addChildren:"Agregar Hijo",
  nombres:"Nombres del alumno",
  finish:"Finalizar registro",
  enter:"Ingresar",
  send:"Enviar",
  message:"Mensaje...",
  aboutUs:"Quienes somos",
  capitalGain:"Plusvalía",
  history:"Historia",
  ourStation:"Nuestra emisora",
  categories:"Categorías",
  home:"Inicio",
  services:"Servicios",
  consulting:"Asesorías",
  courses:"Cursos",
  workshops:"Talleres",
  policies:"Políticas de privacidad",
  termsAndConditions:"Terms and Conditions",
  contactUs:"Contáctenos",
  legalWarning:"Aviso legal",
  PQRFS:"PQRFS",
  allRightsReserved:"Todos los derechos reservados",
  ourTeam:"Nuestro Equipo",
  ourTeamST:"Nuestro equipo siempre está dispuesto a ayudarte",
  Testimonials:"Testimonios",
  TestimonialsST:"Queremos que conozcas nuestros trabajos, nuestra pasión es darle al cliente, el mejor servicio",
  contactsTitle:"¿Buscas empleo?",
  contactsTitleST:"Si eres talentoso y estás en búsqueda de trabajo, contáctanos aquí",
  SuscriptionsTitle:"Suscríbete",
  SuscriptionsTitleST:"Regístrate para recibir nuestros boletines y enntérate de nuestras ofertas",
  SuscriptionsInput:"Ingresa aquí tu correo...",
  addAvatar:"Añade tu avatar",
  mainCoursesTitle:"¡Qué bueno verte!",
  mainCoursesGreeting:"Hola",
  menuMyCourses:"Mis Cursos",
  menuFavorities:"Favoritos",
  menuPromos:"Promos",
  menuSearchCourse:"Buscar Curso…",
  menuNotifications:"Notificaciones",
  menuMessages:"Mensajes",
  menuProfile:"Perfil",
  menuMyAccount:"Mi cuenta",
  menuRegister:"Registrarme",
  menuLogin:"Iniciar Sesión",
  password:"Clave",
  RegisterDescription:"necesita conocer quién eres, por favor indícanos los datos del formulario.",
  RegisterTitle:"Registro de usuarios",
}

const en  = {
  labelQuiereQueaprendas1:"Your company wants you to learn",
  labelQuiereQueaprendas2:"The company you work for is interested in you improving your skills or acquiring new knowledge. Look here for your company logo and enter your virtual salon.",
  labelbooks1:"Recommended books",
  labelbooks2:"Reading should not be lacking in the LaborAble field",
  labelConference:"Conference",
  labelHoraInicio:"Start time",
  labelHoraFinal:"Time to close access",
  labelCategoria:"Category",
  labelCourseManageSelect:"Course type",
  labelBlogLaborable1:"LaborAble Blog",
  labelBlogLaborable2:"Important news from the world of work",
  labelBlogLaborable3:"See all the news",
  labelConferenciaLaborable:"LaborAble Conferences",
  LabelDescripcionDelCargo:"Description of the vacancy",
  aboutEnterprice:"Tell us about the company",
  labelGrupo:"Group",
  LaborableReferenciasLaborales:"Work experience",
  LabelMarketingJobVacanciesText1:"Employment exchange.",
  LabelMarketingJobVacanciesText2:"The best companies subscribed to our website, publish offers every day.",
  LabelMarketingJobVacanciesText3:"See all available jobs",
  LabelDownload:"Download",
  LabelAnios:"Years",
  LabelGenerar:"Generate",
  LabelGeneradorReportes:"Report generator",
  labelIrAlHome:"Go to the main page",
  labelFechaPedido:"Order date",
  labelPDF:"Generate PDF",
  LaborableReferencias:"Personal references",
  Laborablehabilidades:"Abilities",
  LaborableNivel:"Approved levels of study",
  PerfilLaboral:"Labor Profile",
  labelCompletar:"To complete",
  labelRevisionEmpresa:"Activate Companies",
  descripcionVacante:"Description of the vacancy",
  fechaPostulacion:"Fecha de Postulación",
  response:"Response",
  estatus:"Status",
  telefono:"Phone",
  email:"Email",
  direccion:"Address",
  nit:"NIT",
  namecomercialDIAN:"Company name registered in DIAN",
  namecomercial:"Tradename",
  empresaInformation:"Business information",
  LabelsPerfilEmpresa:"Company Profile",
  LabelsVacante:"Vacant",
  LabelsCandidatos:"Candidates",
  LabelsPostulaciones:"Applications",
  Postularme:"Apply",
  Postulado:"Postulate",
  labelJogCategories:"Administrative area",
  labelJogTitle:"Title of the vacancy",
  LabelsVerResultadosTest:"See test results",
  LabelsTestCompetenciaVocacional:"Labor Skills Test",
  LabelsPerfilLaborable:"Laborable profile",
  LabelsTitle:"Title",
  LabelsConcepto:"Concept",
  LabelsEmpresa:"Business",
  LabelsOfertasEmpleo:"Job offers",
  LabelsBolsaEmpleo:"Job vacancies",
  LabelsTestVocacionalPresentacion:"Presentation",
  LabelsTestVocacional:"Vocational test",
  LabelsAreaEvaluativa:"Select Area to Evaluate",
  Exams:"Exams",
  LabelsAprobado:"Approved",
  LabelsNoAprobado:"Not yet approved",
  LabelNotaAlcanzada:"Note achieved",
  LabelDescripcion2:"Description",
  LabelFecha:"Date",
  LabelPregunta:"Question",
  LabelEvaluar:"Evaluate",
  LabelCantidadCursos2:"Courses",
  LabelCantidadDias2:"Days",
  labelCourseOferta:"Offer",
  LabelCantidadCursos:"Number courses",
  LabelCantidadDias:"Number days",
  LabelEstatusManual:"Manual Approval",
  LabelDate:"Date",
  LabelMontoPago:"Amount",
  LabelDescripcion:"Description / Code",
  MenuPagosNoEfectivos:"Pagos no procesados ó rechazados",
  MenuPagosEfectivos:"Successful processed payments",
  MenuPagos:"Payments and orders",
  LabelProduct:"Product",
  LabelEstatus:"Status",
  LabelComprar:"Sale",
  LabelIrAlCurso:"Go to the course",
  LabelBalance:"Personal balance",
  LabelMonto:"Investment amount",
  LabelCurso:"Course",
  LabelResumenCompra:"Summary of purchase",
  LabeltituloCompraSegura2:"We rely on one of the safest platforms such as PayU",
  LabeltituloCompraSegura:"Buy insurance",
  LabeltituloMembresiaPay:"You can also purchase a membership and save +More+",
  LabelPay:"Pay now",
  labelPorSolo:"For only",
  PlansCompra:"Buy",
  PlansComprar:"To buy",
  PlansConfigEdit:"Membership Editor",
  labelSelectPlan:"Choose a membership and start studying",
  labelSelectPlanST:"Build your career in one place",
  labelClickParaContinuar:"Please click to continue",
  labelConfirmacionNewsLetter:"Thank you for confirming your registration",
  labelTestimonios:"Testimonials",
  labelOnDestacar:"Highlight Profile",
  labelOffDestacar:"Remove Featured from Profile",
  labelPostTitle:"Post Title",
  labelPostArticulo:"Post",
  labelPost:"Posts",
  labelCMS:"CMS",
  labelProductosSeleccionados:"These are the products you have selected",
  labelVideoLlamadasTitleInput:"Enter the meeting title",
  labelVideoLlamadasIntro:"Focus on the meeting and click Record to let the transcript take care of note-taking",
  labelVideoLlamadasTitle:"Simplified video conferencing and messaging over the web",
  labelVideoLlamadas:"Video Calls",
  labelUserWriteChat:"User (s) Typing ...",
  labelSelectSupportMaterialPlus:"You can select more supporting files",
  labelSelectSupportMaterial:"Select the support file",
  labelSupportMaterial:"Support material",
  labelReactionsLike:"I like it",
  labelReactionsIloveIt:"I love it",
  labelReactionsIEnjoy:"I enjoy",
  labelReactionsAmazesMe:"Amazes me",
  labelReactionsItSaddensMe:"It saddens me",
  labelReactionsItDisgustsMe:"It disgusts me",
  labelOtherThemes:"Other interesting topics from the author",
  labelh4Login:"Log In",
  labelForcedLogin:"Log in to contribute your comments",
  labelEstatus:"Status",
  labelAreYouSure:"Are you sure, did you check the prices of Memberships?",
  labelOpine:"Opine",
  labelCoursePricePack:"Packages",
  labelCoursePricePlane:"Memberships",
  labelCoursePrice:"Price",
  labelCourseObservation:"Observation",
  labelCourseApprove:"Approve",
  labelCourseToRefuse:"To Refuse",
  labelCourseRemove:"Remove",
  labelCourseAdmin:"Administrative area",
  LabelForumFirtsPost:"Be the first to comment on this forum ...",
  Open:"Open Forum",
  Forum:"Forums",
  labelForumResponde:"Write a comment to the forum",
  labelForumParticipants:"Participants",
  labelForumReply:"Reply",
  labelForumLike:"I Like",
  labelForumEmpty:"Loading...",
  labelForumTitle:"Forum topic",
  labelForumDescription:"Forum description",
  labelForumCreate:"Create forum topic",
  labelTabProgram:"Program",
  labelTabThemes:"Themes",
  labelTabForum:"Forum",
  labelTabProjects:"Projects",
  labelTabStudents:"Students",
  lang:"en",
  labelBy:"By",
  Page404Line1:"Oops, it looks like this page doesn't exist.",
  Page404Line2:"Although you already know that this existence is very relative.",
  Page404Line3:"Anytime you want, you can send us an email to hola@laborable.com.co and we will help you.",
  CoursesEveryone:"Everyone",
  CoursesApproved:"Approved",
  CoursesByRevision:"By revision",
  Courses:"Courses",
  labelConfirm:"Confirm",
  labelFormOptionLabel:"Answer option",
  labelFormOptionFalse:"Wrong choice",
  labelFormOptionTrue:"Correct option",
  labelFormAddItems:"Add answer option",
  labelFormContentFullDescription:"Full Description",
  labelFormContentDescription:"Description",
  labelFormCocntentTitle:"Content title",
  labelBtn1:"Exploration",
  labelBtn2:"Capacitation",
  labelBtn3:"Training",
  labelBtn4:"Employment exchange",
  LabelImageCaptionUpload:"The size of the images must be 1680px wide by 640px high and a maximum weight of 1MB",
  labelTestQuestion:"Test questions",
  labelTestTitle:"Test title",
  labelTestBasic:"Basic description of the test",
  labelTestFull:"Complete description of the test",
  Test:"Vocational test",
  labelTestProfessionnel:"Test professionnel",
  labelAbilities:"Abilities",
  labelBanners:"Banners",
  labelCancel:"Cancel",
  labelChore:"Homework / Workshop / Exam",
  labelEvaluationQuestions:"Questions",
  labelEvaluationPercentage:"Percentage",
  labelEvaluationDate:"Date",
  labelEvaluationDescription:"Description",
  labelEvaluationTitle:"Title",
  labelYes:"Yes",
  labelNot:"Not",
  labelCourseContent:"Create content",
  labelCourseUnitys:"Create more units",
  labelCourseFirtsUnity:"Create your first unit",
  labelFirtsCondition:"Please create a unit to continue",
  labelChores:"Homework / Workshop / Exam",
  labelCourseFirtsCourse:"Create your first course",
  labelCourseEvaluationQuestionsDesc:"Descriptive question...",
  labelCourseEvaluationOption:"Option",
  labelCourseEvaluationOption1:"Correct option",
  labelCourseEvaluationOption2:"Option 1",
  labelCourseEvaluationOption3:"Option 2",
  labelCourseEvaluationOption4:"Option 3",
  labelCourseEvaluationOptions:"Options",
  labelCourseEvaluationQuestions:"Question",
  labelCourseEvaluationUnit:"Associated unit",
  labelCourseEvaluationDescription:"Description and explanation of the evaluation",
  labelCourseEvaluation:"Assessment",
  labelCourseEvaluationTitle:"Título de evaluación",
  labelCourseUnitsPresentation:"Presentation of the unit on youtube",
  labelCourseUnitsDescription:"Basic description of the Course Units",
  labelCourseUnitsDescriptionFull:"Complete description of the Course Units",
  labelCourseUnitsTitle:"Course Units Title",
  labelCourseUnits:"Units of the course",
  labelCourseTags:"Comma separated keywords (,)",
  labelCourseDescriptionBasic:"Basic course description",
  labelCourseDescription:"Full course description",
  labelCourseTitle:"Course Title",
  labelCourseManageBasicInfo:"Basic information and SEO",
  menuDocenteStudents:"Students",
  menuDocenteCourses:"Courses",
  menuDocente2:"Academic Menu",
  menuDocente:"Academic",
  packages:"Packages",
  plans:"Memberships",
  plansConfig:"Memberships",
  requiredLegend:" Fields marked with * are requirements to complete ",
  contacts:"Media contact",
  emailServer:"Email server",
  FROM_NAME:"Sender's name",
  SMTP_PORT:"Port",
  SMTP_HOST:"Mail server",
  rowsForpage:"rows per page",
  all:"All",
  configuracionWebsite:"Website Configuration",
  configuracionMaestros:"Master configuration",
  socialNetworks:"Networks",
  careerCategory:"Careers",
  courseCategory:"Course",
  trm:"trm",
  symbol:"Symbol",
  coin:"Coins",
  langs:"Languages",
  SystemConfig:"Master configuration",
  WebsiteConfig:"Website configuration",
  PlansConfig:"Memberships configuration",
  configuracionSistema:"System configuration",
  ConfirmDelete:"Are you sure you want to delete this record?",
  Delete:"Delete",
  Add:"add",
  NotChange:"Do not make changes",
  Users:"Users",
  Edit:"Edit",
  UsersGroups:"User group",
  Sadminc:"Sadminc",
  UsersConfig:"Users configuration",
  academico:"Academic",
  configuracionUsuarios:"Users configuration",
  menuAdministration:"Administrative menu",
  areaAdministration:"Administrative area",
  menuAdmin:"Administration",
  whatsapp:"WhatsApp",
  tiktok:"Tik Tok",
  youtube:"Youtube",
  url:"Website url",
  linkedIn:"LinkedIn",
  instagram:"Instagram",
  pinterest:"Pinterest",
  facebook:"Facebook",
  celular:"Celular",
  graduate:"Graduate",
  graduate2:"Select the profession you have",
  howDoYouIdentifyYourself:"How do you identify yourself?",
  professionalEspecialidades2:"Add here the specialties with which you identify",
  professionalEspecialidades:"Specialties",
  professionalDescription:"Professional Description",
  saveChanges:"Save Changes",
  aboutMe:"Tell us a little about yourself",
  cityAndCountry:"City and country where you live",
  birthDay:"Birthday",
  usuario:"Usuario",
  names:"Names",
  primerApellido:"Surname",
  segundoApellido:"Second surname",
  contactInformation:"Contact information",
  professionalInformation:"Professional information",
  themesInterest:"Themes of interest",
  personalInformation:"Personal information",
  selectImage:"Select image",
  recommendedImage:"User Image (recommended 900 x 900)",
  imagAccount:"Account Image",
  editUser:"Edit user data",
  editUser2:"Edit user data",
  Home:"Home",
  Profile:"Profile",
  MyAccount:"My Account",
  namesParent:"Your name",
  names2Parent:"Surnames",
  registerRecover:"Recover password",
  menuSignOff:"Sign off",
  confirmTitle:"Registered user confirmation",
  confirmDescription:"For security measures, we confirm that users who are registering in the system",
  waiting:"waiting...",
  close:"Close",
  welcome:"Welcome",
  slider1:"What are you learning right now?",
  slider2:"Trends",
  slider3:"Learn in 30 minutes and act",
  login:"ID or username",
  phone:"Phone",
  subject:"Affair",
  email:"Email",
  required:"Required",
  optional:"Opcional",
  register:"Sign up",
  noRegister:"DO NOT register",
  continue:"Continue registration",
  addChildren:"Add Child",
  nombres:"Student's names",
  finish:"End registration",
  enter:"Sign in",
  send:"Send",
  message:"Message...",
  aboutUs:"About us",
  capitalGain:"Capital gain",
  history:"History",
  ourStation:"Our station",
  categories:"Categories",
  home:"Home",
  services:"Services",
  consulting:"Consulting",
  courses:"Courses",
  workshops:"Workshops",
  policies:"Privacy policies",
  termsAndConditions:"Terms and Conditions",
  contactUs:"Contact Us",
  legalWarning:"Legal warning",
  PQRFS:"PQRFS",
  allRightsReserved:"All rights reserved",
  ourTeam:"Our team",
  ourTeamST:"Our team is always ready to help you",
  Testimonials:"Testimonials",
  TestimonialsST:"We want you to know our jobs, our passion is to give the customer the best service",
  contactsTitle:"Looking for a job?",
  contactsTitleST:"If you are talented and looking for a job, contact us here",
  SuscriptionsTitle:"Subscribe",
  SuscriptionsTitleST:"Sign up to receive our newsletters and find out about our offers",
  SuscriptionsInput:"Enter your email here ...",
  addAvatar:"Add your avatar",
  mainCoursesTitle:"Good to see you!",
  mainCoursesGreeting:"Hi",
  menuMyCourses:"My courses",
  menuFavorities:"Favorites",
  menuPromos:"Promos",
  menuSearchCourse:"Search Course ...",
  menuNotifications:"Notifications",
  menuMessages:"Messages",
  menuProfile:"Profile",
  menuMyAccount:"My Account",
  menuRegister:"Sign In",
  menuLogin:"Log In",
  password:"Password",
  RegisterDescription:"you need to know who you are, please provide us with the form information.",
  RegisterTitle:"User register",
}

function traduccion(){
  let lang  = Store.get("lang")
  if(lang==="es"){
    return es;
  }else{
    return en;
  }
}

function traduccion2(lang){
  if(lang==="es"){
    return es;
  }else{
    return en;
  }
}

export  default{
  traduccion2,
  traduccion,
  es,
  en,
}
