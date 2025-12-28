// ============================================
// NUEVOS JUEGOS - Lógica y Datos
// ============================================

// --- DATOS BLANCO - Palabras por Categoría ---
const BLANCO_WORDS = {
    'Comida': ['Pizza', 'Hamburguesa', 'Sushi', 'Tacos', 'Paella', 'Pasta', 'Ensalada', 'Helado', 'Chocolate', 'Café', 'Arroz', 'Pan', 'Queso', 'Pollo', 'Carne'],
    'Lugares': ['Playa', 'Montaña', 'Parque', 'Museo', 'Cine', 'Restaurante', 'Hospital', 'Escuela', 'Biblioteca', 'Gimnasio', 'Aeropuerto', 'Estación', 'Hotel', 'Oficina', 'Mercado'],
    'Objetos': ['Mesa', 'Silla', 'Teléfono', 'Reloj', 'Libro', 'Lápiz', 'Vaso', 'Plato', 'Almohada', 'Lámpara', 'Espejo', 'Mochila', 'Gafas', 'Llave', 'Botella'],
    'Deportes': ['Fútbol', 'Baloncesto', 'Tenis', 'Natación', 'Ciclismo', 'Boxeo', 'Golf', 'Voleibol', 'Béisbol', 'Rugby', 'Atletismo', 'Esquí', 'Surf', 'Escalada', 'Yoga'],
    'Animales': ['Perro', 'Gato', 'León', 'Elefante', 'Delfín', 'Águila', 'Tigre', 'Oso', 'Mono', 'Jirafa', 'Caballo', 'Conejo', 'Pez', 'Serpiente', 'Tortuga'],
    'Profesiones': ['Médico', 'Profesor', 'Chef', 'Ingeniero', 'Abogado', 'Policía', 'Bombero', 'Artista', 'Músico', 'Piloto', 'Arquitecto', 'Escritor', 'Actor', 'Fotógrafo', 'Dentista'],
    'Tecnología': ['Computadora', 'Tablet', 'Televisión', 'Radio', 'Cámara', 'Micrófono', 'Auriculares', 'Mouse', 'Teclado', 'Impresora', 'WiFi', 'Bluetooth', 'USB', 'GPS', 'Dron'],
    'Transportes': ['Coche', 'Autobús', 'Tren', 'Avión', 'Barco', 'Bicicleta', 'Moto', 'Metro', 'Taxi', 'Helicóptero', 'Camión', 'Patinete', 'Tranvía', 'Yate', 'Cohete']
};

function getRandomBlancoWord() {
    const categories = Object.keys(BLANCO_WORDS);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const wordsInCategory = BLANCO_WORDS[randomCategory];
    const randomWord = wordsInCategory[Math.floor(Math.random() * wordsInCategory.length)];
    
    return {
        word: randomWord,
        category: randomCategory
    };
}

// --- DATOS OVER/UNDER ---
const OVER_UNDER_QUESTIONS = [
    { q: "¿Cuántos huesos tiene el cuerpo humano adulto?", a: 206 },
    { q: "¿Altura de la Torre Eiffel en metros?", a: 330 },
    { q: "¿Año de llegada del hombre a la Luna?", a: 1969 },
    { q: "¿Cuántos países hay en el mundo (ONU)?", a: 195 },
    { q: "¿Duración en minutos de la película Titanic?", a: 195 },
    { q: "¿Cuántas teclas tiene un piano estándar?", a: 88 },
    { q: "¿Velocidad de la luz en km/s (aprox)?", a: 300000 },
    { q: "¿Cuántos elementos hay en la tabla periódica?", a: 118 },
    { q: "¿Año de inicio de la Primera Guerra Mundial?", a: 1914 },
    { q: "¿Cuántos corazones tiene un pulpo?", a: 3 },
    { q: "¿Distancia de la Tierra al Sol en millones de km?", a: 150 },
    { q: "¿Cuántos jugadores hay en un equipo de rugby?", a: 15 },
    { q: "¿Año de lanzamiento del primer iPhone?", a: 2007 },
    { q: "¿Cuántos estados tiene Estados Unidos?", a: 50 },
    { q: "¿Temperatura de ebullición del agua en grados Celsius?", a: 100 }
];

