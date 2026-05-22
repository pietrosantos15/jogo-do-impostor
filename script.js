const PEER_SERVER_URL = "server-jogo-do-impostor.onrender.com"


const gameData = {
    "Objetos": ["Geladeira", "Micro-ondas", "Fogão", "Liquidificador", "Pia", "Garfo", "Panela", "Batedeira", "Torradeira", "Prato", "Faca","Airfryer", "Cafeteira", "Colher", "Xícara", "Copo", "Tábua de corte", "Escorredor", "Peneira", "Ralador", "Frigideira","Tupperware", "Garrafa", "Lixeira", "Pano de prato", "Vassoura", "Rodo", "Pá de lixo", "Balde", "Máquina de lavar", "Ferro de passar", "Varal", "Cabide", "Guarda-roupa", "Cama", "Travesseiro", "Lençol", "Cobertor", "Abajur", "Tapete", "Cortina", "Sofá", "Poltrona", "Mesa", "Estante", "Televisão", "Controle remoto", "Quadro", "Vaso", "Relógio de parede", "Espelho", "Escrivaninha", "Cadeira", "Luminária", "Prateleira", "Chuveiro", "Toalha", "Escova de dentes", "Pente", "Secador de cabelo","Tesoura", "Martelo","Furadeira", "Prego", "Trena", "Lanterna", "Vela", "Fósforo", "Isqueiro", "Cesto de roupa", "Mochila", "Mala de viagem", "Guarda-chuva","Carteira", "Óculos","Calculadora", "Grampeador", "Clips", "Papel", "Caneta", "Lápis", "Borracha", "Régua", "Caderno", "Livro"],
    "Valorant": ["Jett", "Phoenix", "Reyna", "Raze", "Yoru", "Neon", "Iso", "Brimstone", "Omen", "Viper", "Astra", "Harbor", "Clove", "Sova", "Breach", "Skye", "KAY/O", "Fade", "Gekko", "Sage", "Cypher", "Killjoy", "Chamber", "Veto", "Waylay", "Tejo", "DeadLock", "Gekko"],
    "Profissões": ["Médico", "Enfermeiro", "Professor", "Engenheiro", "Advogado", "Arquiteto", "Programador", "Cientista", "Psicólogo", "Dentista", "Veterinário", "Farmacêutico", "Nutricionista", "Fisioterapeuta", "Jornalista", "Escritor", "Designer", "Fotógrafo", "Ator", "Cantor", "Músico", "Dançarino", "Pintor", "Escultor", "Cozinheiro", "Garçom", "Barman", "Padeiro", "Confeiteiro", "Motorista", "Piloto", "Comissário de bordo", "Marinheiro", "Policial", "Bombeiro", "Soldado", "Detetive", "Segurança", "Gari", "Jardineiro", "Agricultor", "Pescador", "Carpinteiro", "Pedreiro", "Eletricista", "Encanador", "Mecânico", "Costureiro", "Alfaiate", "Sapateiro", "Barbeiro", "Cabeleireiro", "Esteticista", "Maquiador", "Vendedor", "Caixa", "Gerente", "Contador", "Economista", "Secretário", "Atendente", "Carteiro", "Bibliotecário","Arqueólogo", "Astrônomo", "Físico", "Químico", "Biólogo", "Matemático", "Historiador", "Filósofo", "Sociólogo", "Político", "Diplomata", "Juiz", "Delegado", "Aposentado", "Empresário", "Corretor de imóveis", "Publicitário", "Relações públicas", "Cientista de dados", "Guia turístico"],
    "Animais": ["Cachorro", "Gato", "Elefante", "Leão", "Pinguim", "Girafa", "Tubarão", "Tigre", "Zebra", "Golfinho", "Águia", "Canguru", "Urso Polar", "Tartaruga", "Lobo", "Raposa", "Coelho", "Hamster", "Porquinho-da-índia", "Cavalo", "Vaca", "Porco", "Ovelha", "Cabra", "Galinha", "Galo", "Pato", "Ganso", "Peru", "Pavão", "Cisne", "Papagaio", "Arara", "Tucano", "Coruja", "Gavião", "Beija-flor", "Pardal", "Pombo", "Morcego", "Urso Pardo", "Panda", "Koala", "Macaco", "Gorila", "Hipopótamo", "Rinoceronte", "Camelo", "Alpaca", "Veado", "Esquilo", "Castor", "Lontra", "Foca", "Leão-marinho", "Morsa", "Baleia Azul", "Orca", "Arraia", "Polvo", "Lula", "Caranguejo", "Lagosta", "Camarão", "Estrela-do-mar", "Cavalo-marinho", "Jacaré", "Cobra", "Lagarto", "Iguana", "Camaleão", "Sapo", "Abelha", "Formiga", "Cupim", "Borboleta", "Grilo", "Barata", "Mosca", "Mosquito", "Aranha", "Escorpião", "Centopeia", "Caracol", "Minhoca", "Água-viva"],
    "Clash Royale": ["Flechas", "Bombardeiro", "Arqueiras", "Cavaleiro", "Bola de Fogo", "Mini P.E.K.K.A", "Mosqueteira", "Gigante", "Príncipe", "Dragão Bebê", "Exército de Esqueletos", "Bruxa", "Goblins Lanceiros", "Goblins", "Cabana de Goblins", "Valquíria", "Relâmpago", "Barril de Goblins", "Esqueletos", "Servos", "Lápide", "Torre de Bombas", "Esqueleto Gigante", "Balão", "Canhão", "Bárbaros", "Foguete", "Cabana de Bárbaros", "Fúria", "X-Besta", "Tesla", "Horda de Servos", "Torre Inferno", "Corredor", "Feitiço de Gelo", "P.E.K.K.A", "Zap", "Mago", "Espelho", "Morteiro", "Coletor de Elixir", "Golem", "Gigante Real", "Três Mosqueteiras", "Príncipe das Trevas", "Veneno", "Mago de Gelo", "Princesa", "Espírito de Fogo", "Fornalha", "Guardas", "Lava Hound", "Mineiro", "Sparky", "Lançador", "Espírito de Gelo", "Lenhador", "O Tronco", "Megasservo", "Dragão Infernal", "Golem de Gelo", "Cemitério", "Tornado", "Bárbaros de Elite", "Clone", "Mago Elétrico", "Goblin com Dardo", "Executor", "Ariete de Batalha", "Gangue de Goblins", "Bandida", "Bruxa Sombria", "Morcegos", "Carrinho de Canhão", "Máquina Voadora", "Barril de Esqueletos", "Megacavaleiro", "Eletrocutadores", "Caçador", "Fantasma Real", "Arqueiro Mágico", "Barril de Bárbaro", "Patifes", "Porcos Reais", "Bola de Neve", "Recrutas Reais", "Goblin Gigante", "Dragão Elétrico", "Domadora de Carneiro", "Destruidores de Muros", "Terremoto", "Jaula de Goblin", "Pescador", "Golem de Elixir", "Curadora Guerreira", "Pirotécnica", "Encomenda Real", "Espírito Curador", "Dragões Esqueleto", "Gigante Elétrico", "Espírito Elétrico", "Bruxa Mãe", "Escavadeira de Goblins", "Cavaleiro Dourado", "Rainha Arqueira", "Rei Esqueleto", "Mineiro Bombado", "Monge", "Fênix", "Pequeno Príncipe", "Feitiço de Vácuo", "Goblin Demolidor", "Máquina Goblin", "Maldição Goblin", "Arbusto Traçoeiro", "Goblinstein", "Gigante das Runas", "Berserker", "Imperatriz Espiritual", "Vinhas"]
};

