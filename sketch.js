//configurações gerais
const CONFIG = {
    player: {
        life: 100,
        gold: 1000,
    },

    tower: {
        types: [
         {
    name: 'Avatar Supremo',
    cost: 100000,
    damage: 500,       
    fireRate: 10,      
    range: 9999,       
    color: 'cyan',
    special: 'avatar_op', 
    description: 'A manifestação do poder absoluto. Dispara projéteis que causam dano em área, saltam entre alvos e aplicam todos os efeitos negativos simultaneamente.',
    hitboxSize: 80,
    
    
    pierce: 10,        
    chainLength: 8,    
    chainRadius: 150,  

    
    explosionChance: 1.0, 
    explosionRadius: 150, 
    explosionDamage: 300, 

    
    appliesBurn: true,          
    burnDps: 100,               
    burnDuration: 300,

    appliesPoison: true,        
    poisonDps: 100,             
    poisonDuration: 300,

    appliesFreeze: true,        
    freezeDuration: 60,         
    
    stunChance: 0.50,           
    stunDuration: 30,           
},
            {
                name: 'Apiário',
                cost: 220,
                damage: 0,
                fireRate: 0,
                range: 90,
                color: 'orange',
                special: 'swarm_slow',
                description: 'Um enxame de abelhas ataca e atrasa inimigos em uma área constantemente.',
                hitboxSize: 80,
                swarmDps: 12,
                swarmSlow: 0.20,
                beeCount: 8,
                swarmTickRate: 30
            },
            {
                name: 'Fornalha',
                cost: 350,
                damage: 1.5,
                fireRate: 1,
                range: 70,
                color: 'darkred',
                special: 'flamethrower',
                description: 'Dispara um fluxo contínuo de chamas que queima múltiplos inimigos em um cone.',
                hitboxSize: 80,
                flameConeAngle: Math.PI / 4,
                appliesBurn: true,
                burnDps: 8,
                burnDuration: 180,
            },
            {
                name: 'Controlador de Drone',
                cost: 80,
                damage: 0,
                fireRate: 0,
                range: 150,
                color: 'brown',
                special: 'droneController',
                description: 'Cria e gerencia um Drone Agrícola para pulverização.',
                hitboxSize: 80,
                droneStats: {
                    droneDamage: 60,
                    droneFireRate: 35,
                    droneFlightRadiusX: 80,
                    droneFlightRadiusY: 80,
                    droneFlightSpeed: 0.01,
                    droneRange: 100,
                }
            },
            {
                name: 'Feira Orgânica',
                cost: 100,
                range: 80,
                fireRate: 0,
                damage: 0,
                special: 'gold',
                goldPerInterval: 15,
                goldInterval: 180,
                color: 'gold',
                description: 'Gera renda com a venda de produtos.',
                hitboxSize: 80
            },
            {
                name: 'Galinha D\'Angola',
                cost: 180,
                damagePerSecond: 8,
                fireRate: 150,
                range: 100,
                color: 'forestgreen',
                special: 'poison',
                poisonDuration: 100,
                description: 'Aplica veneno que causa dano ao longo do tempo.',
                hitboxSize: 80
            },
            {
                name: 'Irrigador Gelado',
                cost: 120,
                damage: 3,
                fireRate: 60,
                range: 80,
                color: 'lightblue',
                special: 'freeze',
                freezeDuration: 45,
                description: 'Dispara jatos de água que congelam as pragas.',
                hitboxSize: 80
            },
            {
                name: 'Espantalho Sônico',
                cost: 500,
                damage: 80,
                fireRate: 70,
                range: 120,
                color: 'purple',
                special: 'chain',
                chainLength: 4,
                chainRadius: 60,
                description: 'Lança ondas sônicas que saltam entre múltiplos inimigos.',
                hitboxSize: 80
            },
            {
                name: 'Cão Pastor',
                cost: 250,
                damage: 60,
                fireRate: 50,
                range: 160,
                color: 'teal',
                special: 'homing',
                description: 'Um cão fiel que persegue a praga mais próxima.',
                hitboxSize: 80
            },
            {
                name: 'Composteira',
                cost: 200,
                damage: 0,
                fireRate: 6,
                range: 80,
                color: 'gold',
                special: 'buff',
                buffAmount: 0.15,
                description: 'Não ataca, mas aumenta o dano das torres próximas.',
                hitboxSize: 80
            },
            {
                name: 'Gavião Caçador',
                cost: 650,
                damage: 250,
                fireRate: 300,
                range: 9999,
                color: 'sienna',
                special: 'sniper_priority',
                description: 'Uma ave de rapina com visão aguçada que mira e ataca a praga mais forte em qualquer lugar do mapa.',
                hitboxSize: 80,
            },
            {
                name: 'Espiga de Milho Explosiva',
                cost: 380,
                damage: 10,
                fireRate: 90,
                range: 110,
                color: 'yellow',
                special: 'random_aoe_explosion',
                description: 'Dispara grãos de milho que têm uma chance de causar uma grande explosão em área.',
                hitboxSize: 80,
                explosionChance: 0.20,
                explosionRadius: 100,
                explosionDamage: 150,
            },
            {
                name: 'Buraco de Minhoca Adubado',
                cost: 450,
                damage: 0,
                fireRate: 480,
                range: 60,
                color: 'darkviolet',
                special: 'teleport_back',
                description: 'Cria um portal instável que tem a chance de teleportar pragas de volta para o início do caminho.',
                hitboxSize: 80,
                teleportChance: 0.15,
            }
        ],
    },

    towerLimits: {
        0: {
            'Controlador de Drone': 4,
            'Feira Orgânica': 2,
            'Irrigador Gelado': 2,
            'Galinha D\'Angola': 0,
            'Espantalho Sônico': 0,
            'Cão Pastor': 0,
            'Composteira': 1,
            'Apiário': 1,
            'Fornalha ' :0,
            'Gavião Caçador':0,
            'Espiga de Milho Explosiva':1,
          
        },
        1: {
            'Controlador de Drone': 3,
            'Feira Orgânica': 3,
            'Irrigador Gelado': 3,
            'Galinha D\'Angola': 2,
            'Espantalho Sônico': 2,
            'Cão Pastor': 1,
            'Composteira': 2,
            'Apiário': 2,
            'Fornalha ' :1,
            'Gavião Caçador':2,
            'Espiga de Milho Explosiva':2,
        },
        2: {
            'Controlador de Drone': 5,
            'Feira Orgânica': 4,
            'Irrigador Gelado': 4,
            'Galinha D\'Angola': 4,
            'Espantalho Sônico': 3,
            'Cão Pastor': 2,
            'Composteira': 2,
            'Apiário': 2,
            'Fornalha ' :2,
            'Gavião Caçador':2,
            'Espiga de Milho Explosiva':2,
        }
    },

    upgradeTrees: { 
avatar_op: {
    'foco_gravitacional': {
        name: 'Foco Gravitacional',
        description: 'Aumenta massivamente o dano direto e o dano de explosão dos projéteis.',
        cost: [8000, 25000],
        apply: (tower) => { 
            tower.damage += 1000; 
            tower.explosionDamage += 8000;
        },
        unlocks: ['colapso_estelar']
    },
    'colapso_estelar': {
        name: 'Colapso Estelar',
        description: 'As explosões se tornam catastróficas, com raio dobrado e atordoando todos os inimigos atingidos por 2 segundos.',
        cost: [60000, 150000],
        apply: (tower) => { 
            tower.explosionRadius *= 2; 
            tower.stunChance = 1.0; 
            tower.stunDuration = 120; 
        },
        unlocks: ['nascimento_buraco_negro']
    },
    'nascimento_buraco_negro': {
        name: 'Nascimento do Buraco Negro (FINAL)',
        description: 'HABILIDADE: Cria uma singularidade no centro do mapa por 8s, causando 5% da vida máxima por segundo a TODOS os inimigos.',
        cost: [850000],
        apply: (tower) => {
            tower.canActivateAbility = true;
            tower.abilityCooldown = 3600; 
            tower.abilityDuration = 480;  
            tower.abilityEffect = 'black_hole'; 
        },
        unlocks: []
    },

    
    'ressonancia_cosmica': {
        name: 'Ressonância Cósmica',
        description: 'Aumenta drasticamente o número de saltos dos projéteis e o raio para encontrar o próximo alvo.',
        cost: [12000, 30000],
        apply: (tower) => { 
            tower.chainLength += 50; 
            tower.chainRadius += 100;
        },
        unlocks: ['distorcao_temporal']
    },
    'distorcao_temporal': {
        name: 'Distorção Temporal',
        description: 'Inimigos atingidos pelos projéteis agora sofrem lentidão permanente de 10% (acumulativa).',
        cost: [75000, 180000],
        apply: (tower) => {
            tower.appliesPermanentSlow = true;
            tower.permanentSlowAmount = 0.10; 
        },
        unlocks: ['paradoxo_onipresenca']
    },
    'paradoxo_onipresenca': {
        name: 'Paradoxo da Onipresença (FINAL)',
        description: 'O Avatar para de atirar. Em vez disso, a cada 1 segundos, ele atinge 60 inimigos aleatórios no mapa instantaneamente.',
        cost: [1200000],
        apply: (tower) => {
            tower.omnipresentSmite = true; 
            tower.fireRate = 60; 
            tower.smiteTargetCount = 60; 
        },
        unlocks: []
    }
},
      flamethrower: {
            'gas_propano': {
                name: 'Combustível Potente',
                description: 'Aumenta o dano direto das chamas.',
                cost: [380, 900, 2200],
                apply: (tower) => { tower.damage += 1.0; },
                unlocks: ['fogo_grego']
            },
            'fogo_grego': {
                name: 'Fogo Grego',
                description: 'As chamas se tornam pegajosas, aumentando o dano e a duração da queimadura.',
                cost: [4000, 9500],
                apply: (tower) => {
                    tower.burnDps += 25;
                    tower.burnDuration += 120;
                },
                unlocks: ['inferno']
            },
            'inferno': {
                name: 'Inferno (FINAL)',
                description: 'Dobra o dano direto e de queimadura. Aumenta drasticamente o alcance e o ângulo do cone de fogo.',
                cost: [62000],
                apply: (tower) => {
                    tower.damage *= 2;
                    tower.burnDps *= 2;
                    tower.flameConeAngle = PI / 2.2;
                    tower.range += 50;
                },
                unlocks: []
            },
            'bico_pressao': {
                name: 'Bico de Pressão',
                description: 'Aumenta o alcance das chamas.',
                cost: [300, 700],
                apply: (tower) => { tower.range += 30; },
                unlocks: ['chama_azul']
            },
            'chama_azul': {
                name: 'Chama Azul',
                description: 'Aumenta a temperatura drasticamente. Inimigos queimando recebem 25% a mais de dano de TODAS as fontes.',
                cost: [5500, 11000],
                apply: (tower) => {
                    tower.blueFlame = true;
                    tower.burnDps += 15;
                },
                unlocks: ['o_sol']
            },
            'o_sol': {
                name: 'O Sol (FINAL)',
                description: 'HABILIDADE: Causa 1500 de dano e atordoa todos os inimigos na tela por 5 segundos.',
                cost: [78000],
                apply: (tower) => {
                    tower.canActivateAbility = true;
                    tower.abilityCooldown = 3000; 
                    tower.abilityDamage = 1500;
                    tower.abilityStunDuration = 300; 
                },
                unlocks: []
            }
        },
        swarm_slow: {
            'dano_ferrao': {
                name: 'Ferrão Pontiagudo',
                description: 'Aumenta o dano por segundo do enxame de abelhas.',
                cost: [280, 750, 1950],
                apply: (tower) => { tower.swarmDps += 15; },
                unlocks: ['mais_abelhas']
            },
            'mais_abelhas': {
                name: 'Território Expandido',
                description: 'Aumenta o tamanho do enxame.',
                cost: [2500, 6500],
                apply: (tower) => {
                    tower.range += 50;
                    tower.beeCount += 10;
                    for (let i = 0; i < 10; i++) {
                        tower.bees.push({
                            angle: random(TWO_PI),
                            radius: random(tower.range * 0.2, tower.range),
                            speed: random(0.01, 0.04),
                            size: random(14, 22)
                        });
                    }
                },
                unlocks: ['enxame_furioso']
            },
            'enxame_furioso': {
                name: 'Enxame Furioso',
                description: 'As abelhas se tornam mais agressivas, aumentando muito o dano.',
                cost: [3500, 8800],
                apply: (tower) => { tower.swarmDps += 50; },
                unlocks: ['rainha_suprema']
            },
             'rainha_suprema': {
                name: 'Rainha Suprema (FINAL)',
                description: 'Uma Abelha Rainha persegue inimigos, marcando-os para que recebam o DOBRO de dano de todas as fontes.',
                cost: [52000],
                apply: (tower) => {
                    tower.spawnsQueenBee = true;
                    tower.queenBeeMarkMultiplier = 2.0; 
                    tower.swarmDps *= 2; 
                },
                unlocks: []
            },
            'polen_pegajoso': {
                name: 'Pólen Pegajoso',
                description: 'Aumenta o efeito de lentidão causado pelas abelhas.',
                cost: [200, 600],
                apply: (tower) => { tower.swarmSlow += 1; },
                unlocks: ['area_expandida']
            },
            'area_expandida': {
                name: 'Território Expandido',
                description: 'Aumenta o alcance e o tamanho do enxame.',
                cost: [2500, 6500],
                apply: (tower) => {
                    tower.range += 50;
                    tower.beeCount += 10;
                    for (let i = 0; i < 10; i++) {
                        tower.bees.push({
                            angle: random(TWO_PI),
                            radius: random(tower.range * 0.2, tower.range),
                            speed: random(0.01, 0.04),
                            size: random(14, 22)
                        });
                    }
                },
                unlocks: ['feromonios_paralisantes']
            },
             'feromonios_paralisantes': {
                name: 'Feromônios Paralisantes (FINAL)',
                description: 'O enxame agora tem 25% de chance de paralisar inimigos na área por 1.5 segundos a cada dano.',
                cost: [45000],
                apply: (tower) => {
                    tower.swarmStunChance = 0.25; 
                    tower.swarmStunDuration = 90; 
                    tower.swarmSlow += 0.15; 
                },
                unlocks: []
            }
        },
        droneController: {
            'drone_dano_potente': {
                name: 'Pesticida Potente',
                description: 'Aumenta o dano dos disparos do drone.',
                cost: [250, 750, 1900],
                apply: (tower) => { tower.drone.damage += 35; },
                unlocks: ['drone_pesticida_rapido']
            },
            'drone_pesticida_rapido': {
                name: 'Sistema de Disparo Acelerado',
                description: 'Aumenta massivamente a cadência de disparos do drone.',
                cost: [3200, 8500],
                apply: (tower) => { tower.drone.fireRate = Math.max(5, tower.drone.fireRate - 15); },
                unlocks: ['drone_chuva_acida_suprema']
            }, 
          'drone_chuva_acida_suprema': {
                name: 'Esquadrão de Extermínio (FINAL)',
                description: 'Adiciona 2 mini-drones. Disparos do drone principal e dos mini-drones aplicam um veneno corrosivo e explodem em área.',
                cost: [65000],
                apply: (tower) => {
                    if (!tower.miniDrones || tower.miniDrones.length === 0) {
                        tower.miniDrones = [];
                        tower.miniDrones.push({
                            flightAngle: 0, flightRadius: 50, flightSpeed: 0.09,
                            damage: tower.drone.damage * 0.7, fireRate: tower.drone.fireRate, range: tower.drone.range * 0.9,
                            cooldown: 0, target: null, pierce: 2
                        });
                        tower.miniDrones.push({
                            flightAngle: PI, flightRadius: 50, flightSpeed: 0.09,
                            damage: tower.drone.damage * 0.7, fireRate: tower.drone.fireRate, range: tower.drone.range * 0.9,
                            cooldown: 0, target: null, pierce: 2
                        });
                    }
                    tower.drone.aoeRadius = 40;
                    tower.drone.appliesPoison = true;
                    tower.drone.poisonDps = 80;
                    tower.drone.poisonDuration = 300;
                },
                unlocks: []
            },
            'drone_alcance_melhorado': {
                name: 'Sensores Avançados',
                description: 'Aumenta o alcance de detecção do drone.',
                cost: [200, 600, 1500],
                apply: (tower) => { tower.drone.range += 50; },
                unlocks: ['drone_rotores_otimizados']
            },
            'drone_rotores_otimizados': {
                name: 'Rotores de Neo-Fibra',
                description: 'O drone se move muito mais rápido, cobrindo a área com mais eficiência.',
                cost: [2800, 7200],
                apply: (tower) => { tower.drone.flightSpeed += 0.015; },
                unlocks: ['drone_vant_autonomo_master']
            },
 'drone_vant_autonomo_master': {
                name: 'Soberania Aérea (FINAL)',
                description: 'O alcance do drone se torna global, a velocidade de voo dobra e seus disparos atravessam até 10 inimigos.',
                cost: [82000],
                apply: (tower) => {
                    tower.drone.range = 9999;
                    tower.drone.flightRadiusX += 400;
                    tower.drone.flightRadiusY += 200;
                    tower.drone.flightSpeed *= 2;
                    tower.drone.pierce = (tower.drone.pierce || 1) + 10;
                },
                unlocks: []
            }
        },
        gold: {
            'marketing': {
                name: 'Produtos Premium',
                description: 'Aumenta o ouro gerado por intervalo.',
                cost: [150, 450, 1250],
                apply: (tower) => { tower.goldPerInterval += 30; },
                unlocks: ['entrega_rapida']
            },
            'entrega_rapida': {
                name: 'Logística Otimizada',
                description: 'Reduz significativamente o tempo para gerar ouro.',
                cost: [2200, 6500],
                apply: (tower) => { tower.goldInterval = Math.max(30, tower.goldInterval - 75); },
                unlocks: ['investidores_global']
            },
            'investidores_global': {
                name: 'Banco Central Agrícola (FINAL)',
                description: 'Gera 15000 de ouro a cada 2 segundos. Sim, é isso mesmo.',
                cost: [110000],
                apply: (tower) => {
                    tower.goldPerInterval = 15000;
                    tower.goldInterval = 120;
                },
                unlocks: []
            },
            'programa_fidelidade': {
                name: 'Expansão da Feira',
                description: 'gera mais dinheiro.',
                cost: [120, 300, 900],                
              apply: (tower) => {
                    tower.goldPerInterval += 150;
                    tower.goldInterval = 120;
                },
                unlocks: ['desconto_parceiro_master']
            },
            'desconto_parceiro_master': {
                name: 'Mercado Global (FINAL)',
                description: 'Aumenta em 25% o dinheiro ganho por inimigo derrotado em todo o mapa. Acumulativo!',
                cost: [75000],
                apply: (tower) => {
                    if (!tower.hasGlobalGoldBuff) {
                        tower.hasGlobalGoldBuff = true;
                        tower.range += 100;
                    }
                },
                unlocks: []
            },
        },
        poison: {
            'veneno_potente': {
                name: 'Veneno Mais Potente',
                description: 'Aumenta o dano por segundo do veneno.',
                cost: [220, 680, 1800],
                apply: (tower) => { tower.damagePerSecond += 25; },
                unlocks: ['toxina_rapida']
            },
            'toxina_rapida': {
                name: 'Toxina de Ação Rápida',
                description: 'Aumenta a cadência de ataque.',
                cost: [2500, 4800],
                apply: (tower) => { tower.fireRate = Math.max(20, tower.fireRate - 40); },
                unlocks: ['ninho_contagioso']
            },
          'ninho_contagioso': {
                name: 'Peste Negra (FINAL)',
                description: 'Inimigos que morrem envenenados explodem, espalhando um veneno ainda mais forte para até 8 inimigos próximos.',
                cost: [42000],
                apply: (tower) => {
                    tower.spreadsPoisonOnDeath = true;
                    tower.spreadRadius = 100;
                    tower.spreadPoisonDps = tower.damagePerSecond * 2;
                    tower.spreadPoisonDuration = tower.poisonDuration;
                    tower.spreadCount = 8;
                },
                unlocks: []
            },
            'maior_duracao': {
                name: 'Toxina Duradoura',
                description: 'Aumenta drasticamente a duração do veneno.',
                cost: [180, 550, 1600],
                apply: (tower) => { tower.poisonDuration += 1200; },
                unlocks: ['veneno_paralisante']
            },
            'veneno_paralisante': {
                name: 'Neurotoxina (FINAL)',
                description: 'O veneno paralisa inimigos por 1s e causa dano baseado na vida máxima deles (2% por segundo).',
                cost: [58000],
                apply: (tower) => {
                    tower.addsStun = true;
                    tower.stunDuration = 60; 
                    tower.percentDamage = 0.02; 
                },
                unlocks: []
            }
        },
        freeze: {
            'agua_pressurizada': {
                name: 'Jato de Alta Pressão',
                description: 'Aumenta o dano de impacto.',
                cost: [280, 800, 2100],
                apply: (tower) => { tower.damage += 25; },
                unlocks: ['geada_perfurante']
            },
            'geada_perfurante': {
                name: 'Geada Perfurante',
                description: 'Jatos agora atravessam mais inimigos.',
                cost: [3200, 7500],
                apply: (tower) => { tower.pierce = (tower.pierce || 1) + 3; },
                unlocks: ['zero_absoluto']
            },
            'zero_absoluto': {
                name: 'Zero Absoluto (FINAL)',
                description: 'Inimigos congelados se tornam quebradiços, recebendo o TRIPLO de dano de todas as fontes. Congelamento dura mais.',
                cost: [60000],
                apply: (tower) => {
                    tower.brittleEffect = true;
                    tower.brittleMultiplier = 3.0; 
                    tower.freezeDuration += 60;
                },
                unlocks: []
            },
            'liquido_congelante': {
                name: 'Líquido Supercongelante',
                description: 'Aumenta muito a duração do congelamento.',
                cost: [250, 750, 2000],
                apply: (tower) => { tower.freezeDuration += 30; },
                unlocks: ['nevasca']
            },
            'nevasca': {
                name: 'Nevasca',
                description: 'Cria uma aura permanente de lentidão ao redor da torre.',
                cost: [4500, 9000],
                apply: (tower) => { tower.hasSlowAura = true; tower.slowAmount = 0.3; },
                unlocks: ['nova_era_do_gelo']
            },
            'nova_era_do_gelo': {
                name: 'Nova Era do Gelo (FINAL)',
                description: 'HABILIDADE: Congela TODOS os inimigos (mesmo os imunes) na tela por 12 segundos. Recarga: 60s.',
                cost: [68000],
                apply: (tower) => {
                    tower.canActivateAbility = true;
                    tower.abilityCooldown = 3600; 
                    tower.abilityDuration = 720; 
                },
                unlocks: []
            }
        },
        chain: {
            'maior_alcance': {
                name: 'Amplificador Sônico',
                description: 'Aumenta o alcance do ataque.',
                cost: [400, 1100],
                apply: (tower) => { tower.range += 40; },
                unlocks: ['mais_saltos']
            },
            'mais_saltos': {
                name: 'Super Ressonância',
                description: 'Aumenta drasticamente o número de saltos.',
                cost: [2500, 6000],
                apply: (tower) => { tower.chainLength += 10; },
                unlocks: ['eco_destrutivo']
            },
           'eco_destrutivo': {
                name: 'Som da Loucura (FINAL)',
                description: 'As ondas sônicas saltam para até 30 alvos e ganham 10% do dano inicial a cada salto.',
                cost: [52000],
                apply: (tower) => {
                    tower.chainLength += 20; 
                    tower.damageIncreasesPerJump = tower.damage * 0.10;
                },
                unlocks: []
            },
            'dano_concentrado': {
                name: 'Frequência de Dano',
                description: 'Aumenta o dano base.',
                cost: [600, 1800, 4500],
                apply: (tower) => { tower.damage += 90; },
                unlocks: ['onda_atordoante']
            },
            'onda_atordoante': {
                name: 'Onda Supersônica (FINAL)',
                description: 'Todos inimigos atingidos pela onda ficam atordoados por 1 segundo e o dano base da torre triplica.',
                cost: [48000],
                apply: (tower) => {
                    tower.damage *= 3;
                    tower.stunChance = 1;
                    tower.stunDuration = 60; 
                },
                unlocks: []
            }
        },
        homing: {
            'mordida_feroz': {
                name: 'Mordida Feroz',
                description: 'Aumenta o dano por ataque.',
                cost: [350, 950, 2800],
                apply: (tower) => { tower.damage += 50; },
                unlocks: ['instinto_predador']
            },
            'instinto_predador': {
                name: 'Instinto Predador',
                description: 'Causa dano extra a inimigos com menos de 50% de vida.',
                cost: [4500, 11000],
                apply: (tower) => { tower.executeThreshold = 0.5; tower.executeDamageMultiplier = 2; },
                unlocks: ['cao_do_inferno']
            },
           'cao_do_inferno': {
                name: 'Cão do Inferno (FINAL)',
                description: 'Ataques aplicam uma queimadura infernal (200 dps) e explodem no alvo, aplicando a mesma queimadura em área.',
                cost: [60000],
                apply: (tower) => {
                    tower.appliesFire = true;
                    tower.fireDps = 200;
                    tower.fireDuration = 300;
                    tower.fireAoeRadius = 50; 
                },
                unlocks: []
            },
            'faro_apurado': {
                name: 'Faro Apurado',
                description: 'Aumenta muito o alcance de perseguição.',
                cost: [300, 800],
                apply: (tower) => { tower.range += 60; },
                unlocks: ['latido_intimidador']
            },
            'latido_intimidador': {
                name: 'Matilha',
                description: 'A torre gera um filhote a cada 20 segundos que ataca independentemente (limite 3).',
                cost: [6000, 15000],
                apply: (tower) => { tower.spawnsPups = true; },
                unlocks: ['alcateia_lendaria']
            },
             'alcateia_lendaria': {
                name: 'Alcateia Lendária (FINAL)',
                description: 'Se transforma em um lobo gigante com dano e alcance massivos. Lidera 5 filhotes que se movem e atacam mais rápido.',
                cost: [72000],
                apply: (tower) => {
                    tower.damage *= 4; 
                    tower.range += 120;
                    tower.pupLimit = 5;
                    tower.isAlpha = true; 
                },
                unlocks: []
            }
        },
        buff: {
            'adubo_rico': {
                name: 'Adubo Quântico',
                description: 'Aumenta o bônus de dano concedido.',
                cost: [300, 900, 2500],
                apply: (tower) => { tower.buffAmount += 0.20; },
                unlocks: ['super_crescimento_eterno']
            },
            'super_crescimento_eterno': {
                name: 'Super Crescimento',
                description: 'Habilidade: Dobra a velocidade de ataque de todas as torres no alcance por 10s.',
                cost: [8000, 18000],
                apply: (tower) => {
                    tower.canActivateAbility = true;
                    tower.abilityCooldown = 2400;
                    tower.abilityDuration = 600;
                },
                unlocks: ['simbiose_total']
            },
           'simbiose_total': {
                name: 'Simbiose Total (FINAL)',
                description: 'O buff de dano da Composteira se torna global e aumenta para +75%. Todas as torres ganham +20% de cadência.',
                cost: [95000],
                apply: (tower) => {
                    tower.range = 9999;
                    tower.buffAmount = 0.75;
                    tower.fireRateBuff = (tower.fireRateBuff || 0) + 0.20; 
                },
                unlocks: []
            },
            'fertilizante_amplo': {
                name: 'Fertilizante Cósmico',
                description: 'Aumenta drasticamente o alcance da aura de buff.',
                cost: [250, 750, 2200],
                apply: (tower) => { tower.range += 50; },
                unlocks: ['aura_revigorante']
            },
            'aura_revigorante': {
                name: 'Aura Revigorante',
                description: 'Aura agora também aumenta a cadência de ataque das torres próximas em 15%.',
                cost: [5000, 12500],
                apply: (tower) => { tower.fireRateBuff = (tower.fireRateBuff || 0) + 0.15; },
                unlocks: ['aura_suprema']
            },
            'aura_suprema': {
                name: 'Aura da Vida (FINAL)',
                description: 'Aura concede +10 de dano base, +2 de perfuração e 10% de chance de crítico (dano x2) para torres afetadas.',
                cost: [85000],
                apply: (tower) => {
                    tower.addsBaseDamage = (tower.addsBaseDamage || 0) + 10;
                    tower.addsPierce = (tower.addsPierce || 0) + 2;
                    tower.addsCritChance = 0.10;
                },
                unlocks: []
            }
        },
        sniper_priority: {
    'olhos_de_aguia': {
        name: 'Olhos de Águia',
        description: 'Aumenta o dano do ataque principal.',
        cost: [700, 1800, 4500],
        apply: (tower) => { tower.damage += 150; },
        unlocks: ['bote_veloz']
    },
    'bote_veloz': {
        name: 'Bote Veloz',
        description: 'Aumenta a velocidade de ataque do Gavião.',
        cost: [5000, 12000],
        apply: (tower) => { tower.fireRate = Math.max(30, tower.fireRate - 90); },
        unlocks: ['cacador_alfa']
    },
    'cacador_alfa': {
                name: 'Caçador Alfa (FINAL)',
                description: 'Dano massivo (+2500). Causa dano quádruplo a inimigos com menos de 50% de vida.',
                cost: [85000],
                apply: (tower) => {
                    tower.damage += 2500;
                    tower.executeThreshold = 0.50; 
                    tower.executeDamageMultiplier = 4; 
                },
                unlocks: []
            },
    'garras_perfurantes': {
        name: 'Garras Perfurantes',
        description: 'O ataque agora perfura um inimigo adicional.',
        cost: [900, 2500],
        apply: (tower) => { tower.pierce = (tower.pierce || 1) + 1; },
        unlocks: ['marca_do_cacador']
    },
    'marca_do_cacador': {
        name: 'Marca do Caçador',
        description: 'O alvo atingido fica marcado, recebendo 20% a mais de dano de TODAS as fontes.',
        cost: [7500, 16000],
        apply: (tower) => { 
            tower.appliesMark = true; 
            tower.markDuration = 240;
            tower.markMultiplier = 1.20; 
        },
        unlocks: ['sentinela_suprema']
    },
      'sentinela_suprema': {
                name: 'Sentinela Suprema (FINAL)',
                description: 'O Gavião agora ataca os 5 inimigos mais fortes do mapa simultaneamente e atira 50% mais rápido.',
                cost: [120000],
                apply: (tower) => {
                    tower.multiTarget = 5;
                    tower.fireRate *= 0.5;
                },
                unlocks: []
            }
        },
        random_aoe_explosion: {
    'graos_maiores': {
        name: 'Grãos Maiores',
        description: 'Aumenta o dano do projétil principal.',
        cost: [400, 950, 2100],
        apply: (tower) => { tower.damage += 20; },
        unlocks: ['polvora_potente']
    },
    'polvora_potente': {
        name: 'Pólvora Potente',
        description: 'Aumenta o dano da explosão em área.',
        cost: [3500, 8000],
        apply: (tower) => { tower.type.explosionDamage += 100; },
        unlocks: ['colheita_catastrofica']
    },
    'colheita_catastrofica': {
                name: 'Colheita Catastrófica (FINAL)',
                description: 'A explosão agora é garantida, com dano (+800) e raio massivamente aumentados. A explosão também atordoa.',
                cost: [70000],
                apply: (tower) => {
                    tower.type.explosionChance = 1.0;
                    tower.type.explosionRadius += 80;
                    tower.type.explosionDamage += 800;
                    tower.explosionStunDuration = 60; 
                },
                unlocks: []
            },
    'milho_transgenico': {
        name: 'Milho Transgênico',
        description: 'Aumenta a chance de causar uma explosão.',
        cost: [500, 1200],
        apply: (tower) => { tower.type.explosionChance += 0.15; },
        unlocks: ['pipoca_quente']
    },
    'pipoca_quente': {
        name: 'Pipoca Quente',
        description: 'A explosão agora deixa o chão queimando, causando dano contínuo aos inimigos que passarem por cima.',
        cost: [6000, 14000],
        apply: (tower) => {
            tower.leavesFirePatch = true;
            tower.firePatchDps = 50;
            tower.firePatchDuration = 180;
        },
        unlocks: ['chuva_de_pipoca']
    },
    'chuva_de_pipoca': {
                name: 'Chuva de Pipoca (FINAL)',
                description: 'HABILIDADE: Aumenta a velocidade de ataque em 1000% por 8s, criando um caos de explosões.',
                cost: [62000],
                apply: (tower) => {
                    tower.canActivateAbility = true;
                    tower.abilityCooldown = 2400; 
                    tower.abilityDuration = 480; 
                    tower.abilityMultiplier = 10; 
                },
                unlocks: []
            }
        },
teleport_back: {
    'horizonte_de_eventos': {
        name: 'Horizonte de Eventos',
        description: 'Aumenta a chance de teleportar um inimigo.',
        cost: [500, 1500, 4000],
        apply: (tower) => { tower.type.teleportChance += 100; },
        unlocks: ['singularidade_gananciosa']
    },
    'singularidade_gananciosa': {
        name: 'Singularidade Gananciosa',
        description: 'Aumenta a frequência com que o buraco de minhoca tenta teleportar inimigos.',
        cost: [6000, 13000],
        apply: (tower) => { tower.fireRate = Math.max(0, tower.fireRate - 1800); },
        unlocks: ['paradoxo_temporal']
    },
     'paradoxo_temporal': {
                name: 'Paradoxo Temporal (FINAL)',
                description: 'Inimigos teleportados sofrem 10% de lentidão permanente (acumulativo) e perdem 5% de sua vida MÁXIMA.',
                cost: [95000],
                apply: (tower) => {
                    tower.addsPermanentSlow = true;
                    tower.permanentSlowAmount = 10;
                    tower.teleportHealthPenalty = 5; 
                },
                unlocks: []
            },
    'raizes_instaveis': {
        name: 'Raízes Instáveis',
        description: 'Aumenta a área de efeito do Buraco de Minhoca.',
        cost: [400, 1000],
        apply: (tower) => { tower.range += 40; },
        unlocks: ['energia_do_vazio']
    },
    'energia_do_vazio': {
        name: 'Energia do Vazio',
        description: 'Inimigos dentro da área de efeito são desacelerados, mesmo que não sejam teleportados.',
        cost: [7000, 15000],
        apply: (tower) => { 
            tower.hasSlowAura = true; 
            tower.slowAmount = (tower.slowAmount || 0) + 20;
        },
        unlocks: ['colapso_quantico']
    },
     'colapso_quantico': {
                name: 'Colapso Quântico (FINAL)',
                description: 'HABILIDADE: Por 8s, TODOS os inimigos que entram no alcance são teleportados instantaneamente.',
                cost: [78000],
                apply: (tower) => {
                    tower.canActivateAbility = true;
                    tower.abilityCooldown = 3000; 
                    tower.abilityDuration = 480; 
                },
                unlocks: []
            }
        }
    },

    enemy: {
        baseHealth: 20,
        baseSpeed: 0.01,
        healthIncrement: 10,
        speedIncrement: 0.1,
        types: [
            { health: 10, speed: 0.1, color: 'red', name: 'Pulgão' },
            { health: 20, speed: 0.4, color: 'blue', name: 'Lagarta' },
            { health: 30, speed: 0.3, color: 'green', name: 'Escaravelho' },
            { health: 30, speed: 0.2, color: 'saddlebrown', name: 'Erva Daninha', canOnlyBeDamagedBySpecial: true },
            { health: 20, speed: 0.05, color: 'white', name: 'Nuvem de Agrotóxico', immuneToFreeze: true },
            { health: 40, speed: 0.1, color: 'black', name: 'Lixo Tóxico', immuneToExplosions: true },
            { health: 15, speed: 0.2, color: 'yellow', name: 'Drone Espião' },
            { health: 2000, speed: 0.1, color: '#FFC107', name: 'Colheitadeira Monstruosa', isBoss: true },
        ]
    }
};
//configurações da fases
const FASES = [
  {
    title: "Fase 1: Primeiros Invasores",
    storyText: ["A horta está sob ataque! Pulgões rápidos e Lagartas mais resistentes estão aparecendo. Construa suas primeiras defesas!"],
    waveCount: 10, 
    waveComposition: (waveNum) => {
      let composition = [];

      if (waveNum === 1) {
        composition.push({ type: 'Pulgão', count: 5 });
      } else if (waveNum === 2) {
        composition.push({ type: 'Pulgão', count: 8 });
      } else if (waveNum === 3) {
        composition.push({ type: 'Pulgão', count: 6 });
        composition.push({ type: 'Lagarta', count: 2 }); 
      } else if (waveNum <= 5) {
        composition.push({ type: 'Pulgão', count: 5 + waveNum });
        composition.push({ type: 'Lagarta', count: 3 + waveNum });
      } else if (waveNum === 6) {

        composition.push({ type: 'Pulgão', count: 20 });
      } else if (waveNum <= 9) {
        composition.push({ type: 'Pulgão', count: 8 + waveNum });
        composition.push({ type: 'Lagarta', count: 6 + waveNum });
        composition.push({ type: 'Escaravelho', count: 2 + waveNum }); 
      } else if (waveNum === 10) {

        composition.push({ type: 'Escaravelho', count: 10 });
        composition.push({ type: 'Lagarta', count: 15 });
      }
      return composition;
    }
  },
  {
    title: "Fase 2: Ameaça Tecnológica",
    storyText: ["A AgroCorp não gostou da nossa resistência. Eles enviaram Drones Espiões e pragas mais perigosas. Cuidado com as Ervas Daninhas!"],
    waveCount: 12,
    waveComposition: (waveNum) => {
      let composition = [];
      if (waveNum <= 3) {
        composition.push({ type: 'Lagarta', count: 10 + waveNum * 2 });
        composition.push({ type: 'Drone Espião', count: 5 + waveNum }); 
      } else if (waveNum === 4) {

        composition.push({ type: 'Erva Daninha', count: 8 });
        composition.push({ type: 'Drone Espião', count: 10 });
      } else if (waveNum <= 7) {
        composition.push({ type: 'Escaravelho', count: 10 + waveNum });
        composition.push({ type: 'Drone Espião', count: 8 + waveNum });
        composition.push({ type: 'Erva Daninha', count: 4 + waveNum });
      } else if (waveNum === 8) {

        composition.push({ type: 'Pulgão', count: 30 });
        composition.push({ type: 'Lagarta', count: 20 });
      } else if (waveNum <= 11) {
        composition.push({ type: 'Escaravelho', count: 15 + waveNum * 2 });
        composition.push({ type: 'Drone Espião', count: 15 + waveNum });
        composition.push({ type: 'Erva Daninha', count: 8 + waveNum });
      } else if (waveNum === 12) {

        composition.push({ type: 'Colheitadeira Monstruosa', count: 1 });
        composition.push({ type: 'Drone Espião', count: 20 }); 
      }
      return composition;
    }
  },
  {
    title: "Fase 3: Despejo Tóxico",
    storyText: ["A poluição da AgroCorp está contaminando tudo! Pragas tóxicas imunes a alguns dos seus ataques estão surgindo. Adapte sua estratégia!"],
    waveCount: 15,
    waveComposition: (waveNum) => {
      let composition = [];
      if (waveNum <= 4) {
        composition.push({ type: 'Nuvem de Agrotóxico', count: 8 + waveNum }); 
        composition.push({ type: 'Drone Espião', count: 10 + waveNum });
      } else if (waveNum === 5) {

        composition.push({ type: 'Nuvem de Agrotóxico', count: 25 });
      } else if (waveNum <= 8) {
        composition.push({ type: 'Lixo Tóxico', count: 10 + waveNum }); 
        composition.push({ type: 'Nuvem de Agrotóxico', count: 12 + waveNum });
      } else if (waveNum === 9) {

        composition.push({ type: 'Lixo Tóxico', count: 15 });
        composition.push({ type: 'Erva Daninha', count: 15 });
      } else if (waveNum <= 14) {
        composition.push({ type: 'Nuvem de Agrotóxico', count: 15 + waveNum*2 });
        composition.push({ type: 'Lixo Tóxico', count: 12 + waveNum*2 });
        composition.push({ type: 'Escaravelho', count: 20 + waveNum });
      } else if (waveNum === 15) {

        composition.push({ type: 'Colheitadeira Monstruosa', count: 1 });
        composition.push({ type: 'Lixo Tóxico', count: 25 });
        composition.push({ type: 'Nuvem de Agrotóxico', count: 25 });
      }
      return composition;
    }
  },
];
const COLORS = {
  uiBackground: [24, 34, 44, 230],
  uiBorder: '#4E5D6C',
  uiText: '#EFEFEF',
  uiTitle: '#FFD700',
  button: [41, 128, 185, 220],
  buttonHover: [52, 152, 219, 255],
  buttonDisabled: [128, 128, 128, 150],
  healthBarBg: [192, 57, 43, 180],
  healthBarFg: [46, 204, 113],
  rangeIndicator: [255, 255, 255, 60],
  sellText: '#E74C3C',
  damageText: [255, 100, 100],
  goldText: [255, 215, 0],
};
//configurações do mapa
const MAPAS = {
   parqueEvolutivo: {

paths: {
    
    0: [
        { x: 0, y: 100 }, { x: 850, y: 100 }, { x: 1000, y: 250 },
        { x: 850, y: 400 }, { x: 300, y: 400 }, { x: 150, y: 550 },
        { x: 300, y: 650 }, { x: 850, y: 650 }, { x: 1000, y: 550 },
        { x: 1160, y: 550 }
    ],
    
    
    1: [
        { x: 0, y: 360 }, { x: 300, y: 360 }, { x: 350, y: 100 },
        { x: 850, y: 100 }, { x: 1000, y: 360 }, { x: 850, y: 620 },
        { x: 350, y: 620 }, { x: 300, y: 360 }, { x: 1160, y: 360 }
    ],

    
    
    2: [
        { x: 0, y: 150 }, { x: 250, y: 150 }, { x: 450, y: 250 },
        { x: 700, y: 250 }, { x: 900, y: 150 }, { x: 1160, y: 150 }
    ],
    
    3: [
        { x: 0, y: 570 }, { x: 250, y: 570 }, { x: 450, y: 470 },
        { x: 700, y: 470 }, { x: 900, y: 570 }, { x: 1160, y: 570 }
    ]
},
decorations: [
    
    
    { type: 'arvore', x: 200, y: 200, size: 80, showInPhase: [0] },
    { type: 'arvore', x: 150, y: 280, size: 90, showInPhase: [0] },
    { type: 'arvore', x: 260, y: 270, size: 75, showInPhase: [0] },
    
    { type: 'arvore', x: 900, y: 250, size: 85, showInPhase: [0, 1] }, 
    { type: 'arvore', x: 1000, y: 320, size: 100, showInPhase: [0] },
    { type: 'arvore', x: 980, y: 180, size: 70, showInPhase: [0] },

    { type: 'arbusto', x: 400, y: 480, size: 50, showInPhase: [0, 1] },
    { type: 'arbusto', x: 750, y: 480, size: 60, showInPhase: [0] },
    
    { type: 'arvore', x: 100, y: 650, size: 90, showInPhase: [0] },
    { type: 'arvore', x: 950, y: 650, size: 95, showInPhase: [0] },

    
    
    { type: 'stump', x: 100, y: 100, size: 50, showInPhase: [1, 2] },
    { type: 'stump', x: 250, y: 150, size: 40, showInPhase: [1, 2] },
    { type: 'stump', x: 1000, y: 320, size: 60, showInPhase: [1, 2] },
    { type: 'stump', x: 100, y: 650, size: 50, showInPhase: [1, 2] },
    { type: 'stump', x: 950, y: 650, size: 55, showInPhase: [1, 2] },
    
    { type: 'rocha', x: 580, y: 380, size: 200, showInPhase: [1] },
    
    { type: 'cone', x: 150, y: 330, size: 25, showInPhase: [1] },
    { type: 'cone', x: 150, y: 130, size: 25, showInPhase: [1] },
    { type: 'cone', x: 850, y: 130, size: 25, showInPhase: [1] },
    { type: 'cone', x: 850, y: 590, size: 25, showInPhase: [1] },
    { type: 'cerca', x: 500, y: 200, length: 300, orientation: 'horizontal', showInPhase: [1] },
    
    { type: 'predio_construcao', x: 300, y: 200, size: 140, showInPhase: [1] }, 
    { type: 'predio_construcao', x: 1000, y: 500, size: 180, showInPhase: [1] }, 

    
    
    
    { type: 'predio', x: 150, y: 150, size: 180, showInPhase: [2] },
    { type: 'predio', x: 800, y: 500, size: 220, showInPhase: [2] },
    { type: 'predio', x: 400, y: 200, size: 250, showInPhase: [2] },
  { type: 'predio', x: 600, y: 400, size: 250, showInPhase: [2] },
    { type: 'predio', x: 300, y: 550, size: 150, showInPhase: [2] },
  
    { type: 'predio_construcao', x: 800, y: 200, size: 200, showInPhase: [2] },
    
    { type: 'streetlight', x: 280, y: 380, size: 70, showInPhase: [2] },
    { type: 'streetlight', x: 840, y: 370, size: 70, showInPhase: [2] },
    { type: 'streetlight', x: 500, y: 75, size: 60, showInPhase: [2] },
    { type: 'streetlight', x: 600, y: 623, size: 60, showInPhase: [2] },
]
},
    mapaEstradaSinuosa: {
        nome: "Estrada Sinuosa",
        backgroundType: 'dirt',
        paths: {
            0: [
                { x: 147, y: 0 }, { x: 147, y: 639 }, { x: 367, y: 639 }, 
                { x: 367, y: 58 }, { x: 587, y: 58 }, { x: 587, y: 639 }, 
                { x: 808, y: 639 }, { x: 808, y: 58 }, { x: 1028, y: 58 }, 
                { x: 1028, y: 720 }
            ]
        },
        decorations: [
            { type: 'rocha', x: 220, y: 116, size: 70, showInPhase: [0] },
            { type: 'rocha', x: 955, y: 348, size: 93, showInPhase: [0] },
            { type: 'arbusto', x: 441, y: 174, size: 46, showInPhase: [0] },
            { type: 'cerca', x: 661, y: 580, length: 290, orientation: 'horizontal', showInPhase: [0] },
        ],
        specialPlacementSpots: [
            { x: 661, y: 348, type: 'range_boost', buff: { range: 1.20 } }
        ]
    },
    mapaEncruzilhada: {
        nome: "A Encruzilhada",
        backgroundType: 'city_asphalt',
        paths: {
            0: [ 
                { x: 0, y: 360 }, { x: 514, y: 360 }, { x: 646, y: 360 }, 
                { x: 1160, y: 360 } 
            ],
            1: [ 
                { x: 580, y: 0 }, { x: 580, y: 300 }, { x: 580, y: 420 }, 
                { x: 580, y: 720 } 
            ]
        },
        decorations: [
            { type: 'predio', x: 580, y: 360, size: 200, showInPhase: [0]},
            { type: 'cerca', x: 580, y: 300, length: 200, orientation: 'horizontal', showInPhase: [0]},
            { type: 'cerca', x: 580, y: 420, length: 200, orientation: 'horizontal', showInPhase: [0]},
            { type: 'streetlight', x: 400, y: 500, size: 70, showInPhase: [0] },
            { type: 'streetlight', x: 800, y: 200, size: 70, showInPhase: [0] },
        ],
        specialPlacementSpots: [
            { x: 580, y: 50, type: 'range_boost', buff: { range: 1.25 } }
        ]
    },
    mapaIndustrial: {
        nome: "Fim da Linha",
        backgroundType: 'city_asphalt',
        paths: {
            0: [
                { x: 0, y: 140 }, { x: 294, y: 140 }, { x: 441, y: 232 }, 
                { x: 734, y: 232 }, { x: 881, y: 140 }, { x: 1160, y: 140 }
            ],
            1: [
                { x: 0, y: 522 }, { x: 294, y: 522 }, { x: 441, y: 430 }, 
                { x: 734, y: 430 }, { x: 881, y: 522 }, { x: 1160, y: 522 }
            ]
        },
        decorations: [
            { type: 'predio', x: 150, y: 330, size: 100, showInPhase: [0]},
            { type: 'predio', x: 400, y: 330, size: 100, showInPhase: [0]},
            { type: 'predio', x: 650, y: 330, size: 100, showInPhase: [0]},
            { type: 'predio', x: 900, y: 330, size: 100, showInPhase: [0]},
            { type: 'streetlight', x: 100, y: 50, size: 60, showInPhase: [0]},
            { type: 'streetlight', x: 1050, y: 650, size: 60, showInPhase: [0]}
        ],
        specialPlacementSpots: []
    }
};
//as fases do proprio modo fases
const FASES_MODO_FASES = [
    { nome: "Fase 1: Estrada Sinuosa", mapa: 'mapaEstradaSinuosa', ondas: 10, ouroInicial: 1000 },
    { nome: "Fase 2: A Encruzilhada", mapa: 'mapaEncruzilhada', ondas: 15, ouroInicial: 1000 },

]
let currentPhaseMapKey = 'parqueEvolutivo'; 
let allPaths = []; 
let currentMapData;
let sidebarScrollY = 0;
let pulseAnimation = 0;
let sidebarTexture;
let currentPhaseIndex = 0;
let settingsOpen = false;
let img5
let img6
let img7
let img8
let solodefense
let predioimg
let terraimg
let towerImages = {};
let pedra
let arvore
let enemyImages = {};
let fazendeiroImg;
let tutorialManager = {
    isActive: false,
    step: 0,
    highlight: { x: 0, y: 0, w: 0, h: 0, type: 'rect' },
    instruction: ""
};
let bgMusic;
let musicStarted = false;
let byMusic
let abelhaImg; 
let prefeitaimg
let silvaimg
let aidropImg
let predio_construcao
let sfx = {};
let music = {};
// o preload, onde baixa e guarda todos as imagens e audios do meu jogo
function preload() {
  sfx.ui_click = loadSound("sons/click.wav")
   sfx.shoot = loadSound('sons/tiro.wav');
    sfx.explosion = loadSound('sons/boom.wav');
    sfx.enemyDeath = loadSound('sons/enemyl.wav');
    sfx.loseLife = loadSound('sons/lose.wav');
    sfx.upgrade = loadSound('sons/upgrade.wav');
  sfx.placeTower = loadSound("sons/torre.wav")
  predio_construcao = loadImage("assets/predio_construindo.png");
  airdropImg = loadImage('assets/airdrop.png'); 
  silvaimg = loadImage("assets/silva.png")
  prefeitaimg = loadImage("assets/prefeita.png")
  abelhaImg = loadImage('assets/abelha.png');
  
  towerImages["Avatar Supremo"] = loadImage('assets/Heroi2.png'); 
  towerImages["Gavião Caçador"] = loadImage('assets/gaviao1.png'); 
  towerImages["Espiga de Milho Explosiva"] = loadImage('assets/milho1.png'); 
  towerImages["Buraco de Minhoca Adubado"] = loadImage('assets/portal.png'); 
  configIcon = loadImage('assets/config.png');
  towerImages["Fornalha"] = loadImage('assets/fornalha.png');
  towerImages["Controlador de Drone"] = loadImage('assets/controlador.png');
  towerImages["Apiário"] = loadImage('assets/comeia1.png');
  towerImages["Drone Agrícola"] = loadImage('assets/drone.png');
  towerImages["Feira Orgânica"] = loadImage('assets/feira.png');
  towerImages["Galinha D'Angola"] = loadImage('assets/galinha.png');
  towerImages["Irrigador Gelado"] = loadImage('assets/irrigador2.png');
  towerImages["Espantalho Sônico"] = loadImage('assets/espanta1.png');
  towerImages["Cão Pastor"] = loadImage('assets/dog.png');
  towerImages["Composteira"] = loadImage('assets/composteira.png');
  
  enemyImages["Pulgão"] = loadImage('assets/pulga.png');
  enemyImages["Lagarta"] = loadImage('assets/lagarta.png');
  enemyImages["Escaravelho"] = loadImage('assets/escaravelho.png');
  enemyImages["Erva Daninha"] = loadImage('assets/erva_daninha.png');
  enemyImages["Nuvem de Agrotóxico"] = loadImage('assets/fumaça.png');
  enemyImages["Lixo Tóxico"] = loadImage('assets/lixo.png');
  enemyImages["Drone Espião"] = loadImage('assets/dronein.png');
  enemyImages["Colheitadeira Monstruosa"] = loadImage('assets/colheitadeira.png');
  
  fazendeiroImg = loadImage('assets/fazendeiro.png');
  solodefense = loadImage('assets/logojogo.png'); 
  predioimg = loadImage('assets/predio3.png');
  pedra = loadImage('assets/arvore.png');
  arvore = loadImage('assets/arvore.png')
  music.gameplay = loadSound('sons/bg.music.mp3');
music.menu = loadSound('sons/bg.musica.mp3'); 
}