// --- DATOS SPYFALL ---
const SPYFALL_LOCATIONS = {
    'Avión de Pasajeros': ['Piloto', 'Azafata', 'Pasajero de Primera Clase', 'Mecánico', 'Polizón', 'Copiloto', 'Pasajero Nervioso'],
    'Playa': ['Socorrista', 'Surfista', 'Vendedor de Helados', 'Turista Quemado', 'Nadador', 'Niño con Castillo de Arena', 'Ladrón de Bolsos'],
    'Teatro': ['Actor Principal', 'Director', 'Maquillador', 'Técnico de Luces', 'Espectador', 'Crítico', 'Vendedor de Entradas'],
    'Casino': ['Crupier', 'Jugador Profesional', 'Seguridad', 'Camarera', 'Gerente', 'Tramposo', 'Turista con Suerte'],
    'Circo': ['Payaso', 'Domador', 'Acróbata', 'Mago', 'Vendedor de Palomitas', 'Espectador Asombrado', 'Presentador'],
    'Banco': ['Cajero', 'Gerente', 'Ladrón', 'Guardia de Seguridad', 'Cliente Rico', 'Cliente Pidiendo Préstamo', 'Conductor de Camión Blindado'],
    'Hospital': ['Cirujano', 'Enfermera', 'Paciente', 'Anestesista', 'Conductor de Ambulancia', 'Visitante', 'Farmacéutico'],
    'Hotel': ['Recepcionista', 'Botones', 'Huésped', 'Limpiadora', 'Gerente', 'Cocinero', 'Barman'],
    'Restaurante': ['Chef', 'Camarero', 'Cliente', 'Crítico Gastronómico', 'Lavaplatos', 'Músico', 'Dueño'],
    'Supermercado': ['Cajero', 'Reponedor', 'Cliente con Prisa', 'Carnicero', 'Seguridad', 'Gerente', 'Niño Perdido'],
    'Universidad': ['Profesor', 'Estudiante Novato', 'Decano', 'Conserje', 'Estudiante Dormido', 'Bibliotecario', 'Entrenador'],
    'Zoológico': ['Cuidador', 'Veterinario', 'Visitante', 'Niño', 'Vendedor de Souvenirs', 'Fotógrafo', 'Guía'],
    'Estación Espacial': ['Astronauta', 'Ingeniero', 'Comandante', 'Médico', 'Turista Espacial', 'Alien Infiltrado', 'Científico'],
    'Barco Pirata': ['Capitán', 'Loro', 'Cocinero', 'Vigía', 'Prisionero', 'Carpintero', 'Artillero']
};