let peer, conn, connections = [];
let isHost = false, myName = "", roomID = null;
let reconnectAttempts = 0;
const MAX_RECONNECT = 5;


// ---- Indicador de conexão ----
function setConnectionStatus(state) {
    const dot = document.getElementById('conn-dot');
    const label = document.getElementById('conn-label');
    const bar = document.getElementById('connection-status');
    if (!dot) return;
    dot.className = 'conn-dot ' + state;
    if (state === 'connected') { label.innerText = 'Conectado'; bar.style.display = 'flex'; setTimeout(() => bar.style.display = 'none', 3000); }
    else if (state === 'connecting') { label.innerText = 'Conectando...'; bar.style.display = 'flex'; }
    else if (state === 'disconnected') { label.innerText = 'Desconectado — tentando reconectar...'; bar.style.display = 'flex'; }
    else if (state === 'error') { label.innerText = 'Erro de conexão'; bar.style.display = 'flex'; }
}

// ---- Criação do Peer ----
function createPeer(id) {
    setConnectionStatus('connecting');
    let peerConfig;
    if (PEER_SERVER_URL) {
        peerConfig = { host: PEER_SERVER_URL, port: 443, path: '/peerjs', secure: true, key: 'peerjs', debug: 0, config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:stun1.l.google.com:19302' }] } };
    } else {
        peerConfig = { host: '0.peerjs.com', port: 443, path: '/', secure: true, debug: 0, config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:stun1.l.google.com:19302' }] } };
    }
    const p = id ? new Peer(id, peerConfig) : new Peer(peerConfig);
    p.on('open', () => { reconnectAttempts = 0; setConnectionStatus('connected'); });
    p.on('disconnected', () => {
        setConnectionStatus('disconnected');
        if (reconnectAttempts < MAX_RECONNECT) {
            reconnectAttempts++;
            setTimeout(() => { try { p.reconnect(); } catch(e) {} }, 2000 * reconnectAttempts);
        }
    });
    p.on('error', (err) => {
        setConnectionStatus('error');
        if (['server-error', 'network', 'socket-error', 'socket-closed'].includes(err.type) && reconnectAttempts < MAX_RECONNECT) {
            reconnectAttempts++;
            setTimeout(() => { if (isHost) recreateHostPeer(); }, 3000 * reconnectAttempts);
        }
    });
    return p;
}

function recreateHostPeer() {
    const oldId = peer.id;
    try { peer.destroy(); } catch(e) {}
    peer = createPeer(oldId);
    peer.on('open', (id) => {
        attachHostListeners();
        document.getElementById('shareLinkText').innerText = window.location.origin + window.location.pathname + '?room=' + id;
    });
}

function attachHostListeners() {
    peer.on('connection', c => {
        connections.push({ conn: c, name: "Aguardando..." });
        c.on('data', data => {
            if (data.type === 'SEND_NAME') {
                const player = connections.find(p => p.conn === c);
                if (player) player.name = data.name;
                updateConnectedCount();
            }
        });
        c.on('close', () => { connections = connections.filter(p => p.conn !== c); updateConnectedCount(); });
    });
}

window.onload = () => {
    document.querySelector('.word-mode-selector')?.closest('.input-group')?.remove();
    document.querySelectorAll('input[name="impostorWordMode"], #mode-none, #mode-hint')
        .forEach(el => el.remove());

    Object.keys(gameData).forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat; opt.innerText = cat;
        document.getElementById('categorySelect').appendChild(opt);
    });
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('room')) {
        roomID = urlParams.get('room');
        document.getElementById('host-only-settings').style.display = 'none';
        document.getElementById('guest-only-settings').style.display = 'block';
    }
};