// VARIAVEIS GLOBAIS
let scanlineY = 0;
let bossImage;
let waitingForNextWave = false;const BASE_NEXT_WAVE_BONUS = 70;
let currentNextWaveBonus = BASE_NEXT_WAVE_BONUS; 
let bossMessage = "";
let showBossMessage = false;
let bossMessageTimer = 0;
const bossMessageDuration = 200;
let prevPlayerStats = { life: -1, gold: -1 };
let lifePulse = 0;
let goldPulse = 0;
let playButton = {
  x: 0,
  y: 0,
  w: 200,
  h: 60,
  hover: false
};
let nextButton = {
  x: 0,
  y: 0,
  w: 160,
  h: 40,
  hover: false
};
let particles = [];
const PARTICLE_COUNT = 80; 
let gameState = 'clickToStart';
let musicVolume = 0.3;
let sfxVolume = 0.6; 
let clouds = [];
let spawnQueue = [];
let spawnTimer = 0;
let autoStartWaves = false; 
const SPAWN_INTERVAL_FRAMES = 12;
let helpScreenVisible = false; 
let sidebarVisible = true; 
let sidebarWidth = 120;
let sidebarX = 0;
let towerButtonSize = 70;
let towerButtonSpacing = 15;
let startButton;
let gameStarted = false;
let infinity = 9999999999999999999999999999999999999999
let groundTextures = []; 
let draggingTowerType = null;
let draggingFromSidebar = false;
let tooltipAlpha = 0;
let lastHoveredTower = null;
let pedrasData = [];
let arvoresData = [];
let waveActive = false;
let cutsceneData = [];
let activeCutscene = null;
let dialogueIndex = 0;
let textToDisplay = "";
let characterIndex = 0;
let typingSpeed = 1; 
let allowedTowers = []; 
let mapas = [];
let faseAtual = 0;
let onda = 1;
let maxOndasPorFase = 20;
let estadoJogo = "telaInicial"; 
let cutsceneCharIndex = 0;      
let cutsceneLineIndex = 0;      
let cutsceneTypingSpeed = 0.3;    
let groundEffects = []; 
let showUpgradeUI = false;
let currentWave = 0;
let waveInProgress = false;
let towers = [];
let enemies = [];
let bullets = [];
let floatingTexts = [];
let selectedTower = null;
let gameMode = 'classic'; 
let preparingWave = false;
let prepareTimer = 180; 
let airdropManager = {
    isActive: false,       
    pos: null,             
    vel: null,             
    size: { w: 80, h: 80 }, 
    timer: 0,              
    spawnInterval: 1200,   
    chance: 0.6            
};
let selectedTowerIndex = 0;
let gridSize = 20;
let wave = 1;
let path = [];
let paused = false;
let timeMultiplier = 1;
let gameOverTextSize = 32;
let growing = true;
let speedButton;
let storyMode = true;
let currentChapter = 0;
let inCutscene = true;  
let currentCutsceneLine = 0;
//o setup 
function setup() {
    createCanvas(1005 + sidebarWidth, 700); 
    frameRate(60);
    textAlign(CENTER, CENTER);
    textFont('Verdana');
    CONFIG.tower.types.forEach(tower => { tower.img = towerImages[tower.name]; });
    currentMapData = MAPAS.parqueEvolutivo;
    path = currentMapData.paths[0].map(p => createVector(p.x + sidebarWidth, p.y));
    currentMapData.decorations.forEach(d => {
        if (d.type === 'arvore') d.img = arvore;
        if (d.type === 'predio') d.img = predioimg;
    });
    sidebarTexture = createGraphics(sidebarWidth, height);
    sidebarTexture.noStroke();
    for (let i = 0; i < sidebarWidth; i += 4) {
        sidebarTexture.fill(87 + random(-10, 10), 58 + random(-10, 10), 36 + random(-10, 10));
        sidebarTexture.rect(i, 0, 4, height);
    }
    let grassTexture = createGraphics(width, height);
    grassTexture.background(90, 160, 50);
    grassTexture.noStroke();
    for (let i = 0; i < 500; i++) {
        grassTexture.fill(100 + random(-10, 10), 170 + random(-10, 10), 60 + random(-10, 10), 80);
        grassTexture.circle(random(width), random(height), random(20, 80));
    }
    groundTextures.push(grassTexture);
    let dirtTexture = createGraphics(width, height);
    dirtTexture.background(110, 98, 80);
    dirtTexture.noStroke();
    for (let i = 0; i < 500; i++) {
        dirtTexture.fill(139, 69, 19, random(20, 50));
        dirtTexture.circle(random(width), random(height), random(30, 100));
    }
    groundTextures.push(dirtTexture);
    let cityTexture = createGraphics(width, height);
    cityTexture.background(125);
    cityTexture.noStroke();
    for (let i = 0; i < 50; i++) {
        cityTexture.fill(140, 140, 140, random(100, 150));
        cityTexture.rect(random(width), random(height), random(50, 200), random(50, 100));
    }
    groundTextures.push(cityTexture);
  setupStartScreen();
     setupCutscenes()
    setupSpeedButton();
    airdropManager.timer = airdropManager.spawnInterval; 

}
//as configurações do airdrop
function updateAirdrop() {
    if (paused || settingsOpen) return; 

    
    if (airdropManager.isActive) {
        
        airdropManager.pos.add(airdropManager.vel);

        
        if (airdropManager.pos.x > width + airdropManager.size.w || 
            airdropManager.pos.y > height + airdropManager.size.h ||
            airdropManager.pos.x < -airdropManager.size.w) {
            airdropManager.isActive = false; 
        }
    } 
    
    else {
        airdropManager.timer--;
        if (airdropManager.timer <= 0) {
            
            airdropManager.timer = airdropManager.spawnInterval;
            if (random() < airdropManager.chance) {
                
                airdropManager.isActive = true;
                
                
                const startX = random(sidebarWidth, width);
                const startY = -airdropManager.size.h;
                airdropManager.pos = createVector(startX, startY);
                
                
                const velX = random(-1, 1);
                const velY = random(1.5, 2.5);
                airdropManager.vel = createVector(velX, velY);
            }
        }
    }
}
//configurações do som do click
function playClickSound() {
    
    if (sfx.ui_click && sfx.ui_click.isLoaded()) { 
        sfx.ui_click.setVolume(0.6);
        sfx.ui_click.rate(random(0.95, 1.05)); 
        sfx.ui_click.play();
    }
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
//desenha o airdrop
function drawAirdrop() {
    if (airdropManager.isActive) {
        push();
        
        fill(0, 0, 0, 40);
        noStroke();
        ellipse(airdropManager.pos.x, airdropManager.pos.y + 10, airdropManager.size.w, 20);

        
        image(
            airdropImg,
            airdropManager.pos.x - airdropManager.size.w / 2,
            airdropManager.pos.y - airdropManager.size.h / 2,
            airdropManager.size.w,
            airdropManager.size.h
        );
        pop();
    }
}
function drawGroundTexture() {
    image(groundTexture, 0, 0);
}
function drawDashedLine(x1, y1, x2, y2, dashLen, gapLen) {
    let d = dist(x1, y1, x2, y2);
    let dashCount = floor(d / (dashLen + gapLen));
    let dx = (x2 - x1) / d;
    let dy = (y2 - y1) / d;
    
    for (let i = 0; i < dashCount; i++) {
        let startX = x1 + dx * i * (dashLen + gapLen);
        let startY = y1 + dy * i * (dashLen + gapLen);
        let endX = startX + dx * dashLen;
        let endY = startY + dy * dashLen;
        line(startX, startY, endX, endY);
    }
}
function drawRock(x, y, size) {
    push();
    translate(x, y);
    noStroke();

    fill(0, 0, 0, 50);
    ellipse(0, size * 0.45, size, size * 0.4);

    fill(140, 142, 145); 
    beginShape();
    vertex(0, -size * 0.5);
    vertex(size * 0.5, -size * 0.2);
    vertex(size * 0.3, size * 0.4);
    vertex(-size * 0.4, size * 0.5);
    vertex(-size * 0.5, 0);
    endShape(CLOSE);

    fill(165, 168, 171);
    beginShape();
    vertex(0, -size * 0.5);
    vertex(-size * 0.5, 0);
    vertex(-size * 0.2, -size * 0.4);
    endShape(CLOSE);

    pop();
}
function drawBush(x, y, size) {
    push();
    translate(x, y);
    noStroke();

    fill(0, 0, 0, 30);
    ellipse(0, size * 0.3, size * 1.2, size * 0.4);

    fill(40, 110, 40); 
    ellipse(0, 0, size, size * 0.8);
    ellipse(size * 0.3, 0, size * 0.7, size * 0.6);
    ellipse(-size * 0.2, size * 0.1, size * 0.8, size * 0.7);

    fill(60, 150, 60);
    ellipse(0, -size * 0.1, size * 0.8, size * 0.6);
    pop();
}
function drawFence(x, y, length, orientation) {
    push();
    translate(x, y);
    stroke(101, 67, 33); 
    strokeWeight(6);
    strokeCap(ROUND);

    if (orientation === 'horizontal') {
        line(-length / 2, 0, length / 2, 0); 

        for (let i = -length / 2; i <= length / 2; i += length / 4) {
            line(i, -10, i, 10);
        }
    } else { 
        line(0, -length / 2, 0, length / 2); 
        for (let i = -length / 2; i <= length / 2; i += length / 4) {
            line(-10, i, 10, i);
        }
    }
    pop();
}
function drawSpecialPlacementSpot(x, y, type) {
    push();
    let baseColor, glowColor;

    if (type === 'range_boost') {
        baseColor = color(0, 150, 255, 50);
        glowColor = color(173, 216, 230, 100 + sin(frameCount * 0.05) * 50);
    } else { 
        baseColor = color(255, 100, 0, 50);
        glowColor = color(255, 165, 0, 100 + sin(frameCount * 0.05) * 50);
    }

    noStroke();
    fill(baseColor);
    ellipse(x, y, 50, 50);

    noFill();
    stroke(glowColor);
    strokeWeight(3);
    ellipse(x, y, 50, 50);

    pop();
}
function drawStyledTree(x, y, size) {
    push();

    noStroke();
    fill(0, 0, 0, 40); 
    ellipse(x, y + size * 0.4, size * 0.9, size * 0.3); 

    fill(101, 67, 33); 
    rectMode(CENTER);
    rect(x, y + size * 0.1, size * 0.15, size * 0.4);

    fill(34, 139, 34); 

    ellipse(x, y - size * 0.2, size, size * 0.8);
    ellipse(x - size * 0.2, y - size * 0.1, size * 0.7, size * 0.6);
    ellipse(x + size * 0.2, y - size * 0.1, size * 0.7, size * 0.6);

    fill(60, 179, 113); 
    ellipse(x, y - size * 0.3, size * 0.8, size * 0.6);
    ellipse(x - size * 0.15, y - size * 0.25, size * 0.6, size * 0.5);
    
    pop();
    rectMode(CORNER); 
}
function drawDecorations() {
 if (!currentMapData) return;

 const decorationsForPhase = currentMapData.decorations.filter(d => d.showInPhase.includes(currentPhaseIndex));

 decorationsForPhase.forEach(d => {
  let xPos = d.x + sidebarWidth;
  let yPos = d.y;

  switch (d.type) {
   case 'arvore':
    drawStyledTree(xPos, yPos, d.size);
    break;
   case 'predio':
    fill(0, 0, 0, 40);
    noStroke();
    ellipse(xPos + 5, yPos + 5, d.size, d.size * 0.4);
    imageMode(CENTER);
    image(predioimg, xPos, yPos, d.size, d.size);
    break;
     case 'predio_construcao':
    fill(0, 0, 0, 40);
    noStroke();
    ellipse(xPos + 5, yPos + 5, d.size, d.size * 0.4);
    imageMode(CENTER);
    image(predio_construcao, xPos, yPos, d.size, d.size);
    break;
   case 'stump':
    drawTreeStump(xPos, yPos, d.size);
    break;
   case 'cone':
    drawConstructionCone(xPos, yPos, d.size);
    break;
   case 'streetlight':
    drawStreetlight(xPos, yPos, d.size);
    break;
   case 'rocha':
    push();
    translate(xPos, yPos);
    noStroke();
    fill(120, 120, 120);
    ellipse(0, d.size * 0.1, d.size * 0.8, d.size * 0.6); 
    fill(80, 80, 80, 50); 
    ellipse(5, d.size * 0.3, d.size * 0.7, d.size * 0.5);
    pop();
    break;
   case 'arbusto':
    push();
    translate(xPos, yPos);
    noStroke();
    fill(d.color || [50, 150, 50]);
    ellipse(0, 0, d.size, d.size * 0.7);
    ellipse(d.size * 0.2, -d.size * 0.2, d.size * 0.6, d.size * 0.5);
    ellipse(-d.size * 0.2, -d.size * 0.1, d.size * 0.5, d.size * 0.6);
    pop();
    break;
   case 'cerca':
    push();
    stroke(139, 69, 19);
    strokeWeight(5);
    if (d.orientation === 'horizontal') {
     line(xPos - d.length / 2, yPos, xPos + d.length / 2, yPos);
     line(xPos - d.length / 2 + 10, yPos - 15, xPos + d.length / 2 - 10, yPos - 15);
     line(xPos - d.length / 2 + 5, yPos + 15, xPos + d.length / 2 - 5, yPos + 15);
    } else { 
     line(xPos, yPos - d.length / 2, xPos, yPos + d.length / 2);
     line(xPos - 15, yPos - d.length / 2 + 10, xPos - 15, yPos + d.length / 2 - 10);
     line(xPos + 15, yPos - d.length / 2 + 5, xPos + 15, yPos + d.length / 2 - 5);
    }
    pop();
    break;
   case 'lago':
    push();
    translate(xPos, yPos);
    noStroke();
    fill(0, 100, 200, 150); 
    ellipse(0, 0, d.radiusX * 2, d.radiusY * 2);
    fill(0, 100, 200, 100); 
    ellipse(-d.radiusX * 0.3, -d.radiusY * 0.3, d.radiusX * 1.5, d.radiusY * 1.5);
    pop();
    break;

  }
 });
 imageMode(CORNER);
}
function isOverlappingDecoration(x, y) {
    if (!currentMapData) return false;
    
    const decorationsForPhase = currentMapData.decorations.filter(d => d.showInPhase.includes(currentPhaseIndex));

    for (const d of decorationsForPhase) {
        if (dist(x, y, d.x + sidebarWidth, d.y) < d.size / 2.5) {
            return true;
        }
    }
    return false;
}
function setupSpeedButton() {
  speedButton = createButton('Velocidade x1');
  speedButton.position(-130 + sidebarWidth, 11);

  speedButton.style('font-family', 'Arial, sans-serif');
  speedButton.style('font-weight', 'bold');
  speedButton.style('font-size', '14px');
  speedButton.style('padding', '8px 16px');
  speedButton.style('border-radius', '8px');
  speedButton.style('border', '2px solid #28a745');
  speedButton.style('background-color', '#218838');
  speedButton.style('color', 'white');
  speedButton.style('box-shadow', '0 4px 6px rgba(0, 0, 0, 0.2)');
  speedButton.style('cursor', 'pointer');
  speedButton.style('user-select', 'none');

  const speedLevels = [
    { multiplier: 1, label: 'Velocidade x1' },
    { multiplier: 2, label: 'Velocidade x2' },
    { multiplier: 4, label: 'Velocidade x4' },
    { multiplier: 8, label: 'Velocidade x8' },
    { multiplier: 16, label: 'Velocidade x16' },
    { multiplier: 32, label: 'Velocidade x32' }
    
    
  ];

  let speedIndex = 0;

  speedButton.mousePressed(() => {
    speedIndex = (speedIndex + 1) % speedLevels.length;
    timeMultiplier = speedLevels[speedIndex].multiplier;
    speedButton.html(speedLevels[speedIndex].label);
  });
}
function iniciarTransicao(proximo) {
  transicao.ativo = true;
  transicao.opacidade = 0;
  transicao.direcao = 1;
  transicao.proximoEstado = proximo;
}
//o draw, onde carrega muito das minhas imagens
function draw() {
    
    
    const gameplayStates = ['story', 'sandbox', 'infinite', 'tutorial'];
    
    
    if (!gameplayStates.includes(gameState)) {
        showUpgradeUI = false;
        selectedTower = null;
    }
    

    
    switch (gameState) {
        case 'clickToStart':
            background(10, 10, 10);
            fill(200);
            textAlign(CENTER, CENTER);
            textSize(24);
            let pulse = sin(frameCount * 0.05) * 10;
            fill(240 + pulse, 240 + pulse, 255 + pulse);
            text("CLIQUE PARA INICIAR", width / 2, height / 2);
            break;
            
        case 'startScreen':
            drawStartScreen();
            break;

        case 'phases':
            drawPhasesScreen();
            break;

        case 'cutscene':
            drawCutscene();
            break;
            
        case 'tutorial':
        case 'story':
        case 'sandbox':
        case 'infinite':
            runGame();
            break;
            
        case 'phaseComplete':
            drawPhaseCompleteScreen();
            break;

        case 'gameOver':
            drawGameOver();
            break;
    }

    
    if (showUpgradeUI && selectedTower) {
        drawUpgradeUI(selectedTower);
    }
    
    
    manageMusic();
    
    drawSettingsScreen();
    drawHelpScreen();
    drawTutorialOverlay();
}
//uma configuração para o som não buga
function playSound(sound, allowOverlap = false) {
    
    if (sound && sound.isLoaded()) {
        
        if (!allowOverlap && sound.isPlaying()) {
            return; 
        }
        
        
        sound.setVolume(sfxVolume);
        sound.play();
    }
}
//para a musica
function manageMusic() {
    if (!musicStarted) return; 

    
    const isMenuState = ['startScreen', 'phases', 'cutscene'].includes(gameState);
    const isGameState = ['story', 'infinite', 'sandbox'].includes(gameState);

    
    if (isMenuState) {
        
        if (music.menu && music.menu.isLoaded() && !music.menu.isPlaying()) {
            music.menu.loop();
        }
        
        if (music.menu && music.menu.isLoaded()) {
             music.menu.setVolume(musicVolume);
        }
    } else {
        
        if (music.menu && music.menu.isLoaded() && music.menu.isPlaying()) {
            music.menu.stop();
        }
    }

    
    if (isGameState) {
        
        if (music.gameplay && music.gameplay.isLoaded() && !music.gameplay.isPlaying()) {
            music.gameplay.loop();
        }
        
        if (music.gameplay && music.gameplay.isLoaded()) {
            music.gameplay.setVolume(musicVolume);
        }
    } else {
        
        if (music.gameplay && music.gameplay.isLoaded() && music.gameplay.isPlaying()) {
            music.gameplay.stop();
        }
    }
}
//textura do mapa atras
function drawGroundTexture() {
    noStroke();
    background(101, 158, 65);
    for(let i=0; i<100; i++){
        fill(90 + random(-10, 10), 140 + random(-10, 10), 55 + random(-10, 10), 80);
        ellipse(random(width), random(height), random(50,150), random(30,80));
    }
}
//criar a arvore
function drawTreeStump(x, y, size) {
    fill(139, 69, 19);
    stroke(87, 51, 23);
    strokeWeight(2);
    ellipse(x, y, size, size * 0.8);
    fill(210, 180, 140);
    noStroke();
    ellipse(x, y, size * 0.8, size * 0.6);
}
//conscruir o cone do mapa
function drawConstructionCone(x, y, size) {
    noStroke();
    fill(40);
    rect(x - size/2, y, size, size/4);
    fill(255, 100, 0);
    triangle(x, y-size, x-size/3, y, x+size/3, y);
    fill(255);
    rect(x-size/4, y-size/2, size/2, size/5);
}
//construir o poste de luz
function drawStreetlight(x, y, size) {
    stroke(80);
    strokeWeight(size / 8);
    line(x, y, x, y - size);
    noFill();
    arc(x, y - size, size/2, size/2, PI, TWO_PI);
    fill(255, 255, 0, 150);
    noStroke();
    ellipse(x + size/4, y - size - 2, size/5);
    fill(255, 255, 0, 30);
    ellipse(x + size/4, y + 5, size*1.5, size*0.8);
}
//aqui o mais importante... roda todo o jogo
function runGame() {
    if (!paused) {
        pulseAnimation = sin(frameCount * 0.05) * 5;
        scanlineY = (scanlineY + 0.5) % height;
        for (let i = 0; i < timeMultiplier; i++) updateGame();
    }
    image(groundTextures[currentPhaseIndex], 0, 0);
    drawPath();
    
    
  towers.filter(t => !t.isFlying).forEach(t => t.show());
  
    enemies.forEach(e => e.show());
    drawDecorations();
    towers.forEach(t => t.show());
    bullets.forEach(b => b.show());

   towers.filter(t => t.isFlying).forEach(t => t.show());
    if (draggingTowerType) {
        drawDraggingFeedback();
    }
        updateAirdrop();
    drawAirdrop();
    drawSidebar();
    drawStatsPanel();
  drawNextWavePanel();
  drawSettingsButton()
   drawNextWaveButton();
    floatingTexts.forEach((ft, i) => {
        ft.update();
        if (ft.life <= 0) floatingTexts.splice(i, 1);
    });
    
    if (showUpgradeUI && selectedTower) {
        drawUpgradeUI();
    }
    if (paused) {
        fill(0, 0, 0, 150);
        rect(0, 0, width, height);
        fill(255);
        textSize(32);
        textAlign(CENTER, CENTER);
        text("PAUSADO... clique P ", width / 2, height / 2);
    }
}
//desenhar o botao de configuração
function drawSettingsButton() {
    const btnSize = 65;
    const btnX = width - btnSize - 1;
    const btnY = 1;

    push();
    imageMode(CORNER);
    tint(220, 220, 255); 
    image(configIcon, btnX, btnY, btnSize, btnSize);
    noTint();
    pop();
}
//define onde pode e nao por personagem
function drawTowerPlacementArea() {
        noFill();
        stroke(0, 255, 0);
        strokeWeight(2);
        rect(towerPlacementArea.x, towerPlacementArea.y, towerPlacementArea.w, towerPlacementArea.h);
    }

//**inutil**
function drawBossMessage() {
  const imgWidth = 150;
  const imgHeight = 150;
  const x = width / 2 - imgWidth / 2;
  const y = 50;

  
  fill(0, 0, 0, 200);
  rect(x - 20, y + imgHeight + 10, imgWidth + 40, 60, 10);

  
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(bossMessage, x + imgWidth / 2, y + imgHeight + 40);

  

  
  bossMessageTimer--;
  if (bossMessageTimer <= 0) {
    showBossMessage = false;
  }
}

//onde fala que pode ou nao por a torre... mas esse é o que mostra na tela / o visual
function drawGridFeedback() {
  noFill();
  stroke(100, 100, 100, 50);
  strokeWeight(1);
let startX = max(sidebarWidth + 10, 0);   
let startY = max(40, 0);                  
let endX = min(width - 10, width);        
let endY = min(height - 10, height);      

  let cols = floor((endX - startX) / gridSize);
  let rows = floor((endY - startY) / gridSize);

  
  for (let i = 0; i <= cols; i++) {
    let x = startX + i * gridSize;
    line(x, startY, x, endY);
  }
  for (let j = 0; j <= rows; j++) {
    let y = startY + j * gridSize;
    line(startX, y, endX, y);
  }

  
  noStroke();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = startX + i * gridSize;
      let y = startY + j * gridSize;
      let cx = x + gridSize / 2;
      let cy = y + gridSize / 2;

      let invalid = isOnPath(cx, cy) || isPositionOccupied(cx, cy);
      fill(invalid ? color(255, 0, 0, 40) : color(0, 255, 0, 40));
      rect(x, y, gridSize, gridSize);
    }
  }
}
//as cutscenes
function setupCutscenes() {
    cutsceneData = [

        {
            phase: 0,
            speaker: "Fazendeiro Zé",
            portrait: fazendeiroImg, 
            dialogues: [
                "O tempo anda maluco... Cada ano que passa, as pragas vêm mais fortes, mais resistentes. Dizem que é a fumaça da cidade que envenena a terra.",
                "Nós que botamos a comida na mesa deles, mas eles esquecem que a natureza cobra seu preço. Defenda a lavoura, ou ninguém na cidade terá o que comer"
            ]
        },

        {
            phase: 1,
            speaker: "Engenheiro Silva",
            portrait: silvaimg, 
            dialogues: [
                "Esta área de expansão é vital! Mas os bichos da antiga fazenda estão atrapalhando as obras.",
                "Precisamos de defesas mais robustas. Não deixe que eles parem nosso progresso!"
            ]
        },

        {
            phase: 2,
            speaker: "Prefeita Ana",
            portrait: prefeitaimg, 
            dialogues: [
                "A AgroCorp não gostou da nossa resistência. Eles enviaram Drones Espiões e pragas mais perigosas.",
                "Use nossa tecnologia de ponta para uma solução final e discreta. Nossos cidadãos de bem não podem ter seu conforto ameaçado por... consequências imprevistas."
            ]
        }
    ];
}
function drawDraggingFeedback() {
    if (!draggingTowerType) return;

    const mouseXsmooth = mouseX;
    const mouseYsmooth = mouseY;

    const snappedX = floor((mouseX - sidebarWidth) / gridSize) * gridSize + gridSize / 2 + sidebarWidth;
    const snappedY = floor(mouseY / gridSize) * gridSize + gridSize / 2;

    let isValid;

    isValid = !isOnPath(snappedX, snappedY) &&
        !isPositionOccupied(snappedX, snappedY) &&
        !isOverlappingDecoration(snappedX, snappedY);


    const feedbackColor = isValid ? color(255, 255, 255, 150) : color(255, 50, 50, 150);
    const rangeColor = isValid ? color(100, 150, 255, 100) : color(255, 50, 50, 100);

    noFill();
    stroke(rangeColor);
    strokeWeight(3);

    ellipse(mouseXsmooth, mouseYsmooth, draggingTowerType.range * 2);

    fill(feedbackColor);
    noStroke();

    const towerFootprint = 40;
    ellipse(mouseXsmooth, mouseYsmooth, towerFootprint); 

    push();
    tint(255, 220);
    imageMode(CENTER);
    image(draggingTowerType.img, mouseXsmooth, mouseYsmooth, 70, 70); 
    noTint();
    pop();
}
//tentei fazer para dar para celular também... nao consegui
function isMouseOverCell(cx, cy) {
    const cellX = cx - gridSize / 2;
    const cellY = cy - gridSize / 2;
    return mouseX >= cellX && mouseX < cellX + gridSize &&
           mouseY >= cellY && mouseY < cellY + gridSize;
}
function drawMap() {
  
  pedrasData.forEach(p => {
    image(pedra, p.x, p.y, p.w, p.h);
  });

  
  const terras = [
    { x: 400, y: 400 },
    { x: 200, y: 440 },
    { x: 600, y: 200 },
    { x: 370, y: 200 }
  ];
  terras.forEach(t => image(terraimg, t.x, t.y, 50, 30));

  
  arvoresData.forEach(a => {
    image(arvore, a.x, a.y, a.w, a.h);
  });

  
  image(predioimg, 750, 150, 100, 100);
}
function updateAndDrawGroundEffects() {
    for (let i = groundEffects.length - 1; i >= 0; i--) {
        let effect = groundEffects[i];
        effect.duration--;
        enemies.forEach(enemy => {
            if (dist(effect.pos.x, effect.pos.y, enemy.pos.x, enemy.pos.y) < effect.radius) {
                enemy.takeDamage(effect.dps / frameRate(), null, true);
            }
        });
        let lifePercent = effect.duration / effect.maxDuration;
        let currentAlpha = 100 * lifePercent;
        fill(255, 100, 0, currentAlpha);
        noStroke();
        ellipse(effect.pos.x, effect.pos.y, effect.radius * 2);

        if (effect.duration <= 0) {
            groundEffects.splice(i, 1);
        }
    }
}
function drawInvalidAreas() {
    noStroke();
    fill(255, 0, 0, 80); 

    
    for (let i = 0; i < path.length - 1; i++) {
        const start = path[i];
        const end = path[i + 1];

        const dx = end.x - start.x;
        const dy = end.y - start.y;

        if (abs(dx) > 0) {
            
            rect(
                min(start.x, end.x) - gridSize * 0.6,
                start.y - gridSize * 0.6,
                abs(dx) + gridSize * 1.2,
                gridSize * 1.2
            );
        } else {
            
            rect(
                start.x - gridSize * 0.6,
                min(start.y, end.y) - gridSize * 0.6,
                gridSize * 1.2,
                abs(dy) + gridSize * 1.2
            );
        }
    }

    
    fill(0, 0, 0, 120); 
    rect(sidebarWidth, 0, width - sidebarWidth, 80);                 
    rect(sidebarWidth, height - 40, width - sidebarWidth, 40);       
    rect(sidebarWidth, 0, 40, height);                               
    rect(width - 40, 0, 40, height);                                 
}
function drawSidebar() {
    image(sidebarTexture, 0, 0);
    noStroke();
    let vignette = drawingContext.createLinearGradient(0, 0, sidebarWidth, 0);
    vignette.addColorStop(0, 'rgba(213,20,20,0.5)');
    vignette.addColorStop(0.3, 'rgba(0,0,0,0)');
    vignette.addColorStop(0.7, 'rgba(0,0,0,0)');
    vignette.addColorStop(1, 'rgba(0,0,0,0.5)');
    drawingContext.fillStyle = vignette;
    rect(0, 0, sidebarWidth, height);
    const totalContentHeight = 90 + CONFIG.tower.types.length * (towerButtonSize + towerButtonSpacing * 2);
    const maxScroll = totalContentHeight - height;

    let anyHovering = false;
    for (let i = 0; i < CONFIG.tower.types.length; i++) {
        let tower = CONFIG.tower.types[i];
        let buttonY = 90 + i * (towerButtonSize + towerButtonSpacing * 2) - sidebarScrollY;
        let buttonX = sidebarWidth / 2;

        let isHovering = mouseX > 10 && mouseX < sidebarWidth - 10 && mouseY > buttonY - 30 && mouseY < buttonY + 30;
        let canAfford = CONFIG.player.gold >= tower.cost;
        const limitData = getTowerLimit(tower.name);
        let isLimited = limitData.placed >= limitData.limit;
        let isDisabled = !canAfford || isLimited;

        if (isHovering) anyHovering = true;

           let scaleFactor = isHovering && !isDisabled ? 1.1 : 1.0;
        let glowAlpha = isHovering && !isDisabled ? 100 : 0;

        push();
        translate(buttonX, buttonY);
        scale(scaleFactor);
        noStroke();
        fill(COLORS.buttonHover[0], COLORS.buttonHover[1], COLORS.buttonHover[2], glowAlpha);
        rectMode(CENTER);
        rect(0, 0, towerButtonSize + 25, towerButtonSize + 25, 15);
        let grad = drawingContext.createLinearGradient(0, -25, 0, 25);
        grad.addColorStop(0, '#5D6D7E');
        grad.addColorStop(1, '#34495E');
        drawingContext.fillStyle = grad;
        stroke(COLORS.uiBorder);
        strokeWeight(2);
        rect(0, 0, towerButtonSize + 10, towerButtonSize + 10, 8);
        imageMode(CENTER);
        if (isDisabled) tint(120);
        image(tower.img, 0, 0, towerButtonSize, towerButtonSize);
        noTint();
        fill(isDisabled ? '#555' : COLORS.uiTitle);
        noStroke();
        rect(0, 22, 50, 16, 5);
        fill(isDisabled ? '#999' : '#000');
        textSize(10);
        text(`$${tower.cost}`, 0, 22);
        fill('#34495E');
        stroke(COLORS.uiBorder);
        strokeWeight(1);
        rect(0, -26, 40, 14, 4);
        noStroke();
        fill(isLimited ? COLORS.sellText : COLORS.uiText);
        textSize(10);
        let limitText = limitData.limit === Infinity ? '∞' : limitData.limit;
        text(`${limitData.placed}/${limitText}`, 0, -26);

        pop();

        if (isHovering) {
            lastHoveredTower = tower;
            tooltipAlpha = lerp(tooltipAlpha, 255, 0.2);
        }
    }
    if (maxScroll > 0) {
        drawScrollbar(maxScroll);
    }
    if (!anyHovering) {
        tooltipAlpha = lerp(tooltipAlpha, 0, 0.2);
    }

    if (tooltipAlpha > 1 && lastHoveredTower) {
        drawTooltip(lastHoveredTower, tooltipAlpha);
    }
}
function drawScrollbar(maxScroll) {
    const trackX = sidebarWidth - 8;
    const trackY = 10;
    const trackH = height - 20;
    const trackW = 6;
    fill(0, 0, 0, 80);
    rect(trackX, trackY, trackW, trackH, 3);
    const thumbH = max(20, (height / (maxScroll + height)) * trackH);
    const thumbY = map(sidebarScrollY, 0, maxScroll, trackY, trackY + trackH - thumbH);

    fill(COLORS.uiBorder);
    rect(trackX, thumbY, trackW, thumbH, 3);
}
function drawTooltip(tower, alpha) {
    const tooltipW = 240;
    const tooltipH = 140;
    const x = sidebarWidth + 15;
    let y = mouseY - tooltipH / 2;
    y = constrain(y, 10, height - tooltipH - 10);

    push();
    translate(x + tooltipW / 2, y + tooltipH / 2);
    let tooltipScale = map(alpha, 0, 255, 0.95, 1);
    scale(tooltipScale);
    translate(-(x + tooltipW / 2), -(y + tooltipH / 2));
    fill(COLORS.uiBackground[0], COLORS.uiBackground[1], COLORS.uiBackground[2], alpha * 0.95);
    stroke(COLORS.uiBorder[0], COLORS.uiBorder[1], COLORS.uiBorder[2], alpha);
    strokeWeight(2);
    rect(x, y, tooltipW, tooltipH, 10);
    fill(COLORS.uiBackground[0], COLORS.uiBackground[1], COLORS.uiBackground[2], alpha * 0.95);
    let arrowY = constrain(mouseY, y + 10, y + tooltipH - 10);
    triangle(x, arrowY - 10, x, arrowY + 10, x - 10, arrowY);
    noStroke();
    fill(COLORS.uiTitle[0], COLORS.uiTitle[1], COLORS.uiTitle[2], alpha);
    textSize(14);
    textAlign(LEFT, TOP);
    text(tower.name, x + 15, y + 15);
    drawStatWithIcon('💰', `$${tower.cost}`, x + 20, y + 45, alpha);
    let damageText = tower.damage || (tower.damagePerSecond ? `${tower.damagePerSecond}/s` : 'N/A');
    drawStatWithIcon('💥', damageText, x + 95, y + 45, alpha);
    drawStatWithIcon('🎯', tower.range, x + 170, y + 45, alpha);
    textSize(10);
    fill(200, alpha);
    text(tower.description, x + 15, y + 75, tooltipW - 30);
    
    pop();
}
function drawStatWithIcon(icon, value, x, y, alpha) {
    textAlign(LEFT, CENTER);
    textSize(14);
    fill(255, alpha);
    text(icon, x, y);
    textSize(11);
    fill(COLORS.uiText[0], COLORS.uiText[1], COLORS.uiText[2], alpha);
    text(value, x + 20, y);
}
function getTowerLimit(towerName) {
  const placed = towers.filter(t => t.type.name === towerName).length;
  let limit = Infinity; 

  if (gameState === 'sandbox') {
    limit = Infinity;
  }

  else if (gameState === 'story' && CONFIG.towerLimits[currentPhaseIndex]) {

    limit = CONFIG.towerLimits[currentPhaseIndex][towerName] ?? 0;
  }

  return { placed, limit };
}
function setupStartScreen() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
            x: random(width),
            y: random(height),
            size: random(2, 5),
            speedX: random(-0.2, 0.2),
            speedY: random(-0.4, -0.1),
            alpha: random(50, 150),
            color: color(255, 255, 220, 100) 
        });
    }

    clouds = [];
    for (let i = 0; i < 5; i++) {
        clouds.push({
            x: random(width),
            y: random(50, height / 2 - 50),
            size: random(0.8, 1.5),
            speed: random(0.2, 0.5)
        });
    }
}
function drawFooterInfo() {
    const version = "v1.0.0"; 
    const creatorName = "[QueMassa]";
    const currentYear = new Date().getFullYear(); 

    push(); 

    
    textSize(14);
    textFont('Arial');
    noStroke();
    
    
    fill(0, 0, 0, 100);
    textAlign(LEFT, BASELINE);
    text(`Versão ${version}`, 17, height - 18);

    textAlign(RIGHT, BASELINE);
    text(`© ${currentYear} ${creatorName}. Criado com p5.js`, width - 17, height - 18);

    
    fill(255, 255, 255, 200); 
    textAlign(LEFT, BASELINE);
    text(`Versão ${version}`, 15, height - 20);

    textAlign(RIGHT, BASELINE);
    text(`© ${currentYear} ${creatorName}. Criado com p5.js`, width - 15, height - 20);

    pop(); 
}
function drawStartScreen() {
    
    let skyTop = color(60, 110, 180);
    let skyBottom = color(135, 206, 250);
    for (let i = 0; i < height; i++) {
        let inter = map(i, 0, height, 0, 1);
        let c = lerpColor(skyTop, skyBottom, inter);
        stroke(c);
        line(0, i, width, i);
    }
    noStroke();

    
    let sunX = width - 100;
    let sunY = 100;
    for (let i = 20; i > 0; i--) {
        fill(255, 255, 200, 150 / i);
        ellipse(sunX, sunY, i * 20 + sin(frameCount * 0.02) * 10, i * 20 + sin(frameCount * 0.02) * 10);
    }
    clouds.forEach(cloud => {
        drawCloud(cloud.x, cloud.y, cloud.size);
        cloud.x += cloud.speed;
        if (cloud.x > width + 150 * cloud.size) {
            cloud.x = -150 * cloud.size;
        }
    });
    fill(101, 158, 65);
    beginShape();
    vertex(0, height - 120);
    curveVertex(0, height - 120); curveVertex(width / 3, height - 80); curveVertex(width * 2 / 3, height - 140); curveVertex(width, height - 100);
    vertex(width, height); vertex(0, height);
    endShape(CLOSE);
    fill(81, 138, 45);
    beginShape();
    vertex(0, height - 80);
    curveVertex(0, height - 80); curveVertex(width / 4, height - 60); curveVertex(width * 3 / 4, height - 90); curveVertex(width, height - 70);
    vertex(width, height); vertex(0, height);
    endShape(CLOSE);
    
    
    particles.forEach(p => {
        fill(p.color);
        noStroke();
        ellipse(p.x, p.y, p.size);
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x > width || p.x < 0) p.speedX *= -1;
        if (p.y < 0) p.y = height;
    });

    let logoScale = 1.0 + sin(frameCount * 0.04) * 0.03;
    push();
    translate(width / 2, height / 2 - 220);
    scale(logoScale);
    drawingContext.shadowOffsetX = 8;
    drawingContext.shadowOffsetY = 15;
    drawingContext.shadowBlur = 25;
    drawingContext.shadowColor = 'rgba(0,0,0,0.4)';
    if (solodefense) {
        imageMode(CENTER);
        image(solodefense, 0, 0, 300, 300);
    }
    drawingContext.shadowColor = 'transparent';
    pop();

    
    const btnW = 320;
    const btnH = 55;
    const btnGap = 20;
    const totalButtons = 5;
    const totalHeight = (totalButtons * btnH) + ((totalButtons - 1) * btnGap);
    let startY = (height / 2 - totalHeight / 2) + 120;

    drawStyledButton("Modo Tutorial",       width / 2, startY + (btnH + btnGap) * 0, btnW, btnH);
    drawStyledButton("Modo História",       width / 2, startY + (btnH + btnGap) * 1, btnW, btnH);
    drawStyledButton("Modo Fases",          width / 2, startY + (btnH + btnGap) * 2, btnW, btnH);
    drawStyledButton("Modo Infinito",       width / 2, startY + (btnH + btnGap) * 3, btnW, btnH);
    drawStyledButton("Livre (Sandbox)",     width / 2, startY + (btnH + btnGap) * 4, btnW, btnH);
    
    
    
    drawFooterInfo();
    
}
function drawStyledButton(txt, x, y, w, h) {
    let hover = mouseX > x - w / 2 && mouseX < x + w / 2 && mouseY > y - h / 2 && mouseY < y + h / 2;
    
    push();
    translate(x, y);
    if (hover) {
        scale(1.05); 
    }
    
    
    drawingContext.shadowColor = 'rgba(0,0,0,0.3)';
    drawingContext.shadowBlur = 10;
    drawingContext.shadowOffsetY = 5;

    
    const baseColor = color(139, 69, 19);  
    const hoverColor = color(160, 82, 45); 
    fill(hover ? hoverColor : baseColor);
    noStroke();
    rectMode(CENTER);
    rect(0, 0, w, h, 12); 

    
    drawingContext.shadowColor = 'transparent';

    
    fill(255, 235, 200); 
    textSize(22);
    textFont('Verdana'); 
    textAlign(CENTER, CENTER);
    text(txt, 0, 2); 
    
    pop();
}
function drawCloud(x, y, size) {
    fill(255, 255, 255, 200);
    noStroke();
    
    arc(x, y, 60 * size, 60 * size, PI, TWO_PI);
    arc(x + 30 * size, y, 60 * size, 80 * size, PI, TWO_PI);
    arc(x + 70 * size, y, 50 * size, 50 * size, PI, TWO_PI);
    arc(x + 100 * size, y, 40 * size, 40 * size, PI, TWO_PI);
}
function drawButton(txt, x, y, w, h, callback) {
    let hover = mouseX > x - w/2 && mouseX < x + w/2 && mouseY > y - h/2 && mouseY < y + h/2;
    push();
    if(hover) {
      fill(100, 200, 100);
      stroke(255);
    } else {
      fill(50, 150, 50);
      stroke(200);
    }
    strokeWeight(3);
    rectMode(CENTER);
    rect(x, y, w, h, 10);
    noStroke();
    fill(255);
    textSize(16);
    text(txt, x, y + 2);
    pop();
    if (hover && mouseIsPressed) {
        callback();
    }
}
  //inicia a fase
