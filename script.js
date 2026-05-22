const PEER_SERVER_URL = "server-jogo-do-impostor.onrender.com"


const gameData = {
    "Objetos": ["Geladeira", "Micro-ondas", "Fog\u00e3o", "Liquidificador", "Pia", "Garfo", "Panela", "Batedeira", "Torradeira", "Prato", "Faca","Airfryer", "Cafeteira", "Colher", "X\u00edcara", "Copo", "T\u00e1bua de corte", "Escorredor", "Peneira", "Ralador", "Frigideira","Tupperware", "Garrafa", "Lixeira", "Pano de prato", "Vassoura", "Rodo", "P\u00e1 de lixo", "Balde", "M\u00e1quina de lavar", "Ferro de passar", "Varal", "Cabide", "Guarda-roupa", "Cama", "Travesseiro", "Len\u00e7ol", "Cobertor", "Abajur", "Tapete", "Cortina", "Sof\u00e1", "Poltrona", "Mesa", "Estante", "Televis\u00e3o", "Controle remoto", "Quadro", "Vaso", "Rel\u00f3gio de parede", "Espelho", "Escrivaninha", "Cadeira", "Lumin\u00e1ria", "Prateleira", "Chuveiro", "Toalha", "Escova de dentes", "Pente", "Secador de cabelo","Tesoura", "Martelo","Furadeira", "Prego", "Trena", "Lanterna", "Vela", "F\u00f3sforo", "Isqueiro", "Cesto de roupa", "Mochila", "Mala de viagem", "Guarda-chuva","Carteira", "\u00d3culos","Calculadora", "Grampeador", "Clips", "Papel", "Caneta", "L\u00e1pis", "Borracha", "R\u00e9gua", "Caderno", "Livro"],
    "Valorant": ["Jett", "Phoenix", "Reyna", "Raze", "Yoru", "Neon", "Iso", "Brimstone", "Omen", "Viper", "Astra", "Harbor", "Clove", "Sova", "Breach", "Skye", "KAY/O", "Fade", "Gekko", "Sage", "Cypher", "Killjoy", "Chamber", "Veto", "Waylay", "Tejo", "DeadLock", "Gekko"],
    "Profiss\u00f5es": ["M\u00e9dico", "Enfermeiro", "Professor", "Engenheiro", "Advogado", "Arquiteto", "Programador", "Cientista", "Psic\u00f3logo", "Dentista", "Veterin\u00e1rio", "Farmac\u00eautico", "Nutricionista", "Fisioterapeuta", "Jornalista", "Escritor", "Designer", "Fot\u00f3grafo", "Ator", "Cantor", "M\u00fasico", "Dan\u00e7arino", "Pintor", "Escultor", "Cozinheiro", "Gar\u00e7om", "Barman", "Padeiro", "Confeiteiro", "Motorista", "Piloto", "Comiss\u00e1rio de bordo", "Marinheiro", "Policial", "Bombeiro", "Soldado", "Detetive", "Seguran\u00e7a", "Gari", "Jardineiro", "Agricultor", "Pescador", "Carpinteiro", "Pedreiro", "Eletricista", "Encanador", "Mec\u00e2nico", "Costureiro", "Alfaiate", "Sapateiro", "Barbeiro", "Cabeleireiro", "Esteticista", "Maquiador", "Vendedor", "Caixa", "Gerente", "Contador", "Economista", "Secret\u00e1rio", "Atendente", "Carteiro", "Bibliotec\u00e1rio","Arque\u00f3logo", "Astr\u00f4nomo", "F\u00edsico", "Qu\u00edmico", "Bi\u00f3logo", "Matem\u00e1tico", "Historiador", "Fil\u00f3sofo", "Soci\u00f3logo", "Pol\u00edtico", "Diplomata", "Juiz", "Delegado", "Aposentado", "Empres\u00e1rio", "Corretor de im\u00f3veis", "Publicit\u00e1rio", "Rela\u00e7\u00f5es p\u00fablicas", "Cientista de dados", "Guia tur\u00edstico"],
    "Animais": ["Cachorro", "Gato", "Elefante", "Le\u00e3o", "Pinguim", "Girafa", "Tubar\u00e3o", "Tigre", "Zebra", "Golfinho", "\u00c1guia", "Canguru", "Urso Polar", "Tartaruga", "Lobo", "Raposa", "Coelho", "Hamster", "Porquinho-da-\u00edndia", "Cavalo", "Vaca", "Porco", "Ovelha", "Cabra", "Galinha", "Galo", "Pato", "Ganso", "Peru", "Pav\u00e3o", "Cisne", "Papagaio", "Arara", "Tucano", "Coruja", "Gavi\u00e3o", "Beija-flor", "Pardal", "Pombo", "Morcego", "Urso Pardo", "Panda", "Koala", "Macaco", "Gorila", "Hipop\u00f3tamo", "Rinoceronte", "Camelo", "Alpaca", "Veado", "Esquilo", "Castor", "Lontra", "Foca", "Le\u00e3o-marinho", "Morsa", "Baleia Azul", "Orca", "Arraia", "Polvo", "Lula", "Caranguejo", "Lagosta", "Camar\u00e3o", "Estrela-do-mar", "Cavalo-marinho", "Jacar\u00e9", "Cobra", "Lagarto", "Iguana", "Camale\u00e3o", "Sapo", "Abelha", "Formiga", "Cupim", "Borboleta", "Grilo", "Barata", "Mosca", "Mosquito", "Aranha", "Escorpi\u00e3o", "Centopeia", "Caracol", "Minhoca", "\u00c1gua-viva"],
    "Clash Royale": ["Flechas", "Bombardeiro", "Arqueiras", "Cavaleiro", "Bola de Fogo", "Mini P.E.K.K.A", "Mosqueteira", "Gigante", "Pr\u00edncipe", "Drag\u00e3o Beb\u00ea", "Ex\u00e9rcito de Esqueletos", "Bruxa", "Goblins Lanceiros", "Goblins", "Cabana de Goblins", "Valqu\u00edria", "Rel\u00e2mpago", "Barril de Goblins", "Esqueletos", "Servos", "L\u00e1pide", "Torre de Bombas", "Esqueleto Gigante", "Bal\u00e3o", "Canh\u00e3o", "B\u00e1rbaros", "Foguete", "Cabana de B\u00e1rbaros", "F\u00faria", "X-Besta", "Tesla", "Horda de Servos", "Torre Inferno", "Corredor", "Feiti\u00e7o de Gelo", "P.E.K.K.A", "Zap", "Mago", "Espelho", "Morteiro", "Coletor de Elixir", "Golem", "Gigante Real", "Tr\u00eas Mosqueteiras", "Pr\u00edncipe das Trevas", "Veneno", "Mago de Gelo", "Princesa", "Esp\u00edrito de Fogo", "Fornalha", "Guardas", "Lava Hound", "Mineiro", "Sparky", "Lan\u00e7ador", "Esp\u00edrito de Gelo", "Lenhador", "O Tronco", "Megasservo", "Drag\u00e3o Infernal", "Golem de Gelo", "Cemit\u00e9rio", "Tornado", "B\u00e1rbaros de Elite", "Clone", "Mago El\u00e9trico", "Goblin com Dardo", "Executor", "Ariete de Batalha", "Gangue de Goblins", "Bandida", "Bruxa Sombria", "Morcegos", "Carrinho de Canh\u00e3o", "M\u00e1quina Voadora", "Barril de Esqueletos", "Megacavaleiro", "Eletrocutadores", "Ca\u00e7ador", "Fantasma Real", "Arqueiro M\u00e1gico", "Barril de B\u00e1rbaro", "Patifes", "Porcos Reais", "Bola de Neve", "Recrutas Reais", "Goblin Gigante", "Drag\u00e3o El\u00e9trico", "Domadora de Carneiro", "Destruidores de Muros", "Terremoto", "Jaula de Goblin", "Pescador", "Golem de Elixir", "Curadora Guerreira", "Pirot\u00e9cnica", "Encomenda Real", "Esp\u00edrito Curador", "Drag\u00f5es Esqueleto", "Gigante El\u00e9trico", "Esp\u00edrito El\u00e9trico", "Bruxa M\u00e3e", "Escavadeira de Goblins", "Cavaleiro Dourado", "Rainha Arqueira", "Rei Esqueleto", "Mineiro Bombado", "Monge", "F\u00eanix", "Pequeno Pr\u00edncipe", "Feiti\u00e7o de V\u00e1cuo", "Goblin Demolidor", "M\u00e1quina Goblin", "Maldi\u00e7\u00e3o Goblin", "Arbusto Tra\u00e7oeiro", "Goblinstein", "Gigante das Runas", "Berserker", "Imperatriz Espiritual", "Vinhas"]
};