// --- DATOS ESPECTRO MENTAL ---
// Lista de pares de conceptos opuestos para el juego tipo Wavelength
const ESPECTRO_PARES = [
    { izquierda: 'Frío', derecha: 'Caliente' },
    { izquierda: 'Blando', derecha: 'Duro' },
    { izquierda: 'Ligero', derecha: 'Pesado' },
    { izquierda: 'Seco', derecha: 'Mojado' },
    { izquierda: 'Liso', derecha: 'Áspero' },
    { izquierda: 'Silencioso', derecha: 'Ruidoso' },
    { izquierda: 'Oscuro', derecha: 'Luminoso' },
    { izquierda: 'Lento', derecha: 'Rápido' },
    { izquierda: 'Pequeño', derecha: 'Grande' },
    { izquierda: 'Barato', derecha: 'Caro' },
    { izquierda: 'Inútil', derecha: 'Muy útil' },
    { izquierda: 'Común', derecha: 'Muy raro' },
    { izquierda: 'Malo', derecha: 'Excelente' },
    { izquierda: 'Poca calidad', derecha: 'Alta calidad' },
    { izquierda: 'Prescindible', derecha: 'Imprescindible' },
    { izquierda: 'Sencillo', derecha: 'Sofisticado' },
    { izquierda: 'Aburrido', derecha: 'Divertidísimo' },
    { izquierda: 'Triste', derecha: 'Alegre' },
    { izquierda: 'Relajante', derecha: 'Estresante' },
    { izquierda: 'Normal', derecha: 'Muy extraño' },
    { izquierda: 'Formal', derecha: 'Informal' },
    { izquierda: 'Anticuado', derecha: 'Moderno' },
    { izquierda: 'Muy fácil', derecha: 'Muy difícil' },
    { izquierda: 'Simple', derecha: 'Complejo' },
    { izquierda: 'Obvio', derecha: 'Confuso' },
    { izquierda: 'Seguro', derecha: 'Muy arriesgado' },
    { izquierda: 'Moral', derecha: 'Inmoral' },
    { izquierda: 'Limpio', derecha: 'Sucio' },
    { izquierda: 'Ordenado', derecha: 'Caótico' },
    { izquierda: 'Saludable', derecha: 'Perjudicial' },
    { izquierda: 'Rural', derecha: 'Urbano' },
    { izquierda: 'Soso', derecha: 'Apasionante' },
    { izquierda: 'Típico', derecha: 'Muy original' },
    { izquierda: 'Introvertido', derecha: 'Extrovertido' },
    { izquierda: 'Claro', derecha: 'Ambiguo' },
    { izquierda: 'Previsible', derecha: 'Inesperado' },
    { izquierda: 'Importancia baja', derecha: 'Importancia enorme' },
    { izquierda: 'Tranquilo', derecha: 'Peligroso' },
    { izquierda: 'Privado', derecha: 'Público' },
    { izquierda: 'Infantil', derecha: 'Muy adulto' }
];

function getRandomEspectroPar() {
    const idx = Math.floor(Math.random() * ESPECTRO_PARES.length);
    return ESPECTRO_PARES[idx];
}

function getEspectroPuntosPorDistancia(dist) {
    if (dist <= 5) return 4;
    if (dist <= 15) return 3;
    if (dist <= 30) return 2;
    if (dist <= 50) return 1;
    return 0;
}

// --- LÓGICA OVER/UNDER ---
async function startOverUnderRound(roomCode) {
    const question = OVER_UNDER_QUESTIONS[Math.floor(Math.random() * OVER_UNDER_QUESTIONS.length)];
    // Generar línea de referencia (entre 80% y 120% de la respuesta real)
    const line = Math.floor(question.a * (Math.random() * 0.4 + 0.8));

    await database.ref(`rooms/${roomCode}`).update({
        currentQuestion: question,
        line: line,
        phase: 'betting', // betting, reveal
        bets: {},
        roundInProgress: true
    });
}