function startPhase(phaseIndex, mapKey = 'parqueEvolutivo') {
    console.log(`Iniciando Fase ${phaseIndex} no mapa ${mapKey}`);

    
    currentPhaseIndex = phaseIndex;
    currentPhaseMapKey = mapKey;
    wave = 0; 
    waveInProgress = false;
    paused = false;
    settingsOpen = false; 
    helpScreenVisible = false; 

    
    towers = [];
    enemies = [];
    bullets = [];
    floatingTexts = [];
    spawnQueue = []; 

    
    const phaseData = FASES_MODO_FASES.find(f => f.mapa === mapKey) || FASES[phaseIndex];
    CONFIG.player.gold = phaseData?.ouroInicial || 1000;
    CONFIG.player.life = 100;

    
    currentMapData = MAPAS[mapKey];
    if (!currentMapData) {
        console.error("Mapa não encontrado:", mapKey);
        return;
    }
    
    allPaths = []; 
    for (let pathKey in currentMapData.paths) {
        let p = currentMapData.paths[pathKey].map(point => createVector(point.x + sidebarWidth, point.y));
        allPaths.push(p);
    }
    path = allPaths[0]; 

    
    activeCutscene = (mapKey === 'parqueEvolutivo') ? cutsceneData.find(c => c.phase === phaseIndex) : null;
    
    if (activeCutscene) {
        
        
        gameState = 'cutscene';
        dialogueIndex = 0;
        characterIndex = 0;
        textToDisplay = "";
    } else {
        
        
        if (phaseIndex === 0 && mapKey === 'parqueEvolutivo') {
             startTutorial();
        } else {
             
             gameState = 'story'; 
        }
    }
    
    
    manageMusic();
}
  //o modo livre