let peer, conn, connections = [];
let isHost = false, myName = "", roomID = null;
let reconnectAttempts = 0;
const MAX_RECONNECT = 5;


// ---- Indicador de conex\u00e3o ----
function setConnectionStatus(state) {
    const dot = document.getElementById('conn-dot');
    const label = document.getElementById('conn-label');
    const bar = document.getElementById('connection-status');
    if (!dot) return;
    dot.className = 'conn-dot ' + state;
    if (state === 'connected') { label.innerText = 'Conectado'; bar.style.display = 'flex'; setTimeout(() => bar.style.display = 'none', 3000); }
    else if (state === 'connecting') { label.innerText = 'Conectando...'; bar.style.display = 'flex'; }
    else if (state === 'disconnected') { label.innerText = 'Desconectado \u2014 tentando reconectar...'; bar.style.display = 'flex'; }
    else if (state === 'error') { label.innerText = 'Erro de conex\u00e3o'; bar.style.display = 'flex'; }
}

// ---- Cria\u00e7\u00e3o do Peer ----
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
    myName = document.getElementById('playerName').value.trim() || "L\u00edder";
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
            document.getElementById('wait-text').innerText = '\u26a0\ufe0f Conex\u00e3o perdida. Tente recarregar a p\u00e1gina.';
        });
    });
}

function updateConnectedCount() {
    const count = connections.length;
    document.getElementById('connected-count').innerText = `${count} amigo(s) conectado(s).`;
    const container = document.getElementById('start-button-container');
    if (count >= 1 && container.innerHTML === "") {
        const btn = document.createElement('button');
        btn.innerText = "COME\u00c7AR JOGO";
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
        order.map((name, i) => `<span style="font-size:0.9rem;"><b>${i+1}\u00ba</b> ${name}</span>`).join(" <br> ");
    content.appendChild(orderDiv);
}

function revealRole(role, word, category) {
    const content = document.getElementById('roleContent');

    if (role === 'impostor') {
        content.innerHTML = `<div style="color:var(--danger); font-size:2rem; font-weight:bold;">VOC\u00ca \u00c9 O IMPOSTOR</div><div style="color:#888; margin-top:10px; font-size:0.9rem;">Voc\u00ea n\u00e3o recebe palavra nem dica.</div>`;
    } else {
        content.innerHTML = `<div>A palavra \u00e9:</div><div class="secret-word">${word}</div>`;
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
