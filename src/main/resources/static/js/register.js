document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    const volverBtn = document.getElementById("volverLogin");
    const departamentoSelect = document.getElementById("departamento");
    const provinciaSelect = document.getElementById("provincia");
    const distritoSelect = document.getElementById("distrito");
  
    // === Datos: Departamentos, provincias y distritos principales de Perú ===
    const data = {
      "Lima": {
  "Lima": [
    "Miraflores", "San Isidro", "Santiago de Surco", "Comas", "La Molina",
    "San Juan de Lurigancho", "Chorrillos", "Barranco", "San Borja", "Lince",
    "San Martín de Porres", "Pueblo Libre", "Jesús María", "Magdalena del Mar",
    "Surquillo", "Breña", "El Agustino", "Villa El Salvador", "Villa María del Triunfo",
    "Independencia", "Rímac", "Los Olivos", "Carabayllo", "Ate", "Santa Anita",
    "La Victoria", "San Miguel", "San Luis"
  ],
  "Cañete": [
    "San Vicente de Cañete", "Asia", "Mala", "Calango", "Lunahuaná", "Pacarán",
    "Zúñiga", "Imperial", "Quilmana", "Santa Cruz de Flores"
  ],
  "Huaral": [
    "Huaral", "Chancay", "Aucallama", "Atavillos Alto", "Atavillos Bajo", "Lampian"
  ],
  "Huarochirí": [
    "Matucana", "Antioquía", "San Mateo", "San Damián", "Ricardo Palma", "San Pedro de Casta",
    "Santa Eulalia", "Lurigancho-Chosica"
  ],
  "Barranca": [
    "Barranca", "Paramonga", "Pativilca", "Supe", "Supe Puerto"
  ],
  "Canta": [
    "Canta", "Arahuay", "Huamantanga", "Huaros", "Lachaqui", "San Buenaventura"
  ],
  "Cajatambo": [
    "Cajatambo", "Copa", "Gorgor", "Huancapón", "Manás"
  ],
  "Oyón": [
    "Oyón", "Naván", "Pachangara", "Caujul", "Cochamarca"
  ],
  "Yauyos": [
    "Yauyos", "Alis", "Ayauca", "Carania", "Chocos", "Cacra", "Omas", "Tanta",
    "Tomas", "Huancaya", "Vitis", "Huangáscar"
  ],
  "Huaura": [
    "Huacho", "Hualmay", "Santa María", "Végueta", "Caleta de Carquín", "Sayán",
    "Ambar", "Leoncio Prado"
  ]
},

      "Callao": {
  "Callao": [
    "Callao", "Bellavista", "La Perla", "Carmen de la Legua Reynoso", "Ventanilla", "Mi Perú"
  ]
},

"Arequipa": {
  "Arequipa": [
    "Arequipa (Cercado)", "Cayma", "Yanahuara", "José Luis Bustamante y Rivero",
    "Alto Selva Alegre", "Mariano Melgar", "Paucarpata", "Socabaya", "Cerro Colorado"
  ],
  "Camaná": [
    "Camaná", "Mariano Nicolás Valcárcel", "Ocoña", "Quilca", "Samuel Pastor"
  ],
  "Islay": [
    "Mollendo", "Cocachacra", "Dean Valdivia", "Mejía"
  ],
  "Caylloma": [
    "Chivay", "Maca", "Cabanaconde", "Yanque", "Achoma"
  ],
  "Caravelí": [
    "Caravelí", "Acarí", "Atico", "Bella Unión", "Quicacha"
  ],
  "Condesuyos": [
    "Chuquibamba", "Andaray", "Iray", "Salamanca", "Yanaquihua"
  ],
  "La Unión": [
    "Cotahuasi", "Charcana", "Huaynacotas", "Pampamarca", "Toro"
  ]
},

"Cusco": {
  "Cusco": [
    "Cusco", "Wanchaq", "San Sebastián", "Santiago", "San Jerónimo", "Poroy", "Saylla"
  ],
  "Urubamba": [
    "Urubamba", "Ollantaytambo", "Chinchero", "Maras", "Yucay"
  ],
  "Calca": [
    "Calca", "Pisac", "Coya", "Lamay", "Taray"
  ],
  "Canchis": [
    "Sicuani", "Combapata", "Checacupe", "San Pablo", "San Pedro"
  ],
  "Acomayo": [
    "Acomayo", "Pomacanchi", "Rondocan", "Sangarará"
  ],
  "Anta": [
    "Anta", "Zurite", "Chinchaypujio", "Huancabamba", "Pucyura"
  ],
  "Paruro": [
    "Paruro", "Ccapi", "Pillpinto", "Colcha", "Accha"
  ],
  "Paucartambo": [
    "Paucartambo", "Caicay", "Kosñipata", "Challabamba"
  ],
  "La Convención": [
    "Quillabamba", "Echarati", "Santa Ana", "Maranura", "Huayopata"
  ]
},

      "Piura": {
  "Piura": [
    "Piura", "Castilla", "Catacaos", "Cura Mori", "El Tallán", 
    "La Arena", "La Unión", "Las Lomas", "Tambo Grande", "Veintiséis de Octubre"
  ],
  "Sullana": [
    "Sullana", "Bellavista", "Ignacio Escudero", "Lancones", "Marcavelica", "Miguel Checa", "Querecotillo", "Salitral"
  ],
  "Paita": [
    "Paita", "Amotape", "Arenal", "Colán", "La Huaca", "Tamarindo", "Vichayal"
  ],
  "Talara": [
    "Pariñas", "El Alto", "La Brea", "Lobitos", "Los Órganos", "Máncora"
  ],
  "Ayabaca": [
    "Ayabaca", "Frías", "Jililí", "Lagunas", "Montero", "Pacaipampa", "Paimas", "Sapillica", "Sicchez", "Suyo"
  ],
  "Huancabamba": [
    "Huancabamba", "Canchaque", "El Carmen de la Frontera", "Huarmaca", "Lalaquiz", "San Miguel de El Faique", "Sondor", "Sondorillo"
  ],
  "Sechura": [
    "Sechura", "Bellavista de la Unión", "Bernal", "Cristo Nos Valga", "Rinconada-Llicuar", "Vice"
  ]
},

"La Libertad": {
  "Trujillo": [
    "Trujillo", "El Porvenir", "Florencia de Mora", "Huanchaco", 
    "La Esperanza", "Laredo", "Moche", "Poroto", "Salaverry", "Simbal", "Víctor Larco Herrera"
  ],
  "Ascope": [
    "Ascope", "Casa Grande", "Chicama", "Chocope", "Magdalena de Cao", "Paiján", "Rázuri", "Santiago de Cao"
  ],
  "Chepén": [
    "Chepén", "Pacanga", "Pueblo Nuevo"
  ],
  "Julcán": [
    "Julcán", "Calamarca", "Carabamba", "Huaso"
  ],
  "Otuzco": [
    "Otuzco", "Agallpampa", "Charat", "Huaranchal", "La Cuesta", "Mache", "Paranday", "Salpo", "Sinsicap", "Usquil"
  ],
  "Pacasmayo": [
    "San Pedro de Lloc", "Guadalupe", "Jequetepeque", "Pacasmayo", "San José"
  ],
  "Sánchez Carrión": [
    "Huamachuco", "Chugay", "Cochorco", "Curgos", "Marcabal", "Sanagorán", "Sarin", "Sartimbamba"
  ],
  "Gran Chimú": [
    "Cascas", "Lucma", "Marmot", "Sayapullo"
  ],
  "Virú": [
    "Virú", "Chao", "Guadalupito"
  ]
},

"Junín": {
  "Huancayo": [
    "Huancayo", "Chilca", "Chongos Alto", "Chupuro", "Colca", 
    "Cullhuas", "El Tambo", "Huacrapuquio", "Hualhuas", "Huancán", "Ingenio", 
    "Pariahuanca", "Pilcomayo", "Pucará", "Quichuay", "Quilcas", "San Agustín", "San Jerónimo de Tunán", "Saño", "Sapallanga", "Sicaya", "Santo Domingo de Acobamba", "Viques"
  ],
  "Concepción": [
    "Concepción", "Aco", "Andamarca", "Chambara", "Cochas", "Comas", "Heroinas Toledo", "Manzanares", "Mariscal Castilla", "Matahuasi", "Mito", "Nueve de Julio", "Orcotuna", "San José de Quero", "Santa Rosa de Ocopa"
  ],
  "Chanchamayo": [
    "Chanchamayo", "Perene", "Pichanaqui", "San Luis de Shuaro", "San Ramón", "Vitoc"
  ],
  "Jauja": [
    "Jauja", "Acolla", "Apata", "Ataura", "Canchayllo", "Curicaca", "El Mantaro", "Huamalí", "Huaripampa", "Huertas", "Janjaillo", "Julcán", "Leonor Ordóñez", "Llocllapampa", "Marco", "Masma", "Masma Chicche", "Molinos", "Monobamba", "Muqui", "Muquiyauyo", "Paca", "Paccha", "Pancán", "Parco", "Pomacancha", "Ricrán", "San Lorenzo", "San Pedro de Chunán", "Sausa", "Sincos", "Tunan Marca", "Yauli", "Yauyos"
  ],
  "Satipo": [
    "Satipo", "Coviriali", "Llaylla", "Mazamari", "Pampa Hermosa", "Pangoa", "Río Negro", "Río Tambo"
  ],
  "Tarma": [
    "Tarma", "Acobamba", "Huasahuasi", "Huaricolca", "La Unión", "Palca", "Palcamayo", "San Pedro de Cajas", "Tapo"
  ],
  "Yauli": [
    "La Oroya", "Chacapalpa", "Huay-Huay", "Marcapomacocha", "Morococha", "Paccha", "Santa Bárbara de Carhuacayan", "Santa Rosa de Sacco", "Suitucancha", "Yauli"
  ],
  "Junín": [
    "Junín", "Carhuamayo", "Ondores", "Ulcumayo"
  ]
},

      "Loreto": {
  "Maynas": [
    "Iquitos", "Alto Nanay", "Fernando Lores", "Indiana", 
    "Las Amazonas", "Mazan", "Napo", "Punchana", 
    "San Juan Bautista", "Torres Causana", "Belén"
  ],
  "Alto Amazonas": [
    "Yurimaguas", "Balsapuerto", "Jeberos", "Lagunas", "Santa Cruz", "Teniente César López Rojas"
  ],
  "Loreto": [
    "Nauta", "Parinari", "Tigre", "Trompeteros", "Urarinas"
  ],
  "Mariscal Ramón Castilla": [
    "Caballococha", "Pebas", "Ramón Castilla", "Yavarí"
  ],
  "Putumayo": [
    "San Antonio del Estrecho", "Putumayo", "Rosa Panduro", "Teniente Manuel Clavero"
  ],
  "Requena": [
    "Requena", "Alto Tapiche", "Capelo", "Emilio San Martín", 
    "Maquía", "Puínahua", "Saquena", "Soplin", "Tapiche", "Jenaro Herrera", "Yaquerana"
  ],
  "Ucayali": [
    "Contamana", "Inahuaya", "Padre Márquez", "Pampa Hermosa", "Sarayacu", "Vargas Guerra"
  ],
  "Datem del Marañón": [
    "San Lorenzo", "Andoas", "Barranca", "Cahuapanas", "Manseriche", "Morona", "Pastaza"
  ]
},

"Puno": {
  "Puno": [
    "Puno", "Acora", "Amantaní", "Atuncolla", "Capachica", "Chucuito", 
    "Coata", "Huata", "Mañazo", "Paucarcolla", "Pichacani", "Platería", "San Antonio", "Tiquillaca", "Vilque"
  ],
  "Azángaro": [
    "Azángaro", "Achaya", "Arapa", "Asillo", "Caminaca", "Chupa", 
    "José Domingo Choquehuanca", "Muñani", "Potoni", "Saman", "San Anton", "San José", "San Juan de Salinas", "Santiago de Pupuja", "Tirapata"
  ],
  "Carabaya": [
    "Macusani", "Ajoyani", "Ayapata", "Coasa", "Corani", 
    "Crucero", "Ituata", "Ollachea", "San Gabán", "Usicayos"
  ],
  "Chucuito": [
    "Juli", "Desaguadero", "Huacullani", "Kelluyo", "Pisacoma", "Pomata", "Zepita"
  ],
  "El Collao": [
    "Ilave", "Capazo", "Pilcuyo", "Santa Rosa", "Conduriri"
  ],
  "Huancané": [
    "Huancané", "Cojata", "Huatasani", "Inchupalla", "Pusi", "Rosaspata", "Taraco", "Vilque Chico"
  ],
  "Melgar": [
    "Ayaviri", "Antauta", "Cupi", "Llalli", "Macari", "Nuñoa", "Orurillo", "Santa Rosa", "Umachiri"
  ],
  "Moho": [
    "Moho", "Conima", "Huayrapata", "Tilali"
  ],
  "San Antonio de Putina": [
    "Putina", "Ananea", "Pedro Vilca Apaza", "Quilcapuncu", "Sina"
  ],
  "San Román": [
    "Juliaca", "Cabana", "Cabanillas", "Caracoto"
  ],
  "Sandia": [
    "Sandia", "Cuyocuyo", "Limbani", "Patambuco", "Phara", "Quiaca", "San Juan del Oro", "Yanahuaya", "Alto Inambari"
  ],
  "Yunguyo": [
    "Yunguyo", "Anapia", "Copani", "Cuturapi", "Ollaraya", "Tinicachi", "Unicachi"
  ]
},

"Tacna": {
  "Tacna": [
    "Tacna", "Alto de la Alianza", "Ciudad Nueva", "Inclán", "Pachía", "Palca", "Pocollay", "Sama"
  ],
  "Candarave": [
    "Candarave", "Cairani", "Camilaca", "Curibaya", "Huanuara", "Quilahuani"
  ],
  "Jorge Basadre": [
    "Locumba", "Ilabaya", "Ite"
  ],
  "Tarata": [
    "Tarata", "Chucatamani", "Estique", "Estique-Pampa", "Sitajara", "Susapaya", "Tarucachi", "Ticaco"
  ]
}, 

"Cajamarca": {
  "Cajamarca": [
    "Cajamarca", "Asunción", "Chetilla", "Cospán", "Jesús", "Los Baños del Inca", 
    "Llacanora", "Magdalena", "Matara", "Namora", "San Juan"
  ],
  "Cajabamba": [
    "Cajabamba", "Cachachi", "Condebamba", "Sitacocha"
  ],
  "Celendín": [
    "Celendín", "Chumuch", "Cortegana", "Huasmin", "Jorge Chávez", "José Gálvez", 
    "Miguel Iglesias", "Oxamarca", "Sorochuco", "Sucre", "Utco", "La Libertad de Pallán"
  ],
  "Chota": [
    "Chota", "Anguía", "Chadin", "Chiguirip", "Chimban", "Cochabamba", "Conchán", 
    "Huambos", "Lajas", "Llama", "Miracosta", "Paccha", "Pion", "Querocoto", 
    "San Juan de Licupis", "Tacabamba", "Tocmoche"
  ],
  "Contumazá": [
    "Contumazá", "Chilete", "Cupisnique", "Guzmango", "San Benito", 
    "Santa Cruz de Toledo", "Tantarica", "Yonan"
  ],
  "Cutervo": [
    "Cutervo", "Callayuc", "Choros", "Cujillo", "La Ramada", "Pimpingos", 
    "Querocotillo", "San Andrés de Cutervo", "San Juan de Cutervo", 
    "San Luis de Lucma", "Santa Cruz", "Santo Domingo de la Capilla", 
    "Santo Tomás", "Socota", "Toribio Casanova"
  ],
  "Hualgayoc": [
    "Bambamarca", "Chugur", "Hualgayoc"
  ],
  "Jaén": [
    "Jaén", "Bellavista", "Chontali", "Colasay", "Huabal", "Las Pirias", 
    "Pomahuaca", "Pucará", "Sallique", "San Felipe", "San José del Alto", "Santa Rosa"
  ],
  "San Ignacio": [
    "San Ignacio", "Chirinos", "Huarango", "La Coipa", "Namballe", "San José de Lourdes", "Tabaconas"
  ],
  "San Marcos": [
    "Pedro Gálvez", "Chancay", "Eduardo Villanueva", "Gregorio Pita", 
    "Ichocán", "José Manuel Quiroz", "José Sabogal"
  ],
  "San Miguel": [
    "San Miguel", "Bolívar", "Calquis", "Catilluc", "El Prado", "La Florida", 
    "Llapa", "Nanchoc", "Niepos", "San Gregorio", "San Silvestre de Cochan", 
    "Tongod", "Unión Agua Blanca"
  ],
  "San Pablo": [
    "San Pablo", "San Bernardino", "San Luis", "Tumbaden"
  ],
  "Santa Cruz": [
    "Santa Cruz", "Andabamba", "Catache", "Chancaybaños", "La Esperanza", 
    "Ninabamba", "Pulan", "Saucepampa", "Sexi", "Uticyacu", "Yauyucan"
  ]
},

"Áncash": {
  "Huaraz": [
    "Huaraz", "Cochabamba", "Colcabamba", "Huanchay", "Independencia", 
    "Jangas", "La Libertad", "Olleros", "Pampas Grande", "Pariacoto", 
    "Pira", "Tarica"
  ],
  "Aija": [
    "Aija", "Coris", "Huacllán", "La Merced", "Succha"
  ],
  "Antonio Raymondi": [
    "Llamellín", "Aczo", "Chaccho", "Chingas", "Mirgas", "San Juan de Rontoy"
  ],
  "Asunción": [
    "Chacas", "Acochaca"
  ],
  "Bolognesi": [
    "Chiquián", "Abelardo Pardo Lezameta", "Aquia", "Cajacay", 
    "Canis", "Colquioc", "Huallanca", "Huasta", "Huayllacayan", 
    "La Primavera", "Mangas", "Pacllón", "San Miguel de Corpanqui", "Ticllos"
  ],
  "Carhuaz": [
    "Carhuaz", "Acopampa", "Amashca", "Anta", "Ataquero", "Marcará", 
    "Pariahuanca", "San Miguel de Aco", "Shilla", "Tinco", "Yungar"
  ],
  "Casma": [
    "Casma", "Buena Vista Alta", "Comandante Noel", "Yaután"
  ],
  "Huari": [
    "Huari", "Anra", "Cajay", "Chavín de Huántar", "Huacachi", "Huacchis", 
    "Huachis", "Huántar", "Masin", "Paucas", "Ponto", "Rahuapampa", 
    "Rapayán", "San Marcos", "San Pedro de Chana", "Uco"
  ],
  "Santa": [
    "Chimbote", "Cáceres del Perú", "Coishco", "Macate", "Moro", 
    "Nepeña", "Samanco", "Santa", "Nuevo Chimbote"
  ],
  "Yungay": [
    "Yungay", "Cascapara", "Mancos", "Matacoto", "Quillo", "Ranrahirca", "Shupluy", "Yanama"
  ]
},

"Huánuco": {
  "Huánuco": [
    "Huánuco", "Amarilis", "Chinchao", "Churubamba", "Margos", 
    "Pillco Marca", "Quisqui", "San Francisco de Cayrán", "San Pedro de Chaulán", 
    "Santa María del Valle", "Yarumayo"
  ],
  "Ambo": [
    "Ambo", "Cayna", "Colpas", "Conchamarca", "Huacar", "San Francisco", "San Rafael", "Tomay Kichwa"
  ],
  "Dos de Mayo": [
    "La Unión", "Chuquis", "Marías", "Pachas", "Quivilla", "Ripan", "Shunqui", "Sillapata", "Yanas"
  ],
  "Leoncio Prado": [
    "Rupa-Rupa", "Daniel Alomía Robles", "Hermilio Valdizán", "José Crespo y Castillo", "Luyando", "Mariano Dámaso Beraún"
  ],
  "Marañón": [
    "Huacrachuco", "Cholon", "San Buenaventura"
  ],
  "Pachitea": [
    "Panao", "Chaglla", "Molino", "Umari"
  ],
  "Puerto Inca": [
    "Puerto Inca", "Codo del Pozuzo", "Honoria", "Tournavista", "Yuyapichis"
  ]
},

"Huancavelica": {
  "Huancavelica": [
    "Huancavelica", "Acobambilla", "Acoria", "Conayca", "Cuenca", "Huachocolpa", 
    "Huayllahuara", "Izcuchaca", "Laria", "Manta", "Mariscal Cáceres", 
    "Moya", "Nuevo Occoro", "Palca", "Pilchaca", "Vilca", "Yauli", "Ascensión"
  ],
  "Acobamba": [
    "Acobamba", "Andabamba", "Anta", "Caja", "Marcas", "Paucara", "Pomacocha", "Rosario"
  ],
  "Angaraes": [
    "Lircay", "Anchonga", "Callanmarca", "Ccochaccasa", "Chincho", 
    "Congalla", "Huanca-Huanca", "Huayllay Grande", "Julcamarca", 
    "San Antonio de Antaparco", "Santo Tomás de Pata", "Secclla"
  ],
  "Castrovirreyna": [
    "Castrovirreyna", "Arma", "Aurahua", "Capillas", "Chupamarca", 
    "Cocas", "Huachos", "Huamatambo", "Mollepampa", "San Juan", 
    "Santa Ana", "Tantara", "Ticrapo"
  ],
  "Churcampa": [
    "Churcampa", "Anco", "Chinchihuasi", "El Carmen", "La Merced", 
    "Locroja", "Pachamarca", "Paucarbamba", "San Miguel de Mayocc", 
    "San Pedro de Coris"
  ],
  "Huaytará": [
    "Huaytará", "Ayavi", "Córdova", "Huayacundo Arma", "Laramarca", 
    "Ocoyo", "Pilpichaca", "Querco", "Quito-Arma", "San Antonio de Cusicancha", 
    "San Francisco de Sangayaico", "San Isidro", "Santiago de Chocorvos"
  ],
  "Tayacaja": [
    "Pampas", "Acostambo", "Acraquia", "Ahuaycha", "Colcabamba", 
    "Daniel Hernández", "Huachocolpa", "Huaribamba", "Ñahuimpuquio", 
    "Pazos", "Quishuar", "Salcabamba", "Salcahuasi", "San Marcos de Rocchac", 
    "Surcubamba"
  ]
},

"Ayacucho": {
  "Huamanga": [
    "Ayacucho", "Acocro", "Acos Vinchos", "Carmen Alto", "Chiara", 
    "Ocros", "Pacaycasa", "Quinua", "San José de Ticllas", "San Juan Bautista", 
    "Santiago de Pischa", "Socos", "Tambillo", "Vinchos"
  ],
  "Cangallo": [
    "Cangallo", "Chuschi", "Los Morochucos", "María Parado de Bellido", "Paras", "Totos"
  ],
  "Huanta": [
    "Huanta", "Ayahuanco", "Huamanguilla", "Iguain", "Luricocha", 
    "Santillana", "Sivia"
  ],
  "La Mar": [
    "San Miguel", "Anco", "Ayna", "Chilcas", "Chungui", "Luis Carranza", "Santa Rosa", "Tambo"
  ],
  "Lucanas": [
    "Puquio", "Aucara", "Cabanillas", "Chipao", "Huac-Huas", "Laramate", 
    "Ocaña", "Otoca", "Saisa", "San Cristóbal", "San Juan", "San Pedro", 
    "San Pedro de Palco", "Sancos"
  ]
},

"Amazonas": {
  "Chachapoyas": [
    "Chachapoyas", "Asunción", "Balsas", "Cheto", "Chiliquín", "Chuquibamba", 
    "Granada", "Huancas", "La Jalca", "Leimebamba", "Levanto", 
    "Magdalena", "Mariscal Castilla", "Molinopampa", "Montevideo", 
    "Olleros", "Quinjalca", "San Francisco de Daguas", "San Isidro de Maino", 
    "Soloco", "Sonche"
  ],
  "Bagua": [
    "Bagua", "Aramango", "Copallín", "El Parco", "Imaza", "La Peca"
  ],
  "Bongará": [
    "Jumbilla", "Chisquilla", "Churuja", "Corosha", "Cuispes", "Florida", 
    "Jazan", "Recta", "San Carlos", "Shipasbamba", "Valera", "Yambrasbamba"
  ],
  "Condorcanqui": [
    "Santa María de Nieva", "El Cenepa", "Río Santiago"
  ],
  "Luya": [
    "Lamud", "Camporredondo", "Cocabamba", "Colcamar", "Conila", 
    "Inguilpata", "Longuita", "Lonya Chico", "Luya", "Luya Viejo", 
    "María", "Ocalli", "Ocumal", "Pisuquia", "Providencia", 
    "San Cristóbal", "San Francisco del Yeso", "San Jerónimo", 
    "San Juan de Lopecancha", "Santa Catalina", "Santo Tomás", "Tingo", "Trabana"
  ],
  "Utcubamba": [
    "Bagua Grande", "Cajaruro", "Cumba", "El Milagro", "Jamalca", "Lonya Grande", "Yamon"
  ]
},

"Apurímac": {
  "Abancay": [
    "Abancay", "Chacoche", "Circa", "Curahuasi", "Huanipaca", "Lambrama", "Pichirhua", "San Pedro de Cachora", "Tamburco"
  ],
  "Andahuaylas": [
    "Andahuaylas", "Andarapa", "Chiara", "Huancarama", "Huancaray", 
    "Kishuara", "Pacobamba", "Pampachiri", "San Jerónimo", "Talavera", "Tumay Huaraca"
  ],
  "Aymaraes": [
    "Chalhuanca", "Capaya", "Caraybamba", "Colcabamba", "Cotaruse", 
    "Ihuayllo", "Justo Apu Sahuaraura", "Lucre", "Pocohuanca", 
    "San Juan de Chacña", "Sañayca", "Soraya", "Tapairihua", "Tintay"
  ],
  "Cotabambas": [
    "Tambobamba", "Cotabambas", "Coyllurqui", "Haquira", "Mara", "Challhuahuacho"
  ],
  "Chincheros": [
    "Chincheros", "Anco_Huallo", "Cocharcas", "Huaccana", "Ocobamba", "Ongoy", "Ranracancha", "Uranmarca"
  ],
  "Grau": [
    "Chuquibambilla", "Curpahuasi", "Gamarra", "Huayllati", "Mamara", 
    "Micaela Bastidas", "Pataypampa", "Progreso", "San Antonio", "Turpay", "Vilcabamba", "Virundo"
  ]
},

"Ica": {
  "Chincha": [
    "Chincha Alta", "Alto Larán", "Chavín", "El Carmen", "Grocio Prado", "Pueblo Nuevo", "San Juan de Yanac", "Sunampe", "Tambo de Mora"
  ],
  "Ica": [
    "Ica", "La Tinguiña", "Los Aquijes", "Ocucaje", "Pachacútec", "Parcona", "Pueblo Nuevo", "Salas", "San José de Los Molinos", "San Juan Bautista", "Santiago", "Subtanjalla", "Tate", "Yauca del Rosario"
  ],
  "Nazca": [
    "Nazca", "Changuillo", "El Ingenio", "Marcona", "Vista Alegre"
  ],
  "Palpa": [
    "Palpa", "Llipata", "Río Grande", "Santa Cruz", "Tibillo"
  ],
  "Pisco": [
    "Pisco", "Huancano", "Humay", "Independencia", "Paracas", "San Andrés", "San Clemente", "Túpac Amaru Inca"
  ]
},

"Moquegua": {
  "Mariscal Nieto": [
    "Moquegua", "Carumas", "Cuchumbaya", "Samegua", "San Cristóbal", "Torata"
  ],
  "General Sánchez Cerro": [
    "Omate", "Chojata", "Coalaque", "Ichuña", "La Capilla", "Lloque", "Matalaque", "Puquina", "Quinistaquillas", "Ubinas", "Yunga"
  ],
  "Ilo": [
    "Ilo", "El Algarrobal", "Pacocha"
  ]
},

"Madre de Dios": {
  "Tambopata": [
    "Puerto Maldonado", "Inambari", "Las Piedras", "Laberinto"
  ],
  "Manu": [
    "Salvación", "Fitzcarrald", "Madre de Dios", "Manu"
  ],
  "Tahuamanu": [
    "Iñapari", "Iberia", "Tahuamanu"
  ]
},

"Pasco": {
  "Pasco": [
    "Chaupimarca", "Huachón", "Huariaca", "Huayllay", "Ninacaca", "Pallanchacra", "Paucartambo", "San Francisco de Asís de Yarusyacán", "Simón Bolívar", "Ticlacayán", "Tinyahuarco", "Vicco", "Yanacancha"
  ],
  "Daniel Alcides Carrión": [
    "Yanahuanca", "Chacayán", "Goyllarisquizga", "Paucar", "San Pedro de Pillao", "Santa Ana de Tusi", "Tapuc", "Vilcabamba"
  ],
  "Oxapampa": [
    "Oxapampa", "Chontabamba", "Huancabamba", "Palcazú", "Pozuzo", "Puerto Bermúdez", "Villa Rica"
  ]
},

"San Martín": {
  "Moyobamba": [
    "Moyobamba", "Calzada", "Habana", "Jepelacio", "Soritor", "Yantalo"
  ],
  "Bellavista": [
    "Bellavista", "Alto Biavo", "Bajo Biavo", "Huallaga", "San Pablo", "San Rafael"
  ],
  "El Dorado": [
    "San José de Sisa", "Agua Blanca", "San Martín", "Santa Rosa", "Shatoja"
  ],
  "Huallaga": [
    "Saposoa", "Alto Saposoa", "El Eslabón", "Piscoyacu", "Sacanche", "Tingo de Saposoa"
  ],
  "Lamas": [
    "Lamas", "Alonso de Alvarado", "Barranquita", "Caynarachi", "Cuñumbuqui", "Pinto Recodo", "Rumisapa", "San Roque de Cumbaza", "Shanao", "Tabalosos", "Zapatero"
  ],
  "Mariscal Cáceres": [
    "Juanjuí", "Campanilla", "Huicungo", "Pachiza", "Pajarillo"
  ],
  "Picota": [
    "Picota", "Buenos Aires", "Caspisapa", "Pilluana", "San Cristóbal", "San Hilarión", "Shamboyacu", "Tingo de Ponasa", "Tres Unidos"
  ],
  "Rioja": [
    "Rioja", "Awajún", "Elias Soplin Vargas", "Nueva Cajamarca", "Pardo Miguel", "Posic", "San Fernando", "Yorongos", "Yuracyacu"
  ],
  "San Martín": [
    "Tarapoto", "Alberto Leveau", "Cacatachi", "Chazuta", "Chipurana", "El Porvenir", "Huimbayoc", "Juan Guerra", "La Banda de Shilcayo", "Morales", "Papaplaya", "San Antonio", "Sauce", "Shapaja"
  ],
  "Tocache": [
    "Tocache", "Nuevo Progreso", "Polvora", "Shunte", "Uchiza"
  ]
},

"Tumbes": {
  "Tumbes": [
    "Tumbes", "Corrales", "La Cruz", "Pampas de Hospital", "San Jacinto", "San Juan de la Virgen"
  ],
  "Contralmirante Villar": [
    "Zorritos", "Casitas", "Canoas de Punta Sal"
  ],
  "Zarumilla": [
    "Zarumilla", "Aguas Verdes", "Matapalo", "Papayal"
  ]
},

"Ucayali": {
  "Coronel Portillo": [
    "Callería", "Campoverde", "Iparía", "Masisea", "Yarinacocha", "Nueva Requena", "Manantay"
  ],
  "Atalaya": [
    "Raymondi", "Sepahua", "Tahuanía", "Yurua"
  ],
  "Padre Abad": [
    "Aguaytía", "Curimana", "Irazola", "Neshuya", "Alexander Von Humboldt"
  ],
  "Purús": [
    "Purús"
  ]
}

    };
  
    // === Cargar departamentos ===
    Object.keys(data).forEach(dep => {
      const opt = document.createElement("option");
      opt.value = dep;
      opt.textContent = dep;
      departamentoSelect.appendChild(opt);
    });
  
    // === Cargar provincias según departamento ===
    departamentoSelect.addEventListener("change", () => {
      provinciaSelect.innerHTML = '<option value="">Seleccione</option>';
      distritoSelect.innerHTML = '<option value="">Seleccione</option>';
  
      const provincias = data[departamentoSelect.value] || {};
      Object.keys(provincias).forEach(prov => {
        const opt = document.createElement("option");
        opt.value = prov;
        opt.textContent = prov;
        provinciaSelect.appendChild(opt);
      });
    });
  
    // === Cargar distritos según provincia ===
    provinciaSelect.addEventListener("change", () => {
      distritoSelect.innerHTML = '<option value="">Seleccione</option>';
  
      const departamento = departamentoSelect.value;
      const provincia = provinciaSelect.value;
  
      const distritos = (data[departamento] && data[departamento][provincia]) || [];
      distritos.forEach(d => {
        const opt = document.createElement("option");
        opt.value = d;
        opt.textContent = d;
        distritoSelect.appendChild(opt);
      });
    });
  