function setupSandbox() {
    currentPhaseMapKey = 'parqueEvolutivo'; 
    currentMapData = MAPAS[currentPhaseMapKey];
    allPaths = [];
    for(let pathKey in currentMapData.paths) {
        allPaths.push(currentMapData.paths[pathKey].map(p => createVector(p.x + sidebarWidth, p.y)));
    }
    path = allPaths[0]; 
    
    wave = 0;
    towers = [];
    enemies = [];
    bullets = [];
    CONFIG.player.gold = Infinity;
    CONFIG.player.life = Infinity;
    gameState = 'sandbox';
    waveInProgress = false;
    currentPhaseIndex = 2; 
}
  //crie a tela do modo fase
function drawPhasesScreen() {
    background(30, 40, 50); 
    textAlign(CENTER, CENTER);
    fill(COLORS.uiTitle);
    textSize(36);
    text("Modo Fases", width / 2, 80);

    const btnW = 350;
    const btnH = 70;
    let startY = 150;

    FASES_MODO_FASES.forEach((fase, index) => {
        let btnX = width / 2 - btnW / 2;
        let btnY = startY + index * (btnH + 20);
        
        let hover = mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH;
        
        push();
        fill(hover ? [60, 80, 100] : [40, 55, 70]);
        stroke(COLORS.uiBorder);
        strokeWeight(2);
        rect(btnX, btnY, btnW, btnH, 8);
        
        fill(COLORS.uiText);
        textSize(22);
        noStroke();
        text(fase.nome, width / 2, btnY + btnH / 2);
        pop();
    });

    drawGameOverButton("Voltar ao Menu", width / 2 - 130, height - 80, 260, 50);
}
function drawPhaseCompleteScreen() {
    let topColor = color(80, 180, 90);
    let bottomColor = color(40, 110, 50);
    for (let i = 0; i < height; i++) {
        let inter = map(i, 0, height, 0, 1);
        let c = lerpColor(topColor, bottomColor, inter);
        stroke(c);
        line(0, i, width, i);
    }
    noStroke();
    const pulse = sin(frameCount * 0.05) * 5;
    const titleSize = 48 + pulse;
    fill(0, 0, 0, 100);
    textSize(titleSize);
    textAlign(CENTER, CENTER);
    text(`Fase Concluída!`, width / 2 + 4, height / 2 - 80 + 4);
    fill(COLORS.uiTitle);
    text(`Fase Concluída!`, width / 2, height / 2 - 80);
    let btnW = 280;
    let btnH = 60;
    let primaryButtonText = "Próxima Fase";
    if (gameMode === 'story' && currentPhaseIndex >= FASES.length - 1) {
        primaryButtonText = "Finalizar Jogo";
    } else if (gameMode === 'phases') {
        primaryButtonText = "Voltar ao Menu de Fases";
    }
    drawStyledButton(primaryButtonText, width / 2, height / 2 + 40, btnW, btnH);
    drawStyledButton("Menu Principal", width / 2, height / 2 + 110, btnW, btnH, 'gameover');
}
function handlePhaseCompleteClick() {
    let btnW = 280;
    let btnH = 60;
    if (isMouseOverButton(width / 2, height / 2 + 40, btnW, btnH)) {
        if (gameMode === 'story') {
            currentPhaseIndex++;
            if (currentPhaseIndex >= FASES.length) {
                gameState = 'startScreen';
            } else {
                startPhase(currentPhaseIndex, 'parqueEvolutivo'); 
            }
        } else {
            gameState = 'phases';
        }
    }
    if (isMouseOverButton(width / 2, height / 2 + 110, btnW, btnH)) {
        gameState = 'startScreen';
    }
}
  //muito importante, onde atualiza tudo
function updateGame() {
    
    if (paused) return;

    
    
    if (waveInProgress && spawnQueue.length > 0) {
        spawnTimer--; 
        if (spawnTimer <= 0) {
            
            const enemyData = spawnQueue.shift();
            
            enemies.push(new Enemy(enemyData.wave, enemyData.type, enemyData.path));
            
            spawnTimer = SPAWN_INTERVAL_FRAMES;
        }
    }

    
    towers.forEach(tower => {
        if (tower.abilityActiveTimer > 0 && tower.abilityEffect === 'black_hole') {
            const damagePerFrame = (tower.maxHealth * 0.05) / frameRate();
            enemies.forEach(enemy => {
                enemy.takeDamage(damagePerFrame, tower, true);
            });
        }
    });

    
    
    for (let i = enemies.length - 1; i >= 0; i--) {
        enemies[i].update(); 

        
        if (enemies[i].finished) {
            
            if (gameState === 'story' || gameState === 'infinite' || gameState === 'tutorial') {
                CONFIG.player.life -= 3; 
            }
            enemies.splice(i, 1); 
        }
        
        else if (enemies[i].health <= 0) {
            
            let baseGold = 10;
            let goldMultiplier = 1.3;
            towers.forEach(t => {
                if (t.hasGlobalGoldBuff) {
                    goldMultiplier += 0.25;
                }
            });
            CONFIG.player.gold += Math.round(baseGold * goldMultiplier);
            enemies.splice(i, 1); 
        }
    }

    
    
    towers.forEach(t => t.update());

    
    
    for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].update(); 
        if (bullets[i].toRemove) {
            bullets.splice(i, 1); 
        }
    }

    
    
    if (!waveInProgress && spawnQueue.length === 0 && enemies.length === 0 && !waitingForNextWave) {
        const currentPhase = FASES[currentPhaseIndex];

        
        if (gameState === 'story' && currentPhase && wave >= currentPhase.waveCount) {
            gameState = 'phaseComplete'; 
            return; 
        }

        
        
        currentNextWaveBonus = Math.floor(BASE_NEXT_WAVE_BONUS * Math.pow(1.1, wave));

        
        if (autoStartWaves) {
            wave++; 
            spawnWave(wave); 
        } else {
            
            waitingForNextWave = true;
        }
    }

    
    if (waveInProgress && spawnQueue.length === 0 && enemies.length === 0) {
        waveInProgress = false;
    }

    
    
    if (CONFIG.player.life <= 0 && gameState !== 'sandbox') {
        playSound(sfx.loseLife); 
        gameState = 'gameOver'; 
    }
}
  //botão para proxima wave