function playOverUnder(roomCode, playerName) {
    const gameContent = document.getElementById('gameContent');
    const gameHeader = document.getElementById('gameHeader');

    gameHeader.innerHTML = renderGameHeader(roomCode, 'overunder');

    roomRef.on('value', (snapshot) => {
        const room = snapshot.val();
        if (!room) return;

        if (!room.roundInProgress) {
            gameContent.innerHTML = `
                <h2 style="text-align: center; color: #667eea;">📊 Over/Under</h2>
                <div style="text-align: center; padding: 40px;">
                    <p style="margin: 20px 0;">¡Adivina si la respuesta es MÁS o MENOS!</p>
                    ${room.players[playerName].score !== undefined ? `<p>Tu Puntuación: ${room.players[playerName].score}</p>` : ''}
                    ${Object.keys(room.players)[0] === playerName ?
                    '<div class="btn" onclick="startOverUnderRound(\'' + roomCode + '\')">Nueva Pregunta</div>' :
                    '<p style="color: #666;">Esperando al líder...</p>'}
                </div>
                ${renderScoreboard(room)}
            `;
            return;
        }

        if (room.phase === 'betting') {
            const myBet = room.bets && room.bets[playerName];

            let html = `
                <h2 style="text-align: center; color: #667eea;">📊 Over/Under</h2>
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 15px; text-align: center; margin: 20px 0;">
                    <h3 style="margin-bottom: 15px;">Pregunta:</h3>
                    <p style="font-size: 24px; font-weight: bold;">${room.currentQuestion.q}</p>
                </div>
            `;

            if (myBet) {
                html += `
                    <div style="text-align: center; margin: 20px;">
                        <p>Has apostado: <strong>${myBet === 'over' ? 'MÁS (+)' : 'MENOS (-)'}</strong></p>
                        <p>Esperando a los demás...</p>
                    </div>
                `;
            } else {
                html += `
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div class="btn" style="background: #48bb78;" onclick="submitOverUnderBet('${roomCode}', '${playerName}', 'over')">MÁS (+)</div>
                        <div class="btn" style="background: #f56565;" onclick="submitOverUnderBet('${roomCode}', '${playerName}', 'under')">MENOS (-)</div>
                    </div>
                    <p style="text-align: center; margin-top: 10px; color: #666;">¿Crees que la respuesta es mayor o menor a X?</p>
                    <div style="text-align: center; font-weight: bold; font-size: 20px; margin: 10px;">¿Es más o menos de: ${room.line}?</div>
                `;
            }

            // Mostrar quién ha votado
            const voters = Object.keys(room.bets || {}).length;
            const totalPlayers = Object.keys(room.players).length;
            html += `<p style="text-align: center; margin-top: 20px;">Votos: ${voters}/${totalPlayers}</p>`;

            if (voters === totalPlayers && Object.keys(room.players)[0] === playerName) {
                html += `<div class="btn" onclick="revealOverUnder('${roomCode}')">Revelar Respuesta</div>`;
            }

            gameContent.innerHTML = html;
        } else if (room.phase === 'reveal') {
            let html = `
                <h2 style="text-align: center; color: #667eea;">📊 Resultado</h2>
                <div style="background: white; border: 3px solid #667eea; padding: 30px; border-radius: 15px; text-align: center; margin: 20px 0;">
                    <p>La respuesta correcta era:</p>
                    <h1 style="font-size: 48px; color: #667eea;">${room.currentQuestion.a}</h1>
                    <p>Referencia: ${room.line}</p>
                </div>
                <div style="margin-bottom: 20px;">
            `;

            Object.keys(room.players).forEach(p => {
                const bet = room.bets[p];
                const won = (bet === 'over' && room.currentQuestion.a > room.line) ||
                    (bet === 'under' && room.currentQuestion.a < room.line);

                html += `
                    <div style="background: ${won ? '#c6f6d5' : '#fed7d7'}; padding: 10px; margin: 5px 0; border-radius: 8px; display: flex; justify-content: space-between;">
                        <span>${p} (${bet === 'over' ? '+' : '-'})</span>
                        <strong>${won ? '+1 Punto' : '0 Puntos'}</strong>
                    </div>
                `;
            });

            html += `</div>
                ${Object.keys(room.players)[0] === playerName ?
                    '<div class="btn" onclick="startOverUnderRound(\'' + roomCode + '\')">Siguiente Ronda</div>' :
                    '<p style="text-align: center;">Esperando siguiente ronda...</p>'}
                ${renderScoreboard(room)}
            `;

            gameContent.innerHTML = html;
        }
    });

    showScreen('gameScreen');
}

async function submitOverUnderBet(roomCode, playerName, bet) {
    await database.ref(`rooms/${roomCode}/bets/${playerName}`).set(bet);
}

async function revealOverUnder(roomCode) {
    const snapshot = await database.ref(`rooms/${roomCode}`).once('value');
    const room = snapshot.val();

    const updates = { phase: 'reveal' };

    // Calcular puntuaciones
    Object.keys(room.players).forEach(p => {
        const bet = room.bets[p];
        const won = (bet === 'over' && room.currentQuestion.a > room.line) ||
            (bet === 'under' && room.currentQuestion.a < room.line);

        if (won) {
            const currentScore = room.players[p].score || 0;
            updates[`players/${p}/score`] = currentScore + 1;
        }
    });

    await database.ref(`rooms/${roomCode}`).update(updates);
}