// === Validaciones y envío ===
form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const dni = document.getElementById("dni").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const pass = document.getElementById("password").value;
    const repetir = document.getElementById("repetir").value;
  
    if (!/^\d{8}$/.test(dni)) {
      alert("⚠️ El DNI debe tener exactamente 8 dígitos numéricos.");
      return;
    }
  
    if (!/^\d{9}$/.test(celular)) {
      alert("⚠️ El número de celular debe tener 9 dígitos numéricos.");
      return;
    }
  
    if (pass !== repetir) {
      alert("⚠️ Las contraseñas no coinciden.");
      return;
    }
  
    // ===== NUEVO BLOQUE: Generar código de verificación =====
    const codigoVerificacion = Math.floor(100000 + Math.random() * 900000); // 6 dígitos
  
    // Guardar todos los datos en sessionStorage
    const datosRegistro = {
      dni: dni,
      nombres: document.getElementById("nombres").value,
      apellidos: document.getElementById("apellidos").value,
      correo: document.getElementById("correo").value,
      celular: celular,
      departamento: departamentoSelect.value,
      provincia: provinciaSelect.value,
      distrito: distritoSelect.value,
      usuario: document.getElementById("usuario").value,
      password: pass,
      codigo: codigoVerificacion
    };
    sessionStorage.setItem("datosRegistro", JSON.stringify(datosRegistro));
  
    // Simulación de envío del código
    alert(`✅ Registro exitoso. Código de verificación enviado a tu correo/celular: ${codigoVerificacion}`);
    window.location.href = "verificacion.html"; // Aquí mantienes tu página de confirmació
    });
  
    // === Botón volver al login ===
    volverBtn.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  });
  