function drawNextWaveButton() {
    
    if (!waitingForNextWave || autoStartWaves) {
        return;
    }

    const btnW = 220;
    const btnH = 65;
    const btnX = width - btnW - 20;
    const btnY = height - btnH - 20;

    let hover = mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH;
    
    
    let pulse = sin(frameCount * 0.05) * 2;

    push();

    
    drawingContext.shadowColor = 'rgba(0,0,0,0.4)';
    drawingContext.shadowBlur = 15;
    drawingContext.shadowOffsetY = 5;

    
    let grad = drawingContext.createLinearGradient(btnX, btnY, btnX, btnY + btnH);
    grad.addColorStop(0, '#2ECC71'); 
    grad.addColorStop(1, '#28B463'); 
    drawingContext.fillStyle = grad;
    
    
    rect(btnX - (hover ? 2 : 0) - pulse, btnY - (hover ? 2 : 0) - pulse, btnW + (hover ? 4 : 0) + pulse*2, btnH + (hover ? 4 : 0) + pulse*2, 10);
    
    
    drawingContext.shadowColor = 'transparent';

    
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    
    textFont('Verdana');
    textSize(22);
    text("Próxima Onda", btnX + btnW / 2 + 10, btnY + 24);

    textSize(14);
    fill(255, 255, 100);
text(`Bônus: $${currentNextWaveBonus})`, btnX + btnW / 2, btnY + 48); 

    
    textSize(30);
    fill(255, 255, 255, 150);
    text("»", btnX + 25, btnY + btnH / 2 + 2);

    pop();
}
  //tela de derrota
function drawGameOver() {

    background(30, 0, 0);
    noStroke();
    let grad = drawingContext.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width/1.5);
    grad.addColorStop(0, 'rgba(100, 0, 0, 0)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
    drawingContext.fillStyle = grad;
    rect(0, 0, width, height);

    const titleSize = 52 + sin(frameCount * 0.05) * 4;
    textAlign(CENTER, CENTER);
    textFont('Verdana');
    
    drawingContext.shadowColor = 'black';
    drawingContext.shadowBlur = 15;
    drawingContext.shadowOffsetY = 5;

    fill(200, 40, 40);
    stroke(10);
    strokeWeight(4);
    textSize(titleSize);
    text("A Horta Foi Devastada!", width / 2, height / 2 - 120);

    drawingContext.shadowColor = 'transparent';
    noStroke();

    fill(220);
    textSize(20);
    text(`Você sobreviveu até a onda ${wave}.`, width / 2, height / 2 - 50);

    const btnW = 260;
    const btnH = 60;
    const btnY = height / 2 + 40;
    const btnRetryX = width / 2 - btnW / 2;
    const btnMenuX = width / 2 - btnW / 2; 

    drawGameOverButton("Tentar Novamente", btnRetryX, btnY, btnW, btnH);

    drawGameOverButton("Menu Principal", btnMenuX, btnY + btnH + 20, btnW, btnH);

    fill(150);
    textSize(14);
    text('(Ou pressione "R" para tentar novamente)', width / 2, btnY + btnH * 2 + 50);
}
  //botao na tela de derrota
function drawGameOverButton(txt, x, y, w, h) {
    let hover = mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
    
    push();
    translate(x + w / 2, y + h / 2);
    if (hover) {
        scale(1.05);
    }

    drawingContext.shadowColor = 'black';
    drawingContext.shadowBlur = 10;
    drawingContext.shadowOffsetY = 4;

    if (hover) {
        fill(220, 80, 80);
    } else {
        fill(180, 50, 50);
    }
    noStroke();
    rectMode(CENTER);
    rect(0, 0, w, h, 8);

    drawingContext.shadowColor = 'transparent';

    fill(255);
    textSize(22);
    textAlign(CENTER, CENTER);
    text(txt, 0, 0);
    
    pop();
}
function toggleSpeed() {
    
    timeMultiplier = timeMultiplier === 1 ? 2 : 1;
    
    speedButton.html(`Velocidade x${timeMultiplier}`);
}
function isMouseOverUpgradeButton() {
    let x = width - 220 + 10;
    let y = height - 130 + 110 - 35;
    let w = 200 - 20;
    let h = 30;
    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}
function isMouseOverUpgradePanel() {
    
    if (!selectedTower || !showUpgradeUI) {
        return false;
    }

    
    
    const uiW = 280;
    const x = width - uiW - 10;
    
    
    const padding = 15;
    const titleHeight = 45;
    const sectionSpacing = 15;
    const buttonHeight = 40;
    const buttonSpacing = 5;
    const abilityHeight = selectedTower.canActivateAbility ? (buttonHeight + sectionSpacing) : 0;
    const upgrades = selectedTower.getAvailableUpgrades();
    const upgradesHeight = upgrades.length * (buttonHeight + buttonSpacing);
    const statsBlockHeight = Math.ceil((selectedTower.getUpgradeStatsToShow?.()?.length || 0) / 2) * 15 + sectionSpacing;
    
    const totalContentHeight = titleHeight + statsBlockHeight + abilityHeight + upgradesHeight + 50; 
    const y = height - totalContentHeight - 10;
    
    
    return (mouseX > x && mouseX < x + uiW && mouseY > y && mouseY < y + totalContentHeight);
}
function tryUpgradeSelectedTower() {
    if (!selectedTower) return;
    if (CONFIG.player.gold >= selectedTower.type.upgradeCost) {
        CONFIG.player.gold -= selectedTower.type.upgradeCost;
        selectedTower.upgrade();
    }
}
function setupInfiniteMode() {
  
    wave = 0; 
    currentPhaseMapKey = 'parqueEvolutivo';
    currentMapData = MAPAS[currentPhaseMapKey];

    if (currentMapData && currentMapData.paths && currentMapData.paths[0]) {
        path = currentMapData.paths[0].map(p => createVector(p.x + sidebarWidth, p.y));
    } else {
        console.error("Caminho 0 não encontrado para o mapa parqueEvolutivo no modo infinito.");

        path = [{ x: sidebarWidth + 50, y: 100 }, { x: width - 50, y: 100 }].map(p => createVector(p.x, p.y)); 
    }

    towers = [];
    enemies = [];
    bullets = [];

    CONFIG.player.gold = 1000; 
    CONFIG.player.life = 100; 

    gameState = 'infinite'; 
    waveInProgress = false;
    currentPhaseIndex = 2; 
}
function isMouseOverButton(cx, cy, w, h) {
    return mouseX > cx - w / 2 && mouseX < cx + w / 2 &&
           mouseY > cy - h / 2 && mouseY < cy + h / 2;
}
function isOnPath(x, y) {
    const tolerance = 30; 

    for (let i = 0; i < path.length - 1; i++) {
        const start = path[i];
        const end = path[i + 1];
        const left = min(start.x, end.x) - tolerance;
        const right = max(start.x, end.x) + tolerance;
        const top = min(start.y, end.y) - tolerance;
        const bottom = max(start.y, end.y) + tolerance;

        if (x > left && x < right && y > top && y < bottom) {
             if (distToSegment(x, y, start.x, start.y, end.x, end.y) < tolerance) {
                return true;
             }
        }
    }
    return false;
}
function drawDraggingFeedback() {
    if (!draggingTowerType) return; 
    const mouseXsmooth = mouseX;
    const mouseYsmooth = mouseY;
    const snappedX = floor((mouseX - sidebarWidth) / gridSize) * gridSize + gridSize / 2 + sidebarWidth;
    const snappedY = floor(mouseY / gridSize) * gridSize + gridSize / 2;

    let isValid;
    if (draggingTowerType.special === 'plane') {

        isValid = !isPositionOccupied(snappedX, snappedY);
    } else {

        isValid = !isOnPath(snappedX, snappedY) &&
                  !isPositionOccupied(snappedX, snappedY) &&
                  !isOverlappingDecoration(snappedX, snappedY);
    }

    const feedbackColor = isValid ? color(255, 255, 255, 150) : color(255, 50, 50, 150);
    const rangeColor = isValid ? color(100, 150, 255, 100) : color(255, 50, 50, 100);

    noFill();
    stroke(rangeColor);
    strokeWeight(3);
    ellipse(mouseXsmooth, mouseYsmooth, draggingTowerType.range * 2);

    fill(feedbackColor);
    noStroke();

    const towerFootprint = 40; 
    ellipse(mouseXsmooth, mouseYsmooth, towerFootprint);

    push();

    tint(255, 220); 
    imageMode(CENTER);
    image(draggingTowerType.img, mouseXsmooth, mouseYsmooth, 70, 70);
    noTint();
    pop();
}
function drawCornerBrackets(x, y, size, col, weight) {
    stroke(col);
    strokeWeight(weight);
    const L = size / 4;
    line(x, y, x + L, y);
    line(x, y, x, y + L);
    line(x + size, y, x + size - L, y);
    line(x + size, y, x + size, y + L);
    line(x, y + size, x + L, y + size);
    line(x, y + size, x, y + size - L);
    line(x + size, y + size, x + size - L, y + size);
    line(x + size, y + size, x + size, y + size - L);
}
function distToSegment(px, py, x1, y1, x2, y2) {
  const A = px - x1;
  const B = py - y1;
  const C = x2 - x1;
  const D = y2 - y1;

  const dot = A * C + B * D;
  const len_sq = C * C + D * D;
  let param = -1;
  if (len_sq !== 0) param = dot / len_sq;

  let xx, yy;

  if (param < 0) {
    xx = x1;
    yy = y1;
  } else if (param > 1) {
    xx = x2;
    yy = y2;
  } else {
    xx = x1 + param * C;
    yy = y1 + param * D;
  }

  const dx = px - xx;
  const dy = py - yy;
  return Math.sqrt(dx * dx + dy * dy);
}
  //tentei por para celular, mas não consegui
function touchMoved() {
    
    if (mouseX < sidebarWidth) {
        
        let dy = mouseY - pmouseY;
        
        sidebarScrollY -= dy;

        
        const totalContentHeight = 90 + CONFIG.tower.types.length * (towerButtonSize + towerButtonSpacing * 2);
        const maxScroll = totalContentHeight - height;
        sidebarScrollY = constrain(sidebarScrollY, 0, maxScroll > 0 ? maxScroll : 0);

        return false; 
    }
}
function mouseWheel(event) {
    if (mouseX < sidebarWidth) {
        sidebarScrollY += event.delta;
        const totalContentHeight = 90 + CONFIG.tower.types.length * (towerButtonSize + towerButtonSpacing * 2);
        const maxScroll = totalContentHeight - height;
        sidebarScrollY = constrain(sidebarScrollY, 0, maxScroll > 0 ? maxScroll : 0);
        return false;
    }
}
function drawSettingsScreen() {
    if (!settingsOpen) return;

    
    fill(0, 0, 0, 200);
    rect(0, 0, width, height);

    
    const panelW = width * 0.7;
    const panelH = height * 0.8;
    const panelX = (width - panelW) / 2;
    const panelY = (height - panelH) / 2;

    fill(COLORS.uiBackground);
    stroke(COLORS.uiBorder);
    strokeWeight(3);
    rect(panelX, panelY, panelW, panelH, 12);

    
    fill(COLORS.uiTitle);
    noStroke();
    textAlign(CENTER, TOP);
    textSize(32);
    text("Configurações", panelX + panelW / 2, panelY + 25);

    
    textAlign(LEFT, TOP);
    textSize(18);
    fill(COLORS.uiText);
    
    const sliderW = panelW * 0.6;
    const sliderX = panelX + (panelW - sliderW) / 2;

    
    let musicSliderY = panelY + 100;
    text("Volume da Música", sliderX, musicSliderY - 25);
    fill(40, 50, 60);
    rect(sliderX, musicSliderY, sliderW, 10, 5);
    let musicFillW = map(musicVolume, 0, 1, 0, sliderW);
    fill(COLORS.buttonHover);
    rect(sliderX, musicSliderY, musicFillW, 10, 5);
    let musicPinX = sliderX + musicFillW;
    fill(COLORS.uiText);
    ellipse(musicPinX, musicSliderY + 5, 20, 20);

    
    let sfxSliderY = panelY + 200;
    text("Volume dos Efeitos", sliderX, sfxSliderY - 25);
    fill(40, 50, 60);
    rect(sliderX, sfxSliderY, sliderW, 10, 5);
    let sfxFillW = map(sfxVolume, 0, 1, 0, sliderW);
    fill(COLORS.buttonHover);
    rect(sliderX, sfxSliderY, sfxFillW, 10, 5);
    let sfxPinX = sliderX + sfxFillW;
    fill(COLORS.uiText);
    ellipse(sfxPinX, sfxSliderY + 5, 20, 20);

    
    let checkboxY = panelY + 300;
    let checkboxX = sliderX;
    let checkboxSize = 24;

    
    let hoveringOnCheckbox = mouseX > checkboxX && mouseX < checkboxX + checkboxSize &&
                             mouseY > checkboxY && mouseY < checkboxY + checkboxSize;
    

    
    stroke(COLORS.uiText);
    strokeWeight(2);
    
    fill(hoveringOnCheckbox ? COLORS.buttonHover : COLORS.uiBackground);
    rect(checkboxX, checkboxY, checkboxSize, checkboxSize, 4);

    
    if (autoStartWaves) {
        noStroke();
        fill(COLORS.healthBarFg);
        textSize(checkboxSize);
        textAlign(CENTER, CENTER);
        text('✔', checkboxX + checkboxSize / 2, checkboxY + checkboxSize / 2 + 2);
    }

    
    noStroke();
    fill(COLORS.uiText);
    textSize(18);
    textAlign(LEFT, CENTER);
    text("Iniciar Ondas Automaticamente", checkboxX + checkboxSize * 2, checkboxY + checkboxSize / 2);
    
    
    const btnW = 180;
    const btnH = 50;
    const btnY = panelY + panelH - btnH - 30;
    const centerX = panelX + panelW / 2;
    
    drawStyledButton("Como Jogar", centerX - (btnW + 15), btnY, btnW, btnH);
    drawStyledButton("Sair para o Menu", centerX, btnY, btnW, btnH, 'gameover');
    drawStyledButton("Continuar Jogo", centerX + (btnW + 15), btnY, btnW, btnH);
}
function drawHelpScreen() {
    if (!helpScreenVisible) return;

    
    fill(0, 0, 0, 220);
    rect(0, 0, width, height);

    
    const panelW = width * 0.8;
    const panelH = height * 0.85;
    const panelX = (width - panelW) / 2;
    const panelY = (height - panelH) / 2;
    fill(COLORS.uiBackground);
    stroke(COLORS.uiBorder);
    strokeWeight(3);
    rect(panelX, panelY, panelW, panelH, 12);

    
    fill(COLORS.uiTitle);
    noStroke();
    textAlign(CENTER, TOP);
    textSize(32);
    text("Como Jogar", panelX + panelW / 2, panelY + 25);

    
    fill(COLORS.uiText);
    textAlign(LEFT, TOP);
    textSize(16);
    let helpText = `
    Bem-vindo ao Campo de Batalha Orgânico!

    Objetivo:
    Impeça que as pragas cheguem ao final da trilha. Cada praga que escapa reduz sua vida. Se sua vida chegar a zero, o jogo acaba!

    Como Jogar:
    1.  Ganhe Ouro: Você ganha ouro derrotando pragas e usando torres especiais como a 'Feira Orgânica'.
    
    2.  Construa Defesas: Clique em uma torre na barra lateral esquerda e arraste-a para um local válido no mapa para construí-la. Você não pode construir sobre o caminho.
    
    3.  Faça Upgrades: Clique em uma torre que você já construiu para abrir o painel de upgrades. Use seu ouro para torná-la mais forte.

    4.  Use Habilidades: Algumas torres com upgrades finais possuem habilidades poderosas! Clique no botão de habilidade no painel para ativá-las em momentos cruciais.
    
    Teclas de Atalho:
    -   V: Vende a torre selecionada por 70% do valor total investido.
    -   ESC: Fecha as config.
    `;
    text(helpText, panelX + 30, panelY + 80, panelW - 60);

    
    const btnW = 180;
    const btnH = 50;
    drawStyledButton("Fechar", width / 2, panelY + panelH - btnH, btnW, btnH);
}
function mouseDragged() {
    if (!settingsOpen) return;

    const panelW = width * 0.7;
    const panelH = height * 0.8;
    const sliderW = panelW * 0.6;
    const panelX = (width - panelW) / 2;
    const panelY = (height - panelH) / 2;
    const sliderX = panelX + (panelW - sliderW) / 2;

    let musicSliderY = panelY + 100;
    let sfxSliderY = panelY + 200;

    
    if (mouseY > musicSliderY - 15 && mouseY < musicSliderY + 25 && mouseX >= sliderX && mouseX <= sliderX + sliderW) {
        musicVolume = map(mouseX, sliderX, sliderX + sliderW, 0, 1, true);
    }
    
    if (mouseY > sfxSliderY - 15 && mouseY < sfxSliderY + 25 && mouseX >= sliderX && mouseX <= sliderX + sliderW) {
        sfxVolume = map(mouseX, sliderX, sliderX + sliderW, 0, 1, true);
    }
}
function handleSettingsClick() {
    
    const panelW = width * 0.7;
    const panelH = height * 0.8;
    const btnW = 180;
    const btnH = 50;
    const panelX = (width - panelW) / 2;
    const panelY = (height - panelH) / 2;
    const centerX = panelX + panelW / 2;
    const btnY = panelY + panelH - btnH - 30;
  const sliderW = panelW * 0.6;
    const sliderX = panelX + (panelW - sliderW) / 2;
    let checkboxY = panelY + 300;
    let checkboxX = sliderX;
    let checkboxSize = 24;

    if (mouseX > checkboxX && mouseX < checkboxX + checkboxSize &&
        mouseY > checkboxY && mouseY < checkboxY + checkboxSize) {
        
        autoStartWaves = !autoStartWaves; 
        playSound(sfx.ui_click, true);
        return true; 
    }
    
    const comoJogarBtnX = centerX - (btnW + 15);
    const sairBtnCenterX = centerX; 
    const continuarBtnCenterX = centerX + (btnW + 15); 

    
    if (isMouseOverButton(comoJogarBtnX, btnY, btnW, btnH)) {
        playClickSound();
        helpScreenVisible = true;
        return true;
    }

    
    if (isMouseOverButton(sairBtnCenterX, btnY, btnW, btnH)) {
        playClickSound();
        settingsOpen = false;
        paused = false;
        gameState = 'startScreen';
        return true;
    }

    
    if (isMouseOverButton(continuarBtnCenterX, btnY, btnW, btnH)) {
        playClickSound();
        settingsOpen = false;
        paused = false;
        return true;
    }
    
    return false; 
}
  //a coisa mais importante, onde ve se o click funciono, onde foi o click e tudo mais
function mousePressed() {
    if (!musicStarted && gameState === 'clickToStart') {
        userStartAudio();
        musicStarted = true;
        gameState = 'startScreen';
        return;
    }

    if (tutorialManager.isActive) {
        const step = tutorialManager.step;
        if (step === 1 || step === 5) {
            tutorialManager.step++;
            updateTutorialStep();
            return;
        }
        if (step === 4 && towers.length > 0) {
            if (dist(mouseX, mouseY, towers[0].pos.x, towers[0].pos.y) < towers[0].hitboxSize / 2) {
                tutorialManager.step++;
                updateTutorialStep();
            }
        }
    }

    if (helpScreenVisible) {
        const btnW = 180;
        const btnH = 50;
        if (isMouseOverButton(width / 2, height * 0.9 - btnH, btnW, btnH)) {
            playSound(sfx.ui_click, true);
            helpScreenVisible = false;
        }
        return;
    }

    if (settingsOpen) {
        if (handleSettingsClick()) return;
        mouseDragged();
        
        const panelW = width * 0.7;
        const panelH = height * 0.8;
        const panelX = (width - panelW) / 2;
        const panelY = (height - panelH) / 2;
        if (!(mouseX > panelX && mouseX < panelX + panelW && mouseY > panelY && mouseY < panelY + panelH)) {
            playSound(sfx.ui_click, true);
            settingsOpen = false;
            paused = false;
        }
        return;
    }

    switch (gameState) {
        case 'startScreen': {
            const btnW = 320;
            const btnH = 55;
            const btnGap = 20;
            const totalButtons = 5;
            const totalHeight = (totalButtons * btnH) + ((totalButtons - 1) * btnGap);
            let startY = (height / 2 - totalHeight / 2) + 120;

            if (isMouseOverButton(width / 2, startY + (btnH + btnGap) * 0, btnW, btnH)) {
                playSound(sfx.ui_click, true);
                startTutorialMode();
            } 
            else if (isMouseOverButton(width / 2, startY + (btnH + btnGap) * 1, btnW, btnH)) {
                playSound(sfx.ui_click, true);
                gameMode = 'story';
                startPhase(0, 'parqueEvolutivo');
            } 
            else if (isMouseOverButton(width / 2, startY + (btnH + btnGap) * 2, btnW, btnH)) {
                playSound(sfx.ui_click, true);
                gameMode = 'phases';
                gameState = 'phases';
            } 
            else if (isMouseOverButton(width / 2, startY + (btnH + btnGap) * 3, btnW, btnH)) {
                playSound(sfx.ui_click, true);
                gameMode = 'infinite';
                setupInfiniteMode();
            } 
            else if (isMouseOverButton(width / 2, startY + (btnH + btnGap) * 4, btnW, btnH)) {
                playSound(sfx.ui_click, true);
                gameMode = 'sandbox';
                setupSandbox();
            }
            break;
        }

        case 'cutscene': {
            playSound(sfx.ui_click, true);
            let currentDialogue = activeCutscene.dialogues[dialogueIndex];
            if (characterIndex < currentDialogue.length) {
                characterIndex = currentDialogue.length;
            } else {
                dialogueIndex++;
                characterIndex = 0;
                if (dialogueIndex >= activeCutscene.dialogues.length) {
                    activeCutscene = null;
                    gameState = 'story';
                }
            }
            break;
        }
        
        case 'tutorial':
        case 'story':
        case 'sandbox':
        case 'infinite': {
     if (waitingForNextWave && !autoStartWaves) {
    const btnW = 220;
    const btnH = 65;
    const btnX = width - btnW - 20;
    const btnY = height - btnH - 20;

    if (mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
        waitingForNextWave = false;

        CONFIG.player.gold += currentNextWaveBonus; 
        floatingTexts.push(new FloatingText(btnX, btnY, `+${currentNextWaveBonus}G`, 'goldText'));
        wave++;
        spawnWave(wave);
        playSound(sfx.ui_click, true);
        return;
    }
}
            const settingsBtnSize = 40;
            const settingsBtnX = width - settingsBtnSize - 15;
            const settingsBtnY = 15;
            if (mouseX > settingsBtnX && mouseX < settingsBtnX + settingsBtnSize && mouseY > settingsBtnY && mouseY < settingsBtnY + settingsBtnSize) {
                playSound(sfx.ui_click, true);
                settingsOpen = !settingsOpen;
                paused = settingsOpen;
                break;
            }

            if (showUpgradeUI) {
                if (isMouseOverUpgradePanel()) {
                    handleUpgradeClick();
                } else {
                    showUpgradeUI = false;
                    selectedTower = null;
                }
                return;
            }

            if (mouseX < sidebarWidth) {
                for (let i = 0; i < CONFIG.tower.types.length; i++) {
                    let tower = CONFIG.tower.types[i];
                    let buttonY = 90 + i * (towerButtonSize + towerButtonSpacing * 2) - sidebarScrollY;
                    if (dist(mouseX, mouseY, sidebarWidth / 2, buttonY) < towerButtonSize / 2 + 5) {
                        if (CONFIG.player.gold >= tower.cost) {
                            draggingTowerType = tower;
                            draggingFromSidebar = true;
                            if (tutorialManager.isActive && tutorialManager.step === 2) {
                                tutorialManager.step++;
                                updateTutorialStep();
                            }
                        } else {
                            floatingTexts.push(new FloatingText(mouseX, mouseY, "Sem ouro!", 'damageText'));
                        }
                        break;
                    }
                }
            } else {
                let clickedOnTower = false;
                for (let t of towers) {
                    if (dist(mouseX, mouseY, t.pos.x, t.pos.y) < t.hitboxSize / 2) {
                        selectedTower = t;
                        showUpgradeUI = true;
                        clickedOnTower = true;
                        break;
                    }
                }
                if (!clickedOnTower) {
                    selectedTower = null;
                    showUpgradeUI = false;
                }
            }
            break;
        }

        case 'phases': {
            const phaseBtnW = 350;
            const phaseBtnH = 70;
            let phaseStartY = 150;
            
            FASES_MODO_FASES.forEach((fase, index) => {
                let btnY = phaseStartY + index * (phaseBtnH + 20);
                if (isMouseOverButton(width / 2, btnY + phaseBtnH / 2, phaseBtnW, phaseBtnH)) {
                    playSound(sfx.ui_click, true);
                    startPhase(index, fase.mapa);
                }
            });

            if (isMouseOverButton(width / 2, height - 80 + 25, 260, 50)) {
                playSound(sfx.ui_click, true);
                gameState = 'startScreen';
            }
            break;
        }

        case 'gameOver': {
            const goBtnW = 260;
            const goBtnH = 60;
            const goBtnY = height / 2 + 40;

            if (isMouseOverButton(width / 2, goBtnY, goBtnW, goBtnH)) {
                playSound(sfx.ui_click, true);
                resetCurrentPhase();
            } else if (isMouseOverButton(width / 2, goBtnY + goBtnH + 20, goBtnW, goBtnH)) {
                playSound(sfx.ui_click, true);
                gameState = 'startScreen';
            }
            break;
        }

        case 'phaseComplete': {
            handlePhaseCompleteClick();
            break;
        }
    }

    if (airdropManager.isActive) {
        let d = dist(mouseX, mouseY, airdropManager.pos.x, airdropManager.pos.y);
        if (d < airdropManager.size.w / 2) {
            const reward = floor(random(150, 401));
            CONFIG.player.gold += reward;
            floatingTexts.push(new FloatingText(mouseX, mouseY, `+${reward}G`, 'goldText'));
            airdropManager.isActive = false;
        }
    }
}
function startTutorialMode() {
    console.log("Iniciando Modo Tutorial separado...");

    
    gameState = 'tutorial'; 
    gameMode = 'tutorial'; 

    
    towers = [];
    enemies = [];
    bullets = [];
    floatingTexts = [];
    spawnQueue = [];
    wave = 0;
    waveInProgress = false;

    
    CONFIG.player.gold = 1000;
    CONFIG.player.life = 100;

    
    currentPhaseIndex = 0; 
    currentMapData = MAPAS.parqueEvolutivo;
    path = currentMapData.paths[0].map(p => createVector(p.x + sidebarWidth, p.y));

    
    
    startTutorial(); 
}
function startTutorial() {
    console.log("Ativando overlay do tutorial...");
    tutorialManager.isActive = true;
    tutorialManager.step = 1;
    paused = true; 
    updateTutorialStep();
}
  //tentei por para celular, mas não consegui