// --- LÓGICA SPYFALL ---
function playSpyfall(roomCode, playerName) {
    const gameContent = document.getElementById('gameContent');
    const gameHeader = document.getElementById('gameHeader');

    gameHeader.innerHTML = renderGameHeader(roomCode, 'spyfall');

    roomRef.on('value', (snapshot) => {
        const room = snapshot.val();
        if (!room) return;

        const player = room.players[playerName];
        const isSpy = player.role === 'Espía';

        let html = `
            <h2 style="text-align: center; color: #667eea;">🕵️ Spyfall</h2>
            <div style="background: ${isSpy ? '#2d3748' : '#fffbea'}; color: ${isSpy ? 'white' : '#333'}; padding: 30px; border-radius: 15px; text-align: center; margin: 20px 0; border: 2px solid #667eea;">
                <h3 style="margin-bottom: 10px;">Tu Rol:</h3>
                <h1 style="font-size: 32px; margin-bottom: 15px;">${player.role}</h1>
                ${isSpy ?
                '<p style="color: #fc8181;">¡Eres el Espía! Adivina la ubicación.</p>' :
                `<p><strong>Ubicación:</strong> ${room.location}</p><p>Encuentra al espía sin revelar demasiado.</p>`}
            </div>
        `;

        if (room.timerActive) {
            html += `
                <div style="text-align: center; font-size: 24px; font-weight: bold; margin: 20px;">
                    ⏱️ ${formatTime(room.timeRemaining)}
                </div>
            `;
        }

        html += `
            <div class="info">
                <h3>Posibles Ubicaciones:</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 5px; justify-content: center; margin-top: 10px;">
                    ${Object.keys(SPYFALL_LOCATIONS).map(loc =>
            `<span style="background: #edf2f7; padding: 5px 10px; border-radius: 15px; font-size: 12px; color: #4a5568;">${loc}</span>`
        ).join('')}
                </div>
            </div>
            
            ${Object.keys(room.players)[0] === playerName && !room.timerActive ?
                '<div class="btn" onclick="startSpyfallTimer(\'' + roomCode + '\')">Iniciar Temporizador (8 min)</div>' : ''}
        `;

        gameContent.innerHTML = html;
    });

    showScreen('gameScreen');
}

async function startSpyfallTimer(roomCode) {
    await database.ref(`rooms/${roomCode}`).update({
        timerActive: true,
        timeRemaining: 480 // 8 minutos
    });

    // El temporizador debe ser manejado por el cliente que lo inició o por todos (sincronizado)
    // Para simplificar, usamos la misma lógica que Time's Up en index.html
    if (window.spyfallInterval) clearInterval(window.spyfallInterval);

    window.spyfallInterval = setInterval(() => {
        database.ref(`rooms/${roomCode}`).once('value').then(snap => {
            const r = snap.val();
            if (r && r.timerActive && r.timeRemaining > 0) {
                database.ref(`rooms/${roomCode}/timeRemaining`).set(r.timeRemaining - 1);
            } else {
                clearInterval(window.spyfallInterval);
            }
        });
    }, 1000);
}

// --- LÓGICA CONEXIÓN MENTAL (THE MIND) ---
// Conexión Mental (The Mind) implementation removed. 
// Now usando la implementación personalizada en conexion-implementation.js

