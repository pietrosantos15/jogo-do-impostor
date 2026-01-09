const gameData = {
            "Objetos": ["Geladeira", "Micro-ondas", "Fogão", "Liquidificador", "Pia", "Garfo", "Panela", "Batedeira", "Torradeira", "Prato", "Faca","Airfryer", "Cafeteira", "Colher", "Xícara", "Copo", "Tábua de corte", "Escorredor", "Peneira", "Ralador", "Frigideira","Tupperware", "Garrafa", "Lixeira", "Pano de prato", "Vassoura", "Rodo", "Pá de lixo", "Balde", "Máquina de lavar", "Ferro de passar", "Varal", "Cabide", "Guarda-roupa", "Cama", "Travesseiro", "Lençol", "Cobertor", "Abajur", "Tapete", "Cortina", "Sofá", "Poltrona", "Mesa", "Estante", "Televisão", "Controle remoto", "Quadro", "Vaso", "Relógio de parede", "Espelho", "Escrivaninha", "Cadeira", "Luminária", "Prateleira", "Chuveiro", "Toalha", "Escova de dentes", "Pente", "Secador de cabelo","Tesoura", "Martelo","Furadeira", "Prego", "Trena", "Lanterna", "Vela", "Fósforo", "Isqueiro", "Cesto de roupa", "Mochila", "Mala de viagem", "Guarda-chuva","Carteira", "Óculos","Calculadora", "Grampeador", "Clips", "Papel", "Caneta", "Lápis", "Borracha", "Régua", "Caderno", "Livro"],
            
            "Valorant": ["Jett", "Phoenix", "Reyna", "Raze", "Yoru", "Neon", "Iso", "Brimstone", "Omen", "Viper", "Astra", "Harbor", "Clove", "Sova", "Breach", "Skye", "KAY/O", "Fade", "Gekko", "Sage", "Cypher", "Killjoy", "Chamber", "Veto", "Waylay", "Tejo", "DeadLock", "Gekko"],

            "Profissões": ["Médico", "Enfermeiro", "Professor", "Engenheiro", "Advogado", "Arquiteto", "Programador", "Cientista", "Psicólogo", "Dentista", "Veterinário", "Farmacêutico", "Nutricionista", "Fisioterapeuta", "Jornalista", "Escritor", "Designer", "Fotógrafo", "Ator", "Cantor", "Músico", "Dançarino", "Pintor", "Escultor", "Cozinheiro", "Garçom", "Barman", "Padeiro", "Confeiteiro", "Motorista", "Piloto", "Comissário de bordo", "Marinheiro", "Policial", "Bombeiro", "Soldado", "Detetive", "Segurança", "Gari", "Jardineiro", "Agricultor", "Pescador", "Carpinteiro", "Pedreiro", "Eletricista", "Encanador", "Mecânico", "Costureiro", "Alfaiate", "Sapateiro", "Barbeiro", "Cabeleireiro", "Esteticista", "Maquiador", "Vendedor", "Caixa", "Gerente", "Contador", "Economista", "Secretário", "Atendente", "Carteiro", "Bibliotecário","Arqueólogo", "Astrônomo", "Físico", "Químico", "Biólogo", "Matemático", "Historiador", "Filósofo", "Sociólogo", "Político", "Diplomata", "Juiz", "Delegado", "Aposentado", "Empresário", "Corretor de imóveis", "Publicitário", "Relações públicas", "Cientista de dados", "Guia turístico"],

            "Animais": ["Cachorro", "Gato", "Elefante", "Leão", "Pinguim", "Girafa", "Tubarão", "Tigre", "Zebra", "Golfinho", "Águia", "Canguru", "Urso Polar", "Tartaruga", "Lobo", "Raposa", "Coelho", "Hamster", "Porquinho-da-índia", "Cavalo", "Vaca", "Porco", "Ovelha", "Cabra", "Galinha", "Galo", "Pato", "Ganso", "Peru", "Pavão", "Cisne", "Papagaio", "Arara", "Tucano", "Coruja", "Gavião", "Beija-flor", "Pardal", "Pombo", "Morcego", "Urso Pardo", "Panda", "Koala", "Macaco", "Gorila", "Hipopótamo", "Rinoceronte", "Camelo", "Alpaca", "Veado", "Esquilo", "Castor", "Lontra", "Foca", "Leão-marinho", "Morsa", "Baleia Azul", "Orca", "Arraia", "Polvo", "Lula", "Caranguejo", "Lagosta", "Camarão", "Estrela-do-mar", "Cavalo-marinho", "Jacaré", "Cobra", "Lagarto", "Iguana", "Camaleão", "Sapo", "Abelha", "Formiga", "Cupim", "Borboleta", "Grilo", "Barata", "Mosca", "Mosquito", "Aranha", "Escorpião", "Centopeia", "Caracol", "Minhoca", "Água-viva"],

            "Clash Royale": [ "Flechas", "Bombardeiro", "Arqueiras", "Cavaleiro", "Bola de Fogo", "Mini P.E.K.K.A", "Mosqueteira", "Gigante", "Príncipe", "Dragão Bebê", "Exército de Esqueletos", "Bruxa", "Goblins Lanceiros", "Goblins", "Cabana de Goblins", "Valquíria", "Relâmpago", "Barril de Goblins", "Esqueletos", "Servos", "Lápide", "Torre de Bombas", "Esqueleto Gigante", "Balão", "Canhão", "Bárbaros", "Foguete", "Cabana de Bárbaros", "Fúria", "X-Besta", "Tesla", "Horda de Servos", "Torre Inferno", "Corredor", "Feitiço de Gelo", "P.E.K.K.A", "Zap", "Mago", "Espelho", "Morteiro", "Coletor de Elixir", "Golem", "Gigante Real", "Três Mosqueteiras", "Príncipe das Trevas", "Veneno", "Mago de Gelo", "Princesa", "Espírito de Fogo", "Fornalha", "Guardas", "Lava Hound", "Mineiro", "Sparky", "Lançador", "Espírito de Gelo", "Lenhador", "O Tronco", "Megasservo", "Dragão Infernal", "Golem de Gelo", "Cemitério", "Tornado", "Bárbaros de Elite", "Clone", "Mago Elétrico", "Goblin com Dardo", "Executor", "Ariete de Batalha", "Gangue de Goblins", "Bandida", "Bruxa Sombria", "Morcegos", "Carrinho de Canhão", "Máquina Voadora", "Barril de Esqueletos", "Megacavaleiro", "Eletrocutadores", "Caçador", "Fantasma Real", "Arqueiro Mágico", "Barril de Bárbaro", "Patifes", "Porcos Reais", "Bola de Neve", "Recrutas Reais", "Goblin Gigante", "Dragão Elétrico", "Domadora de Carneiro", "Destruidores de Muros", "Terremoto", "Jaula de Goblin", "Pescador", "Golem de Elixir", "Curadora Guerreira", "Pirotécnica", "Encomenda Real", "Espírito Curador", "Dragões Esqueleto", "Gigante Elétrico", "Espírito Elétrico", "Bruxa Mãe", "Escavadeira de Goblins", "Cavaleiro Dourado", "Rainha Arqueira", "Rei Esqueleto", "Mineiro Bombado", "Monge", "Fênix", "Pequeno Príncipe", "Feitiço de Vácuo", "Goblin Demolidor", "Máquina Goblin", "Maldição Goblin", "Arbusto Traçoeiro", "Goblinstein", "Gigante das Runas", "Berserker", "Imperatriz Espiritual", "Vinhas"]

            
        };

        let peer, conn, connections = [];
        let isHost = false, myName = "", roomID = null;

        window.onload = () => {
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
            peer = new Peer();
            peer.on('open', id => {
                document.getElementById('shareLinkText').innerText = window.location.origin + window.location.pathname + '?room=' + id;
                document.getElementById('setup-inputs').style.display = 'none';
                document.getElementById('online-share-area').style.display = 'block';
            });
            peer.on('connection', c => {
                connections.push({conn: c, name: "Aguardando..."});
                c.on('data', data => {
                    if(data.type === 'SEND_NAME') {
                        const player = connections.find(p => p.conn === c);
                        if(player) player.name = data.name;
                        updateConnectedCount();
                    }
                });
            });
        }

        function joinWithStoredID() {
            myName = document.getElementById('playerName').value.trim() || "Convidado";
            peer = new Peer();
            peer.on('open', () => {
                conn = peer.connect(roomID);
                conn.on('open', () => {
                    conn.send({type: 'SEND_NAME', name: myName});
                    document.getElementById('setup-inputs').style.display = 'none';
                    document.getElementById('waiting-msg').style.display = 'block';
                });
                conn.on('data', data => {
                    if(data.type === 'ASSIGN_ROLE') revealRole(data.role, data.word, data.category);
                
                    if(data.type === 'TURN_ANNOUNCE') showTurnOrder(data.order);
                });
            });
        }

        function updateConnectedCount() {
            const count = connections.length;
            document.getElementById('connected-count').innerText = `${count} amigo(s) conectado(s).`;
            const container = document.getElementById('start-button-container');
            if (count >= 2 && container.innerHTML === "") {
                const btn = document.createElement('button');
                btn.innerText = "COMEÇAR JOGO";
                btn.className = "success";
                btn.onclick = startGame;
                container.appendChild(btn);
            }
        }

        function startGame() {
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
            for (let k = 0; k < iCount; k++) {
                if (k < roles.length) roles[k] = 'impostor';
            }
            
            roles.sort(() => Math.random() - 0.5);

            players.forEach((p, idx) => {
                const roleData = { 
                    type: 'ASSIGN_ROLE', 
                    role: roles[idx], 
                    word: word, 
                    category: cat 
                };
                
                if (p.conn) {
                    p.conn.send(roleData);
                } else {
                    revealRole(roles[idx], word, cat);
                }
            });

            
            setTimeout(() => {
                
                let orderList = [...players].sort(() => Math.random() - 0.5);
                let orderNames = orderList.map(p => p.name);

                const turnData = { type: 'TURN_ANNOUNCE', order: orderNames };
                
                connections.forEach(p => p.conn.send(turnData));
                showTurnOrder(orderNames);
            }, 1200);
        }

        function showTurnOrder(order) {
    

            
            const content = document.getElementById('roleContent');
            
            
            const oldOrder = document.getElementById('visual-order');
            if(oldOrder) oldOrder.remove();

            const orderDiv = document.createElement('div');
            orderDiv.id = "visual-order";
            orderDiv.style.marginTop = "20px";
            orderDiv.style.paddingTop = "15px";
            orderDiv.style.borderTop = "1px solid #444";
            orderDiv.innerHTML = `<small style="color:var(--primary); display:block; margin-bottom:5px;">ORDEM DE FALA:</small>` + 
                                order.map((name, i) => `<span style="font-size:0.9rem;"><b>${i+1}º</b> ${name}</span>`).join(" <br> ");
            content.appendChild(orderDiv);
        }

        function revealRole(role, word, category) {
            const content = document.getElementById('roleContent');
            content.innerHTML = role === 'impostor' ? `<div style="color:var(--danger); font-size:2rem; font-weight:bold;">VOCÊ É O IMPOSTOR</div>` : `<div>A palavra é:</div><div class="secret-word">${word}</div>`;
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