function touchStarted() {
  
  mousePressed(); 
  return false; 
}
  //tentei por para celular, mas não consegui
function touchMoved() {
  
  mouseDragged();
  return false;
}
  //tentei por para celular, mas não consegui
function touchEnded() {
  
  mouseReleased();
  return false;
}
function mouseReleased() {
    if (!draggingTowerType || !draggingFromSidebar) {
        return; 
    }

    const x = mouseX;
    const y = mouseY;

    
    if (x < sidebarWidth || x > width || y < 55 || y > height) {
        draggingTowerType = null;
        draggingFromSidebar = false;
        return;
    }

    
    const canAfford = CONFIG.player.gold >= draggingTowerType.cost;
    const limitData = getTowerLimit(draggingTowerType.name);
    const isLimited = limitData.placed >= limitData.limit;
    const isOverlapping = isPositionOccupied(x, y) || isOverlappingDecoration(x, y);
    const onPath = isOnPath(x, y);

    
    if (!onPath && !isOverlapping && !isLimited && canAfford) {
        
        towers.push(new Tower(x, y, draggingTowerType));
        CONFIG.player.gold -= draggingTowerType.cost;
        playSound(sfx.placeTower);

        
        
        if (tutorialManager.isActive && tutorialManager.step === 3) {
            tutorialManager.step++;
            updateTutorialStep();
        }
    } else {
        
        if (onPath) {
            floatingTexts.push(new FloatingText(x, y, "Não pode construir no caminho!", 'damageText'));
        } else if (isOverlapping) {
            floatingTexts.push(new FloatingText(x, y, "Lugar ocupado!", 'damageText'));
        } else if (isLimited) {
            floatingTexts.push(new FloatingText(x, y, "Limite de torres atingido!", 'damageText'));
        } else if (!canAfford) {
            
            floatingTexts.push(new FloatingText(x, y, "Sem ouro!", 'damageText'));
        }
    }

    
    draggingTowerType = null;
    draggingFromSidebar = false;
}
function handleSidebarSelection() {
    for (let i = 0; i < CONFIG.tower.types.length; i++) {
        let buttonY = 70 + i * (towerButtonSize + towerButtonSpacing * 1.5);
        let buttonX = sidebarX + sidebarWidth / 2;
        let d = dist(mouseX, mouseY, buttonX, buttonY - towerButtonSpacing / 2);
        if (d < towerButtonSize / 2) {
            selectedTowerIndex = i;
            selectedTower = null;
            showUpgradeUI = false;
            console.log("Torre selecionada na sidebar:", CONFIG.tower.types[i].name);
            return true; 
        }
    }
    return false; 
}
function isPositionOccupied(x, y) {
  for (let t of towers) {
    if (dist(x, y, t.pos.x, t.pos.y) < gridSize / 2) {
      return true;
    }
  }
  return false;
}
async function manageWaves() {
  if (!waveActive && enemies.length === 0 && !preparingWave) {
    preparingWave = true;
    prepareTimer = 180;
  }

  if (preparingWave) {
    prepareTimer--;
    if (prepareTimer <= 0) {
      preparingWave = false;
      waveActive = true;
      await spawnWave(Wave);
      Wave++;
      waveActive = false;
    }
  }
}
function drawUpgradeUI() {
    if (!showUpgradeUI || !selectedTower) return;

    const uiW = 280;
    const padding = 15;
    const x = width - uiW - 10;

    
    let panelHeight = 0;
    panelHeight += padding; 
    panelHeight += 30;      
    panelHeight += 15;      

    const statsToShow = selectedTower.getUpgradeStatsToShow ? selectedTower.getUpgradeStatsToShow() : [];
    panelHeight += ceil(statsToShow.length / 2) * 15 + 10; 

    panelHeight += 30 + 10; 

    if (selectedTower.canActivateAbility) {
        panelHeight += 35 + 10; 
    }
    panelHeight += 15; 

    const upgrades = selectedTower.getAvailableUpgrades();
    panelHeight += upgrades.length * (40 + 5); 

    panelHeight += 15 + 20; 
    panelHeight += padding; 

    const y = height - panelHeight - 10;

    
    let currentY = y; 

    fill(COLORS.uiBackground);
    stroke(COLORS.uiBorder);
    strokeWeight(2);
    rect(x, y, uiW, panelHeight, 8);

    
    currentY += padding;
    fill(COLORS.uiTitle);
    textSize(18);
    textAlign(CENTER, TOP);
    text(selectedTower.type.name, x + uiW / 2, currentY);
    currentY += 30;
    stroke(COLORS.uiBorder);
    line(x + padding, currentY, x + uiW - padding, currentY);
    currentY += 15;

    
    fill(COLORS.uiText);
    textSize(11);
    textAlign(LEFT, TOP);
    const statColumnWidth = (uiW - padding * 2) / 2;
    for (let i = 0; i < statsToShow.length; i++) {
        text(statsToShow[i], x + padding + (i % 2) * statColumnWidth, currentY + floor(i / 2) * 15);
    }
    currentY += ceil(statsToShow.length / 2) * 15 + 10;

    
    const priorityBtnX = x + padding;
    const priorityBtnW = uiW - padding * 2;
    const priorityBtnH = 30;
    let hoverPriority = mouseX > priorityBtnX && mouseX < priorityBtnX + priorityBtnW && mouseY > currentY && mouseY < currentY + priorityBtnH;
    fill(hoverPriority ? COLORS.buttonHover : COLORS.button);
    noStroke();
    rect(priorityBtnX, currentY, priorityBtnW, priorityBtnH, 5);
    fill(COLORS.uiText);
    textSize(14);
    textAlign(CENTER, CENTER);
    text(`Alvo: ${selectedTower.getCurrentTargetingPriority()}`, priorityBtnX + priorityBtnW / 2, currentY + priorityBtnH / 2);
    currentY += priorityBtnH + 10;

    if (selectedTower.canActivateAbility) {

        const btnX = x + padding;
        const btnW = uiW - padding * 2;
        const btnH = 35;

        if (selectedTower.abilityCooldownTimer > 0) {
            fill(COLORS.buttonDisabled);
            noStroke();
            rect(btnX, currentY, btnW, btnH, 5);
            
            const progress = 1 - (selectedTower.abilityCooldownTimer / selectedTower.abilityCooldown);
            fill(COLORS.button);
            rect(btnX, currentY, btnW * progress, btnH, 5);

            const secondsLeft = (selectedTower.abilityCooldownTimer / 60).toFixed(1);
            fill(COLORS.uiText);
            textSize(14);
            textAlign(CENTER, CENTER);
            text(`Recarregando (${secondsLeft}s)`, btnX + btnW / 2, currentY + btnH / 2);

        } else { 
            let hover = mouseX > btnX && mouseX < btnX + btnW && mouseY > currentY && mouseY < currentY + btnH;
            
            fill(hover ? color(80, 200, 80) : color(46, 139, 87));
            noStroke();
            rect(btnX, currentY, btnW, btnH, 5);
            
            fill(COLORS.uiText);
            textSize(14);
            textAlign(CENTER, CENTER);
            text('ATIVAR HABILIDADE', btnX + btnW / 2, currentY + btnH / 2);
        }
        currentY += 35 + 10;
    }


 
    stroke(COLORS.uiBorder);
    line(x + padding, currentY, x + uiW - padding, currentY);
    currentY += 15;
  
        upgrades.forEach(key => {
            const node = CONFIG.upgradeTrees[selectedTower.type.special][key];
            const cost = selectedTower.getUpgradeCost(key);
            const level = selectedTower.upgradeLevels[key] || 0;
            const maxLevel = node.cost.length;
            const canAfford = CONFIG.player.gold >= cost;
            const isMaxLevel = level >= maxLevel;

            let buttonX = x + padding;
            let buttonW = uiW - padding * 2;
            let buttonH = 40;

            let buttonColor = isMaxLevel ? COLORS.buttonDisabled : (canAfford ? COLORS.button : COLORS.sellText);
            if (mouseX > buttonX && mouseX < buttonX + buttonW && mouseY > currentY && mouseY < currentY + buttonH && !isMaxLevel) {
                buttonColor = canAfford ? COLORS.buttonHover : COLORS.sellText;
            }
            fill(buttonColor);
            noStroke(); 
            rect(buttonX, currentY, buttonW, buttonH, 5);

            fill(COLORS.uiText);
            textSize(12);
            textAlign(LEFT, TOP);
            text(node.name, buttonX + 8, currentY + 5);

            textSize(10);
            textAlign(RIGHT, TOP);
            text(`Nível: ${isMaxLevel ? 'MAX' : `${level}/${maxLevel}`}`, buttonX + buttonW - 8, currentY + 5);

            textSize(9);
            textAlign(LEFT, TOP);
            text(node.description, buttonX + 8, currentY + 22, buttonW - 70);

            textSize(12);
            textAlign(RIGHT, CENTER);
            if (!isMaxLevel) {
                fill(canAfford ? COLORS.goldText : COLORS.sellText);
                text(`$${cost}`, buttonX + buttonW - 8, currentY + 22);
            } else {
                fill(COLORS.uiText);
                text("UPGRADE MÁX.", buttonX + buttonW - 8, currentY + 22);
            }
            currentY += buttonH + 5;
        });
  
    currentY += 15;
    fill(COLORS.sellText);
    textSize(12);
    textAlign(CENTER, TOP);
    text('Pressione "V" para Vender', x + uiW / 2, currentY);
}
function handleUpgradeClick() {
    if (!selectedTower || !showUpgradeUI) return false;

    
    const uiW = 280;
    const padding = 15;
    const x = width - uiW - 10;

    
    

    
    let panelHeight = padding + 30 + 15; 
    const statsToShow = selectedTower.getUpgradeStatsToShow ? selectedTower.getUpgradeStatsToShow() : [];
    panelHeight += ceil(statsToShow.length / 2) * 15 + 10; 
    panelHeight += 30 + 10; 
    if (selectedTower.canActivateAbility) {
        panelHeight += 35 + 10; 
    }
    panelHeight += 15; 
    const upgrades = selectedTower.getAvailableUpgrades();
    panelHeight += upgrades.length * (40 + 5); 
    panelHeight += 15 + 20 + padding; 
    const panelY = height - panelHeight - 10;

    
    let currentY = panelY;
    currentY += padding + 30 + 15 + (ceil(statsToShow.length / 2) * 15 + 10);

    
    const priorityBtnY = currentY;
    const priorityBtnH = 30;
    if (mouseX > x + padding && mouseX < x + uiW - padding && mouseY > priorityBtnY && mouseY < priorityBtnY + priorityBtnH) {
        selectedTower.cycleTargetingPriority();
        return true; 
    }
    currentY += priorityBtnH + 10;

    
    if (selectedTower.canActivateAbility && selectedTower.abilityCooldownTimer <= 0) {
        const abilityBtnY = currentY;
        const abilityBtnH = 35;
        if (mouseX > x + padding && mouseX < x + uiW - padding && mouseY > abilityBtnY && mouseY < abilityBtnY + abilityBtnH) {
            selectedTower.activateAbility();
            return true; 
        }
    }
    
    if (selectedTower.canActivateAbility) {
        currentY += 35 + 10;
    }

    currentY += 15; 

    
    for (const key of upgrades) {
        const upgradeBtnY = currentY;
        const upgradeBtnH = 40;
        const node = CONFIG.upgradeTrees[selectedTower.type.special][key];
        const isMaxLevel = (selectedTower.upgradeLevels[key] || 0) >= node.cost.length;

        if (mouseX > x + padding && mouseX < x + uiW - padding && mouseY > upgradeBtnY && mouseY < upgradeBtnY + upgradeBtnH && !isMaxLevel) {
            selectedTower.upgrade(key);
            return true; 
        }
        currentY += upgradeBtnH + 5;
    }

    return false; 
}
function getNextWaveInfo() {
    
    if (gameState !== 'story' || !FASES[currentPhaseIndex]) return null;

    const nextWaveNum = wave + 1; 
    const currentPhase = FASES[currentPhaseIndex];

    
    if (nextWaveNum > currentPhase.waveCount) {
        return null;
    }

    
    const composition = currentPhase.waveComposition(nextWaveNum);

    
    const info = composition.map(group => {
        
        const enemyType = CONFIG.enemy.types.find(e => e.name === group.type);
        return {
            name: group.type,
            count: group.count,
            icon: enemyType ? enemyImages[enemyType.name] : null 
        };
    });

    return info.filter(item => item.icon); 
}
function drawNextWavePanel() {
    const waveInfo = getNextWaveInfo();

    
    if (!waveInfo || waveInfo.length === 0) {
        return;
    }

    
    const iconSize = 22;
    const spacing = 40; 
    const panelW = 40 + (waveInfo.length * spacing); 
    const panelH = 55;
    const panelX = width - panelW - 15; 
    const panelY = 65; 

    
    push();
    
    fill(COLORS.uiBackground);
    stroke(COLORS.uiBorder);
    strokeWeight(2);
    rect(panelX, panelY, panelW, panelH, 8);

    
    noStroke();
    fill(COLORS.uiText);
    textSize(11);
    textAlign(CENTER, TOP);
    text("PRÓXIMA ONDA", panelX + panelW / 2, panelY + 6);

    
    let startX = panelX + 30;
    for (const info of waveInfo) {
        if (info.icon) {
            imageMode(CENTER);
            image(info.icon, startX, panelY + 32, iconSize, iconSize);
            
            fill(COLORS.uiText);
            textSize(12);
            textAlign(LEFT, CENTER);
            text(`x${info.count}`, startX + iconSize / 2 + 3, panelY + 32);
            
            startX += spacing; 
        }
    }
    pop();
}
function drawTutorialOverlay() {
    if (!tutorialManager.isActive) return;

    
    fill(0, 0, 0, 180);
    noStroke();

    
    let h = tutorialManager.highlight;
    rect(0, 0, width, h.y);
    rect(0, h.y, h.x, h.h);
    rect(h.x + h.w, h.y, width - (h.x + h.w), h.h);
    rect(0, h.y + h.h, width, height - (h.y + h.h));
    
    
    noFill();
    stroke(255, 223, 0, 200 + sin(frameCount * 0.1) * 55); 
    strokeWeight(4);
    rect(h.x, h.y, h.w, h.h, 8);

    
    const textX = width / 2;
    const textY = height - 100;
    fill(COLORS.uiBackground);
    stroke(COLORS.uiBorder);
    strokeWeight(2);
    rectMode(CENTER);
    rect(textX, textY, 650, 80, 8);

    fill(COLORS.uiText);
    noStroke();
    textSize(16);
    textAlign(CENTER, CENTER);
    text(tutorialManager.instruction, textX, textY);
    rectMode(CORNER); 
}
function updateTutorialStep() {
    if (!tutorialManager.isActive) return;

    switch (tutorialManager.step) {
        case 1:
            tutorialManager.instruction = "Bem-vindo! Seu objetivo é impedir que as pragas cheguem ao final.\nClique em qualquer lugar para continuar.";
            tutorialManager.highlight = { x: -10, y: -10, w: 0, h: 0 }; 
            break;
        case 2:
            tutorialManager.instruction = "Para começar, compre uma torre. Clique em uma torre na barra lateral esquerda.";
            tutorialManager.highlight = { x: 0, y: 0, w: sidebarWidth, h: height };
            break;
        case 3:
            tutorialManager.instruction = "Ótimo! Agora, clique e arraste para um local válido no mapa para construir sua torre.";
            tutorialManager.highlight = { x: sidebarWidth, y: 0, w: width - sidebarWidth, h: height };
            break;
        case 4:
            tutorialManager.instruction = "Excelente! Clique na sua torre para ver as opções de upgrade.";
            let t = towers[0]; 
            tutorialManager.highlight = { x: t.pos.x - t.hitboxSize / 2, y: t.pos.y - t.hitboxSize / 2, w: t.hitboxSize, h: t.hitboxSize };
            break;
        case 5:
            tutorialManager.instruction = "Este é o painel de upgrade. Use seu ouro para deixar as torres mais fortes.\nClique para finalizar o tutorial.";
            let uiX = width - 290;
            let uiY = height - 410;
            tutorialManager.highlight = { x: uiX, y: uiY, w: 280, h: 400 }; 
            break;
        case 6: 
    tutorialManager.isActive = false;
    paused = false; 
    gameState = 'startScreen'; 
    
    break;
    }
}
function resetCurrentPhase() {
  
    startPhase(currentPhaseIndex, currentPhaseMapKey); 
}
function drawTowerPlacementArea() {
  for (let area of towerPlacementArea) {
    noFill();
    stroke(80, 200, 80, 150);
    strokeWeight(2);
    rect(area.x, area.y, area.w, area.h, 10);
  }
}
function drawPath() {
    noFill();
    
    if (currentPhaseIndex === 0) {
        strokeWeight(40);
        stroke(92, 51, 23);
        for (let i = 0; i < path.length - 1; i++) { curve(path[i].x, path[i].y, path[i].x, path[i].y, path[i+1].x, path[i+1].y, path[i+1].x, path[i+1].y); }

        strokeWeight(34);
        stroke(139, 69, 19);
        for (let i = 0; i < path.length - 1; i++) { curve(path[i].x, path[i].y, path[i].x, path[i].y, path[i+1].x, path[i+1].y, path[i+1].x, path[i+1].y); }

    } else if (currentPhaseIndex === 1) {
        strokeWeight(44);
        stroke(80, 70, 60);
        for (let i = 0; i < path.length - 1; i++) { line(path[i].x, path[i].y, path[i+1].x, path[i+1].y); }
        
        strokeWeight(40);
        stroke(150, 140, 130);
        for (let i = 0; i < path.length - 1; i++) { line(path[i].x, path[i].y, path[i+1].x, path[i+1].y); }

    } else {
        strokeWeight(48);
        stroke(40);
        for (let i = 0; i < path.length - 1; i++) { line(path[i].x, path[i].y, path[i+1].x, path[i+1].y); }
        
        stroke(255, 223, 0);
        strokeWeight(4);
        for (let i = 0; i < path.length - 1; i++) { drawDashedLine(path[i].x, path[i].y, path[i+1].x, path[i+1].y, 15, 10); }
    }
    
    strokeWeight(1);
}
function drawStatsPanel() {
    if (prevPlayerStats.life !== -1 && CONFIG.player.life < prevPlayerStats.life) {
        lifePulse = 1.0;
    }
    if (prevPlayerStats.gold !== -1 && CONFIG.player.gold > prevPlayerStats.gold) {
        goldPulse = 1.0;
    }
    prevPlayerStats.life = CONFIG.player.life;
    prevPlayerStats.gold = CONFIG.player.gold;

    fill(COLORS.uiBackground);
    noStroke();
    rect(sidebarWidth, 0, width - sidebarWidth, 55);
    stroke(COLORS.uiBorder);
    strokeWeight(2);
    line(sidebarWidth, 55, width, 55);

    push();
    translate(sidebarWidth + 70, 28);
    if (lifePulse > 0) {
        let pulseSize = 30 + (1 - lifePulse) * 30;
        let pulseAlpha = lifePulse * 200;
        fill(255, 50, 50, pulseAlpha);
        ellipse(0, 0, pulseSize);
        lifePulse -= 0.05;
    }
    noStroke();
    fill(COLORS.sellText);
    beginShape();
    vertex(0, -3);
    bezierVertex(-15, -20, -25, 0, 0, 20);
    bezierVertex(25, 0, 15, -20, 0, -3);
    endShape(CLOSE);
    fill(COLORS.uiText);
    textSize(20);
    textAlign(LEFT, CENTER);
    text(`${CONFIG.player.life}`, 30, 0);
    pop();

    push();
    translate(sidebarWidth + 220, 28);
    if (goldPulse > 0) {
        let pulseSize = 30 + (1 - goldPulse) * 30;
        let pulseAlpha = goldPulse * 200;
        fill(255, 215, 0, pulseAlpha);
        ellipse(0, 0, pulseSize);
        goldPulse -= 0.05;
    }
    stroke(COLORS.uiTitle);
    strokeWeight(2);
    fill(255, 230, 100);
    ellipse(0, 0, 28, 28);
    noStroke();
    fill(180, 150, 0);
    textSize(18);
    textAlign(CENTER, CENTER); 
    text("$", 0, 1);
    fill(COLORS.uiText);
    textSize(20);
    textAlign(LEFT, CENTER);
    text(`${CONFIG.player.gold}`, 30, 0);
    pop();

    push();

    const panelCenterX = sidebarWidth + (width - sidebarWidth) / 2;
    translate(panelCenterX, 28);

    stroke(COLORS.uiBorder);
    strokeWeight(2);
    fill(COLORS.sellText);
    triangle(-15, -12, -15, 12, 0, 0);
    line(-15, -12, -15, 15);

    noStroke();
    fill(COLORS.uiText);
    textSize(22);
    textAlign(LEFT, CENTER);
    text(`${wave}`, 15, 1);
    pop();


    textAlign(CENTER, CENTER); 
}
function getWaveComposition(wave) {
    const isBossWave = wave % 10 === 0;
    const isMiniBossWave = wave % 5 === 0 && !isBossWave;
    const isThemeWave = wave % 7 === 0 && !isBossWave && !isMiniBossWave;
    const composition = [];

    if (isBossWave) {
        composition.push({ type: 'boss', count: 1 });
        composition.push({ type: 'support', count: Math.floor(3 + wave * 1.5) });
        return composition;
    }
  if (Wave % 10 === 0) {
  triggerBossMessage();
}


    if (isMiniBossWave) {
        composition.push({ type: 'Lead Bloon', count: 2 + Math.floor(wave / 2) });
    }

    if (isThemeWave) {
        const themeEnemies = ['Yellow Bloon', 'Black Bloon', 'White Bloon'];
        const chosen = random(themeEnemies);
        composition.push({ type: chosen, count: 5 + Math.floor(wave * 1.2) });
        return composition;
    }

    
    const normalEnemies = CONFIG.enemy.types.filter(e => e.name !== 'boss');
    const numEnemies = 3 + wave * 2;

    for (let i = 0; i < numEnemies; i++) {
        const chosen = random(normalEnemies);
        composition.push({ type: chosen.name, count: 1 });
    }

    return composition;
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getEnemyType(wave) {
    if (wave % 10 === 0) return CONFIG.enemy.types.find(e => e.name === 'boss');
    if (wave % 7 === 0) return CONFIG.enemy.types.find(e => e.name === 'Black Bloon'); 
    if (wave % 5 === 0) return CONFIG.enemy.types.find(e => e.name === 'Lead Bloon');  

    
    const normalEnemies = CONFIG.enemy.types.filter(e => e.name !== 'boss');
    return random(normalEnemies);
}
  //a classe que ta todas as propriedades das torres
class Tower {
    constructor(x, y, type) {
        this.pos = createVector(x, y);
        this.type = { ...type
        };
        this.cooldown = 0;
        this.target = null;
        this.towerSize = 75;
        this.hitboxSize = type.hitboxSize || this.towerSize;
        this.rotation = 0;
this.type = Object.assign({}, type);
        this.rotation = -PI / 2; 
        this.abilityCooldownTimer = 0; 
        this.abilityActiveTimer = 0
        this.upgradeLevels = {};
        this.unlockedUpgrades = [];
        this.initializeUpgrades();

        this.damage = this.type.damage || 0;
        this.damagePerSecond = this.type.damagePerSecond || 0;
        this.range = this.type.range || 0;
        this.fireRate = this.type.fireRate || 0;
        this.poisonDuration = this.type.poisonDuration || 0;
        this.freezeDuration = this.type.freezeDuration || 0;
      
        this.swarmDps = this.type.swarmDps || 0;     
        this.swarmSlow = this.type.swarmSlow || 0;  
        this.beeCount = this.type.beeCount || 0;
        this.swarmTickRate = this.type.swarmTickRate || 0;
        this.swarmTickCooldown = 0; 
        this.targetingPriorities = ['Primeiro', 'Último', 'Mais Forte', 'Mais Fraco'];
        this.targetingPriorityIndex = 0; 
        this.aoeFreezeRadius = this.type.aoeFreezeRadius || 0;
        this.aoeFreezeDuration = this.type.aoeFreezeDuration || 0;

        this.projectileAoeRadius = this.type.projectileAoeRadius || 0;
        this.projectileAoeDamageMultiplier =                                   this.type.projectileAoeDamageMultiplier || 0;
        this.auraDuration = this.type.auraDuration || 0; 


        this.chainLength = this.type.chainLength || 0;
        this.chainRadius = this.type.chainRadius || 0;
        this.buffAmount = this.type.buffAmount || 0;
        this.goldPerInterval = this.type.goldPerInterval || 0;
        this.goldInterval = this.type.goldInterval || 0;

        this.canActivateAbility = this.type.canActivateAbility || false;
        this.abilityCooldown = this.type.abilityCooldown || 0;
        this.abilityDuration = this.type.abilityDuration || 0;
        this.abilityTimer = 0;
        this.abilityMultiplier = 1; 

        this.hasGlobalDiscount = this.type.hasGlobalDiscount || false; 
        this.globalDiscountAmount = this.type.globalDiscountAmount || 0;
        this.hasDamageBuffAura = this.type.hasDamageBuffAura || false; 
        this.damageBuffAuraAmount = this.type.damageBuffAuraAmount || 0;

        this.addsCritChance = this.type.addsCritChance || 0; 
        this.addsProjectileSpeed = this.type.addsProjectileSpeed || 0; 

        this.spreadsPoisonOnDeath = this.type.spreadsPoisonOnDeath || false;
        this.spreadRadius = this.type.spreadRadius || 0;
        this.addsSlow = this.type.addsSlow || false;
        this.slowAmount = this.type.slowAmount || 0;

        this.finalHitMultiplier = this.type.finalHitMultiplier || 1;
        this.stunChance = this.type.stunChance || 0;
        this.stunDuration = this.type.stunDuration || 0;

        this.executeThreshold = this.type.executeThreshold || 0;
        this.executeDamageMultiplier = this.type.executeDamageMultiplier || 0;
        this.fearChance = this.type.fearChance || 0;
        this.fearRadius = this.type.fearRadius || 0;
       this.flameConeAngle = this.type.flameConeAngle || 0;
    this.appliesBurn = this.type.appliesBurn || false;
    this.burnDps = this.type.burnDps || 0;
    this.burnDuration = this.type.burnDuration || 0;
    this.blueFlame = this.type.blueFlame || false;

        if (this.type.special === 'droneController') {
            this.drone = {
                pos: this.pos.copy(), 
                flightCenter: this.pos.copy(), 
                flightRadiusX: this.type.droneStats.droneFlightRadiusX,
                flightRadiusY: this.type.droneStats.droneFlightRadiusY,
                flightAngle: random(TWO_PI), 
                flightSpeed: this.type.droneStats.droneFlightSpeed,
                damage: this.type.droneStats.droneDamage,
                fireRate: this.type.droneStats.droneFireRate,
                range: this.type.droneStats.droneRange,
                aoeRadius: this.type.droneStats.droneAoeRadius || 0, 
                appliesSlow: this.type.droneStats.appliesSlow || false, 
                slowAmount: this.type.droneStats.slowAmount || 0,
                appliesPoison: this.type.droneStats.appliesPoison || false, 
                poisonDuration: this.type.droneStats.poisonDuration || 0,
                poisonDps: this.type.droneStats.poisonDps || 0,
                multiTarget: this.type.droneStats.multiTarget || 1, 
                pierce: this.type.droneStats.pierce || 1, 
                rotation: 0, 
                cooldown: 0, 
                target: null, 
            };
            this.miniDrones = []
            this.isFlying = false; 
        } else {
            this.isFlying = false; 
        }

        this.damageMultiplier = 1; 
        this.fireRateBuff = 0; 
       
        if (this.type.special === 'homing') {
            this.pups = [];
            this.pupSpawnCooldown = 0;
            this.pupSpawnRate = 1200; 
            this.pupLimit = 3;
        }
       if (this.type.special === 'swarm_slow') {
            this.bees = []; 
            for (let i = 0; i < 25; i++) { 
                this.bees.push({
                    angle: random(TWO_PI), 
                    radius: random(this.range * 0.2, this.range), 
                    speed: random(0.01, 0.04), 
                    size: random(14, 22) 
                });
    }
       }
      
    this.fireParticles = []; 
          if (this.type.special === 'flamethrower') {
        this.rotation = 0; 
    }
}
   spawnPup() {
        let pupType = {
            ...this.type,
            name: "Filhote", cost: 0,
            damage: this.damage * 0.3,
            range: this.range * 0.7,
            fireRate: this.fireRate * 1.2,
            color: 'sandybrown', hitboxSize: 40,
        };

        let pup = new Tower(this.pos.x, this.pos.y, pupType);
        pup.isPup = true;
        pup.parent = this;
        pup.orbitAngle = random(TWO_PI);
        pup.orbitRadius = 60 + random(-10, 10);
        pup.orbitSpeed = this.isAlpha ? 0.05 : 0.03;

        this.pups.push(pup);
    }
    cycleTargetingPriority() {
    this.targetingPriorityIndex = (this.targetingPriorityIndex + 1) % this.targetingPriorities.length;
}

getCurrentTargetingPriority() {
    return this.targetingPriorities[this.targetingPriorityIndex];
}
applyFlameEffects() {
    let enemiesInCone = [];

    
    for (const enemy of enemies) {
        const d = dist(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y);
        if (d < this.range) {
            const angleToEnemy = atan2(enemy.pos.y - this.pos.y, enemy.pos.x - this.pos.x);
            let angleDifference = abs(this.rotation - angleToEnemy);
            
            if (angleDifference > PI) angleDifference = TWO_PI - angleDifference;

            if (angleDifference < this.flameConeAngle / 2) {
                enemiesInCone.push(enemy);
            }
        }
    }

    
    if (enemiesInCone.length > 0) {
        for (const enemy of enemiesInCone) {
            
            enemy.takeDamage(this.damage, this);

            
            if (this.appliesBurn) {
                enemy.burnTimer = this.burnDuration;
                enemy.burnDps = this.burnDps;
                if (this.blueFlame) { 
                    enemy.isDebuffedByBlueFlame = true;
                }
            }
        }
        
        this.createFireParticles();
    }
}

createFireParticles() {
    const particleCount = 3; 
    for (let i = 0; i < particleCount; i++) {
        const angle = this.rotation + random(-this.flameConeAngle / 2, this.flameConeAngle / 2);
        const speed = random(2, 4);
        this.fireParticles.push({
            pos: this.pos.copy(),
            vel: p5.Vector.fromAngle(angle, speed),
            lifespan: 60, 
            size: random(15, 25)
        });
    }
}
    initializeUpgrades() {
        const tree = CONFIG.upgradeTrees[this.type.special];
        if (!tree) return;

        const allUnlocks = new Set();
        for (const key in tree) {
            if (tree[key].unlocks) {
                tree[key].unlocks.forEach(u => allUnlocks.add(u));
            }
        }

        for (const key in tree) {
            this.upgradeLevels[key] = 0;

            if (!allUnlocks.has(key)) {
                this.unlockedUpgrades.push(key);
            }
        }
    }

    getUpgradeStatsToShow() {
        let statsToShow = [];
        if (this.type.special === 'droneController') {
            if (this.drone) {
                statsToShow.push(`Dano Drone: ${this.drone.damage}`);
                statsToShow.push(`Cadência Drone: ${this.drone.fireRate}`);
                statsToShow.push(`Alcance Drone: ${this.drone.range}`);
                statsToShow.push(`Vel. Voo Drone: ${this.drone.flightSpeed.toFixed(3)}`);
                statsToShow.push(`Raio Voo X: ${this.drone.flightRadiusX}`);
                statsToShow.push(`Raio Voo Y: ${this.drone.flightRadiusY}`);
                if (this.drone.multiTarget > 1) statsToShow.push(`Alvos Drone: ${this.drone.multiTarget}`);
                if (this.drone.pierce > 1) statsToShow.push(`Perfuração Drone: ${this.drone.pierce}`);
                if (this.drone.aoeRadius > 0) statsToShow.push(`AOE Drone: ${this.drone.aoeRadius}`);
                if (this.drone.appliesSlow) statsToShow.push(`Lentidão Drone: ${(this.drone.slowAmount * 100).toFixed(0)}%`);
                if (this.drone.appliesPoison) statsToShow.push(`Veneno Drone: ${this.drone.poisonDps}/s`);

            }
        } else {
            if (this.damage) statsToShow.push(`Dano: ${this.damage}`);
            if (this.damagePerSecond) statsToShow.push(`Dano/s: ${this.damagePerSecond}`);
            if (this.fireRate) statsToShow.push(`Cadência: ${this.fireRate}`);
            if (this.range) statsToShow.push(`Alcance: ${this.range}`);
            if (this.goldPerInterval) statsToShow.push(`Ouro/int: ${this.goldPerInterval}`);
            if (this.buffAmount) statsToShow.push(`Buff Dano: ${(this.buffAmount * 100).toFixed(0)}%`);
            if (this.freezeDuration) statsToShow.push(`Congelamento: ${this.freezeDuration}`);
            if (this.aoeFreezeRadius > 0) statsToShow.push(`AOE Gelo: ${this.aoeFreezeRadius}`);
            if (this.chainLength) statsToShow.push(`Saltos: ${this.chainLength}`);
            if (this.stunChance) statsToShow.push(`Atordoar: ${(this.stunChance * 100).toFixed(0)}%`);
            if (this.addsSlow) statsToShow.push(`Lentidão: ${(this.slowAmount * 100).toFixed(0)}%`);
            if (this.addsCritChance) statsToShow.push(`Crítico: ${(this.addsCritChance * 100).toFixed(0)}%`);
            if (this.addsProjectileSpeed) statsToShow.push(`Vel. Proj.: ${this.addsProjectileSpeed}`);

        }
        return statsToShow;
    }

    getAvailableUpgrades() {
        const available = [];
        const tree = CONFIG.upgradeTrees[this.type.special];
        if (!tree) return available;

        this.unlockedUpgrades.forEach(key => {
            const node = tree[key];
            if (node) {
                const currentLevel = this.upgradeLevels[key] || 0;
                if (currentLevel < node.cost.length) {
                    available.push(key);
                }
            }
        });
        return available;
    }

    upgrade(statKey) {
        const tree = CONFIG.upgradeTrees[this.type.special];
        if (!tree || !tree[statKey]) return;

        const node = tree[statKey];
        const currentLevel = this.upgradeLevels[statKey] || 0;

        if (currentLevel >= node.cost.length) {
            console.log("Nível máximo para:", node.name);
            return;
        }

        const cost = node.cost[currentLevel];
        if (CONFIG.player.gold < cost) {
            floatingTexts.push(new FloatingText(this.pos.x, this.pos.y, "Sem ouro!", 'damageText'));
            return;
        }

        CONFIG.player.gold -= cost;
      playSound(sfx.upgrade);
        floatingTexts.push(new FloatingText(this.pos.x, this.pos.y, `- ${cost}G`, 'goldText'));

        node.apply(this, currentLevel + 1, CONFIG.player);
        this.upgradeLevels[statKey]++;

        if (this.upgradeLevels[statKey] >= node.cost.length) {
            if (node.unlocks) {
                node.unlocks.forEach(unlockedKey => {
                    if (!this.unlockedUpgrades.includes(unlockedKey)) {
                        this.unlockedUpgrades.push(unlockedKey);
                    }
                });
            }
        }
    }

    getUpgradeCost(statKey) {
        const tree = CONFIG.upgradeTrees[this.type.special];
        if (!tree || !tree[statKey]) return Infinity;

        const node = tree[statKey];
        const currentLevel = this.upgradeLevels[statKey] || 0;

        if (currentLevel >= node.cost.length) {
            return Infinity; 
        }
        return node.cost[currentLevel];
    }
  
activateAbility() {
    if (!this.canActivateAbility || this.abilityCooldownTimer > 0) {
        return;
    }

    console.log(`Habilidade da torre '${this.type.name}' ativada!`);
    this.abilityCooldownTimer = this.abilityCooldown;

    
    if (this.abilityDuration > 0) {
        this.abilityActiveTimer = this.abilityDuration;
    }

    
    switch (this.type.name) {
        case 'Fornalha':
            
            enemies.forEach(e => {
                e.takeDamage(this.abilityDamage, this);
                e.stunTimer = this.abilityStunDuration;
            });
            
            break;

        case 'Irrigador Gelado':
            
            enemies.forEach(e => {
                e.freezeTimer = this.abilityDuration;
            });
            break;
    }
}
update() {
    
    if (this.abilityCooldownTimer > 0) this.abilityCooldownTimer--;
    if (this.abilityActiveTimer > 0) this.abilityActiveTimer--;

    
    if (this.isPup && this.parent) {
        this.orbitAngle += this.orbitSpeed;
        this.pos.x = this.parent.pos.x + cos(this.orbitAngle) * this.orbitRadius;
        this.pos.y = this.parent.pos.y + sin(this.orbitAngle) * this.orbitRadius;
    }

    
    

    if (this.type.special === 'gold') {
        this.cooldown--;
        if (this.cooldown <= 0) {
            CONFIG.player.gold += this.goldPerInterval;
            floatingTexts.push(new FloatingText(this.pos.x, this.pos.y, `+${this.goldPerInterval}G`, 'goldText'));
            this.cooldown = this.goldInterval;
        }
        return; 
    }

    if (this.type.special === 'buff') {
        towers.forEach(t => {
            if (t !== this) {
                if (dist(this.pos.x, this.pos.y, t.pos.x, t.pos.y) < this.range) {
                    t.damageMultiplier = 1 + this.buffAmount;
                    if (this.fireRateBuff) {
                        t.fireRate = t.type.fireRate * (1 - this.fireRateBuff);
                    }
                    if (this.abilityActiveTimer > 0) {
                        t.fireRate = t.type.fireRate / 2;
                    }
                } else {
                    t.damageMultiplier = 1;
                    t.fireRate = t.type.fireRate * (1 - (t.fireRateBuff || 0));
                }
            }
        });
        return;
    }
    
    if (this.type.special === 'swarm_slow') { 
        this.applySwarmEffects(); 
        return; 
    }

    if (this.type.special === 'flamethrower') {
        this.findTarget();
        if (this.target) {
            let targetAngle = atan2(this.target.pos.y - this.pos.y, this.target.pos.x - this.pos.x);
            this.rotation = lerpAngle(this.rotation, targetAngle, 0.1);
            this.applyFlameEffects();
        }
        return;
    }

    if (this.type.special === 'droneController') { 
        this.updateDrone(); 
        return; 
    }

    if (this.type.special === 'teleport_back') {
        if (this.abilityActiveTimer > 0) {
            enemies.forEach(enemy => {
                if (dist(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y) < this.range && !enemy.justTeleportedByAbility) {
                    enemy.teleportToStart();
                    if (this.teleportHealthPenalty) {
                        enemy.health -= enemy.maxHealth * (this.teleportHealthPenalty / 100);
                    }
                    enemy.justTeleportedByAbility = true;
                }
            });
            setTimeout(() => enemies.forEach(e => e.justTeleportedByAbility = false), 0);
        } else {
            if (this.cooldown <= 0) {
                enemies.forEach(enemy => {
                    if (dist(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y) < this.range) {
                        if (random() < this.type.teleportChance) {
                            enemy.teleportToStart();
                            if (this.addsPermanentSlow) {
                                enemy.applyPermanentSlow(this.permanentSlowAmount);
                            }
                        }
                    }
                });
                this.cooldown = this.fireRate;
            }
        }
        this.cooldown--;
        return;
    }

    

    
    if (this.type.special === 'homing') {
        if (this.spawnsPups && this.pups.length < this.pupLimit) {
            this.pupSpawnCooldown--;
            if (this.pupSpawnCooldown <= 0) {
                this.spawnPup();
                this.pupSpawnCooldown = this.pupSpawnRate;
            }
        }
        this.pups.forEach(pup => pup.update());
        
    }
    
    
    this.cooldown--;

    
    if (this.type.special === 'avatar_op') {
        if (this.cooldown <= 0) {
            this.cooldown = this.fireRate;
            if (this.omnipresentSmite) {
                playSound(sfx.explosion);
                let targets = shuffle(enemies.filter(e => !e.finished)).slice(0, this.smiteTargetCount);
                targets.forEach(target => {
                    let instantBullet = new Bullet(target.pos, target, this.damage, this);
                    instantBullet.speed = 999;
                    bullets.push(instantBullet);
                });
            } else {
                const enemiesInRange = enemies.filter(e => dist(this.pos.x, this.pos.y, e.pos.x, e.pos.y) < this.range && !e.finished);
                if (enemiesInRange.length > 0) {
                    playSound(sfx.shoot);
                    enemiesInRange.forEach(target => {
                        bullets.push(new Bullet(this.pos, target, this.damage, this));
                    });
                }
            }
        }
    } 
    
    else {
        this.findTarget();
        
        if (this.target) {
            let aimTarget = Array.isArray(this.target) ? this.target[0] : this.target;
            if (aimTarget) {
                let targetAngle = atan2(aimTarget.pos.y - this.pos.y, aimTarget.pos.x - this.pos.x);
                this.rotation = lerpAngle(this.rotation, targetAngle, 0.1);
            }

            if (this.cooldown <= 0) {
                this.shoot();
                let currentFireRate = this.fireRate;
                if (this.type.name === 'Espiga de Milho Explosiva' && this.abilityActiveTimer > 0) {
                    currentFireRate /= this.abilityMultiplier;
                }
                this.cooldown = currentFireRate;
            }
        }
    }
}

applySwarmEffects() {
    
    this.swarmTickCooldown--;
    if (this.swarmTickCooldown > 0) {
        return; 
    }
    
    this.swarmTickCooldown = this.swarmTickRate;

    
    
    const damageThisTick = (this.swarmDps * this.swarmTickRate) / frameRate();

    for (const enemy of enemies) {
        if (dist(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y) < this.range) {
            
            
            enemy.takeDamage(damageThisTick, this, true);

            enemy.applySlow(this.swarmSlow, this.swarmTickRate + 1); 

            if (this.swarmStunChance && random() < this.swarmStunChance) {
                enemy.stunTimer = this.swarmStunDuration;
            }
        }
    }
}

    updateQueenBee() {
        
        if (!this.queenBee && (!this.queenBeeCooldown || this.queenBeeCooldown <= 0)) {
            this.queenBee = {
                pos: this.pos.copy(),
                target: null,
                speed: 4,
                rotation: 0
            };
        }

        
        if (this.queenBee) {
            
            let potentialTargets = enemies.filter(e => e.health > 0);
            if (potentialTargets.length > 0) {
                potentialTargets.sort((a, b) => b.maxHealth - a.maxHealth);
                this.queenBee.target = potentialTargets[0];
            } else {
                this.queenBee.target = null;
            }

            
            if (this.queenBee.target) {
                let dir = p5.Vector.sub(this.queenBee.target.pos, this.queenBee.pos);
                this.queenBee.rotation = lerpAngle(this.queenBee.rotation, dir.heading(), 0.1);

                dir.setMag(this.queenBee.speed);
                this.queenBee.pos.add(dir);

                
                if (dist(this.queenBee.pos.x, this.queenBee.pos.y, this.queenBee.target.pos.x, this.queenBee.target.pos.y) < 10) {
                    this.queenBee.target.isMarked = true;
                    this.queenBee.target.markedBy = this; 
                    this.queenBee = null;
                    this.queenBeeCooldown = 480; 
                }
            } else {
                
                let dir = p5.Vector.sub(this.pos, this.queenBee.pos);
                if (dir.mag() > this.queenBee.speed) {
                    dir.setMag(this.queenBee.speed);
                    this.queenBee.pos.add(dir);
                }
            }
        }

        if (this.queenBeeCooldown > 0) {
            this.queenBeeCooldown--;
        }

        
        enemies.forEach(e => {
            if (e.isMarked && (e.health <= 0 || e.markedBy !== this)) {
                e.isMarked = false;
            }
        });
    }
updateDrone() {
   
    const prevDronePos = this.drone.pos.copy();
    this.drone.flightAngle += this.drone.flightSpeed;
    const x = this.drone.flightCenter.x + this.drone.flightRadiusX * sin(this.drone.flightAngle);
    const y = this.drone.flightCenter.y + this.drone.flightRadiusY * cos(this.drone.flightAngle);
    this.drone.pos.set(x, y);

    
    const dx = this.drone.pos.x - prevDronePos.x;
    const dy = this.drone.pos.y - prevDronePos.y;
    this.drone.rotation = atan2(dy, dx) + PI / 2;
    
    

    
    let claimedTargets = new Set();

    
    this.findDroneTarget(); 
    if (this.drone.target) {
        claimedTargets.add(this.drone.target);
    }
    
    
    if (this.miniDrones && this.miniDrones.length > 0) {
        this.miniDrones.forEach(mini => {
            
            mini.flightAngle += mini.flightSpeed;
            const miniX = this.drone.pos.x + mini.flightRadius * cos(mini.flightAngle);
            const miniY = this.drone.pos.y + mini.flightRadius * sin(mini.flightAngle);
            if (!mini.pos) mini.pos = createVector(miniX, miniY);
            else mini.pos.set(miniX, miniY);

            
            let bestTargetForMini = null;
            let miniTargets = enemies
                .filter(e => dist(mini.pos.x, mini.pos.y, e.pos.x, e.pos.y) < mini.range && !claimedTargets.has(e))
                .sort((a,b) => b.t - a.t); 

            if (miniTargets.length > 0) {
                bestTargetForMini = miniTargets[0];
                claimedTargets.add(bestTargetForMini); 
            } else {
                
                bestTargetForMini = this.drone.target;
            }
            mini.target = bestTargetForMini;
        });
    }

    

    
    this.drone.cooldown--;
    if (this.drone.target && this.drone.cooldown <= 0) {
        
        this.droneShoot(this.drone); 
        this.drone.cooldown = this.drone.fireRate;
    }

    
    if (this.miniDrones) {
        this.miniDrones.forEach(mini => {
            mini.cooldown--;
            if (mini.target && mini.cooldown <= 0) {
                this.droneShoot(mini); 
                mini.cooldown = mini.fireRate;
            }
        });
    }
};
    findDroneTarget() {

        let validEnemies = enemies.filter(e => dist(this.drone.pos.x, this.drone.pos.y, e.pos.x, e.pos.y) < this.drone.range);
        if (validEnemies.length === 0) {
            this.drone.target = null;
            return;
        }

        validEnemies.sort((a, b) => b.t - a.t);
        this.drone.target = validEnemies[0];
    }

    droneShoot(shooter) {
    
    
    if (!shooter || !shooter.target) return;

    bullets.push(new Bullet(shooter.pos, shooter.target, shooter.damage, {
        type: { special: 'plane' }, 
        pierce: shooter.pierce || 1,
        
        aoeRadius: shooter.aoeRadius || 0,
        appliesPoison: shooter.appliesPoison || false,
        poisonDps: shooter.poisonDps || 0,
        poisonDuration: shooter.poisonDuration || 0,
    }));
};


    applyBuffToNearbyTowers() {

        towers.forEach(t => {
            if (t !== this) {
                t.damageMultiplier = 1; 
                t.fireRateBuff = 0; 
                t.addsCritChance = 0; 
                t.addsProjectileSpeed = 0; 
            }
        });

        towers.forEach(t => {
            if (t !== this && dist(this.pos.x, this.pos.y, t.pos.x, t.pos.y) < this.range) {
                t.damageMultiplier = 1 + this.buffAmount;
                if (this.fireRateBuff > 0) { 
                    t.fireRate = Math.max(10, t.type.fireRate * (1 - this.fireRateBuff)); 
                }
                if (this.addsCritChance > 0) {
                    t.critChance = this.addsCritChance; 
                }
                if (this.addsProjectileSpeed > 0) {
                    t.projectileSpeedBonus = this.addsProjectileSpeed; 
                }
            }
        });
    }
findTarget() {
    
    if (this.type.special === 'sniper_priority') {
        let potentialTargets = [...enemies];
        potentialTargets.sort((a, b) => b.maxHealth - a.maxHealth);
        if (this.multiTarget > 1) {
            this.target = potentialTargets.slice(0, this.multiTarget);
        } else {
            this.target = potentialTargets[0] || null;
        }
        return;
    }

    
    let validEnemies = enemies.filter(e => dist(this.pos.x, this.pos.y, e.pos.x, e.pos.y) < this.range);

    if (validEnemies.length === 0) {
        this.target = null;
        return;
    }

    
    const priority = this.getCurrentTargetingPriority();
    switch (priority) {
        case 'Último':
            
            validEnemies.sort((a, b) => a.t - b.t);
            break;
        case 'Mais Forte':
            
            validEnemies.sort((a, b) => b.maxHealth - a.maxHealth);
            break;
        case 'Mais Fraco':
            
            validEnemies.sort((a, b) => a.health - b.health);
            break;
        case 'Primeiro':
        default:
            
            validEnemies.sort((a, b) => b.t - a.t);
            break;
    }

    this.target = validEnemies[0];
}

    shoot() {
       if (sfx.shoot && sfx.shoot.isLoaded()) {
        sfx.shoot.rate(random(0.95, 1.1)); 
        playSound(sfx.shoot);
    }
        if (Array.isArray(this.target)) {
            this.target.forEach(t => {
                if (t) bullets.push(new Bullet(this.pos, t, this.damage, this));
            });
        } else {
            let baseDamage = this.damage * (this.damageMultiplier || 1);
            bullets.push(new Bullet(this.pos, this.target, baseDamage, this));
        }
    }
    activateAbility() {

        if (!this.canActivateAbility || this.abilityCooldownTimer > 0) {
            return;
        }

        console.log(`Habilidade da torre '${this.type.name}' ativada!`);

        if (this.type.name === 'Irrigador Gelado') {
            enemies.forEach(e => {
                if (!e.type.immuneToFreeze) {
                    e.freezeTimer = 600; 
                }
            });
        }

        if (this.type.name === 'Composteira') {

             console.log("Ativando buff de velocidade da Composteira!");
             this.abilityActiveTimer = this.abilityDuration; 
        }

        this.abilityCooldownTimer = this.abilityCooldown;
    }
  show() {

        if (selectedTower === this) {
            let alpha = COLORS.rangeIndicator[3];
            fill(255, 255, 255, alpha / 4);
            stroke(255, 255, 255, alpha);
            strokeWeight(2);
            ellipse(this.pos.x, this.pos.y, this.range * 2);
        }

        noStroke();
        fill(0, 0, 0, 80); 

        ellipse(this.pos.x + 5, this.pos.y + this.towerSize / 3, this.towerSize * 0.7, this.towerSize * 0.3);

  if (selectedTower === this && !this.isPup) {
            fill(255, 255, 255, 20);
            stroke(255, 150);
            strokeWeight(2);
            ellipse(this.pos.x, this.pos.y, this.range * 2);
        }

        const size = this.isPup ? this.towerSize * 0.6 : this.towerSize;
        const towerImg = towerImages[this.isPup ? 'Cão Pastor' : this.type.name];

        push(); 
        translate(this.pos.x, this.pos.y); 

        const nonRotatingSpecials = ['gold', 'buff', 'freeze', 'droneController', 'swarm_slow'];

        if (!nonRotatingSpecials.includes(this.type.special)) {

            rotate(this.rotation - PI / 2); 
        }
        
        imageMode(CENTER); 
        if (towerImg) {
            image(towerImg, 0, 0, size, size); 
        } else {

            fill(this.type.color);
            stroke(0);
            rectMode(CENTER);
            rect(0, 0, this.towerSize - 10, this.towerSize - 10);
        }
        pop(); 
 if (this.type.special === 'homing' && this.pups.length > 0) {
            this.pups.forEach(pup => pup.show());
        }
      if (this.type.special === 'droneController' && this.drone) {
    const droneImg = towerImages["Drone Agrícola"];

    if (droneImg) {
        push();
        translate(this.drone.pos.x, this.drone.pos.y);
        rotate(this.drone.rotation);
        imageMode(CENTER);
        image(droneImg, 0, 0, 70, 70);
        pop();
    }

    if (this.miniDrones && this.miniDrones.length > 0) {
        this.miniDrones.forEach(mini => {
            if (droneImg && mini.pos) { 
                push();
                translate(mini.pos.x, mini.pos.y);

                if (mini.target) {
                    let angle = atan2(mini.target.pos.y - mini.pos.y, mini.target.pos.x - mini.pos.x);
                    rotate(angle + PI / 2);
                } else {
                    rotate(this.drone.rotation); 
                }

                imageMode(CENTER);

                tint(180, 220, 255); 
                image(droneImg, 0, 0, 35, 35); 
                noTint(); 
                pop();
            }
        });
    }
}
  if (this.type.special === 'swarm_slow') {
            
            for (const bee of this.bees) {
                
                bee.angle += bee.speed;

                
                const x = this.pos.x + cos(bee.angle) * bee.radius;
                const y = this.pos.y + sin(bee.angle) * bee.radius;

                push();
                translate(x, y);
                
                rotate(bee.angle + HALF_PI);
                imageMode(CENTER);
                image(abelhaImg, 0, 0, bee.size, bee.size);
                pop();
            }

            
            if (this.queenBee) {
                push();
                translate(this.queenBee.pos.x, this.queenBee.pos.y);
                rotate(this.queenBee.rotation + HALF_PI);
                fill(255, 215, 0); 
                stroke(0);
                strokeWeight(2);
                triangle(0, -10, -6, 6, 6, 6);
                fill(255, 100, 100);
                ellipse(0, 0, 8);
                pop();
            }
        }
  for (let i = this.fireParticles.length - 1; i >= 0; i--) {
        let p = this.fireParticles[i];
        p.pos.add(p.vel);
        p.vel.mult(0.95); 
        p.lifespan -= 2;
        p.size *= 0.98; 

        if (p.lifespan <= 0 || p.size < 1) {
            this.fireParticles.splice(i, 1);
        } else {
            push();
            noStroke();
            
            const lifePercent = p.lifespan / 60;
            const fromColor = color(255, 255, 150, 200); 
            const toColor = color(150, 0, 0, 0); 
            const currentColor = lerpColor(toColor, fromColor, lifePercent);
            
            fill(currentColor);
            ellipse(p.pos.x, p.pos.y, p.size);
            pop();
        }
    }
  }
}
function lerpAngle(a, b, t) {
  let diff = b - a;
  while (diff > PI) diff -= TWO_PI;
  while (diff < -PI) diff += TWO_PI;
  return a + diff * t;
}
function tryPlaceTower(x, y, towerType) {
  
  if (towerType.special !== 'plane' && isOverlappingWithTrees(x, y, 24)) {
    console.log("Não pode colocar torre em cima da árvore!");
    return false;
  }

  

  
  let tower = new Tower(x, y, towerType);
  towers.push(tower);
  return true;
}
function isOverlappingWithTrees(x, y, size) {
  for (let tree of arvoresData) {
    let treeLeft = tree.x;
    let treeRight = tree.x + tree.w;
    let treeTop = tree.y;
    let treeBottom = tree.y + tree.h;

    
    let objLeft = x - size / 2;
    let objRight = x + size / 2;
    let objTop = y - size / 2;
    let objBottom = y + size / 2;

    let overlapping = !(objRight < treeLeft || objLeft > treeRight || objBottom < treeTop || objTop > treeBottom);
    if (overlapping) return true;
  }
  return false;
}
function drawCutscene() {
    image(groundTextures[currentPhaseIndex], 0, 0); // Desenha o fundo do mapa
    drawPath();                                     // Desenha o caminho
    drawDecorations();                              // Desenha as decorações
    towers.forEach(t => t.show());                  // Apenas MOSTRA as torres, sem chamar a função .update() delas
    enemies.forEach(e => e.show());                 // Mostra inimigos que já possam estar na tela, mas parados
   
    fill(0, 0, 0, 180); // Sobreposição escura
    rect(0, 0, width, height);

    if (!activeCutscene) return;

    let boxH = 150;
    let boxY = height - boxH - 10;
    fill(COLORS.uiBackground);
    stroke(COLORS.uiBorder);
    strokeWeight(3);
    rect(10, boxY, width - 20, boxH, 10);

    if (activeCutscene.portrait) {
        image(activeCutscene.portrait, 25, boxY + 25, 100, 100);
    }

    fill(COLORS.button);
    noStroke();
    rect(150, boxY - 20, 200, 40, 5);
    fill(COLORS.uiText);
    textSize(18);
    textAlign(LEFT, CENTER);
    text(activeCutscene.speaker, 165, boxY);

    let currentDialogue = activeCutscene.dialogues[dialogueIndex];
    if (frameCount % typingSpeed === 0 && characterIndex < currentDialogue.length) {
        characterIndex++;
    }
    textToDisplay = currentDialogue.substring(0, characterIndex);

    textSize(16);
    text(textToDisplay, 150, boxY + 40, width - 180);

    fill(COLORS.uiTitle);
    textSize(14);
    textAlign(RIGHT, BOTTOM);

    if (frameCount % 60 < 30) {
        text("Clique para continuar...", width - 30, boxY + boxH - 15);
    }
}
function splitTextToLines(str, maxWidth) {
  let words = str.split(' ');
  let lines = [];
  let currentLine = words[0] || '';

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    let width = textWidth(currentLine + ' ' + word);
    if (width < maxWidth) {
      currentLine += ' ' + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
  
}
class Bullet {
    constructor(pos, target, damage, sourceTower) {
        this.pos = pos.copy();
        this.target = target;
        this.damage = damage;
        this.sourceTower = sourceTower;
        this.speed = 10;
        this.toRemove = false;
        this.hitEnemies = [];

        this.pierceLeft = this.sourceTower.pierce || 1;
        this.isChainBullet = this.sourceTower.type.special === 'chain';
        this.chainLength = this.sourceTower.chainLength || 0;
        this.chainRadius = this.sourceTower.chainRadius || 0;
        this.currentChain = 0;

        if (sourceTower.isChainContinuation) {
            this.isChainBullet = true;
            this.currentChain = sourceTower.currentChain;
            this.hitEnemies = sourceTower.hitEnemies.slice(); 
        }
    }

    update() {
        if (!this.target || this.target.health <= 0 || this.target.finished) {
            this.toRemove = true;
            return;
        }

        let dir = p5.Vector.sub(this.target.pos, this.pos);
        if (dir.mag() < this.speed) {
            this.hitTarget(this.target);
        } else {
            dir.setMag(this.speed);
            this.pos.add(dir);
        }
    }
  hitTarget(enemy) {
  if (this.hitEnemies.includes(enemy)) return;

    
    enemy.takeDamage(this.damage, this.sourceTower);
    this.applyStatusEffects(enemy);
    this.hitEnemies.push(enemy);

    
    
    if (this.isChainBullet && this.currentChain < this.chainLength) {
        
        this.performChainJump(enemy);
        
        this.toRemove = true;
        return; 
    }
    
    
    if (this.sourceTower.type.special === 'random_aoe_explosion' && random() < this.sourceTower.type.explosionChance) {
        floatingTexts.push(new FloatingText(this.pos.x, this.pos.y, "BOOM!", 'damageText'));
        if (this.sourceTower.leavesFirePatch) {
            groundEffects.push({
                pos: this.pos.copy(),
                radius: this.sourceTower.type.explosionRadius / 2,
                dps: this.sourceTower.firePatchDps,
                duration: this.sourceTower.firePatchDuration,
                maxDuration: this.sourceTower.firePatchDuration,
            });
        }
        enemies.forEach(otherEnemy => {
            if (!this.hitEnemies.includes(otherEnemy)) {
                const d = dist(this.pos.x, this.pos.y, otherEnemy.pos.x, otherEnemy.pos.y);
                if (d < this.sourceTower.type.explosionRadius) {
                    otherEnemy.takeDamage(this.sourceTower.type.explosionDamage, this.sourceTower);
                }
            }
        });
    }

    
    this.pierceLeft--;
    if (this.pierceLeft <= 0) {
        this.toRemove = true;
    }
}
    applyStatusEffects(enemy) {

        if (this.sourceTower.type.special === 'poison') {
            enemy.poisonTimer = this.sourceTower.poisonDuration;
            enemy.poisonDps = this.sourceTower.damagePerSecond;
        }

        if (this.sourceTower.type.special === 'freeze' && !enemy.type.immuneToFreeze) {
            enemy.freezeTimer = this.sourceTower.freezeDuration;
            if(this.sourceTower.brittleEffect) enemy.isBrittle = true;
        }

        if (this.sourceTower.stunChance > 0 && random(1) < this.sourceTower.stunChance) {
            enemy.stunTimer = this.sourceTower.stunDuration;
        }
       if (this.sourceTower.appliesPermanentSlow) {
        enemy.applyPermanentSlow(this.sourceTower.permanentSlowAmount);
    }
    }

    performChainJump(currentEnemy) {
        let nextTarget = null;
        let minDist = Infinity;

        enemies.forEach(e => {
            if (!this.hitEnemies.includes(e) && dist(currentEnemy.pos.x, currentEnemy.pos.y, e.pos.x, e.pos.y) < this.chainRadius) {
                let d = dist(currentEnemy.pos.x, currentEnemy.pos.y, e.pos.x, e.pos.y);
                if (d < minDist) {
                    minDist = d;
                    nextTarget = e;
                }
            }
        });

        if (nextTarget) {

            let nextBulletInfo = {
                type: this.sourceTower.type,
                pierce: this.sourceTower.pierce,
                chainLength: this.chainLength,
                chainRadius: this.chainRadius,
                stunChance: this.sourceTower.stunChance,
                stunDuration: this.sourceTower.stunDuration,

                isChainContinuation: true,
                currentChain: this.currentChain + 1,
                hitEnemies: this.hitEnemies 
            };
            bullets.push(new Bullet(currentEnemy.pos, nextTarget, this.damage, nextBulletInfo));
        }
    }

    show() {

        if(this.isChainBullet) {
            stroke(255, 0, 255);
            strokeWeight(3);
            line(this.pos.x, this.pos.y, this.target.pos.x, this.target.pos.y);
        } else {
            fill(255, 255, 0);
            noStroke();
            ellipse(this.pos.x, this.pos.y, 8, 8);
        }
    }
}
class HomingBullet extends Bullet {
    constructor(pos, target, damage) {
        super(pos, target, damage);
        this.speed = 4;
    }

    update() {
        if (!this.target || this.target.health <= 0 || this.target.finished) {
            this.toRemove = true;
            return;
        }

        let dir = p5.Vector.sub(this.target.pos, this.pos);
        dir.setMag(this.speed);
        this.pos.add(dir);

        if (p5.Vector.dist(this.pos, this.target.pos) < this.speed) {
            this.hitTarget();
        }
        this.show();
    }
}
class Enemy {
    constructor(wave, type) {
        this.pos = path[0].copy();
        this.type = type;
        this.maxHealth = CONFIG.enemy.baseHealth + wave * CONFIG.enemy.healthIncrement + type.health;
        this.health = this.maxHealth;
        this.baseSpeed = CONFIG.enemy.baseSpeed + wave * CONFIG.enemy.speedIncrement + type.speed;
        this.speed = this.baseSpeed;
        this.color = type.color;
        this.pathIndex = 1;
        this.finished = false;
        this.t = 0;
        this.rotation = 0;
        this.fireTimer = 0;
        this.fireDps = 0;
        this.isBrittle = false;
        this.brittleMultiplier = 2.0; 
        this.poisonTimer = 0;
        this.poisonDps = 0;
        this.freezeTimer = 0;
        this.stunTimer = 0;
        this.slowAmount = 0;
        this.slowTimer = 0;
        this.burnTimer = 0;
        this.burnDps = 0;
        this.isDebuffedByBlueFlame = false;
        this.teleportCooldown = 0;
        this.markTimer = 0;
        this.markMultiplier = 1;
        this.permanentSlowMultiplier = 1;
        this.justTeleportedByAbility = false; 
    }

    
    teleportToStart() {
        floatingTexts.push(new FloatingText(this.pos.x, this.pos.y, "POOF!", 'damageText'));
        this.pos = path[0].copy();
        this.pathIndex = 1;
        this.t = 0;
        this.teleportCooldown = 60; 
    }

    /** Aplica uma lentidão temporária. */
    applySlow(amount, duration) {
        if (amount > this.slowAmount) {
            this.slowAmount = amount;
        }
        this.slowTimer = max(this.slowTimer, duration);
    }

    /** Aplica a "Marca do Caçador", que aumenta o dano recebido. */
    applyMark(duration, multiplier) {
        this.markTimer = duration;
        this.markMultiplier = multiplier;
    }

    /** Aplica uma lentidão permanente (upgrade do Buraco de Minhoca). */
    applyPermanentSlow(amount) {
        this.permanentSlowMultiplier = Math.max(0.1, this.permanentSlowMultiplier - amount);
    }

    /** Atualiza o estado do inimigo a cada frame. */
    update() {
        if (this.teleportCooldown > 0) this.teleportCooldown--;
        if (this.markTimer > 0) this.markTimer--;

        if (this.stunTimer > 0) {
            this.stunTimer--;
            return;
        }
        if (this.freezeTimer > 0) {
            
            if (this.type.immuneToFreeze && this.freezeTimer <= 600) { 
                 this.freezeTimer--;
                 if (this.freezeTimer <= 0) this.isBrittle = false;
                 return;
            }
            this.freezeTimer--;
            if (this.freezeTimer <= 0) this.isBrittle = false; 
            else return;
        }

        let totalDps = 0;
        if (this.poisonTimer > 0) {
            totalDps += this.poisonDps;
            this.poisonTimer--;
        }
        if (this.burnTimer > 0) {
            totalDps += this.burnDps;
            this.burnTimer--;
        } else {
            this.isDebuffedByBlueFlame = false;
        }
        if (this.fireTimer > 0) {
            totalDps += this.fireDps;
            this.fireTimer--;
        }

        if (totalDps > 0) {
            this.health -= totalDps / frameRate();
        }

        this.speed = this.baseSpeed * this.permanentSlowMultiplier;
        if (this.slowTimer > 0) {
            this.speed *= (1 - this.slowAmount);
            this.slowTimer--;
        } else {
            this.slowAmount = 0;
        }

        if (this.pathIndex >= path.length) {
            this.finished = true;
            return;
        }

        let target = path[this.pathIndex];
        let dir = p5.Vector.sub(target, this.pos);
        if (dir.mag() > 0.1) {
            this.rotation = dir.heading();
        }

        if (dir.mag() < this.speed) {
            this.pos = target.copy();
            this.pathIndex++;
        } else {
            dir.setMag(this.speed);
            this.pos.add(dir);
        }
        this.t += this.speed;
    }

    /** Processa o dano recebido. */
    takeDamage(amount, sourceTower, isAuraDamage = false) {
        if(this.health <= 0) return;
        
        let finalDamage = amount;

        if (this.markTimer > 0) { finalDamage *= this.markMultiplier; }
        if (this.isBrittle) { finalDamage *= this.brittleMultiplier; }
        if (this.isDebuffedByBlueFlame) { finalDamage *= 1.25; }

        if (sourceTower && sourceTower.executeThreshold > 0 && (this.health / this.maxHealth) < sourceTower.executeThreshold) {
            finalDamage *= sourceTower.executeDamageMultiplier;
        }
        
        this.health -= finalDamage;

        if (!isAuraDamage && finalDamage > 0) {
            floatingTexts.push(new FloatingText(this.pos.x, this.pos.y, `-${Math.round(finalDamage)}`));
        }

        if (this.health <= 0) {
          playSound(sfx.enemyDeath);
            if (sourceTower && sourceTower.spreadsPoisonOnDeath) {
                let spreadTargets = enemies
                    .filter(e => e !== this && dist(this.pos.x, this.pos.y, e.pos.x, e.pos.y) < sourceTower.spreadRadius)
                    .slice(0, sourceTower.spreadCount);
                
                spreadTargets.forEach(target => {
                    target.poisonTimer = sourceTower.spreadPoisonDuration;
                    target.poisonDps = sourceTower.spreadPoisonDps;
                });
            }
        }
    }

    /** Desenha o inimigo e seus status na tela. */
    show() {
        const img = enemyImages[this.type.name];
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.rotation + HALF_PI);

        if (this.isBrittle || this.freezeTimer > 0) {
            tint(170, 220, 255);
        } else if (this.stunTimer > 0) {
            tint(255, 255, 100);
        } else if (this.poisonTimer > 0) {
            tint(150, 255, 150);
        } else if(this.burnTimer > 0 || this.fireTimer > 0) {
            tint(255, 150, 100);
        }

        if (img) {
            imageMode(CENTER);
            image(img, 0, 0, 30, 30);
        } else {
            fill(this.color);
            stroke(0);
            ellipse(0, 0, 20);
        }
        noTint();
        pop();
        const barW = 30;
        const barH = 5;
        const barX = this.pos.x - barW / 2;
        const barY = this.pos.y - 25;
        noStroke();
        fill(COLORS.healthBarBg);
        rect(barX, barY, barW, barH, 3);
        const healthW = barW * (this.health / this.maxHealth);
        fill(COLORS.healthBarFg);
        rect(barX, barY, healthW > 0 ? healthW : 0, barH, 3);

        if (this.markTimer > 0) {
            fill(255, 0, 0, 150);
            noStroke();
            let markerBaseY = this.pos.y - 35;
            let markerSize = 8 + sin(frameCount * 0.2) * 2;
            triangle(
                this.pos.x, markerBaseY,
                this.pos.x - markerSize / 2, markerBaseY - markerSize,
                this.pos.x + markerSize / 2, markerBaseY - markerSize
            );
        }
    }
}
function startBossCutscene() {
  const frases = [
    "Achei que você já teria perdido, NOOB!",
    "Hora de mostrar quem manda aqui!",
    "Você não passa desse nível, confia!",
    "Hahaha, sua defesa é patética!",
    "Preparado para o fim? Eu duvido...",
    "Essa é sua última chance, verme!"
  ];

  bossText = random(frases);
  bossLines = splitTextToLines(bossText, width - 300);
  bossLineIndex = 0;
  bossCharIndex = 0;
  bossIsTalking = true;
}
function spawnWave(waveNum) {
    waveInProgress = true; 
    spawnQueue = []; 

    let composition = [];

    
    if (gameState === 'story' && FASES[currentPhaseIndex]) {
        const currentPhase = FASES[currentPhaseIndex];
        composition = currentPhase.waveComposition(waveNum);
    } else if (gameState === 'sandbox' || gameState === 'infinite') {
        const enemyTypes = CONFIG.enemy.types.filter(e => !e.isBoss);
        const enemyCount = 8 + waveNum * 3;
        for (let i = 0; i < enemyCount; i++) {
            let randomEnemy = random(enemyTypes);
            composition.push({ type: randomEnemy.name, count: 1 });
        }
        
        if (waveNum % 10 === 0 && waveNum > 0) {
             const bossType = CONFIG.enemy.types.find(e => e.isBoss);
             if (bossType) {
                 composition.push({ type: bossType.name, count: 1 });
             }
        }
    }

    

    
    let activePaths = [];
    if (currentPhaseMapKey === 'parqueEvolutivo' && currentPhaseIndex === 2) {
        if (allPaths[2]) activePaths.push(allPaths[2]);
        if (allPaths[3]) activePaths.push(allPaths[3]);
    }

    
    if (activePaths.length === 0) {
        activePaths.push(path);
    }

    
    for (const group of composition) {
        const enemyType = CONFIG.enemy.types.find(e => e.name === group.type);
        if (enemyType) {
            for (let i = 0; i < group.count; i++) {
                let chosenPath = random(activePaths);
                
                
                spawnQueue.push({
                    wave: waveNum,
                    type: enemyType,
                    path: chosenPath
                });
            }
        }
    }


} 
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function triggerBossMessage() {
  const mensagens = [
    "Achei que você já teria perdido, NOOB!",
    "Hora de mostrar quem manda aqui!",
    "Você não passa desse nível, confia!",
    "Hahaha, sua defesa é patética!",
    "Preparado para o fim? Eu duvido...",
    "Essa é sua última chance, verme!"
  ];
  
  bossMessage = random(mensagens);
  showBossMessage = true;
  bossMessageTimer = bossMessageDuration;
}
class FloatingText {
    constructor(x, y, text, colorKey = 'damageText') {
        this.pos = createVector(x, y);
        this.text = text;
        this.life = 80;
        this.maxLife = 80;
        this.color = COLORS[colorKey] || [255, 255, 255]; 
    }

    update() {
        this.pos.y -= 0.8;
        this.life--;
        
        let alpha = map(this.life, 0, this.maxLife, 0, 255);
        let size;
        if (this.life > this.maxLife * 0.7) {
            size = map(this.life, this.maxLife, this.maxLife * 0.7, 10, 18);
        } else {
            size = map(this.life, this.maxLife * 0.7, 0, 18, 12);
        }

        fill(this.color[0], this.color[1], this.color[2], alpha);
        stroke(0, alpha);
        strokeWeight(2);
        textSize(size);
        text(this.text, this.pos.x, this.pos.y);
    }
}
function isPositionOccupied(x, y) {
    for (let t of towers) {
        if (dist(t.pos.x, t.pos.y, x, y) < gridSize) {
            return true;
        }
    }
    return false;

}
function startChapter(index) {
  gameState = 'playing';
  inCutscene = false;
  Wave = 1;
  gameStarted = true;

  
  allowedTowers = chapters[index].unlockedTowers;

  
  towers = [];
  enemies = [];

  spawnWave(Wave);
}
function resetGame() {
  CONFIG.player.life = CONFIG.player.maxLife; 
 Wave = 1;
  
}
function speak(text) {
  if ('speechSynthesis' in window) {
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  } else {
    console.log("Seu navegador não suporta SpeechSynthesis");
  }
     
  
}
function keyPressed() {
  if (keyCode === ESCAPE && settingsOpen) {
    settingsOpen = false;
    paused = false;
}
    if (key.toLowerCase() === 'p') {
        paused = !paused;
    }

    if (gameState === 'gameOver' && (key === 'r' || key === 'R')) {
        resetCurrentPhase();
        return;
    }

    if (key.toLowerCase() === 'v' && selectedTower) {
        const index = towers.indexOf(selectedTower);
        if (index !== -1) {

            let totalInvested = selectedTower.type.cost;
            const upgradeTree = CONFIG.upgradeTrees[selectedTower.type.special];

            for (const upgradeKey in selectedTower.upgradeLevels) {
                const purchasedLevels = selectedTower.upgradeLevels[upgradeKey];
                const node = upgradeTree[upgradeKey];

                if (node && node.cost) { 

                    for (let i = 0; i < purchasedLevels; i++) {
                        if (node.cost[i] !== undefined) { 
                            totalInvested += node.cost[i];
                        }
                    }
                }
            }


         
            const sellValue = Math.floor(totalInvested * 0.7); 
            CONFIG.player.gold += sellValue;
            floatingTexts.push(new FloatingText(selectedTower.pos.x, selectedTower.pos.y, `+${sellValue}G`, 'goldText'));

            towers.splice(index, 1);
            selectedTower = null;
        }
    }
}