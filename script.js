const gameData = {
            "Cozinha": ["Geladeira", "Micro-ondas", "Fogão", "Liquidificador", "Pia", "Garfo", "Panela"],
            
            "Valorant": [
                "Jett",
                "Phoenix",
                "Reyna",
                "Raze",
                "Yoru",
                "Neon",
                "Iso",
                "Brimstone",
                "Omen",
                "Viper",
                "Astra",
                "Harbor",
                "Clove",
                "Sova",
                "Breach",
                "Skye",
                "KAY/O",
                "Fade",
                "Gekko",
                "Sage",
                "Cypher",
                "Killjoy",
                "Chamber",
                "Veto",
                "Waylay",
                "Tejo",
                "DeadLock",
                "Gekko"
            ],


            "Escola": ["Lousa", "Carteira", "Professor", "Caderno", "Mochila", "Caneta"],
            "Animais": ["Cachorro", "Gato", "Elefante", "Leão", "Pinguim", "Girafa", "Tubarão"],
            "Países": ["Brasil", "Japão", "EUA", "Itália", "Egito", "França", "China"],
            "Tecnologia": ["PC", "Celular", "Mouse", "Teclado", "Servidor", "Wifi", "Fone"],
            "Clash Royale": [
            "Flechas", "Bombardeiro", "Arqueiras", "Cavaleiro", "Bola de Fogo",
            "Mini P.E.K.K.A", "Mosqueteira", "Gigante", "Príncipe", "Dragão Bebê",
            "Exército de Esqueletos", "Bruxa", "Goblins Lanceiros", "Goblins", "Cabana de Goblins",
            "Valquíria", "Relâmpago", "Barril de Goblins", "Esqueletos", "Servos",
            "Lápide", "Torre de Bombas", "Esqueleto Gigante", "Balão", "Canhão",
            "Bárbaros", "Foguete", "Cabana de Bárbaros", "Fúria", "X-Besta",
            "Tesla", "Horda de Servos", "Torre Inferno", "Corredor", "Feitiço de Gelo",
            "P.E.K.K.A", "Zap", "Mago", "Espelho", "Morteiro",
            "Coletor de Elixir", "Golem", "Gigante Real", "Três Mosqueteiras", "Príncipe das Trevas",
            "VenenO", "Mago de Gelo", "Princesa", "Espírito de Fogo", "Fornalha",
            "Guardas", "Lava Hound", "Mineiro", "Sparky", "Lançador",
            "Espírito de Gelo", "Lenhador", "O Tronco", "Megasservo", "Dragão Infernal",
            "Golem de Gelo", "Cemitério", "Tornado", "Bárbaros de Elite", "Clone",
            "Mago Elétrico", "Goblin com Dardo", "Executor", "Ariete de Batalha", "Gangue de Goblins",
            "Bandida", "Bruxa Sombria", "Morcegos", "Carrinho de Canhão", "Máquina Voadora",
            "Barril de Esqueletos", "Megacavaleiro", "Eletrocutadores", "Caçador", "Fantasma Real",
            "Arqueiro Mágico", "Barril de Bárbaro", "Patifes", "Porcos Reais", "Bola de Neve",
            "Recrutas Reais", "Goblin Gigante", "Dragão Elétrico", "Domadora de Carneiro", "Destruidores de Muros",
            "Terremoto", "Jaula de Goblin", "Pescador", "Golem de Elixir", "Curadora Guerreira",
            "Pirotécnica", "Encomenda Real", "Espírito Curador", "Dragões Esqueleto", "Gigante Elétrico",
            "Espírito Elétrico", "Bruxa Mãe", "Escavadeira de Goblins", "Cavaleiro Dourado", "Rainha Arqueira",
            "Rei Esqueleto", "Mineiro Bombado", "Monge", "Fênix", "Pequeno Príncipe",
            "Feitiço de Vácuo", "Goblin Demolidor", "Máquina Goblin", "Maldição Goblin", "Arbusto Traçoeiro",
            "Goblinstein", "Gigante das Runas", "Berserker", "Imperatriz Espiritual", "Vinhas"
            ]
        };

        let peer, conn, connections = [];
        let isHost = false, currentPlayers = [], currentSecret = "", currentCategory = "";

        window.onload = () => {
            Object.keys(gameData).forEach(cat => {
                const opt = document.createElement('option');
                opt.value = cat; opt.innerText = cat;
                document.getElementById('categorySelect').appendChild(opt);
            });
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('room')) joinRoom(urlParams.get('room'));
        };

        function prepareOnlineGame() {
            isHost = true;
            peer = new Peer();
            peer.on('open', id => {
                const url = window.location.origin + window.location.pathname + '?room=' + id;
                document.getElementById('shareLinkText').innerText = url;
                document.getElementById('setup-inputs').style.display = 'none';
                document.getElementById('online-share-area').style.display = 'block';
            });
            peer.on('connection', c => {
                connections.push(c);
                updateConnectedCount();
            });
        }

        function joinRoom(id) {
            isHost = false;
            peer = new Peer();
            peer.on('open', () => {
                conn = peer.connect(id);
                conn.on('open', () => {
                    document.getElementById('setup-inputs').style.display = 'none';
                    document.getElementById('waiting-msg').style.display = 'block';
                });
                conn.on('data', data => handleData(data));
            });
        }

        function handleData(data) {
            if (data.type === 'RESTART') {
                // Sincroniza a lógica de jogo com os dados REAIS vindos do líder
                setupGameLogic(data.params.p, data.params.i, data.params.c, data.seed);
                // Gera a quantidade exata de botões enviada pelo líder
                showPlayerSelectionScreen(data.params.p);
            }
        }

        function updateConnectedCount() {
            const count = connections.length;
            const container = document.getElementById('start-button-container');
            const statusMsg = document.getElementById('connected-count');
            
            statusMsg.innerText = `${count} amigo(s) conectado(s).`;
            
            if (count >= 2) {
                statusMsg.style.color = "#4cd964";
                if (container.innerHTML === "") {
                    const btn = document.createElement('button');
                    btn.innerText = "COMEÇAR JOGO";
                    btn.className = "success";
                    btn.onclick = broadcastRestart;
                    container.appendChild(btn);
                }
            } else {
                statusMsg.style.color = "#ffca28";
                container.innerHTML = "";
            }
        }

        function broadcastRestart() {
            if (!isHost) return;
            const pCount = parseInt(document.getElementById('playerCount').value);
            const iCount = parseInt(document.getElementById('impostorCount').value);
            
            if (pCount < 3) return alert("O jogo precisa de no mínimo 3 jogadores!");
            
            let cat = document.getElementById('categorySelect').value;
            if (cat === 'aleatorio') {
                const keys = Object.keys(gameData);
                cat = keys[Math.floor(Math.random() * keys.length)];
            }
            
            const seed = Math.floor(Math.random() * 99999);
            const payload = { type: 'RESTART', seed: seed, params: { p: pCount, i: iCount, c: cat } };
            
            // Envia para todos os amigos os parâmetros exatos configurados aqui
            connections.forEach(c => c.send(payload));
            handleData(payload); // O Host também executa
        }

        function setupGameLogic(p, i, cat, seed) {
            currentCategory = cat;
            const words = gameData[cat];
            const seededRandom = (s) => { var x = Math.sin(s) * 10000; return x - Math.floor(x); };
            currentSecret = words[Math.floor(seededRandom(seed) * words.length)];
            currentPlayers = Array(p).fill('innocent');
            for(let k=0; k<i; k++) if(k < p) currentPlayers[k] = 'impostor';
            
            let s = seed;
            for (let m = currentPlayers.length - 1; m > 0; m--) {
                const j = Math.floor(seededRandom(s++) * (m + 1));
                [currentPlayers[m], currentPlayers[j]] = [currentPlayers[j], currentPlayers[m]];
            }
        }

        function showPlayerSelectionScreen(total) {
            const grid = document.getElementById('playerGrid');
            grid.innerHTML = '';
            // Usa o parâmetro "total" que veio do líder, ignorando o input local
            for(let i=0; i<total; i++) {
                const btn = document.createElement('button');
                btn.innerText = `Jogador ${i+1}`;
                btn.onclick = () => revealRole(i);
                grid.appendChild(btn);
            }
            switchScreen('pick-player-screen');
        }

        function revealRole(idx) {
            const role = currentPlayers[idx];
            const content = document.getElementById('roleContent');
            content.innerHTML = role === 'impostor' ? `<div style="color:var(--danger); font-size:2rem; font-weight:bold;">IMPOSTOR</div>` : `<div>A palavra é:</div><div class="secret-word">${currentSecret}</div>`;
            content.innerHTML += `<div style="margin-top:10px; color:#aaa">Categoria: ${currentCategory}</div>`;
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
            alert("Link copiado!");
        }

        function resetGame() { window.location.href = window.location.pathname; }