// --- LÓGICA ESPECTRO MENTAL ---
function playEspectroMental(roomCode, playerName) {
    const gameContent = document.getElementById('gameContent');
    const gameHeader = document.getElementById('gameHeader');

    gameHeader.innerHTML = renderGameHeader(roomCode, 'espectro');

    roomRef.on('value', (snapshot) => {
        const room = snapshot.val();
        if (!room) return;

        const player = room.players && room.players[playerName];
        if (!player) {
            gameContent.innerHTML = '<p style="color:red;">No estás registrado en esta partida.</p>';
            return;
        }

        const mode = room.gameMode || 'equipos';
        const totalRounds = room.numRounds || 8;
        const currentRound = room.currentRound || 1;
        const phase = room.phase || 'setup';
        const spectrum = room.currentSpectrum;
        const secret = room.secretValue;
        const guideIndex = room.currentGuideIndex || 0;
        const guideName = room.playerOrder && room.playerOrder[guideIndex];

        // Fin de partida
        if (phase === 'finished') {
            let html = `<h2 style="text-align:center; color:#667eea;">🌈 Espectro Mental - Fin de la partida</h2>`;

            if (mode === 'equipos') {
                html += `<div style="background:#f8f9fa; padding:15px; border-radius:10px; margin:15px 0;">
                    <h3>Puntuación por equipos</h3>
                    <div style="display:flex; justify-content:space-between; padding:6px 0;">
                        <span>Equipo A</span><strong>${room.teamAScore || 0} pts</strong>
                    </div>
                    <div style="display:flex; justify-content:space-between; padding:6px 0;">
                        <span>Equipo B</span><strong>${room.teamBScore || 0} pts</strong>
                    </div>
                </div>`;
            } else if (mode === 'coop') {
                html += `<div style="background:#f8f9fa; padding:15px; border-radius:10px; margin:15px 0;">
                    <h3>Puntuación cooperativa</h3>
                    <p style="font-size:20px; font-weight:bold;">${room.coopScore || 0} puntos</p>
                </div>`;
            } else {
                html += renderScoreboard(room);
            }

            html += '<p style="text-align:center; color:#666;">Recarga la página para jugar otra partida.</p>';
            gameContent.innerHTML = html;
            return;
        }

        // Fase de preparación de ronda
        if (phase === 'setup' || !spectrum) {
            let html = `<h2 style=\"text-align:center; color:#667eea;\">🌈 Espectro Mental - Ronda ${currentRound}/${totalRounds}</h2>`;
            html += `<div style=\"background:#e7f3ff; padding:20px; border-radius:10px; margin:20px 0; text-align:center;\">
                <p><strong>Guía de esta ronda:</strong> ${guideName}</p>
            </div>`;

            if (room.playerOrder && room.playerOrder[0] === playerName) {
                html += `<div class=\"btn\" onclick=\"startEspectroRound('${roomCode}')\">Iniciar ronda</div>`;
            } else {
                html += '<p style="text-align:center; color:#666;">Esperando a que se inicie la ronda...</p>';
            }

            gameContent.innerHTML = html;
            return;
        }

        const myGuess = room.guesses && room.guesses[playerName];
        const allGuesses = room.guesses || {};
        const totalPlayers = room.playerOrder ? room.playerOrder.length : Object.keys(room.players).length;
        const numGuessers = Object.keys(allGuesses).length;

        if (phase === 'guessing') {
            let html = `<h2 style=\"text-align:center; color:#667eea;\">🌈 Espectro Mental - Ronda ${currentRound}/${totalRounds}</h2>`;

            html += `
                <div style="background: linear-gradient(90deg, #4299e1, #f56565); padding:20px; border-radius:15px; color:white; margin:20px 0; text-align:center;">
                    <div style="display:flex; justify-content:space-between; font-weight:bold; font-size:16px;">
                        <span>${spectrum.izquierda}</span>
                        <span>${spectrum.derecha}</span>
                    </div>
                    <div style="margin-top:10px; font-size:14px; opacity:0.9;">Guía: ${guideName}</div>
                </div>
            `;

            if (playerName === guideName) {
                html += `
                    <div class="info">
                        <p><strong>Posición secreta:</strong> ${secret}/100</p>
                        <p>Da una pista verbal al grupo (fuera de la app). Tus respuestas no se introducen aquí.</p>
                    </div>
                `;
            } else {
                if (myGuess !== undefined) {
                    html += `
                        <div class="info">
                            <p>Ya has enviado tu estimación: <strong>${myGuess}/100</strong></p>
                            <p>Esperando al resto de jugadores...</p>
                        </div>
                    `;
                } else {
                    html += `
                        <label>Tu estimación en el espectro (1 = ${spectrum.izquierda}, 100 = ${spectrum.derecha}):</label>
                        <input type="range" id="espectroSlider" min="1" max="100" value="50" oninput="document.getElementById('espectroValue').textContent=this.value" />
                        <p style="text-align:center; margin-top:10px;">Valor: <strong id="espectroValue">50</strong>/100</p>
                        <div class="btn" onclick="submitEspectroGuess('${roomCode}', '${playerName}')">Enviar estimación</div>
                    `;
                }
            }

            html += `<p style=\"text-align:center; margin-top:15px; color:#666;\">Estimaciones recibidas: ${numGuessers}/${totalPlayers - 1}</p>`;

            if (numGuessers === totalPlayers - 1 && room.playerOrder && room.playerOrder[0] === playerName) {
                html += `<div class=\"btn btn-secondary\" onclick=\"revealEspectroRound('${roomCode}')\">Revelar resultado</div>`;
            }

            gameContent.innerHTML = html;
            return;
        }

        if (phase === 'reveal') {
            let html = `<h2 style=\"text-align:center; color:#667eea;\">🌈 Resultado de la ronda ${currentRound}/${totalRounds}</h2>`;

            html += `
                <div style="background:white; border:3px solid #667eea; padding:20px; border-radius:15px; margin:20px 0; text-align:center;">
                    <div style="display:flex; justify-content:space-between; font-weight:bold; font-size:16px; margin-bottom:10px;">
                        <span>${spectrum.izquierda}</span>
                        <span>${spectrum.derecha}</span>
                    </div>
                    <p>Posición secreta: <strong>${secret}/100</strong></p>
                </div>
            `;

            const distances = [];
            Object.keys(allGuesses).forEach(name => {
                const guess = allGuesses[name];
                const dist = Math.abs(secret - guess);
                distances.push({ name, guess, dist });
            });
            distances.sort((a, b) => a.dist - b.dist);

            if (distances.length > 0) {
                const best = distances[0];
                html += `<div style=\"background:#e6fffa; padding:15px; border-radius:10px; margin-bottom:15px; text-align:center;\">
                    <strong>Mejor aproximación:</strong> ${best.name} (${best.guess}/100, distancia ${best.dist})
                </div>`;
            }

            html += '<div style="background:#f8f9fa; padding:15px; border-radius:10px;">';
            html += '<h3 style="margin-bottom:10px;">Distancias:</h3>';
            distances.forEach(d => {
                html += `<div style=\"display:flex; justify-content:space-between; padding:4px 0;\">
                    <span>${d.name}</span>
                    <span>${d.guess}/100 (distancia ${d.dist})</span>
                </div>`;
            });
            html += '</div>';

            // Mostrar marcadores según modo
            if (mode === 'equipos') {
                html += `<div style=\"margin-top:15px;\">
                    <h3>Puntuación por equipos</h3>
                    <div style=\"background:#f8f9fa; padding:10px; border-radius:10px;\">
                        <div style=\"display:flex; justify-content:space-between; padding:6px 0;\"><span>Equipo A</span><strong>${room.teamAScore || 0} pts</strong></div>
                        <div style=\"display:flex; justify-content:space-between; padding:6px 0;\"><span>Equipo B</span><strong>${room.teamBScore || 0} pts</strong></div>
                    </div>
                </div>`;
            } else if (mode === 'coop') {
                html += `<div style=\"margin-top:15px;\">
                    <h3>Puntuación cooperativa</h3>
                    <p style=\"font-weight:bold; font-size:18px;\">${room.coopScore || 0} puntos</p>
                </div>`;
            } else {
                html += renderScoreboard(room);
            }

            if (room.playerOrder && room.playerOrder[0] === playerName) {
                html += `<div class=\"btn\" onclick=\"nextEspectroRound('${roomCode}')\">Siguiente ronda</div>`;
            } else {
                html += '<p style="text-align:center; color:#666; margin-top:10px;">Esperando a que el organizador pase a la siguiente ronda...</p>';
            }

            gameContent.innerHTML = html;
            return;
        }
    });

    showScreen('gameScreen');
}