function showAnnouncement(text) {
    const el = document.getElementById('game-announcement');
    el.innerText = text;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 8000);
}

function prepareOnlineGame() {
    myName = document.getElementById('playerName').value.trim() || "Líder";
    isHost = true;
    peer = createPeer(null);
    peer.on('open', id => {
        document.getElementById('shareLinkText').innerText = window.location.origin + window.location.pathname + '?room=' + id;
        document.getElementById('setup-inputs').style.display = 'none';
        document.getElementById('online-share-area').style.display = 'block';
        attachHostListeners();
    });
}

function joinWithStoredID() {
    myName = document.getElementById('playerName').value.trim() || "Convidado";
    peer = createPeer(null);
    peer.on('open', () => {
        conn = peer.connect(roomID, { reliable: true });
        conn.on('open', () => {
            conn.send({ type: 'SEND_NAME', name: myName });
            document.getElementById('setup-inputs').style.display = 'none';
            document.getElementById('waiting-msg').style.display = 'block';
        });
        conn.on('data', data => {
            if (data.type === 'ASSIGN_ROLE') revealRole(data.role, data.word, data.category);
            if (data.type === 'TURN_ANNOUNCE') showTurnOrder(data.order);
        });
        conn.on('close', () => {
            setConnectionStatus('disconnected');
            document.getElementById('wait-text').innerText = '⚠️ Conexão perdida. Tente recarregar a página.';
        });
    });
}