async function startEspectroRound(roomCode) {
    const snapshot = await database.ref(`rooms/${roomCode}`).once('value');
    const room = snapshot.val();
    if (!room || !room.playerOrder) return;

    const par = getRandomEspectroPar();
    const secreto = Math.floor(Math.random() * 100) + 1; // 1-100

    await database.ref(`rooms/${roomCode}`).update({
        currentSpectrum: par,
        secretValue: secreto,
        guesses: {},
        phase: 'guessing'
    });
}

async function submitEspectroGuess(roomCode, playerName) {
    const slider = document.getElementById('espectroSlider');
    if (!slider) return;
    const value = parseInt(slider.value, 10) || 50;

    await database.ref(`rooms/${roomCode}/guesses/${playerName}`).set(value);
}

async function revealEspectroRound(roomCode) {
    const snapshot = await database.ref(`rooms/${roomCode}`).once('value');
    const room = snapshot.val();
    if (!room) return;

    const mode = room.gameMode || 'equipos';
    const secret = room.secretValue;
    const guesses = room.guesses || {};
    const updates = { phase: 'reveal' };

    if (mode === 'equipos') {
        let teamASum = 0, teamACount = 0;
        let teamBSum = 0, teamBCount = 0;

        Object.keys(guesses).forEach(name => {
            const guess = guesses[name];
            const dist = Math.abs(secret - guess);
            const pts = getEspectroPuntosPorDistancia(dist);
            const player = room.players[name];
            if (!player || !player.team) return;
            if (player.team === 'A') {
                teamASum += pts;
                teamACount++;
            } else {
                teamBSum += pts;
                teamBCount++;
            }
        });

        const aScore = teamACount ? Math.round(teamASum / teamACount) : 0;
        const bScore = teamBCount ? Math.round(teamBSum / teamBCount) : 0;

        updates.teamAScore = (room.teamAScore || 0) + aScore;
        updates.teamBScore = (room.teamBScore || 0) + bScore;
    } else if (mode === 'coop') {
        let bestDist = null;
        Object.keys(guesses).forEach(name => {
            const guess = guesses[name];
            const dist = Math.abs(secret - guess);
            if (bestDist === null || dist < bestDist) bestDist = dist;
        });
        const pts = bestDist !== null ? getEspectroPuntosPorDistancia(bestDist) : 0;
        updates.coopScore = (room.coopScore || 0) + pts;
    } else {
        // todos contra todos
        Object.keys(guesses).forEach(name => {
            const guess = guesses[name];
            const dist = Math.abs(secret - guess);
            const pts = getEspectroPuntosPorDistancia(dist);
            const current = room.players[name].score || 0;
            updates[`players/${name}/score`] = current + pts;
        });
    }

    await database.ref(`rooms/${roomCode}`).update(updates);
}

async function nextEspectroRound(roomCode) {
    const snapshot = await database.ref(`rooms/${roomCode}`).once('value');
    const room = snapshot.val();
    if (!room || !room.playerOrder) return;

    const totalRounds = room.numRounds || 8;
    const currentRound = room.currentRound || 1;

    if (currentRound >= totalRounds) {
        await database.ref(`rooms/${roomCode}`).update({
            phase: 'finished'
        });
        return;
    }

    let nextGuideIndex = (room.currentGuideIndex || 0) + 1;
    if (nextGuideIndex >= room.playerOrder.length) nextGuideIndex = 0;

    await database.ref(`rooms/${roomCode}`).update({
        currentRound: currentRound + 1,
        currentGuideIndex: nextGuideIndex,
        currentSpectrum: null,
        secretValue: null,
        guesses: {},
        phase: 'setup'
    });
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}