function updateConnectedCount() {
    const count = connections.length;
    document.getElementById('connected-count').innerText = `${count} amigo(s) conectado(s).`;
    const container = document.getElementById('start-button-container');
    if (count >= 1 && container.innerHTML === "") {
        const btn = document.createElement('button');
        btn.innerText = "COMEÇAR JOGO";
        btn.className = "success";
        btn.onclick = startGame;
        container.appendChild(btn);
    }
}

async function startGame() {
    if (!isHost) return;

    const iCount = parseInt(document.getElementById('impostorCount').value) || 1;
    let cat = document.getElementById('categorySelect').value;
    if (cat === 'aleatorio') {
        const keys = Object.keys(gameData);
        cat = keys[Math.floor(Math.random() * keys.length)];
    }

    const wordList = gameData[cat];
    const word = wordList[Math.floor(Math.random() * wordList.length)];

    let players = [{ name: myName, conn: null }, ...connections];
    let roles = Array(players.length).fill('innocent');
    for (let k = 0; k < Math.min(iCount, roles.length - 1); k++) roles[k] = 'impostor';
    roles.sort(() => Math.random() - 0.5);

    players.forEach((p, idx) => {
        const roleData = { type: 'ASSIGN_ROLE', role: roles[idx], word, category: cat };
        if (p.conn) p.conn.send(roleData);
        else revealRole(roles[idx], word, cat);
    });

    setTimeout(() => {
        let orderNames = [...players].sort(() => Math.random() - 0.5).map(p => p.name);
        const turnData = { type: 'TURN_ANNOUNCE', order: orderNames };
        connections.forEach(p => p.conn.send(turnData));
        showTurnOrder(orderNames);
    }, 1200);
}

function showTurnOrder(order) {
    const content = document.getElementById('roleContent');
    const oldOrder = document.getElementById('visual-order');
    if (oldOrder) oldOrder.remove();
    const orderDiv = document.createElement('div');
    orderDiv.id = "visual-order";
    orderDiv.style.cssText = "margin-top:20px; padding-top:15px; border-top:1px solid #444";
    orderDiv.innerHTML = `<small style="color:var(--primary); display:block; margin-bottom:5px;">ORDEM DE FALA:</small>` +
        order.map((name, i) => `<span style="font-size:0.9rem;"><b>${i+1}º</b> ${name}</span>`).join(" <br> ");
    content.appendChild(orderDiv);
}

function revealRole(role, word, category) {
    const content = document.getElementById('roleContent');

    if (role === 'impostor') {
        content.innerHTML = `<div style="color:var(--danger); font-size:2rem; font-weight:bold;">VOCÊ É O IMPOSTOR</div><div style="color:#888; margin-top:10px; font-size:0.9rem;">Você não recebe palavra nem dica.</div>`;
    } else {
        content.innerHTML = `<div>A palavra é:</div><div class="secret-word">${word}</div>`;
    }

    content.innerHTML += `<div style="margin-top:10px; color:#aaa">Categoria: ${category}</div>`;
    document.getElementById('host-controls').style.display = isHost ? 'block' : 'none';
    document.getElementById('client-msg').style.display = isHost ? 'none' : 'block';
    switchScreen('reveal-screen');
}
function switchScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function copyLink() {
    navigator.clipboard.writeText(document.getElementById('shareLinkText').innerText);
    showAnnouncement("Link copiado!");
}

function resetGame() { window.location.href = window.location.origin + window.location.pathname; }
