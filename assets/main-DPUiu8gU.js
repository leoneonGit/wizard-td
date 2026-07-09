import{m as Yd,g as Lo,T as dh,P as Ap,h as Jg,j as Zd,k as Rp,A as Yg,c as Cp,n as en,b as Qr,a as ps,B as nr,D as Qd,C as Ir,R as Lr,p as Zg,o as Pp,l as Qg}from"./mapio-B6WRvNgJ.js";const Tc=1/60,uh=300,e0=350,t0=250;function n0(n,e,t){let i=performance.now(),s=0,r=performance.now();function a(c,l){const d=Math.min((c-i)/1e3,.25);i=c,s+=d*t();let u=0;for(;s>=Tc&&u<uh;)n(Tc),s-=Tc,u++;u===uh&&(s=0),e()}function o(c){r=c,a(c),requestAnimationFrame(o)}requestAnimationFrame(o),setInterval(()=>{const c=performance.now();c-r>e0&&a(c)},t0)}const nn={fire:{id:"fire",name:"Fire Mage",element:"fire",placement:"ground",family:"wizard",cost:100,desc:"Hurls fireballs. Splash damage, ignites enemies (Burn). Shatters Frozen foes.",range:130,rate:.95,damage:14,projSpeed:340,splash:34,chains:0,chainFalloff:0,color:"#ff6b35",icon:"🔥",upgrades:[{name:"Inferno",tiers:[{name:"Hotter Flames",cost:70,desc:"+6 damage",mod:{damage:6}},{name:"Searing Burn",cost:140,desc:"Burn +8 dps, +1s",mod:{burnDps:8,burnDuration:1}},{name:"Blast Wave",cost:320,desc:"+22 splash radius, +10 dmg",mod:{splash:22,damage:10}}]},{name:"Pyromancy",tiers:[{name:"Quick Cast",cost:80,desc:"20% faster attacks",mod:{rateMul:.8}},{name:"Far Sight",cost:120,desc:"+30 range",mod:{range:30}},{name:"Rapid Fire",cost:300,desc:"30% faster attacks",mod:{rateMul:.7}}]}]},ice:{id:"ice",name:"Frost Mage",element:"ice",placement:"ground",family:"wizard",cost:110,desc:"Chills and Soaks (Wet) enemies; stacked Chill Freezes. Enables Conduct & Shatter.",range:120,rate:.75,damage:7,projSpeed:300,splash:0,chains:0,chainFalloff:0,color:"#5bc8f5",icon:"❄️",upgrades:[{name:"Deep Freeze",tiers:[{name:"Bitter Cold",cost:70,desc:"Chill slows +15%",mod:{chillPct:.15}},{name:"Lasting Soak",cost:110,desc:"Wet lasts +3s",mod:{wetDuration:3}},{name:"Permafrost",cost:280,desc:"Chill slows +20%, +6 dmg",mod:{chillPct:.2,damage:6}}]},{name:"Glacier",tiers:[{name:"Ice Shards",cost:80,desc:"+5 damage",mod:{damage:5}},{name:"Frost Nova",cost:160,desc:"Attacks splash (26)",mod:{splash:26}},{name:"Winter Reach",cost:240,desc:"+35 range, faster cast",mod:{range:35,rateMul:.85}}]}]},lightning:{id:"lightning",name:"Storm Mage",element:"lightning",placement:"ground",family:"wizard",cost:140,desc:"Chain lightning arcs between enemies. Conducts brutally through Wet targets.",range:145,rate:1.15,damage:18,projSpeed:0,splash:0,chains:2,chainFalloff:.65,color:"#c77dff",icon:"⚡",upgrades:[{name:"Tempest",tiers:[{name:"Forked Bolt",cost:90,desc:"+1 chain target",mod:{chains:1}},{name:"High Voltage",cost:150,desc:"+10 damage",mod:{damage:10}},{name:"Storm Front",cost:340,desc:"+2 chain targets",mod:{chains:2}}]},{name:"Stormcalling",tiers:[{name:"Static Charge",cost:80,desc:"15% faster attacks",mod:{rateMul:.85}},{name:"Long Arc",cost:130,desc:"+35 range",mod:{range:35}},{name:"Overload",cost:320,desc:"+14 dmg, 15% faster",mod:{damage:14,rateMul:.85}}]}]},water:{id:"water",name:"Water Mage",element:"water",placement:"water",family:"wizard",auraKind:"tide",cost:120,desc:"Builds ONLY on water. Pulsing tide Soaks (Wet) and slows everything in range — the reaction engine.",range:115,rate:1.6,damage:8,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#3a86ff",icon:"🌊",upgrades:[{name:"Tides",tiers:[{name:"Undertow",cost:70,desc:"Slow +10%",mod:{soakSlow:.1}},{name:"Deep Soak",cost:120,desc:"Wet lasts +3s",mod:{wetDuration:3}},{name:"Riptide",cost:280,desc:"Slow +15%, +8 dmg",mod:{soakSlow:.15,damage:8}}]},{name:"Depths",tiers:[{name:"Swell",cost:80,desc:"+25 range",mod:{range:25}},{name:"Surge",cost:140,desc:"25% faster pulses",mod:{rateMul:.75}},{name:"Tsunami",cost:300,desc:"+12 dmg, +20 range",mod:{damage:12,range:20}}]}]},wind:{id:"wind",name:"Cloud Mage",element:"wind",placement:"ground",needsCloud:!0,family:"wizard",auraKind:"gust",cost:160,desc:"Rides the wind: only attacks while a cloud drifts nearby. Gusts hurl enemies BACKWARD along the path.",range:130,rate:2.2,damage:6,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#b8d8d0",icon:"☁️",upgrades:[{name:"Gale",tiers:[{name:"Stiff Breeze",cost:80,desc:"+25px knockback",mod:{knockback:25}},{name:"Squall",cost:150,desc:"+10 dmg",mod:{damage:10}},{name:"Hurricane",cost:320,desc:"+45px knockback",mod:{knockback:45}}]},{name:"Zephyr",tiers:[{name:"Second Wind",cost:90,desc:"20% faster gusts",mod:{rateMul:.8}},{name:"High Winds",cost:140,desc:"+30 range",mod:{range:30}},{name:"Jetstream",cost:300,desc:"30% faster gusts",mod:{rateMul:.7}}]}]},slingshot:{id:"slingshot",name:"Slingshot Goblin",element:"physical",placement:"ground",family:"goblin",cost:75,desc:"Cheap, fast, reliable. Physical damage always lands at full strength — no resistances apply.",range:110,rate:.6,damage:8,projSpeed:380,splash:0,chains:0,chainFalloff:0,color:"#a08060",icon:"🪨",upgrades:[{name:"Quickdraw",tiers:[{name:"Taut Cord",cost:60,desc:"+3 damage",mod:{damage:3}},{name:"Rapid Sling",cost:110,desc:"18% faster attacks",mod:{rateMul:.82}},{name:"Iron Shot",cost:240,desc:"+7 damage",mod:{damage:7}}]},{name:"Marksmanship",tiers:[{name:"Keen Eye",cost:60,desc:"+20 range",mod:{range:20}},{name:"Steady Hand",cost:100,desc:"+5 damage",mod:{damage:5}},{name:"Deadeye",cost:220,desc:"15% faster, +25 range",mod:{rateMul:.85,range:25}}]}]},dynamite:{id:"dynamite",name:"Dynamite Goblin",element:"fire",placement:"ground",family:"goblin",cost:95,desc:"Lobs sputtering dynamite for big splash damage and Burn. Shares fire’s strengths — and its counters.",range:100,rate:1.5,damage:10,projSpeed:220,splash:42,chains:0,chainFalloff:0,color:"#e0522f",icon:"🧨",upgrades:[{name:"Bigger Bangs",tiers:[{name:"Extra Fuse",cost:65,desc:"+5 damage",mod:{damage:5}},{name:"Shrapnel",cost:120,desc:"+16 splash radius",mod:{splash:16}},{name:"Volatile Mix",cost:260,desc:"Burn +6 dps, +1s",mod:{burnDps:6,burnDuration:1}}]},{name:"Munitions",tiers:[{name:"Quick Fuse",cost:70,desc:"20% faster throws",mod:{rateMul:.8}},{name:"Long Toss",cost:100,desc:"+20 range",mod:{range:20}},{name:"Blasting Cap",cost:250,desc:"+9 damage, +14 splash",mod:{damage:9,splash:14}}]}]},gong:{id:"gong",name:"Gong Goblin",element:"physical",placement:"ground",family:"goblin",auraKind:"rattle",cost:85,desc:"Support, not a damage dealer. Pulses a Rattling gong that makes nearby foes take extra damage from everything.",range:105,rate:3,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#c9a63f",icon:"🔔",upgrades:[{name:"Resonance",tiers:[{name:"Bigger Gong",cost:65,desc:"Rattled +8% damage taken",mod:{rattlePct:.08}},{name:"Echo",cost:110,desc:"+25 range",mod:{range:25}},{name:"Thunderous Peal",cost:240,desc:"Rattled +10% damage taken",mod:{rattlePct:.1}}]},{name:"Cadence",tiers:[{name:"Steady Beat",cost:70,desc:"20% faster pulses",mod:{rateMul:.8}},{name:"War Rhythm",cost:110,desc:"+20 range",mod:{range:20}},{name:"Relentless Toll",cost:230,desc:"25% faster pulses",mod:{rateMul:.75}}]}]},longbow:{id:"longbow",name:"Elf Longbow",element:"physical",placement:"ground",family:"archer",cost:110,desc:"Elven marksman. Enormous range, heavy single arrows — the sniper of the realm.",range:195,rate:2,damage:34,projSpeed:560,splash:0,chains:0,chainFalloff:0,color:"#7dc98f",icon:"🏹",upgrades:[{name:"Marksman",tiers:[{name:"Heavy Draw",cost:80,desc:"+12 damage",mod:{damage:12}},{name:"Eagle Eye",cost:130,desc:"+35 range",mod:{range:35}},{name:"Heartseeker",cost:320,desc:"+24 damage",mod:{damage:24}}]},{name:"Fleetness",tiers:[{name:"Swift Nock",cost:75,desc:"15% faster shots",mod:{rateMul:.85}},{name:"Windrunner",cost:140,desc:"20% faster shots",mod:{rateMul:.8}},{name:"Arrowstorm",cost:300,desc:"+10 dmg, 15% faster",mod:{damage:10,rateMul:.85}}]}]},ballesta:{id:"ballesta",name:"Human Ballesta",element:"physical",placement:"ground",family:"archer",pierce:!0,cost:100,desc:"Crank-loaded crossbow. Short range, but bolts PIERCE clean through everything in a line.",range:95,rate:1.2,damage:12,projSpeed:480,splash:0,chains:0,chainFalloff:0,color:"#5b7fc9",icon:"🎯",upgrades:[{name:"Penetration",tiers:[{name:"Steel Bolts",cost:70,desc:"+5 damage",mod:{damage:5}},{name:"Windlass",cost:130,desc:"20% faster reload",mod:{rateMul:.8}},{name:"Arbalest",cost:300,desc:"+12 damage",mod:{damage:12}}]},{name:"Fieldcraft",tiers:[{name:"Braced Stock",cost:65,desc:"+18 range",mod:{range:18}},{name:"Quick Hands",cost:120,desc:"15% faster reload",mod:{rateMul:.85}},{name:"Siege Position",cost:260,desc:"+30 range, +6 dmg",mod:{range:30,damage:6}}]}]},bolas:{id:"bolas",name:"Orc Trapper",element:"physical",placement:"ground",family:"archer",entangles:!0,cost:115,desc:"Hurls bolas that ENTANGLE — roots enemies in place. Pure lockdown; never disturbs your Freeze combos.",range:125,rate:1.8,damage:6,projSpeed:320,splash:0,chains:0,chainFalloff:0,color:"#8c9c72",icon:"🪢",upgrades:[{name:"Snares",tiers:[{name:"Heavier Weights",cost:75,desc:"Entangle +0.4s",mod:{entangleDur:.4}},{name:"Barbed Cords",cost:130,desc:"+8 damage",mod:{damage:8}},{name:"Master Trapper",cost:300,desc:"Entangle +0.6s",mod:{entangleDur:.6}}]},{name:"Warcraft",tiers:[{name:"Strong Arm",cost:70,desc:"+25 range",mod:{range:25}},{name:"Rapid Toss",cost:125,desc:"20% faster throws",mod:{rateMul:.8}},{name:"Twin Bolas",cost:280,desc:"25% faster, +5 dmg",mod:{rateMul:.75,damage:5}}]}]},rootgrasp:{id:"rootgrasp",name:"Rootgrasp Tree",element:"physical",placement:"ground",family:"tree",groundAttack:!0,cost:90,desc:"Roots erupt beneath enemies — no projectile to dodge, and every strike SLOWS.",range:110,rate:1.4,damage:9,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#6a8f4f",icon:"🌳",upgrades:[{name:"Deep Roots",tiers:[{name:"Gnarled Grip",cost:70,desc:"Slow +10% stronger",mod:{rootSlow:.1}},{name:"Thick Taproot",cost:120,desc:"+6 damage",mod:{damage:6}},{name:"Strangleroot",cost:280,desc:"Slow +15%, +6 dmg",mod:{rootSlow:.15,damage:6}}]},{name:"Overgrowth",tiers:[{name:"Spreading Roots",cost:75,desc:"+22 range",mod:{range:22}},{name:"Quickened Sap",cost:130,desc:"20% faster strikes",mod:{rateMul:.8}},{name:"Ancient Reach",cost:260,desc:"+30 range, +5 dmg",mod:{range:30,damage:5}}]}]},boulder:{id:"boulder",name:"Boulder Tree",element:"physical",placement:"ground",family:"tree",cost:105,desc:"An old ent that hurls boulders. Slow, furious, and the splash flattens whole clumps.",range:135,rate:2.6,damage:24,projSpeed:210,splash:46,chains:0,chainFalloff:0,color:"#8d7a5e",icon:"🪨",upgrades:[{name:"Avalanche",tiers:[{name:"Bigger Rocks",cost:80,desc:"+10 damage",mod:{damage:10}},{name:"Wide Impact",cost:140,desc:"+16 splash radius",mod:{splash:16}},{name:"Meteor Toss",cost:320,desc:"+18 dmg, +12 splash",mod:{damage:18,splash:12}}]},{name:"Old Growth",tiers:[{name:"Long Arms",cost:70,desc:"+25 range",mod:{range:25}},{name:"Limber Boughs",cost:130,desc:"20% faster throws",mod:{rateMul:.8}},{name:"Wrath of Ages",cost:300,desc:"25% faster throws",mod:{rateMul:.75}}]}]},thornspitter:{id:"thornspitter",name:"Thornspitter",element:"physical",placement:"ground",family:"tree",cost:95,desc:'A bristling bush that machine-guns needles — the fastest attacker in the realm. Loves "every Nth shot" cards.',range:100,rate:.25,damage:3,projSpeed:450,splash:0,chains:0,chainFalloff:0,color:"#4f8f5c",icon:"🌵",upgrades:[{name:"Bristles",tiers:[{name:"Sharper Thorns",cost:70,desc:"+2 damage",mod:{damage:2}},{name:"Dense Quills",cost:130,desc:"15% faster spray",mod:{rateMul:.85}},{name:"Ironwood Barbs",cost:300,desc:"+4 damage",mod:{damage:4}}]},{name:"Wildgrowth",tiers:[{name:"Tall Canes",cost:65,desc:"+20 range",mod:{range:20}},{name:"Feverish Growth",cost:125,desc:"15% faster spray",mod:{rateMul:.85}},{name:"Bramble Storm",cost:280,desc:"+2 dmg, +20 range",mod:{damage:2,range:20}}]}]},voidgazer:{id:"voidgazer",name:"Voidgazer",element:"void",placement:"ground",family:"void",cost:130,desc:"A dark watcher from between the stars. Its red gaze burns single targets with searing lasers.",range:150,rate:1.1,damage:26,projSpeed:900,splash:0,chains:0,chainFalloff:0,color:"#e34bb2",icon:"👁️",upgrades:[{name:"Death Ray",tiers:[{name:"Focused Beam",cost:90,desc:"+10 damage",mod:{damage:10}},{name:"Burning Gaze",cost:170,desc:"+14 damage",mod:{damage:14}},{name:"Annihilation",cost:360,desc:"+24 dmg, +15 range",mod:{damage:24,range:15}}]},{name:"Ever-Open Eye",tiers:[{name:"Quick Glance",cost:85,desc:"15% faster attacks",mod:{rateMul:.85}},{name:"Far Stare",cost:130,desc:"+35 range",mod:{range:35}},{name:"Unblinking",cost:320,desc:"25% faster attacks",mod:{rateMul:.75}}]}]},voidsylph:{id:"voidsylph",name:"Void Sylph",element:"void",placement:"ground",family:"void",cost:120,desc:"A dark fairy whose telekinesis plucks at ANY enemy on the map — nowhere to hide, but her touch is light.",range:9999,rate:.9,damage:6,projSpeed:420,splash:0,chains:0,chainFalloff:0,ignoreLOS:!0,color:"#ff5fc8",icon:"🧚",upgrades:[{name:"Puppeteer",tiers:[{name:"Firmer Grip",cost:80,desc:"+3 damage",mod:{damage:3}},{name:"Twin Threads",cost:160,desc:"+4 damage",mod:{damage:4}},{name:"Marionette",cost:340,desc:"+7 damage",mod:{damage:7}}]},{name:"Restless Hands",tiers:[{name:"Deft Fingers",cost:85,desc:"15% faster attacks",mod:{rateMul:.85}},{name:"Frantic Pace",cost:150,desc:"20% faster attacks",mod:{rateMul:.8}},{name:"Thousand Hands",cost:330,desc:"25% faster attacks",mod:{rateMul:.75}}]}]},voidmaw:{id:"voidmaw",name:"Voidmaw",element:"void",placement:"ground",family:"void",cost:125,desc:"A dark drake that exhales gouts of dark-red fire. Devastating splash, but only at arm's length.",range:85,rate:1.3,damage:20,projSpeed:520,splash:55,chains:0,chainFalloff:0,color:"#c936a4",icon:"🐉",upgrades:[{name:"Dark Furnace",tiers:[{name:"Hotter Coals",cost:90,desc:"+8 damage",mod:{damage:8}},{name:"Wider Gout",cost:160,desc:"+18 splash radius",mod:{splash:18}},{name:"Conflagration",cost:350,desc:"+16 dmg, +12 splash",mod:{damage:16,splash:12}}]},{name:"Long Neck",tiers:[{name:"Stretch",cost:80,desc:"+20 range",mod:{range:20}},{name:"Quick Snap",cost:140,desc:"15% faster attacks",mod:{rateMul:.85}},{name:"Serpent Reach",cost:300,desc:"+30 range, +8 dmg",mod:{range:30,damage:8}}]}]},generic_wizard:{id:"generic_wizard",name:"Wizard",element:"physical",placement:"any",family:"wizard",isGeneric:!0,cost:90,desc:"An unproven apprentice. Place, then click to specialize into a random draw of elements.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#8a7aff",icon:"🧙",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]},generic_goblin:{id:"generic_goblin",name:"Goblin",element:"physical",placement:"ground",family:"goblin",isGeneric:!0,cost:75,desc:"A goblin recruit, itching for a job. Place, then click to specialize into a random draw of roles.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#7da35c",icon:"👺",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]},generic_archer:{id:"generic_archer",name:"Archer",element:"physical",placement:"ground",family:"archer",isGeneric:!0,cost:85,desc:"A fresh recruit with a training bow. Place, then click to specialize into a random draw of marksmen.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#c9a55b",icon:"🏹",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]},generic_void:{id:"generic_void",name:"Voidling",element:"void",placement:"ground",family:"void",isGeneric:!0,cost:95,desc:"Something that fell from between the stars. Place, then click to reveal what it truly is.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#b455d6",icon:"🌌",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]},generic_tree:{id:"generic_tree",name:"Sapling",element:"physical",placement:"ground",family:"tree",isGeneric:!0,cost:70,desc:"A drowsy young ent. Place, then click to awaken it into a random draw of tree-folk.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#5f9e57",icon:"🌱",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]}},Pl=["generic_wizard","generic_goblin","generic_archer","generic_tree","generic_void"];function i0(n){return Object.values(nn).filter(e=>e.family===n&&!e.isGeneric&&!e.isEvolved)}const s0=[{name:"—",tiers:[]},{name:"—",tiers:[]}],Ip={fire:{to:"phoenix",cost:380,cardId:"pr_wildfire"},ice:{to:"wintercourt",cost:380,cardId:"pr_executioner"},lightning:{to:"tempest",cost:400,cardId:"rx_conduct2"},water:{to:"tidelord",cost:350,cardId:"pr_soaked"},wind:{to:"zephyr",cost:350,cardId:"rx_evap1"},slingshot:{to:"warlord",cost:340,cardId:"pr_firstblood"},dynamite:{to:"sapperking",cost:380,cardId:"pr_powder"},gong:{to:"doomgong",cost:360,cardId:"pr_opportunist"},longbow:{to:"stormpiercer",cost:400,cardId:"arc_crit1"},ballesta:{to:"ironstorm",cost:360,cardId:"arc_root1"},bolas:{to:"chainwarden",cost:350,cardId:"arc_root1"},rootgrasp:{to:"elderroot",cost:360,cardId:"tre_crit1"},boulder:{to:"mountain",cost:400,cardId:"pr_harvest"},thornspitter:{to:"bramblehydra",cost:380,cardId:"tre_crit1"}};function an(n,e){const t=nn[n];return{element:t.element,placement:t.placement,family:t.family,cost:0,range:t.range,rate:t.rate,damage:t.damage,projSpeed:t.projSpeed,splash:t.splash,chains:t.chains,chainFalloff:t.chainFalloff,needsCloud:t.needsCloud,auraKind:t.auraKind,pierce:t.pierce,entangles:t.entangles,groundAttack:t.groundAttack,isEvolved:!0,upgrades:s0,...e}}Object.assign(nn,{phoenix:an("fire",{id:"phoenix",name:"Phoenix Herald",icon:"🐦‍🔥",color:"#ff8c42",desc:"EVOLVED. Fire made flesh — victims pass their flames on death, forever.",damage:26,rate:.75,splash:44,range:145,projSpeed:340,baseMods:{burnDps:5,burnDuration:1},innateFx:{spreadBurnOnDeath:!0}}),wintercourt:an("ice",{id:"wintercourt",name:"Winter Court Sage",icon:"👑",color:"#a8e6ff",desc:"EVOLVED. The deep cold answers — Frozen enemies take +60% from her hand.",damage:15,rate:.6,range:155,projSpeed:400,baseMods:{chillPct:.15},innateFx:{bonusVsStatus:{status:"frozen",mult:1.6}}}),tempest:an("lightning",{id:"tempest",name:"Tempest Lord",icon:"🌩️",color:"#d9a8ff",desc:"EVOLVED. The storm has opinions. Every 5th bolt is a CRIT; chains run long.",damage:32,rate:.9,range:165,chains:4,chainFalloff:.8,innateFx:{critEveryN:{n:5,mult:2}}}),tidelord:an("water",{id:"tidelord",name:"Tidelord",icon:"🔱",color:"#26c2e8",desc:"EVOLVED. The pond obeys. Wet enemies take +50% from the tide.",damage:11,rate:.8,range:150,baseMods:{soakSlow:.1,wetDuration:2},innateFx:{bonusVsStatus:{status:"wet",mult:1.5}}}),zephyr:an("wind",{id:"zephyr",name:"Zephyr Sovereign",icon:"🌀",color:"#bcd9ce",desc:"EVOLVED. Commands the wind itself — no cloud required, and the gusts hit like walls.",damage:9,rate:1,range:140,needsCloud:!1,baseMods:{knockback:40}}),warlord:an("slingshot",{id:"warlord",name:"Goblin Warlord",icon:"👹",color:"#7da35c",desc:"EVOLVED. His shots pierce through the whole column. The lads cheer every volley.",damage:18,rate:.7,range:130,pierce:!0,projSpeed:460}),sapperking:an("dynamite",{id:"sapperking",name:"Sapper King",icon:"💥",color:"#ffb163",desc:"EVOLVED. Everything he kills becomes a bomb. Chain reactions are the point.",damage:32,rate:1,splash:62,range:135,innateFx:{onKillExplode:{damage:26,radius:52}}}),doomgong:an("gong",{id:"doomgong",name:"Gong of Doom",icon:"🛎️",color:"#f4d98a",desc:"EVOLVED. One strike and the whole field flinches — Rattled +40%, huge reach.",rate:1.6,range:160,baseMods:{rattlePct:.15}}),stormpiercer:an("longbow",{id:"stormpiercer",name:"Stormpiercer",icon:"🏹",color:"#7dc98f",desc:"EVOLVED. An elven legend. Every 3rd arrow CRITS for double across half the map.",damage:55,rate:1.5,range:240,projSpeed:650,innateFx:{critEveryN:{n:3,mult:2}}}),ironstorm:an("ballesta",{id:"ironstorm",name:"Ironstorm Arbalest",icon:"🎯",color:"#5b7fc9",desc:"EVOLVED. A crank-fed storm of bolts, each punching through the entire line.",damage:20,rate:.65,range:115,projSpeed:540}),chainwarden:an("bolas",{id:"chainwarden",name:"Warden of Chains",icon:"⛓️",color:"#8c9c72",desc:"EVOLVED. Longer roots, crueler hits — Entangled enemies take +50% from him.",damage:12,rate:1.3,range:145,baseMods:{entangleDur:.5},innateFx:{bonusVsStatus:{status:"entangled",mult:1.5}}}),elderroot:an("rootgrasp",{id:"elderroot",name:"Elderroot Colossus",icon:"🌲",color:"#4c6b38",desc:"EVOLVED. The forest remembers. Wider eruptions, crushing grip.",damage:17,rate:1.1,range:135,baseMods:{rootSlow:.15}}),mountain:an("boulder",{id:"mountain",name:"The Walking Mountain",icon:"⛰️",color:"#8d7a5e",desc:"EVOLVED. Every kill splinters into shrapnel. Whole waves vanish under the rubble.",damage:42,rate:2.2,splash:62,range:150,projSpeed:240,innateFx:{onKillExplode:{damage:20,radius:48}}}),bramblehydra:an("thornspitter",{id:"bramblehydra",name:"Bramble Hydra",icon:"🐉",color:"#6fcf5f",desc:"EVOLVED. Two heads, twice the needles, zero mercy. The ultimate proc machine.",damage:4,rate:.125,range:115,projSpeed:500})});function Lp(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Il=[[[{type:"grunt",count:8,gap:.9,delay:0}],[{type:"grunt",count:13,gap:.7,delay:0}],[{type:"grunt",count:10,gap:.65,delay:0},{type:"runner",count:5,gap:.8,delay:3}],[{type:"runner",count:15,gap:.5,delay:0}],[{type:"knight",count:6,gap:1.3,delay:0},{type:"grunt",count:9,gap:.55,delay:4}],[{type:"golemling",count:1,gap:0,delay:0},{type:"shade",count:9,gap:.85,delay:2}],[{type:"gargoyle",count:2,gap:2,delay:0},{type:"runner",count:12,gap:.45,delay:2},{type:"orcraider",count:6,gap:.7,delay:4},{type:"knight",count:4,gap:1.1,delay:7}],[{type:"warlord",count:1,gap:0,delay:0},{type:"knight",count:4,gap:1.6,delay:5},{type:"grunt",count:8,gap:.6,delay:9}]],[[{type:"orcraider",count:12,gap:.55,delay:0},{type:"runner",count:6,gap:.6,delay:4}],[{type:"shade",count:10,gap:.7,delay:0},{type:"orcbrute",count:2,gap:3,delay:4},{type:"slime_big",count:2,gap:5,delay:2}],[{type:"orcraider",count:10,gap:.5,delay:0},{type:"orcshaman",count:1,gap:0,delay:2},{type:"gargoyle",count:4,gap:1.2,delay:3},{type:"knight",count:6,gap:.9,delay:4}],[{type:"runner",count:24,gap:.32,delay:0},{type:"burrower",count:3,gap:1.5,delay:3},{type:"thief",count:1,gap:0,delay:5}],[{type:"warwagon",count:1,gap:0,delay:0},{type:"hexer",count:1,gap:0,delay:2},{type:"shade",count:8,gap:.7,delay:3}],[{type:"knight",count:8,gap:.8,delay:0},{type:"orcshaman",count:2,gap:6,delay:2},{type:"frostshaman",count:1,gap:0,delay:3},{type:"gargoyle",count:5,gap:1,delay:3},{type:"orcraider",count:12,gap:.45,delay:4}],[{type:"runner",count:14,gap:.4,delay:0},{type:"orcbrute",count:3,gap:2.5,delay:3},{type:"slime_big",count:2,gap:4,delay:5},{type:"thief",count:1,gap:0,delay:6},{type:"golemling",count:1,gap:0,delay:7}],[{type:"warwagon",count:2,gap:9,delay:0},{type:"hexer",count:2,gap:7,delay:2},{type:"shade",count:10,gap:.6,delay:3}],[{type:"orcraider",count:16,gap:.35,delay:0},{type:"orcshaman",count:2,gap:5,delay:2},{type:"frostshaman",count:2,gap:8,delay:2},{type:"gargoyle",count:6,gap:.9,delay:3},{type:"shieldbearer",count:1,gap:0,delay:4},{type:"burrower",count:4,gap:1.4,delay:5},{type:"knight",count:6,gap:.9,delay:9}],[{type:"pyretitan",count:1,gap:0,delay:0},{type:"orcshaman",count:1,gap:0,delay:4},{type:"gargoyle",count:4,gap:1.1,delay:5},{type:"orcraider",count:10,gap:.5,delay:6}]],[[{type:"orcraider",count:14,gap:.5,delay:0},{type:"wardrummer",count:1,gap:0,delay:2},{type:"shieldbearer",count:1,gap:0,delay:3},{type:"orcbrute",count:2,gap:3,delay:4}],[{type:"wraith",count:6,gap:1,delay:0},{type:"banshee",count:2,gap:4,delay:2},{type:"mirrorslime",count:1,gap:0,delay:3},{type:"runner",count:12,gap:.4,delay:4}],[{type:"troll",count:1,gap:0,delay:0},{type:"hexer",count:2,gap:6,delay:2},{type:"knight",count:8,gap:.8,delay:3}],[{type:"siegetower",count:1,gap:0,delay:0},{type:"drake",count:3,gap:1.4,delay:3},{type:"shade",count:10,gap:.6,delay:4}],[{type:"orcraider",count:18,gap:.35,delay:0},{type:"orcshaman",count:2,gap:5,delay:2},{type:"necromancer",count:1,gap:0,delay:3},{type:"slime_big",count:2,gap:4,delay:4},{type:"wardrummer",count:1,gap:0,delay:5},{type:"orcbrute",count:3,gap:2.5,delay:6}],[{type:"troll",count:2,gap:8,delay:0},{type:"frostshaman",count:2,gap:7,delay:1},{type:"drake",count:4,gap:1.2,delay:2},{type:"banshee",count:2,gap:4,delay:3},{type:"wraith",count:6,gap:.9,delay:3}],[{type:"siegetower",count:1,gap:0,delay:0},{type:"warwagon",count:1,gap:0,delay:8},{type:"necromancer",count:2,gap:8,delay:2},{type:"thief",count:2,gap:5,delay:3},{type:"knight",count:8,gap:.7,delay:4}],[{type:"wraith",count:8,gap:.7,delay:0},{type:"drake",count:4,gap:1.1,delay:1},{type:"orcshaman",count:2,gap:5,delay:2},{type:"shieldbearer",count:1,gap:0,delay:3},{type:"burrower",count:5,gap:1.2,delay:4},{type:"mirrorslime",count:2,gap:7,delay:5},{type:"troll",count:1,gap:0,delay:6},{type:"runner",count:12,gap:.4,delay:8}],[{type:"siegetower",count:2,gap:12,delay:0},{type:"wardrummer",count:2,gap:8,delay:2},{type:"frostshaman",count:2,gap:9,delay:2},{type:"necromancer",count:2,gap:9,delay:3},{type:"banshee",count:3,gap:3,delay:3},{type:"orcraider",count:16,gap:.35,delay:4},{type:"drake",count:5,gap:1,delay:6},{type:"mirrorslime",count:2,gap:8,delay:7},{type:"orcbrute",count:4,gap:2.2,delay:8}],[{type:"colossus",count:1,gap:0,delay:0},{type:"orcshaman",count:2,gap:6,delay:4},{type:"shieldbearer",count:2,gap:8,delay:5},{type:"troll",count:1,gap:0,delay:8},{type:"drake",count:4,gap:1.2,delay:10},{type:"wraith",count:6,gap:.8,delay:12}]]],Dp=Il.length;function eu(n){return cc(n).length}const ir=[{hp:1,speed:1,bounty:1},{hp:2,speed:1.08,bounty:1.35},{hp:3.4,speed:1.15,bounty:1.7}],r0=.08;function cc(n){return Il[Math.min(n,Il.length-1)]}const a0=25,o0=3,Do=[{id:"enraged",name:"Enraged",desc:"+40% speed",speedMult:1.4},{id:"stoneskin",name:"Stoneskin",desc:"+60% health",hpMult:1.6},{id:"slippery",name:"Slippery",desc:"Immune to Wet",immune:["wet"]},{id:"fireproof",name:"Fireproof",desc:"Immune to Burn",immune:["burn"]},{id:"steadfast",name:"Steadfast",desc:"Immune to knockback",gustImmune:!0}],Fp="wizardtd.meta",Np={startGold:0,startLives:0,rerollTokens:0,bountyPct:0,founderDiscount:!1,widerDraft:!1,trove:!1,attuneElement:null,attunePct:0},Up=[{id:"deep_pockets",name:"Deep Pockets",icon:"💰",desc:n=>`Start each run with +${(n+1)*10} gold`,costs:[40,60,90]},{id:"thick_roots",name:"Thick Roots",icon:"🌱",desc:n=>`Start each run with +${(n+1)*2} lives`,costs:[40,60,90]},{id:"founder",name:"Founder's Discount",icon:"🏗️",desc:()=>"Your first tower each run costs 25% less",costs:[50]},{id:"reroll",name:"Draft Reroll",icon:"🎲",desc:n=>`Start each run with ${n+1} draft reroll token${n>0?"s":""}`,costs:[60,100]},{id:"bounty",name:"Bounty Hunter",icon:"🪙",desc:n=>`+${(n+1)*5}% gold from kills`,costs:[70,110]},{id:"attune",name:"Elemental Attunement",icon:"✨",desc:n=>`Towers of your attuned element deal +${(n+1)*5}% damage`,costs:[80,120]},{id:"wider_draft",name:"Wider Draft",icon:"🃏",desc:()=>"Card drafts offer 4 choices instead of 3",costs:[120]},{id:"trove",name:"Treasure Trove",icon:"💎",desc:()=>"Treasure waves offer 3 relic choices instead of 2",costs:[150]}];function Ma(){return{v:1,essence:0,lifetimeEssence:0,perks:{},attunedElement:null}}function ms(){try{const n=localStorage.getItem(Fp);if(!n)return Ma();const e=JSON.parse(n);return typeof e.essence!="number"||!e.perks?Ma():{...Ma(),...e}}catch{return Ma()}}function tu(n){try{localStorage.setItem(Fp,JSON.stringify(n))}catch{}}function c0(n,e){n.essence+=e,n.lifetimeEssence+=e,tu(n)}function lc(n,e){return n.perks[e]??0}function kp(n,e){const t=lc(n,e.id);return t>=e.costs.length?null:e.costs[t]}function l0(n,e){const t=Up.find(s=>s.id===e);if(!t)return!1;const i=kp(n,t);return i===null||n.essence<i?!1:(n.essence-=i,n.perks[e]=lc(n,e)+1,tu(n),!0)}function nu(n){const e=t=>lc(n,t);return{startGold:e("deep_pockets")*10,startLives:e("thick_roots")*2,rerollTokens:e("reroll"),bountyPct:e("bounty")*5,founderDiscount:e("founder")>0,widerDraft:e("wider_draft")>0,trove:e("trove")>0,attuneElement:e("attune")>0?n.attunedElement:null,attunePct:e("attune")*5}}function d0(n,e,t){const i=t?3:e;return n.wavesCleared*2+i*15+(t?40:0)}const iu=[{id:"fire_dmg1",name:"Searing Flames",desc:"All Fire Mages +4 damage",icon:"🔥",element:"fire",rarity:"common",mod:{damage:4}},{id:"fire_rate1",name:"Kindled Haste",desc:"Fire Mages attack 12% faster",icon:"🔥",element:"fire",rarity:"common",mod:{rateMul:.88}},{id:"fire_burn1",name:"Lingering Embers",desc:"Burn +4/s and lasts +1s",icon:"🔥",element:"fire",rarity:"uncommon",mod:{burnDps:4,burnDuration:1}},{id:"fire_splash1",name:"Bigger Booms",desc:"Fire splash radius +14",icon:"🔥",element:"fire",rarity:"uncommon",mod:{splash:14}},{id:"fire_dmg2",name:"Inferno Core",desc:"All Fire Mages +9 damage",icon:"🔥",element:"fire",rarity:"rare",mod:{damage:9}},{id:"ice_chill1",name:"Deeper Cold",desc:"Chill slows +20% more",icon:"❄️",element:"ice",rarity:"rare",mod:{chillPct:.2}},{id:"ice_dmg1",name:"Jagged Icicles",desc:"All Frost Mages +3 damage",icon:"❄️",element:"ice",rarity:"common",mod:{damage:3}},{id:"ice_wet1",name:"Soaking Sleet",desc:"Frost Wet lasts +2s",icon:"❄️",element:"ice",rarity:"common",mod:{wetDuration:2}},{id:"ice_rate1",name:"Flash Freeze",desc:"Frost Mages attack 15% faster",icon:"❄️",element:"ice",rarity:"uncommon",mod:{rateMul:.85}},{id:"ice_range1",name:"Glacial Reach",desc:"Frost Mages +22 range",icon:"❄️",element:"ice",rarity:"uncommon",mod:{range:22}},{id:"ltn_dmg1",name:"Amped Bolts",desc:"All Storm Mages +5 damage",icon:"⚡",element:"lightning",rarity:"common",mod:{damage:5}},{id:"ltn_chain1",name:"Forked Streams",desc:"Chain lightning +1 target",icon:"⚡",element:"lightning",rarity:"uncommon",mod:{chains:1}},{id:"ltn_range1",name:"Skyline Arcs",desc:"Storm Mages +25 range",icon:"⚡",element:"lightning",rarity:"common",mod:{range:25}},{id:"ltn_rate1",name:"Static Rhythm",desc:"Storm Mages attack 12% faster",icon:"⚡",element:"lightning",rarity:"uncommon",mod:{rateMul:.88}},{id:"void_dmg1",name:"Umbral Edge",desc:"All Void towers +4 damage",icon:"🌌",element:"void",rarity:"common",mod:{damage:4}},{id:"void_rate1",name:"Dark Resonance",desc:"Void towers attack 12% faster",icon:"🌌",element:"void",rarity:"common",mod:{rateMul:.88}},{id:"void_range1",name:"Deep Gaze",desc:"Void towers +20 range",icon:"👁️",element:"void",rarity:"uncommon",mod:{range:20}},{id:"void_splash1",name:"Hungering Maw",desc:"Void splash radius +14",icon:"🕳️",element:"void",rarity:"uncommon",mod:{splash:14}},{id:"void_dmg2",name:"Event Horizon",desc:"All Void towers +9 damage",icon:"🌌",element:"void",rarity:"rare",mod:{damage:9}},{id:"wnd_kb1",name:"Tailwind",desc:"Gust knockback +20px",icon:"☁️",element:"wind",rarity:"common",mod:{knockback:20}},{id:"wnd_rate1",name:"Brisk Gales",desc:"Cloud Mages gust 15% faster",icon:"☁️",element:"wind",rarity:"uncommon",mod:{rateMul:.85}},{id:"wnd_range1",name:"Far Horizons",desc:"Cloud Mages +25 range",icon:"☁️",element:"wind",rarity:"common",mod:{range:25}},{id:"rx_conduct1",name:"Overcharge",desc:"Conduct deals 2.0x (was 1.6x)",icon:"💫",element:"all",rarity:"rare",unique:!0,reaction:{conductMult:2}},{id:"rx_conduct2",name:"Superconductor",desc:"Conduct extends chains by 3 (was 1)",icon:"💫",element:"all",rarity:"rare",unique:!0,reaction:{chainBonus:3}},{id:"rx_shatter1",name:"Brittle Frost",desc:"Shatter deals 2.6x (was 2.0x)",icon:"💎",element:"all",rarity:"rare",unique:!0,reaction:{shatterMult:2.6}},{id:"rx_freeze1",name:"Permafrost Grip",desc:"Freeze lasts 1.7s (was 1.1s)",icon:"🧊",element:"all",rarity:"uncommon",unique:!0,reaction:{freezeDuration:1.7}},{id:"rx_evap1",name:"Steam Burst",desc:"Evaporate burst 10 → 26 damage",icon:"♨️",element:"all",rarity:"uncommon",unique:!0,reaction:{evaporateBurst:26}},{id:"eco_gold1",name:"Windfall",desc:"+60 gold, right now",icon:"💰",element:"all",rarity:"common",econ:{goldNow:60}},{id:"eco_gold2",name:"Royal Grant",desc:"+140 gold, right now",icon:"💰",element:"all",rarity:"uncommon",econ:{goldNow:140}},{id:"eco_bounty1",name:"Bounty Board",desc:"+1 gold per kill",icon:"🪙",element:"all",rarity:"uncommon",econ:{bountyBonus:1}},{id:"eco_bounty2",name:"Head Hunter",desc:"+2 gold per kill",icon:"🪙",element:"all",rarity:"rare",unique:!0,econ:{bountyBonus:2}},{id:"eco_disc1",name:"Guild Discount",desc:"Towers cost 12% less",icon:"🏷️",element:"all",rarity:"uncommon",unique:!0,econ:{towerDiscountPct:12}},{id:"eco_interest1",name:"Compound Interest",desc:"Wave end: +1 gold per 15 held (max +30)",icon:"🏦",element:"all",rarity:"rare",unique:!0,fx:{interest:{per:15,cap:30}}},{id:"eco_trophy1",name:"Trophy Hunter",desc:"Kills have a 15% chance to drop +3 bonus gold",icon:"🏆",element:"all",rarity:"uncommon",unique:!0,fx:{onKillGold:{chance:.15,amount:3}}},{id:"arc_dmg1",name:"Bodkin Points",desc:"All Archers +4 damage",icon:"🏹",element:"physical",family:"archer",rarity:"common",mod:{damage:4}},{id:"arc_range1",name:"Watchtower Drills",desc:"All Archers +18 range",icon:"🏹",element:"physical",family:"archer",rarity:"common",mod:{range:18}},{id:"arc_rate1",name:"Nimble Fingers",desc:"Archers attack 12% faster",icon:"🏹",element:"physical",family:"archer",rarity:"uncommon",mod:{rateMul:.88}},{id:"arc_crit1",name:"Overdraw",desc:"Every 4th Archer shot CRITS for 2.5x",icon:"🎯",element:"physical",family:"archer",rarity:"rare",unique:!0,fx:{critEveryN:{n:4,mult:2.5}}},{id:"arc_root1",name:"Cruel Snares",desc:"Archer damage +40% vs Entangled enemies",icon:"🪢",element:"physical",family:"archer",rarity:"uncommon",unique:!0,fx:{bonusVsStatus:{status:"entangled",mult:1.4}}},{id:"tre_dmg1",name:"Heartwood",desc:"All Tree-folk +3 damage",icon:"🌳",element:"physical",family:"tree",rarity:"common",mod:{damage:3}},{id:"tre_range1",name:"Elder Boughs",desc:"All Tree-folk +16 range",icon:"🌳",element:"physical",family:"tree",rarity:"common",mod:{range:16}},{id:"tre_rate1",name:"Rising Sap",desc:"Tree-folk attack 12% faster",icon:"🌳",element:"physical",family:"tree",rarity:"uncommon",mod:{rateMul:.88}},{id:"tre_crit1",name:"Thorn Volley",desc:"Every 6th Tree-folk attack CRITS for 3x",icon:"🌵",element:"physical",family:"tree",rarity:"rare",unique:!0,fx:{critEveryN:{n:6,mult:3}}},{id:"pr_adrenaline",name:"Adrenaline Surge",desc:"Every 10s, ALL towers frenzy: 2x attack speed for 3s",icon:"🫀",element:"all",rarity:"rare",unique:!0,fx:{frenzy:{period:10,duration:3,rateMul:.5}}},{id:"pr_warhymn",name:"Goblin War-Hymn",desc:"Every 8s, Goblins frenzy: 2x attack speed for 2.5s",icon:"🥁",element:"physical",family:"goblin",rarity:"uncommon",fx:{frenzy:{period:8,duration:2.5,rateMul:.5}}},{id:"pr_powder",name:"Powder Trail",desc:"Enemies killed by Goblins EXPLODE (30 dmg, small area)",icon:"🧨",element:"physical",family:"goblin",rarity:"rare",unique:!0,fx:{onKillExplode:{damage:30,radius:55}}},{id:"pr_wildfire",name:"Wildfire",desc:"Burning enemies pass their Burn to a neighbor on death",icon:"🔥",element:"fire",rarity:"rare",unique:!0,fx:{spreadBurnOnDeath:!0}},{id:"pr_harvest",name:"Soul Harvest",desc:"Every kill: ALL damage +0.2%, forever (max +30%)",icon:"👻",element:"all",rarity:"rare",unique:!0,fx:{onKillStackDamage:{pct:.2,capPct:30}}},{id:"pr_opportunist",name:"Opportunist",desc:"All damage +40% vs Rattled enemies",icon:"🎯",element:"all",rarity:"uncommon",unique:!0,fx:{bonusVsStatus:{status:"rattled",mult:1.4}}},{id:"pr_executioner",name:"Executioner",desc:"All damage +75% vs Frozen enemies",icon:"⚔️",element:"all",rarity:"rare",unique:!0,fx:{bonusVsStatus:{status:"frozen",mult:1.75}}},{id:"pr_firstblood",name:"First Blood",desc:"Physical damage +30% vs full-health enemies",icon:"🩸",element:"physical",rarity:"uncommon",unique:!0,fx:{bonusVsHealthy:{threshold:.99,mult:1.3}}},{id:"pr_soaked",name:"Riptide Predator",desc:"Lightning damage +35% vs Wet enemies",icon:"🌩️",element:"lightning",rarity:"uncommon",unique:!0,fx:{bonusVsStatus:{status:"wet",mult:1.35}}},{id:"pr_skywatch",name:"Skywatch",desc:"ALL towers deal +25% damage to FLYING enemies",icon:"🦅",element:"all",rarity:"uncommon",unique:!0,fx:{bonusVsFlying:{mult:1.25}}},{id:"pr_skywatch2",name:"Skywatch 2",desc:"ALL towers deal +50% damage to FLYING enemies",icon:"🦅",element:"all",rarity:"rare",unique:!0,fx:{bonusVsFlying:{mult:1.5}}}],u0={common:60,uncommon:30,rare:10},Op=25,Bp=[{id:"frozen_core",name:"Frozen Core",icon:"🧊",rarity:"rare",desc:"Enemies arrive with a chill in their bones (1 chill stack on spawn).",special:["spawnChill"]},{id:"cursed_hourglass",name:"Cursed Hourglass",icon:"⏳",rarity:"rare",desc:"Drafts show 4 cards — but enemies move 10% faster.",special:["draft4","hasteEnemies"]},{id:"blood_chalice",name:"Blood Chalice",icon:"🍷",rarity:"rare",desc:"Every 40 kills restores 1 life.",special:["killLives"]},{id:"sharpening_stone",name:"Sharpening Stone",icon:"🪨",rarity:"uncommon",desc:"ALL towers +2 damage.",payload:{id:"relic_sharp",name:"Sharpening Stone",desc:"",icon:"🪨",element:"all",rarity:"rare",mod:{damage:2}}},{id:"eagle_standard",name:"Eagle Standard",icon:"🦅",rarity:"uncommon",desc:"ALL towers +12 range.",payload:{id:"relic_eagle",name:"Eagle Standard",desc:"",icon:"🦅",element:"all",rarity:"rare",mod:{range:12}}},{id:"war_banner",name:"War Banner",icon:"🚩",rarity:"uncommon",desc:"Physical towers (goblins, archers, tree-folk) attack 8% faster.",payload:{id:"relic_banner",name:"War Banner",desc:"",icon:"🚩",element:"physical",rarity:"rare",mod:{rateMul:.92}}},{id:"molten_heart",name:"Molten Heart",icon:"🌋",rarity:"rare",desc:"Burn ticks +3/s and last +1s.",payload:{id:"relic_molten",name:"Molten Heart",desc:"",icon:"🌋",element:"fire",rarity:"rare",mod:{burnDps:3,burnDuration:1}}},{id:"storm_prism",name:"Storm Prism",icon:"🔮",rarity:"rare",desc:"Conduct deals 2.0x (up from 1.6x).",payload:{id:"relic_prism",name:"Storm Prism",desc:"",icon:"🔮",element:"all",rarity:"rare",reaction:{conductMult:2}}},{id:"golden_idol",name:"Golden Idol",icon:"🗿",rarity:"uncommon",desc:"+1 gold per kill.",payload:{id:"relic_idol",name:"Golden Idol",desc:"",icon:"🗿",element:"all",rarity:"rare",econ:{bountyBonus:1}}},{id:"beggars_bowl",name:"Beggar's Bowl",icon:"🥣",rarity:"uncommon",desc:"Wave end: +1 gold per 20 held (max +20).",payload:{id:"relic_bowl",name:"Beggar's Bowl",desc:"",icon:"🥣",element:"all",rarity:"rare",fx:{interest:{per:20,cap:20}}}},{id:"headsman_seal",name:"Headsman's Seal",icon:"🪓",rarity:"rare",desc:"All damage +35% vs Frozen enemies.",payload:{id:"relic_seal",name:"Headsman's Seal",desc:"",icon:"🪓",element:"all",rarity:"rare",fx:{bonusVsStatus:{status:"frozen",mult:1.35}}}},{id:"ancient_acorn",name:"Ancient Acorn",icon:"🌰",rarity:"uncommon",desc:"Tree-folk +2 damage and +15 range.",payload:{id:"relic_acorn",name:"Ancient Acorn",desc:"",icon:"🌰",element:"physical",family:"tree",rarity:"rare",mod:{damage:2,range:15}}}],hh={uncommon:65,rare:35},zp=[{id:"cursed_chest",name:"The Cursed Chest",icon:"🗝️",desc:"A chest hums with power in the treeline. The lock is warm to the touch, and something out there noticed you noticing it.",choices:[{label:"Open it",desc:"Gain a random relic — but the next wave becomes an ELITE.",effect:"chest_open"},{label:"Leave it",desc:"Walk away. Nothing happens.",effect:"skip"}]},{id:"blood_pact",name:"The Blood Pact",icon:"🩸",desc:'A hooded figure offers power for pain. "The realm remembers sacrifice," it whispers.',choices:[{label:"Sign the pact",desc:"Lose 3 lives → choose from a RARE card draft.",effect:"blood_pact"},{label:"Refuse",desc:"Keep your blood where it is.",effect:"skip"}]},{id:"merchant",name:"The Wandering Merchant",icon:"🧳",desc:'A cart rattles up the road, sagging under trinkets. "Artifacts! Genuine! Mostly."',choices:[{label:"Buy a relic (130 ◉)",desc:"Pay 130 gold for a random relic.",effect:"merchant_buy"},{label:"Decline",desc:"His prices are theft anyway.",effect:"skip"}]},{id:"training",name:"The Training Grounds",icon:"🎯",desc:'A veteran drillmaster sizes up your towers. "Give me one of them for an hour and 60 gold."',choices:[{label:"Pay 60 ◉",desc:"A random tower gains a free upgrade tier.",effect:"training"},{label:"Skip",desc:"They train themselves. Probably.",effect:"skip"}]},{id:"gambler",name:"The Gambler's Coin",icon:"🪙",desc:'A grinning imp flips a coin that never seems to land the same way twice. "Double or... well. You know."',choices:[{label:"Flip it",desc:"50%: DOUBLE your gold. 50%: lose half.",effect:"gamble"},{label:"Walk away",desc:"Your gold stays boring and safe.",effect:"skip"}]},{id:"storm_blessing",name:"The Storm Blessing",icon:"⛈️",desc:"A sky-spirit offers to drench the next wave in glory: slower, tougher foes — worth twice the bounty.",choices:[{label:"Accept",desc:"Next wave: enemies 20% slower, +30% HP, 2x bounty.",effect:"blessing"},{label:"Decline",desc:"The spirit shrugs and drifts off.",effect:"skip"}]}],h0=230,f0=20,su=.7,p0={conductMult:1.6,shatterMult:2,chainBonus:1,freezeDuration:1.1,evaporateBurst:10};function m0(){return{kills:0,leaks:0,wavesCleared:0,dmgByElement:{fire:0,ice:0,lightning:0,water:0,wind:0,physical:0,void:0},reactions:{conduct:0,shatter:0,evaporate:0,frozen:0},cardIds:[]}}function Gp(n){const e=new dh(n),t=(n.cloudPaths??[]).map(a=>new dh({id:"",name:"",waypoints:[...a,a[0]]})),i=(n.props??[]).map(a=>{var o;return{x:a.x,y:a.y,r:(((o=Ap[a.model])==null?void 0:o.blockRadius)??12)*a.scale}}),s=Jg(e);for(const a of i){const{cx:o,cy:c}=Zd(a.x,a.y);s.add(Lo(o,c))}const r=t.flatMap((a,o)=>[0,a.total/2].map(c=>{const l=a.posAt(c);return{pathIdx:o,dist:c,x:l.x,y:l.y}}));return{map:n,track:e,blocked:s,water:new Set((n.water??[]).map(([a,o])=>Lo(a,o))),blockers:i,clouds:r,cloudTracks:t}}function dc(n,e=Date.now(),t=Np){return{...Gp(n??Yd(0,e)),phase:"build",gold:h0+t.startGold,lives:f0+t.startLives,round:0,act:0,speed:1,autoplay:!1,autoplayTimer:0,perks:t,rerollTokens:t.rerollTokens,firstTowerBought:!1,spellCds:{},castingSpell:null,spellEffects:[],seed:e,rng:Lp(e),draftMods:[],pendingDraft:null,eliteDraft:!1,reaction:{...p0},bountyBonus:0,towerDiscountPct:0,waveModifier:null,lastEliteRound:-5,stats:m0(),clock:0,killStackPct:0,relics:[],nextNodes:["normal"],nodesForRound:-1,nodeChoice:"normal",nodePicked:!0,waveKind:"normal",forcedModifier:null,pendingRelicDraft:null,pendingEvent:null,seenEvents:[],enemies:[],wizards:[],projectiles:[],waveTime:0,pendingSpawns:[],selectedWizardId:null,placingType:null,mouseX:0,mouseY:0,mouseOnBoard:!1,nextId:1}}function Vp(n){return Yg.includes(n.map.id)}function g0(n){if(n.act>=Dp-1)return!1;let e=0;for(const t of n.wizards)e+=Math.round(t.invested*su);return n.gold+=e,n.wizards=[],n.enemies=[],n.projectiles=[],n.selectedWizardId=null,n.placingType=null,n.spellEffects=[],n.castingSpell=null,n.act++,Object.assign(n,Gp(Yd(n.act,n.seed))),n.round=0,n.lastEliteRound=-5,n.nodesForRound=-1,n.nodeChoice="normal",n.nodePicked=!0,n.waveModifier=null,n.forcedModifier=null,n.phase="build",!0}function Ac(n,e){e.damage&&(n.damage+=e.damage),e.rateMul&&(n.rate*=e.rateMul),e.range&&(n.range+=e.range),e.splash&&(n.splash+=e.splash),e.chains&&(n.chains+=e.chains),e.burnDps&&(n.burnDps+=e.burnDps),e.burnDuration&&(n.burnDuration+=e.burnDuration),e.chillPct&&(n.chillPct+=e.chillPct),e.wetDuration&&(n.wetDuration+=e.wetDuration),e.projSpeed&&(n.projSpeed+=e.projSpeed),e.soakSlow&&(n.soakSlow+=e.soakSlow),e.knockback&&(n.knockback+=e.knockback),e.rattlePct&&(n.rattlePct+=e.rattlePct),e.entangleDur&&(n.entangleDur+=e.entangleDur),e.rootSlow&&(n.rootSlow+=e.rootSlow)}function ji(n,e,t=[]){const i={range:n.range,rate:n.rate,damage:n.damage,projSpeed:n.projSpeed,splash:n.splash,chains:n.chains,chainFalloff:n.chainFalloff,burnDps:n.element==="fire"?6:0,burnDuration:n.element==="fire"?3:0,chillPct:n.element==="ice"?.3:0,wetDuration:n.element==="ice"?4:n.element==="water"?5:0,soakSlow:n.auraKind==="tide"?.2:0,knockback:n.auraKind==="gust"?70:0,rattlePct:n.auraKind==="rattle"?.25:0,entangleDur:n.entangles?1:0,rootSlow:n.groundAttack?.25:0};n.baseMods&&Ac(i,n.baseMods);for(let s=0;s<2;s++)for(let r=0;r<e[s];r++)Ac(i,n.upgrades[s].tiers[r].mod);for(const s of t){if(!s.mod)continue;const r=s.element===n.element||s.element==="all",a=!s.family||s.family===n.family;r&&a&&Ac(i,s.mod)}return i}function Hp(n,e){const t=n.element===e.element||n.element==="all",i=!n.family||n.family===e.family;return t&&i}function ru(n,e){if(n.draftMods.push(e),n.stats.cardIds.push(e.id),e.reaction)for(const[t,i]of Object.entries(e.reaction))n.reaction[t]=i;e.econ&&(e.econ.goldNow&&(n.gold+=e.econ.goldNow),e.econ.bountyBonus&&(n.bountyBonus+=e.econ.bountyBonus),e.econ.towerDiscountPct&&(n.towerDiscountPct+=e.econ.towerDiscountPct));for(const t of n.wizards)t.stats=ji(t.def,t.tiers,n.draftMods)}function uc(n,e){if(e!==null)return n.wizards.find(t=>t.id===e)}function Wp(n,e,t){return n.wizards.find(i=>i.cx===e&&i.cy===t)}function sr(n,e,t,i){const s=Lo(e,t);if(n.blocked.has(s)||Wp(n,e,t))return!1;if((i==null?void 0:i.placement)==="any")return!0;const r=n.water.has(s),a=(i==null?void 0:i.placement)==="water";return r===a}function au(n,e,t,i){const s=[0,0],r=Rp(t,i),a={id:n.nextId++,def:e,cx:t,cy:i,x:r.x,y:r.y,cooldown:0,mode:"first",aim:-Math.PI/2,tiers:s,invested:e.cost,stats:ji(e,s,n.draftMods),recoil:0,attackCount:0,family:e.family};if(e.isGeneric){a.pendingSpecialize=!0;const o=n.water.has(Lo(t,i));a.specializeOptions=b0(n,e.family,o)}return a}function qp(n,e,t){e.def=t,e.pendingSpecialize=!1,e.specializeOptions=void 0,e.stats=ji(t,e.tiers,n.draftMods),e.cooldown=0}function b0(n,e,t,i=3){const{specializationsFor:s}=_0();let r=s(e),a;e==="wizard"&&(t?(a=r.find(l=>l.placement==="water"),r=r.filter(l=>l.placement!=="water")):r=r.filter(l=>l.placement!=="water"),n.cloudTracks.length===0&&(r=r.filter(l=>!l.needsCloud)));const o=a?[a]:[],c=Math.max(0,i-o.length);for(let l=0;l<c&&r.length>0;l++){const d=Math.floor(n.rng()*r.length);o.push(r[d]),r.splice(d,1)}for(let l=o.length-1;l>0;l--){const d=Math.floor(n.rng()*(l+1));[o[l],o[d]]=[o[d],o[l]]}return o}function _0(){return{specializationsFor:i0}}function ou(n,e=3,t=!1){const{CARDS:i,RARITY_WEIGHT:s}=v0(),r=new Set(n.draftMods.filter(c=>c.unique).map(c=>c.id));let a=i.filter(c=>!r.has(c.id));if(t){const c=a.filter(l=>l.rarity==="rare");c.length>=e&&(a=c)}const o=[];for(let c=0;c<e&&a.length>0;c++){const l=a.reduce((h,f)=>h+s[f.rarity],0);let d=n.rng()*l,u=a[0];for(const h of a)if(d-=s[h.rarity],d<=0){u=h;break}o.push(u),a=a.filter(h=>h.id!==u.id)}return o}function v0(){return{CARDS:iu,RARITY_WEIGHT:u0}}function Fo(n,e){n.relics.some(t=>t.id===e.id)||(n.relics.push(e),e.payload&&ru(n,e.payload))}function No(n,e){return n.relics.some(t=>{var i;return(i=t.special)==null?void 0:i.includes(e)})}function cu(n){return No(n,"draft4")||n.perks.widerDraft?4:3}function Ll(n,e=2){const t=new Set(n.relics.map(r=>r.id));let i=Bp.filter(r=>!t.has(r.id));const s=[];for(let r=0;r<e&&i.length>0;r++){const a=i.reduce((l,d)=>l+hh[d.rarity],0);let o=n.rng()*a,c=i[0];for(const l of i)if(o-=hh[l.rarity],o<=0){c=l;break}s.push(c),i=i.filter(l=>l.id!==c.id)}return s}const x0=2,fh=3;function Xp(n){if(n.nodesForRound===n.round)return;if(n.nodesForRound=n.round,n.nodeChoice="normal",n.round>=eu(n.act)-1){n.nextNodes=["normal"],n.nodePicked=!0;return}const e=["normal"];if(n.round>=x0){const t=n.seenEvents.length<y0();if(n.round>=fh&&n.rng()<.5&&e.push("elite"),n.rng()<.35&&e.push("treasure"),n.rng()<.4&&t&&e.push("event"),e.length===1){const s=(n.round>=fh?["treasure","event","elite"]:["treasure","event"]).filter(r=>r!=="event"||t);e.push(s[Math.floor(n.rng()*s.length)])}}n.nextNodes=e.slice(0,3),n.nodePicked=n.nextNodes.length<=1}function y0(){return zp.length}function Kp(n){const e=zp.filter(i=>!n.seenEvents.includes(i.id));if(e.length===0)return null;const t=e[Math.floor(n.rng()*e.length)];return n.seenEvents.push(t.id),t}function lu(n,e){const t=jp()[e.def.id];if(!t)return null;const i=e.tiers[0]>=e.def.upgrades[0].tiers.length&&e.tiers[1]>=e.def.upgrades[1].tiers.length,s=n.draftMods.some(a=>a.id===t.cardId),r=s?Math.floor(t.cost/2):t.cost;return i?n.gold<r?{ok:!1,cost:r,discounted:s,reason:"Not enough gold"}:{ok:!0,cost:r,discounted:s}:{ok:!1,cost:r,discounted:s,reason:"Max both paths first"}}function M0(n,e){const t=lu(n,e),i=jp()[e.def.id];return!(t!=null&&t.ok)||!i?!1:(n.gold-=t.cost,e.invested+=t.cost,e.def=S0(i.to),e.tiers=[0,0],e.stats=ji(e.def,e.tiers,n.draftMods),e.cooldown=0,!0)}function jp(){return Ip}function S0(n){return nn[n]}const Kt={fire:{id:"fire",name:"Fire",color:"#ff6b35",glow:"#ffb163"},ice:{id:"ice",name:"Ice",color:"#5bc8f5",glow:"#b3ecff"},lightning:{id:"lightning",name:"Lightning",color:"#c77dff",glow:"#e8c3ff"},water:{id:"water",name:"Water",color:"#3a86ff",glow:"#8fc0ff"},wind:{id:"wind",name:"Wind",color:"#b8d8d0",glow:"#e6f7f1"},physical:{id:"physical",name:"Physical",color:"#a08060",glow:"#d4b896"},void:{id:"void",name:"Void",color:"#e34bb2",glow:"#ff9ade"}},hc={grunt:{id:"grunt",name:"Grunt",hp:34,speed:68,radius:12,bounty:4,color:"#7da35c",resist:{}},runner:{id:"runner",name:"Runner",hp:22,speed:128,radius:10,bounty:5,color:"#d9a648",resist:{ice:1.4}},knight:{id:"knight",name:"Armored Knight",hp:110,speed:52,radius:13,bounty:10,color:"#8d99ae",resist:{ice:.5,lightning:.75,fire:1.5}},shade:{id:"shade",name:"Ember Shade",hp:60,speed:80,radius:11,bounty:8,color:"#b35442",resist:{fire:0,lightning:1.3}},golem:{id:"golem",name:"Obsidian Golem",hp:2600,speed:30,radius:22,bounty:200,color:"#5e4b8b",resist:{fire:.75,ice:.75},boss:!0,leakCost:10},golemling:{id:"golemling",name:"Golemling",hp:500,speed:42,radius:16,bounty:50,color:"#7a68a6",resist:{fire:.75,ice:.75},boss:!0},orcraider:{id:"orcraider",name:"Orc Raider",hp:55,speed:75,radius:12,bounty:6,color:"#5e7a3a",resist:{}},orcbrute:{id:"orcbrute",name:"Orc Brute",hp:260,speed:46,radius:15,bounty:14,color:"#4a5d33",resist:{},armor:120},troll:{id:"troll",name:"Troll",hp:1300,speed:34,radius:19,bounty:60,color:"#6a7d5e",resist:{},armor:320,regen:.015},warwagon:{id:"warwagon",name:"War Wagon",hp:900,speed:40,radius:20,bounty:45,color:"#7a5c38",resist:{},vehicle:"wagon",leakCost:8,deathSpawns:["orcraider","orcraider","orcraider","orcraider","orcraider"]},siegetower:{id:"siegetower",name:"Siege Tower",hp:1600,speed:30,radius:22,bounty:80,color:"#6b4f30",resist:{},vehicle:"tower",leakCost:10,dropSpawns:{type:"orcraider",count:2,period:5}},orcshaman:{id:"orcshaman",name:"Orc Shaman",hp:140,speed:60,radius:11,bounty:18,color:"#3f8f5c",resist:{},aura:{kind:"heal",radius:110,power:.03,period:2}},wardrummer:{id:"wardrummer",name:"War Drummer",hp:300,speed:55,radius:13,bounty:22,color:"#8a5c3a",resist:{},aura:{kind:"haste",radius:120,power:.18}},wraith:{id:"wraith",name:"Wraith",hp:220,speed:95,radius:11,bounty:20,color:"#9db8c9",resist:{},phase:{period:5,duration:1.6}},gargoyle:{id:"gargoyle",name:"Gargoyle",hp:90,speed:85,radius:11,bounty:12,color:"#8d99ae",resist:{ice:.8},flying:!0},drake:{id:"drake",name:"Ember Drake",hp:380,speed:110,radius:14,bounty:30,color:"#c25a2e",resist:{fire:.5},flying:!0,innateImmune:["burn"]},hexer:{id:"hexer",name:"Hexer",hp:160,speed:55,radius:11,bounty:20,color:"#7a4a9e",resist:{},hexes:{period:6,duration:3,radius:150}},banshee:{id:"banshee",name:"Banshee",hp:130,speed:90,radius:10,bounty:18,color:"#cfd8e8",resist:{},deathSilence:{radius:100,duration:2.5}},slime_big:{id:"slime_big",name:"Great Slime",hp:320,speed:45,radius:16,bounty:10,color:"#5fbf4a",resist:{},deathSpawns:["slime_mid","slime_mid"]},slime_mid:{id:"slime_mid",name:"Slime",hp:120,speed:55,radius:12,bounty:6,color:"#74d15e",resist:{},deathSpawns:["slime_small","slime_small"]},slime_small:{id:"slime_small",name:"Slimeling",hp:45,speed:70,radius:8,bounty:3,color:"#8ce276",resist:{}},necromancer:{id:"necromancer",name:"Necromancer",hp:200,speed:50,radius:12,bounty:25,color:"#3a2f4e",resist:{},dropSpawns:{type:"risen",count:2,period:5}},risen:{id:"risen",name:"Risen",hp:40,speed:60,radius:10,bounty:2,color:"#9a92b5",resist:{}},thief:{id:"thief",name:"Thief",hp:100,speed:130,radius:10,bounty:15,color:"#d9c148",resist:{},stealsGold:25},shieldbearer:{id:"shieldbearer",name:"Shieldbearer",hp:350,speed:48,radius:14,bounty:22,color:"#5b7fc9",resist:{},aura:{kind:"ward",radius:110,power:60}},frostshaman:{id:"frostshaman",name:"Frost Shaman",hp:240,speed:30,radius:11,bounty:22,color:"#7fc8e8",resist:{ice:.5},innateImmune:["chill"],frostAura:{radius:130,rateMul:1.45}},burrower:{id:"burrower",name:"Burrower",hp:300,speed:30,radius:10,bounty:16,color:"#8a6a42",resist:{},phase:{period:6,duration:2.4},burrowSpeedMul:1.8},mirrorslime:{id:"mirrorslime",name:"Mirror Slime",hp:380,speed:26,radius:13,bounty:26,color:"#b8e0e8",resist:{},splitOnElemental:{type:"mirrorling",count:2}},mirrorling:{id:"mirrorling",name:"Mirrorling",hp:120,speed:36,radius:8,bounty:8,color:"#d4f0f6",resist:{}},warlord:{id:"warlord",name:"Ironhide Warlord",hp:2100,speed:26,radius:24,bounty:250,color:"#6e7b8a",resist:{ice:.8},boss:!0,armor:700,leakCost:10,hexes:{period:2,duration:3,radius:9999}},pyretitan:{id:"pyretitan",name:"Pyre Titan",hp:4800,speed:24,radius:26,bounty:350,color:"#c25a2e",resist:{fire:0,lightning:1.15},boss:!0,leakCost:10,innateImmune:["burn","chill"],periodicShield:{period:9,duration:4,hits:10}},colossus:{id:"colossus",name:"Dread Colossus",hp:8600,speed:20,radius:30,bounty:600,color:"#3d2f5e",resist:{fire:.5},boss:!0,armor:1600,leakCost:25,innateImmune:["chill"],armorBreakSpawns:["golemling","golemling","golemling"],hpPhases:{thresholds:[.75,.5,.25],type:"heartstone",count:2}},heartstone:{id:"heartstone",name:"Heartstone",hp:130,speed:0,radius:12,bounty:25,color:"#e05a7a",resist:{},aura:{kind:"heal",radius:150,power:.02,period:1},leakCost:0}},H={particles:[],floaters:[],arcs:[],rings:[],ring(n,e,t,i=26){this.rings.push({x:n,y:e,maxR:i,life:.35,maxLife:.35,color:t})},burst(n,e,t,i,s,r=3,a=.45){for(let o=0;o<i;o++){const c=Math.random()*Math.PI*2,l=s*(.4+Math.random()*.6);this.particles.push({x:n,y:e,vx:Math.cos(c)*l,vy:Math.sin(c)*l,life:a,maxLife:a,size:r*(.6+Math.random()*.8),color:t,drag:3.5,gravity:0})}},floater(n,e,t,i,s=12){this.floaters.push({x:n+(Math.random()-.5)*10,y:e,text:t,color:i,life:.9,maxLife:.9,size:s})},arc(n,e,t,i,s,r=2.5){const o=t-n,c=i-e,l=Math.hypot(o,c)||1,d=-c/l,u=o/l,h=[{x:n,y:e}];for(let f=1;f<7;f++){const g=f/7,y=(Math.random()-.5)*l*.22;h.push({x:n+o*g+d*y,y:e+c*g+u*y})}h.push({x:t,y:i}),this.arcs.push({pts:h,life:.18,maxLife:.18,color:s,width:r})},update(n){for(const e of this.particles){e.life-=n;const t=Math.max(0,1-e.drag*n);e.vx*=t,e.vy=e.vy*t+e.gravity*n,e.x+=e.vx*n,e.y+=e.vy*n}this.particles=this.particles.filter(e=>e.life>0);for(const e of this.floaters)e.life-=n,e.y-=28*n;this.floaters=this.floaters.filter(e=>e.life>0);for(const e of this.arcs)e.life-=n;this.arcs=this.arcs.filter(e=>e.life>0);for(const e of this.rings)e.life-=n;this.rings=this.rings.filter(e=>e.life>0)},clear(){this.particles.length=0,this.floaters.length=0,this.arcs.length=0,this.rings.length=0},draw(n){n.save();for(const e of this.rings){const t=1-e.life/e.maxLife;n.globalAlpha=(1-t)*.7,n.strokeStyle=e.color,n.lineWidth=2.5*(1-t)+.5,n.beginPath(),n.arc(e.x,e.y,e.maxR*t,0,Math.PI*2),n.stroke()}n.globalAlpha=1;for(const e of this.particles){const t=e.life/e.maxLife;n.globalAlpha=t,n.fillStyle=e.color,n.beginPath(),n.arc(e.x,e.y,e.size*t,0,Math.PI*2),n.fill()}for(const e of this.arcs){const t=e.life/e.maxLife;n.globalAlpha=t,n.strokeStyle=e.color,n.lineWidth=e.width,n.shadowColor=e.color,n.shadowBlur=8,n.beginPath(),n.moveTo(e.pts[0].x,e.pts[0].y);for(let i=1;i<e.pts.length;i++)n.lineTo(e.pts[i].x,e.pts[i].y);n.stroke(),n.shadowBlur=0}n.globalAlpha=1,n.textAlign="center";for(const e of this.floaters){const t=e.life/e.maxLife;n.globalAlpha=Math.min(1,t*2),n.font=`bold ${e.size}px 'Segoe UI', sans-serif`,n.lineWidth=3,n.strokeStyle="rgba(0,0,0,0.6)",n.strokeText(e.text,e.x,e.y),n.fillStyle=e.color,n.fillText(e.text,e.x,e.y)}n.restore()}};let pt=null,$n=null,Rc=null,$p=null,Sa=!1,Cc=.5;function gt(n,e=.04){return n*(1+(Math.random()*2-1)*e)}function w0(n){const e=Math.floor(n.sampleRate*1.4),t=n.createBuffer(2,e,n.sampleRate);for(let i=0;i<2;i++){const s=t.getChannelData(i);for(let r=0;r<e;r++)s[r]=(Math.random()*2-1)*Math.pow(1-r/e,2.4)}return t}const ph=new Map;function Lt(n,e){if(!pt)return null;const t=performance.now();return t-(ph.get(n)??-1/0)<e?null:(ph.set(n,t),pt.state==="suspended"&&pt.resume(),pt)}function on(){return pt?(pt.state==="suspended"&&pt.resume(),pt):null}function E0(n){const e=n.sampleRate*1.5,t=n.createBuffer(1,e,n.sampleRate),i=t.getChannelData(0);for(let s=0;s<e;s++)i[s]=Math.random()*2-1;return t}function _e(n,e,t,i){const s=n.createGain();return s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(Math.max(1e-4,t),e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+i),s.connect($n),s}function nt(n,e,t,i,s,r){const a=n.createOscillator();a.type=e,a.frequency.setValueAtTime(t,i),a.connect(r),a.start(i),a.stop(i+s)}function Tt(n,e,t,i,s,r,a){const o=n.createOscillator();o.type=e,o.frequency.setValueAtTime(Math.max(1,t),s),o.frequency.exponentialRampToValueAtTime(Math.max(1,i),s+r),o.connect(a),o.start(s),o.stop(s+r)}function At(n,e,t,i,s){const r=n.createBufferSource();if(r.buffer=$p,r.loop=!0,s){const a=n.createBiquadFilter();a.type=s.type,a.frequency.setValueAtTime(s.f0,e),s.f1&&a.frequency.exponentialRampToValueAtTime(Math.max(1,s.f1),e+t),a.Q.value=s.q??1,r.connect(a),a.connect(i)}else r.connect(i);r.start(e),r.stop(e+t)}const se={init(){if(pt){pt.resume();return}try{pt=new AudioContext,$n=pt.createGain(),$n.gain.value=Sa?0:Cc;const n=pt.createBiquadFilter();n.type="lowpass",n.frequency.value=11e3,Rc=n;const e=pt.createDynamicsCompressor();e.threshold.value=-16,e.ratio.value=4;const t=pt.createConvolver();t.buffer=w0(pt);const i=pt.createGain();i.gain.value=.18,$n.connect(n),n.connect(e),e.connect(pt.destination),e.connect(t),t.connect(i),i.connect(pt.destination),$p=E0(pt)}catch{pt=null}},bus(){return pt&&$n?{ctx:pt,target:$n}:null},musicBus(){return pt&&Rc?{ctx:pt,target:Rc}:null},setVolume(n){Cc=n,$n&&!Sa&&($n.gain.value=n)},setMuted(n){Sa=n,$n&&($n.gain.value=n?0:Cc)},isMuted(){return Sa},fireCast(){const n=Lt("fire",90);if(!n)return;const e=n.currentTime;At(n,e,.28,_e(n,e,.5,.28),{type:"bandpass",f0:gt(400),f1:1600,q:1.2}),Tt(n,"sawtooth",gt(160),60,e,.25,_e(n,e,.15,.25))},iceCast(){const n=Lt("ice",90);if(!n)return;const e=n.currentTime;nt(n,"triangle",gt(1320),e,.3,_e(n,e,.25,.3)),nt(n,"triangle",gt(1980),e+.03,.25,_e(n,e+.03,.15,.25))},boltCast(){const n=Lt("bolt",90);if(!n)return;const e=n.currentTime;At(n,e,.16,_e(n,e,.55,.16),{type:"highpass",f0:2e3,q:.7}),Tt(n,"square",gt(800),90,e,.12,_e(n,e,.2,.12))},waterPulse(){const n=on();if(!n)return;const e=n.currentTime;Tt(n,"sine",90,220,e,.35,_e(n,e,.45,.4)),At(n,e+.05,.3,_e(n,e+.05,.18,.3),{type:"lowpass",f0:700,f1:250})},windGust(){const n=on();if(!n)return;const e=n.currentTime;At(n,e,.5,_e(n,e,.4,.5),{type:"bandpass",f0:300,f1:1200,q:.6})},gongPulse(){const n=Lt("gong",200);if(!n)return;const e=n.currentTime;nt(n,"sine",55,e,1.4,_e(n,e,.3,1.4)),nt(n,"sine",110,e,1.1,_e(n,e,.4,1.1)),nt(n,"triangle",187,e,.9,_e(n,e,.18,.9)),nt(n,"triangle",266,e,.7,_e(n,e,.1,.7))},bowTwang(){const n=Lt("bow",80);if(!n)return;const e=n.currentTime;Tt(n,"triangle",gt(900,.07),320,e,.12,_e(n,e,.35,.12)),At(n,e+.02,.14,_e(n,e+.02,.12,.14),{type:"bandpass",f0:2200,f1:900,q:1.5})},thud(){const n=Lt("thud",110);if(!n)return;const e=n.currentTime;Tt(n,"sine",gt(140,.08),45,e,.22,_e(n,e,.5,.22)),At(n,e,.1,_e(n,e,.25,.1),{type:"lowpass",f0:500,f1:120})},explosion(){const n=Lt("boom",120);if(!n)return;const e=n.currentTime;Tt(n,"sine",gt(64),26,e,.5,_e(n,e,.9,.5)),At(n,e,.45,_e(n,e,.55,.45),{type:"lowpass",f0:3e3,f1:300});for(let t=0;t<3;t++){const i=.1+Math.random()*.22;At(n,e+i,.06,_e(n,e+i,.16,.06),{type:"bandpass",f0:gt(1600,.3),q:2})}},armorClank(){const n=Lt("clank",100);if(!n)return;const e=n.currentTime;nt(n,"triangle",gt(1180,.06),e,.09,_e(n,e,.3,.09)),nt(n,"triangle",gt(1730,.06),e,.07,_e(n,e,.18,.07)),At(n,e,.05,_e(n,e,.2,.05),{type:"highpass",f0:3500,q:1})},armorBreak(){const n=on();if(!n)return;const e=n.currentTime;At(n,e,.5,_e(n,e,.7,.5),{type:"bandpass",f0:2400,f1:500,q:.8}),Tt(n,"sine",90,35,e,.4,_e(n,e,.6,.4));for(let t=0;t<5;t++){const i=.06+t*.07;nt(n,"triangle",gt(2200-t*320,.1),e+i,.12,_e(n,e+i,.14,.12))}},bossRoar(){const n=Lt("roar",800);if(!n)return;const e=n.currentTime,t=_e(n,e,.5,1.2),i=n.createBiquadFilter();i.type="bandpass",i.Q.value=1.4,i.frequency.setValueAtTime(280,e),i.frequency.exponentialRampToValueAtTime(900,e+.45),i.frequency.exponentialRampToValueAtTime(320,e+1.1);for(const s of[55,82.5,110.5]){const r=n.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(gt(s,.02),e),r.connect(i),r.start(e),r.stop(e+1.2)}i.connect(t),Tt(n,"sine",60,38,e,1,_e(n,e,.4,1))},actFanfare(){const n=on();if(!n)return;const e=n.currentTime;[262,330,392,523,659].forEach((i,s)=>{const r=s*.16;nt(n,"sawtooth",i,e+r,.34,_e(n,e+r,.16,.34)),nt(n,"triangle",i*2,e+r,.3,_e(n,e+r,.08,.3))}),nt(n,"sawtooth",262,e+.85,.9,_e(n,e+.85,.14,.9)),nt(n,"sawtooth",392,e+.85,.9,_e(n,e+.85,.12,.9)),nt(n,"sawtooth",523,e+.85,.9,_e(n,e+.85,.12,.9))},healChime(){const n=Lt("heal",250);if(!n)return;const e=n.currentTime;nt(n,"sine",gt(880,.02),e,.25,_e(n,e,.14,.25)),nt(n,"sine",gt(1320,.02),e+.09,.3,_e(n,e+.09,.1,.3))},drumBeat(){const n=Lt("drum",850);if(!n)return;const e=n.currentTime;Tt(n,"sine",120,55,e,.18,_e(n,e,.45,.18)),Tt(n,"sine",110,50,e+.22,.18,_e(n,e+.22,.3,.18)),At(n,e,.05,_e(n,e,.12,.05),{type:"lowpass",f0:900})},phaseShimmer(){const n=Lt("phase",300);if(!n)return;const e=n.currentTime;At(n,e,.35,_e(n,e,.16,.35),{type:"bandpass",f0:3200,f1:6800,q:3}),nt(n,"sine",gt(2093,.05),e,.3,_e(n,e,.05,.3))},woodCrash(){const n=Lt("wood",300);if(!n)return;const e=n.currentTime;At(n,e,.3,_e(n,e,.5,.3),{type:"bandpass",f0:700,f1:250,q:1}),Tt(n,"sine",110,45,e,.25,_e(n,e,.4,.25));for(let t=0;t<2;t++){const i=.08+Math.random()*.12;At(n,e+i,.04,_e(n,e+i,.2,.04),{type:"bandpass",f0:gt(1400,.2),q:3})}},hexZap(){const n=Lt("hex",200);if(!n)return;const e=n.currentTime;Tt(n,"square",gt(620,.05),110,e,.3,_e(n,e,.3,.3)),At(n,e,.25,_e(n,e,.15,.25),{type:"bandpass",f0:900,f1:300,q:2})},wail(){const n=Lt("wail",400);if(!n)return;const e=n.currentTime;Tt(n,"sine",gt(1180,.04),320,e,.9,_e(n,e,.3,.9)),Tt(n,"sine",gt(1580,.04),420,e+.05,.85,_e(n,e+.05,.2,.85)),At(n,e,.7,_e(n,e,.1,.7),{type:"bandpass",f0:2400,f1:900,q:3})},squish(){const n=Lt("squish",100);if(!n)return;const e=n.currentTime;At(n,e,.12,_e(n,e,.35,.12),{type:"lowpass",f0:900,f1:250}),Tt(n,"sine",gt(300,.15),90,e,.1,_e(n,e,.25,.1))},hit(){const n=Lt("hit",70);if(!n)return;const e=n.currentTime;Tt(n,"sine",220,70,e,.09,_e(n,e,.3,.09))},shatter(){const n=Lt("shatter",110);if(!n)return;const e=n.currentTime;At(n,e,.25,_e(n,e,.5,.25),{type:"highpass",f0:3e3,q:1.5}),nt(n,"triangle",2640,e,.12,_e(n,e,.2,.12))},conduct(){const n=Lt("conduct",110);if(!n)return;const e=n.currentTime;Tt(n,"square",1400,200,e,.18,_e(n,e,.3,.18)),At(n,e,.14,_e(n,e,.25,.14),{type:"highpass",f0:2500})},evaporate(){const n=on();if(!n)return;const e=n.currentTime;At(n,e,.4,_e(n,e,.3,.4),{type:"bandpass",f0:4500,f1:900,q:.8})},freeze(){const n=on();if(!n)return;const e=n.currentTime;Tt(n,"triangle",1500,3200,e,.2,_e(n,e,.25,.22)),nt(n,"triangle",990,e+.05,.2,_e(n,e+.05,.12,.2))},coin(){const n=Lt("coin",80);if(!n)return;const e=n.currentTime;nt(n,"square",gt(1046,.02),e,.06,_e(n,e,.12,.06)),nt(n,"square",gt(1568,.02),e+.06,.1,_e(n,e+.06,.12,.1)),nt(n,"sine",3136,e+.1,.12,_e(n,e+.1,.05,.12))},place(){const n=on();if(!n)return;const e=n.currentTime;Tt(n,"sine",300,500,e,.12,_e(n,e,.3,.14)),nt(n,"triangle",750,e+.08,.12,_e(n,e+.08,.15,.12))},sell(){const n=on();if(!n)return;const e=n.currentTime;Tt(n,"sine",500,280,e,.16,_e(n,e,.25,.18))},upgrade(){const n=on();if(!n)return;const e=n.currentTime;[523,659,784].forEach((t,i)=>nt(n,"triangle",t,e+i*.06,.12,_e(n,e+i*.06,.2,.14)))},leak(){const n=on();if(!n)return;const e=n.currentTime;Tt(n,"sawtooth",180,60,e,.3,_e(n,e,.35,.3)),At(n,e,.2,_e(n,e,.15,.2),{type:"lowpass",f0:300})},waveStart(){const n=on();if(!n)return;const e=n.currentTime;nt(n,"sawtooth",262,e,.22,_e(n,e,.18,.24)),nt(n,"sawtooth",392,e+.18,.3,_e(n,e+.18,.2,.32))},win(){const n=on();if(!n)return;const e=n.currentTime;[523,659,784,1046].forEach((t,i)=>nt(n,"triangle",t,e+i*.13,.3,_e(n,e+i*.13,.25,.34)))},lose(){const n=on();if(!n)return;const e=n.currentTime;[392,330,262].forEach((t,i)=>nt(n,"sawtooth",t,e+i*.18,.32,_e(n,e+i*.18,.2,.36)))},click(){const n=on();if(!n)return;const e=n.currentTime;nt(n,"square",660,e,.04,_e(n,e,.08,.045))}};function T0(n){return!n.groundAttack&&n.auraKind!=="tide"}function ma(n,e,t,i){const s=[];for(const r of n.enemies){if(r.hp<=0||r.phased)continue;const a=r.x-e,o=r.y-t,c=i+r.def.radius;a*a+o*o<=c*c&&s.push(r)}return s}function Jp(n,e,t,i,s){for(const r of n.blockers){const a=i-e,o=s-t,c=a*a+o*o,l=c===0?0:Math.max(0,Math.min(1,((r.x-e)*a+(r.y-t)*o)/c)),d=e+l*a,u=t+l*o;if((r.x-d)**2+(r.y-u)**2<r.r*r.r)return!1}return!0}function A0(n,e){const t=T0(e.def),i=ma(n,e.x,e.y,e.stats.range).filter(s=>(t||!s.def.flying)&&(s.def.flying||e.def.ignoreLOS||Jp(n,e.x,e.y,s.x,s.y)));if(i.length!==0)switch(e.mode){case"first":return i.reduce((s,r)=>r.dist>s.dist?r:s);case"last":return i.reduce((s,r)=>r.dist<s.dist?r:s);case"strong":return i.reduce((s,r)=>r.hp>s.hp?r:s);case"close":{const s=r=>(r.x-e.x)**2+(r.y-e.y)**2;return i.reduce((r,a)=>s(a)<s(r)?a:r)}}}function du(n,e){const t=n.draftMods.filter(i=>i.fx&&Hp(i,e.def)).map(i=>i.fx);return e.def.innateFx&&t.push(e.def.innateFx),t}function R0(n,e){return n.clock%e.period<e.duration}function Yp(n,e){e.attackCount++;let t=1+n.killStackPct/100;for(const i of du(n,e)){const s=i.critEveryN;s&&e.attackCount%s.n===0&&(t*=s.mult,H.floater(e.x,e.y-28,"CRIT!","#ffd75e",13),H.burst(e.x,e.y-10,"#ffd75e",6,90,2.5,.3))}return t}function mh(n,e){let t=1;for(const i of du(n,e))i.frenzy&&R0(n,i.frenzy)&&(t*=i.frenzy.rateMul);return t}function gh(n,e,t){if(!e)return 1;let i=1;for(const s of du(n,e)){const r=s.bonusVsStatus;r&&t.statuses[r.status]&&(i*=r.mult);const a=s.bonusVsHealthy;a&&t.hp>=t.maxHp*a.threshold&&(i*=a.mult),s.bonusVsFlying&&t.def.flying&&(i*=s.bonusVsFlying.mult)}return i}const bh=95,_h=3,C0=.35,vh=165,P0=26,I0=1.5,L0=.25,D0=1.5,F0=2.5,N0=.3,U0=1.4,k0=14,xh=30,O0=1.6;function B0(n,e){for(const t of n.clouds){const i=n.cloudTracks[t.pathIdx];t.dist=(t.dist+P0*e)%i.total;const s=i.posAt(t.dist);t.x=s.x,t.y=s.y}}function z0(n,e){return n.clouds.some(t=>(t.x-e.x)**2+(t.y-e.y)**2<=vh*vh)}function G0(n,e){n.clock+=e;let t=null;for(const i of n.enemies)i.def.frostAura&&i.hp>0&&(t??(t=[])).push(i);for(const i of n.wizards)if(i.frostMul=1,!!t)for(const s of t){const r=s.def.frostAura;(i.x-s.x)**2+(i.y-s.y)**2<=r.radius*r.radius&&(i.frostMul=Math.max(i.frostMul,r.rateMul))}for(const i of n.wizards){if(i.pendingSpecialize)continue;if(i.recoil>0&&(i.recoil-=e),i.cooldown>0&&(i.cooldown-=e),i.silencedT!==void 0&&i.silencedT>0){i.silencedT-=e;continue}if(i.def.needsCloud&&(i.becalmed=!z0(n,i),i.becalmed)){Math.random()<e*.5&&H.floater(i.x,i.y-30,"≋ no wind","#cfd8dc",10);continue}if((i.frostMul??1)>1&&Math.random()<e*.4&&H.floater(i.x,i.y-30,"❄ chilled","#a8dcf0",10),i.def.auraKind){if(i.cooldown<=0&&ma(n,i.x,i.y,i.stats.range).length>0){i.cooldown=i.stats.rate*mh(n,i)*(i.frostMul??1),i.recoil=.18;const r=Yp(n,i);i.def.auraKind==="tide"?V0(n,i,r):i.def.auraKind==="gust"?H0(n,i,r):W0(n,i,r)}continue}const s=A0(n,i);s&&(i.aim=Math.atan2(s.y-i.y,s.x-i.x),i.cooldown<=0&&(i.cooldown=i.stats.rate*mh(n,i)*(i.frostMul??1),i.recoil=.18,q0(n,i,s)))}}function V0(n,e,t=1){var i;se.waterPulse(),H.ring(e.x,e.y,"#3a86ff",e.stats.range);for(const s of ma(n,e.x,e.y,e.stats.range))if(!s.def.flying&&(sn(n,s,e.stats.damage*t,"water",e),!(s.hp<=0)&&!((i=s.immunities)!=null&&i.includes("wet")))){if(s.statuses.burn){if(delete s.statuses.burn,n.stats.reactions.evaporate++,H.floater(s.x,s.y-18,"Evaporate!","#ffffff",12),se.evaporate(),sn(n,s,n.reaction.evaporateBurst,"water",e),s.hp<=0)continue}else s.statuses.wet={t:e.stats.wetDuration};uu(n,s,e.stats.soakSlow),s.statuses.chill&&(s.statuses.chill.t=D0)}}function H0(n,e,t=1){se.windGust(),H.ring(e.x,e.y,"#e6f7f1",e.stats.range*.7);for(const i of ma(n,e.x,e.y,e.stats.range)){if(sn(n,i,e.stats.damage*t,"wind",e),i.hp<=0||i.gustImmune||(i.gustCd??0)>0)continue;const s=e.stats.knockback*(i.def.boss?L0:1);if(i.dist=Math.max(0,i.dist-s),i.gustCd=I0,H.burst(i.x,i.y,"#e6f7f1",6,90,2.5,.35),!i.def.flying){const r=n.track.posAt(i.dist);i.x=r.x,i.y=r.y}}}function W0(n,e,t=1){se.gongPulse(),H.ring(e.x,e.y,"#c9a63f",e.stats.range);for(const i of ma(n,e.x,e.y,e.stats.range)){if(e.stats.damage>0&&sn(n,i,e.stats.damage*t,"physical",e),i.hp<=0)continue;const s=i.statuses.rattled;i.statuses.rattled={t:3,pct:Math.max((s==null?void 0:s.pct)??0,e.stats.rattlePct)},s||H.floater(i.x,i.y-14,"Rattled!","#c9a63f",11)}}function q0(n,e,t){const i=Kt[e.def.element],s=e.x+Math.cos(e.aim)*16,r=e.y+Math.sin(e.aim)*16;H.burst(s,r,i.glow,4,60,2,.25),e.def.element==="fire"?se.fireCast():e.def.element==="ice"?se.iceCast():e.def.element==="lightning"?se.boltCast():e.def.family==="archer"?se.bowTwang():e.def.family==="tree"&&se.thud();const a=Yp(n,e);if(e.def.element==="lightning")K0(n,e,t,a);else if(e.def.groundAttack)X0(n,e,t,a);else if(e.def.pierce){const o=t.x-s,c=t.y-r,l=Math.hypot(o,c)||1;n.projectiles.push({id:n.nextId++,element:e.def.element,x:s,y:r,speed:e.stats.projSpeed,damage:e.stats.damage*a,splash:0,targetId:-1,tx:t.x,ty:t.y,wizardId:e.id,visual:e.def.family==="archer"?"bolt":yh(e.def),pierce:{dirX:o/l,dirY:c/l,traveled:0,maxDist:e.stats.range*U0,hitIds:[]}})}else n.projectiles.push({id:n.nextId++,element:e.def.element,x:s,y:r,speed:e.stats.projSpeed,damage:e.stats.damage*a,splash:e.stats.splash,targetId:t.id,tx:t.x,ty:t.y,wizardId:e.id,visual:yh(e.def),sx:s,sy:r})}function yh(n){return n.family==="archer"?"arrow":n.id==="dynamite"||n.id==="sapperking"?"stick":n.id==="slingshot"||n.id==="boulder"||n.id==="mountain"?"rock":n.id==="thornspitter"||n.id==="bramblehydra"?"needle":n.id==="voidgazer"?"bolt":"orb"}function X0(n,e,t,i=1){H.burst(t.x,t.y+4,"#6a8f4f",10,80,3,.4),H.ring(t.x,t.y,"#4c6b38",xh);for(const s of n.enemies){if(s.hp<=0||s.def.flying)continue;const r=s.x-t.x,a=s.y-t.y;if(r*r+a*a>(xh+s.def.radius)**2||(sn(n,s,e.stats.damage*i,e.def.element,e),s.hp<=0))continue;const o=s.statuses.snared;s.statuses.snared={t:O0,pct:Math.max((o==null?void 0:o.pct)??0,e.stats.rootSlow)}}}function K0(n,e,t,i=1){const s=Kt.lightning;let r=1+e.stats.chains,a=e.stats.damage*i;const o=new Set;let c=t,l=e.x,d=e.y;for(;c&&r>0;)H.arc(l,d,c.x,c.y,s.glow),c.statuses.wet?(delete c.statuses.wet,r+=n.reaction.chainBonus,n.stats.reactions.conduct++,H.floater(c.x,c.y-18,"Conduct!","#e8c3ff",13),H.burst(c.x,c.y,"#c77dff",10,120,3),se.conduct(),sn(n,c,a*n.reaction.conductMult,"lightning",e)):sn(n,c,a,"lightning",e),Zp(n,e,c),o.add(c.id),r--,a*=e.stats.chainFalloff,l=c.x,d=c.y,c=j0(n,l,d,o)}function j0(n,e,t,i){let s,r=bh*bh;for(const a of n.enemies){if(a.hp<=0||a.phased||i.has(a.id))continue;const o=(a.x-e)**2+(a.y-t)**2;o<=r&&Jp(n,e,t,a.x,a.y)&&(r=o,s=a)}return s}function $0(n,e){for(const t of n.projectiles){if(t.pierce){J0(n,t,e);continue}const i=n.enemies.find(c=>c.id===t.targetId&&c.hp>0);i&&(t.tx=i.x,t.ty=i.y);const s=t.tx-t.x,r=t.ty-t.y,a=Math.hypot(s,r),o=t.speed*e;a<=Math.max(10,o)?(Y0(n,t,i),t.speed=-1):(t.x+=s/a*o,t.y+=r/a*o,Math.random()<.6&&H.burst(t.x,t.y,Kt[t.element].glow,1,15,2,.3))}n.projectiles=n.projectiles.filter(t=>t.speed>=0)}function J0(n,e,t){const i=e.pierce,s=Math.min(e.speed*t,i.maxDist-i.traveled);e.x+=i.dirX*s,e.y+=i.dirY*s,i.traveled+=s,e.tx=e.x+i.dirX*20,e.ty=e.y+i.dirY*20;const r=n.wizards.find(a=>a.id===e.wizardId);for(const a of n.enemies){if(a.hp<=0||a.phased||i.hitIds.includes(a.id))continue;const o=a.x-e.x,c=a.y-e.y,l=k0+a.def.radius;o*o+c*c>l*l||(i.hitIds.push(a.id),H.burst(a.x,a.y,Kt[e.element].glow,5,80,2.5,.3),ea(n,r,a,e.damage,e.element))}i.traveled>=i.maxDist?e.speed=-1:Math.random()<.5&&H.burst(e.x,e.y,Kt[e.element].glow,1,12,1.5,.2)}function Y0(n,e,t){const i=Kt[e.element];H.burst(e.tx,e.ty,i.color,e.splash>0?14:7,e.splash>0?150:90,3),e.splash>=40&&(se.explosion(),H.ring(e.tx,e.ty,"#ff7b00",e.splash),H.burst(e.tx,e.ty,"#9a9086",12,35,4,1.3));const s=n.wizards.find(r=>r.id===e.wizardId);if(t&&t.hp>0&&ea(n,s,t,e.damage,e.element),e.splash>0)for(const r of n.enemies){if(r.hp<=0||r===t)continue;const a=r.x-e.tx,o=r.y-e.ty;a*a+o*o<=(e.splash+r.def.radius)**2&&ea(n,s,r,e.damage*.6,e.element)}}function ea(n,e,t,i,s){s==="fire"&&(t.statuses.chill||t.statuses.frozen)&&(delete t.statuses.chill,delete t.statuses.frozen,i*=n.reaction.shatterMult,n.stats.reactions.shatter++,H.floater(t.x,t.y-18,"Shatter!","#b3ecff",13),H.burst(t.x,t.y,"#b3ecff",12,140,3),se.shatter()),sn(n,t,i,s,e),e&&t.hp>0&&!t.shieldActive&&Zp(n,e,t)}function uo(n,e){var t;return((t=n.immunities)==null?void 0:t.includes(e))??!1}function Zp(n,e,t){const i=e.stats;if(e.def.element==="fire"&&i.burnDps>0&&!uo(t,"burn"))if(t.statuses.wet)delete t.statuses.wet,n.stats.reactions.evaporate++,H.floater(t.x,t.y-18,"Evaporate!","#ffffff",12),H.burst(t.x,t.y,"#dddddd",8,80,2.5),se.evaporate(),sn(n,t,n.reaction.evaporateBurst,"fire",e);else{const s=t.statuses.burn;t.statuses.burn={t:i.burnDuration,dps:Math.max((s==null?void 0:s.dps)??0,i.burnDps)}}if(e.def.entangles&&e.stats.entangleDur>0&&(t.entangleCd??0)<=0){const s=t.def.boss?e.stats.entangleDur*N0:e.stats.entangleDur;t.statuses.entangled={t:s},t.entangleCd=s+F0,H.floater(t.x,t.y-14,"Rooted!","#8c9c72",11),H.burst(t.x,t.y+6,"#6b7a52",8,70,2.5,.4)}if(e.def.element==="ice"){if(t.statuses.burn&&!uo(t,"wet")?(delete t.statuses.burn,n.stats.reactions.evaporate++,H.floater(t.x,t.y-18,"Evaporate!","#ffffff",12),H.burst(t.x,t.y,"#dddddd",8,80,2.5),se.evaporate(),sn(n,t,n.reaction.evaporateBurst,"ice",e)):uo(t,"wet")||(t.statuses.wet={t:i.wetDuration}),t.hp<=0)return;uu(n,t,i.chillPct)}}function uu(n,e,t){if(e.statuses.frozen||uo(e,"chill"))return;const i=e.statuses.chill??{t:0,pct:0,stacks:0};if(i.stacks=Math.min(_h,i.stacks+1),i.pct=Math.max(i.pct,t),i.t=2.5,e.statuses.chill=i,i.stacks>=_h){delete e.statuses.chill;const s=e.def.boss?n.reaction.freezeDuration*C0:n.reaction.freezeDuration;e.statuses.frozen={t:s},n.stats.reactions.frozen++,H.floater(e.x,e.y-18,"Frozen!","#e6f9ff",12),H.burst(e.x,e.y,"#b3ecff",10,100,3),se.freeze()}}function Mh(n,e){return e&&n.perks.attuneElement===e.def.element?1+n.perks.attunePct/100:1}function sn(n,e,t,i,s){var d,u,h;if(e.hp<=0)return;if(e.shieldActive){e.shieldHits=(e.shieldHits??0)+1,e.hitFlash=.08,H.floater(e.x+(Math.random()-.5)*12,e.y-14,"Blocked!","#ffb163",11),se.armorClank(),e.shieldHits>=(((d=e.def.periodicShield)==null?void 0:d.hits)??1/0)&&Qp(n,e);return}if(e.armorHp!==void 0&&e.armorHp>0){const f=1+(((u=e.statuses.rattled)==null?void 0:u.pct)??0),g=gh(n,s,e),y=Mh(n,s),m=t*f*g*y*(i==="physical"?1:.1);e.armorHp-=m,e.hitFlash=.12,n.stats.dmgByElement[i]=(n.stats.dmgByElement[i]??0)+m,m>=1&&H.floater(e.x+(Math.random()-.5)*12,e.y-10,String(Math.round(m)),i==="physical"?"#cdd7e0":"#6b7684",i==="physical"?11:9),i==="physical"&&se.armorClank(),e.armorHp<=0&&Z0(n,e);return}const r=e.def.resist[i]??1;if(r===0){H.floater(e.x,e.y-14,"Immune!","#999999",11);return}const a=1+(((h=e.statuses.rattled)==null?void 0:h.pct)??0),o=gh(n,s,e),c=e.def.flying&&(s==null?void 0:s.def.family)==="archer"?1.5:1;let l=t*r*a*o*c*Mh(n,s);if(e.wardCap!==void 0&&l>e.wardCap&&(l=e.wardCap,H.floater(e.x,e.y-16,"warded","#8fb4ff",9)),e.hp-=l,e.hitFlash=.12,n.stats.dmgByElement[i]=(n.stats.dmgByElement[i]??0)+l,l>=1){const f=r>1?"#ffe08a":r<1?"#8899aa":"#ffffff";H.floater(e.x+(Math.random()-.5)*12,e.y-10,String(Math.round(l)),f,r>1?12:10)}e.hp<=0&&em(n,e,s,i)}function ta(n,e,t){const i=hc[e];if(!i)return null;const s=ir[Math.min(n.act,ir.length-1)],r=i.hp*s.hp,a=Math.max(0,t),o=n.track.posAt(a),c={id:n.nextId++,def:i,hp:r,maxHp:r,dist:a,x:o.x,y:o.y,statuses:{},wobble:Math.random()*Math.PI*2,animT:Math.random()*2,angle:o.angle,hitFlash:0,speedMult:s.speed,armorHp:i.armor};return n.enemies.push(c),H.burst(o.x,o.y,i.color,10,120,3,.4),c}function Qp(n,e){e.shieldActive=!1,H.floater(e.x,e.y-32,"Shield shatters!","#ffd75e",14),H.burst(e.x,e.y,"#ff9b4a",18,170,3.5,.5),H.ring(e.x,e.y,"#ff7b00",48),se.bossRoar()}function Z0(n,e){e.armorHp=0,H.floater(e.x,e.y-30,"ARMOR SHATTERED!","#ffd75e",15),H.burst(e.x,e.y,"#cdd7e0",22,190,4,.6),H.ring(e.x,e.y,"#cdd7e0",55),se.armorBreak();for(const t of e.def.armorBreakSpawns??[])ta(n,t,e.dist-20-Math.random()*30)}function em(n,e,t,i){var a;const s=ir[Math.min(n.act,ir.length-1)].bounty,r=Math.round(e.def.bounty*(((a=n.waveModifier)==null?void 0:a.bountyMult)??1)*s*(1+n.perks.bountyPct/100))+n.bountyBonus;if(n.gold+=r,n.stats.kills++,H.floater(e.x,e.y-22,`+${r}`,"#ffd75e",12),H.burst(e.x,e.y,e.def.color,12,130,3.5,.5),H.ring(e.x,e.y,e.def.color,e.def.boss?46:24),se.coin(),n.stats.kills%40===0&&No(n,"killLives")&&(n.lives++,H.floater(e.x,e.y-40,"🍷 +1 ❤","#ff9db5",14)),e.returning&&e.def.stealsGold&&(n.gold+=e.def.stealsGold,H.floater(e.x,e.y-34,`💰 +${e.def.stealsGold} recovered!`,"#7dff9b",13)),e.def.deathSilence){const o=e.def.deathSilence;H.ring(e.x,e.y,"#cfd8e8",o.radius),se.wail();for(const c of n.wizards)c.pendingSpecialize||(c.x-e.x)**2+(c.y-e.y)**2<=o.radius*o.radius&&(c.silencedT=Math.max(c.silencedT??0,o.duration),H.floater(c.x,c.y-28,"silenced!","#cfd8e8",12))}if(e.def.deathSpawns&&(e.def.id.startsWith("slime")?(se.squish(),H.burst(e.x,e.y,e.def.color,12,110,4,.5)):(se.woodCrash(),H.floater(e.x,e.y-34,"The wagon breaks open!","#e0b070",13),H.burst(e.x,e.y,"#7a5c38",18,150,4,.6)),e.def.deathSpawns.forEach((c,l)=>ta(n,c,e.dist-8-l*14))),e.def.splitOnElemental&&i&&i!=="physical"){se.squish(),H.floater(e.x,e.y-30,"It splits!","#b8e0e8",13),H.burst(e.x,e.y,"#d4f0f6",14,120,3.5,.5);for(let o=0;o<e.def.splitOnElemental.count;o++)ta(n,e.def.splitOnElemental.type,e.dist-6-o*12)}Q0(n,e,t)}function Q0(n,e,t){for(const i of n.draftMods){if(!i.fx)continue;const s=i.element!=="all"||!!i.family,r=t?Hp(i,t.def):!s;Sh(n,e,t,i.fx,r)}t!=null&&t.def.innateFx&&Sh(n,e,t,t.def.innateFx,!0)}function Sh(n,e,t,i,s){var c;if(i.spreadBurnOnDeath&&e.statuses.burn){let l,d=8100;for(const u of n.enemies){if(u===e||u.hp<=0||u.statuses.burn||(c=u.immunities)!=null&&c.includes("burn"))continue;const h=(u.x-e.x)**2+(u.y-e.y)**2;h<=d&&(d=h,l=u)}l&&(l.statuses.burn={t:Math.max(e.statuses.burn.t,1.5),dps:e.statuses.burn.dps},H.arc(e.x,e.y,l.x,l.y,"#ff7b00"),H.floater(l.x,l.y-16,"Wildfire!","#ff9b4a",11))}if(!s)return;const r=i.onKillExplode;if(r){se.explosion(),H.burst(e.x,e.y,"#ffab5e",14,160,3.5),H.burst(e.x,e.y,"#9a9086",8,30,4,1.2),H.ring(e.x,e.y,"#ff7b00",r.radius);for(const l of n.enemies){if(l===e||l.hp<=0)continue;const d=l.x-e.x,u=l.y-e.y;d*d+u*u<=(r.radius+l.def.radius)**2&&sn(n,l,r.damage,"physical",t)}}const a=i.onKillGold;a&&n.rng()<a.chance&&(n.gold+=a.amount,H.floater(e.x,e.y-36,`+${a.amount} bonus`,"#ffd75e",11));const o=i.onKillStackDamage;o&&n.killStackPct<o.capPct&&(n.killStackPct=Math.min(o.capPct,n.killStackPct+o.pct))}function eb(n,e){for(const t of n.enemies)t.hasteMul=1,t.wardCap=void 0;for(const t of n.enemies){const i=t.def.aura;if(!(!i||t.hp<=0)){if(i.kind==="ward"){for(const s of n.enemies){if(s===t||s.hp<=0)continue;(s.x-t.x)**2+(s.y-t.y)**2<=i.radius*i.radius&&(s.wardCap=Math.min(s.wardCap??1/0,i.power))}continue}if(i.kind==="heal"){if(t.auraCd=(t.auraCd??i.period??2)-e,t.auraCd<=0){t.auraCd=i.period??2;let s=!1;for(const r of n.enemies){if(r===t||r.hp<=0||r.hp>=r.maxHp||(r.x-t.x)**2+(r.y-t.y)**2>i.radius*i.radius)continue;const o=r.maxHp*i.power;r.hp=Math.min(r.maxHp,r.hp+o),H.floater(r.x,r.y-12,`+${Math.round(o)}`,"#7dff9b",10),s=!0}s&&(H.ring(t.x,t.y,"#3fae5a",i.radius),se.healChime())}}else{se.drumBeat();for(const s of n.enemies){if(s===t||s.hp<=0)continue;(s.x-t.x)**2+(s.y-t.y)**2<=i.radius*i.radius&&(s.hasteMul=Math.max(s.hasteMul??1,1+i.power))}}}}for(const t of n.enemies){if(t.hp<=0)continue;const i=t.statuses;if(t.def.regen&&!i.frozen&&t.hp<t.maxHp&&(t.hp=Math.min(t.maxHp,t.hp+t.maxHp*t.def.regen*e)),t.def.dropSpawns&&(t.dropCd=(t.dropCd??t.def.dropSpawns.period)-e,t.dropCd<=0)){t.dropCd=t.def.dropSpawns.period,se.woodCrash(),H.floater(t.x,t.y-30,"The tower unloads!","#e0b070",12);for(let a=0;a<t.def.dropSpawns.count;a++)ta(n,t.def.dropSpawns.type,t.dist-18-a*14)}if(t.def.hexes&&(t.hexCd=(t.hexCd??t.def.hexes.period*.6)-e,t.hexCd<=0)){t.hexCd=t.def.hexes.period;const a=t.def.hexes.radius*t.def.hexes.radius,o=n.wizards.filter(c=>!c.pendingSpecialize&&(c.silencedT??0)<=0&&(c.x-t.x)**2+(c.y-t.y)**2<=a);if(o.length>0){const c=o[Math.floor(Math.random()*o.length)];c.silencedT=t.def.hexes.duration,H.arc(t.x,t.y,c.x,c.y,"#b06bff"),H.ring(c.x,c.y,"#7a4a9e",30),H.floater(c.x,c.y-30,"HEXED!","#b06bff",14),se.hexZap()}}if(t.def.periodicShield){const a=t.def.periodicShield;t.shieldT=(t.shieldT??0)+e;const o=t.shieldT%a.period>a.period-a.duration;o&&!t.shieldActive&&(t.shieldHits??0)===0?(t.shieldActive=!0,H.floater(t.x,t.y-34,"🛡 CINDER CARAPACE!","#ff9b4a",15),H.ring(t.x,t.y,"#ff7b00",60),se.armorClank()):!o&&t.shieldActive&&Qp(n,t),o||(t.shieldHits=0),t.shieldActive&&t.shieldT%.4<e&&H.ring(t.x,t.y,"#ff7b00",34)}if(t.def.hpPhases){const a=t.def.hpPhases;let o=t.phaseIdx??0;for(;o<a.thresholds.length&&t.hp<=t.maxHp*a.thresholds[o];){o++,H.floater(t.x,t.y-40,"💗 Heartstones erupt!","#ff9db5",15),H.ring(t.x,t.y,"#e05a7a",90),se.healChime();for(let c=0;c<a.count;c++)ta(n,a.type,t.dist+(c%2===0?-45:45)*(1+Math.floor(c/2)))}t.phaseIdx=o}if(t.def.phase){t.phaseT=(t.phaseT??0)+e;const a=t.phaseT%t.def.phase.period,o=t.phased;t.phased=a>t.def.phase.period-t.def.phase.duration,t.phased!==o&&(t.def.burrowSpeedMul?(se.thud(),H.burst(t.x,t.y+4,"#8a6a42",12,90,3.5,.5),H.ring(t.x,t.y,"#8a6a42",20)):se.phaseShimmer())}if(t.def.frostAura&&t.animT%1.4<e&&H.ring(t.x,t.y,"#a8dcf0",t.def.frostAura.radius*.55),i.burn&&(tb(n,t,i.burn.dps*e),i.burn.t-=e,i.burn.t<=0&&delete i.burn),i.wet&&(i.wet.t-=e,i.wet.t<=0&&delete i.wet),i.chill&&(i.chill.t-=e,i.chill.t<=0&&delete i.chill),i.frozen&&(i.frozen.t-=e,i.frozen.t<=0&&delete i.frozen),i.rattled&&(i.rattled.t-=e,i.rattled.t<=0&&delete i.rattled),i.entangled&&(i.entangled.t-=e,i.entangled.t<=0&&delete i.entangled),i.snared&&(i.snared.t-=e,i.snared.t<=0&&delete i.snared),i.stunned&&(i.stunned.t-=e,i.stunned.t<=0&&delete i.stunned),t.hp<=0)continue;let s=1;i.frozen||i.entangled||i.stunned?s=0:i.chill&&(s=Math.max(.25,1-i.chill.pct*(.6+.2*i.chill.stacks))),s>0&&i.snared&&(s*=Math.max(.2,1-i.snared.pct)),s*=t.hasteMul??1,t.phased&&t.def.burrowSpeedMul&&(s*=t.def.burrowSpeedMul),t.animT+=s*e,t.hitFlash>0&&(t.hitFlash-=e),t.gustCd&&t.gustCd>0&&(t.gustCd-=e),t.entangleCd&&t.entangleCd>0&&(t.entangleCd-=e);const r=t.def.speed*(t.speedMult??1)*s*e;if(t.dist+=t.returning?-r:r,t.def.flying){const a=n.track.posAt(0),o=n.track.posAt(n.track.total),c=Math.hypot(o.x-a.x,o.y-a.y)||1,l=Math.max(0,Math.min(1,t.dist/c));t.x=a.x+(o.x-a.x)*l,t.y=a.y+(o.y-a.y)*l,t.angle=Math.atan2(o.y-a.y,o.x-a.x),t.dist>=c&&wh(n,t)}else{const a=n.track.posAt(t.dist);t.x=a.x,t.y=a.y,t.angle=a.angle,t.returning?(t.angle+=Math.PI,t.dist<=0&&(t.hp=0)):t.dist>=n.track.total&&wh(n,t)}}n.enemies=n.enemies.filter(t=>t.hp>0)}function wh(n,e){if(e.def.stealsGold&&!e.returning){const i=Math.min(n.gold,e.def.stealsGold);n.gold-=i,e.returning=!0,H.floater(e.x,e.y-20,`💰 -${i} stolen!`,"#ffd75e",15),se.leak();return}e.hp=0;const t=e.def.leakCost??(e.def.boss?5:1);n.lives-=t,n.stats.leaks++,H.floater(e.x-20,e.y,`-${t} ❤`,"#ff6b81",t>1?16:14),se.leak(),n.lives<=0&&(n.lives=0,n.phase="lost",se.lose())}function tb(n,e,t){var a;if(e.shieldActive||e.armorHp!==void 0&&e.armorHp>0)return;const i=e.def.resist.fire??1,s=1+(((a=e.statuses.rattled)==null?void 0:a.pct)??0),r=t*i*s;e.hp-=r,n.stats.dmgByElement.fire+=r,e.hp<=0&&em(n,e,void 0,"fire")}const hu="wizardtd.run";function ys(n){if(n.phase==="won"||n.phase==="lost")return;const e={mapId:n.map.id,seed:n.seed,gold:n.gold,lives:n.lives,round:n.round,act:n.act,lastEliteRound:n.lastEliteRound,cardIds:n.draftMods.map(t=>t.id),wizards:n.wizards.map(t=>({defId:t.def.id,cx:t.cx,cy:t.cy,tiers:[...t.tiers],mode:t.mode,invested:t.invested})),stats:n.stats,killStackPct:n.killStackPct,relicIds:n.relics.map(t=>t.id),seenEvents:[...n.seenEvents],rerollTokens:n.rerollTokens,firstTowerBought:n.firstTowerBought,spellCds:n.spellCds};try{localStorage.setItem(hu,JSON.stringify(e))}catch{}}function nb(){try{const n=localStorage.getItem(hu);if(!n)return null;const e=JSON.parse(n);return e.round>0||e.wizards.length>0?e:null}catch{return null}}function fu(){try{localStorage.removeItem(hu)}catch{}}function ib(n,e=Np){const t=Cp(n.mapId);if(!t)return null;const i=dc(t,n.seed,e);for(const s of n.cardIds){const r=iu.find(a=>a.id===s);r&&ru(i,r)}for(const s of n.relicIds??[]){const r=Bp.find(a=>a.id===s);r&&Fo(i,r)}i.seenEvents=[...n.seenEvents??[]];for(const s of n.wizards){const r=nn[s.defId];if(!r)continue;const a=au(i,r,s.cx,s.cy);a.tiers=s.tiers,a.mode=s.mode,a.invested=s.invested,a.stats=ji(r,a.tiers,i.draftMods),i.wizards.push(a)}return i.gold=n.gold,i.lives=n.lives,i.round=n.round,i.lastEliteRound=n.lastEliteRound,i.stats=n.stats,i.killStackPct=n.killStackPct??0,i.act=n.act??0,i.rerollTokens=n.rerollTokens??e.rerollTokens,i.firstTowerBought=n.firstTowerBought??n.wizards.length>0,i.spellCds=n.spellCds??{},i.rng=Lp(n.seed+n.round*101),i}const Eh={id:"guarded",name:"Guarded",desc:"+25% HP — a relic awaits",hpMult:1.25};function pu(n){const e=cc(n.act);if(n.phase!=="build"||n.round>=e.length||!n.nodePicked&&n.nextNodes.length>1)return!1;ys(n);const t=e[n.round];n.waveKind=n.nodeChoice,n.waveModifier=null,n.forcedModifier?(n.waveModifier=n.forcedModifier,n.forcedModifier=null,n.waveModifier!==Eh&&n.waveModifier.id!=="blessed"&&(n.waveKind="elite"),H.floater(480,80,`★ ${n.waveModifier.name} — ${n.waveModifier.desc}`,"#ffd75e",15)):n.nodeChoice==="elite"?(n.waveModifier=sb(n),n.lastEliteRound=n.round,H.floater(480,80,`★ ELITE: ${n.waveModifier.name} — ${n.waveModifier.desc}`,"#ffd75e",15)):n.nodeChoice==="treasure"&&(n.waveModifier=Eh,H.floater(480,80,"💎 GUARDED: clear the wave to claim a relic","#7fd8ff",15)),n.pendingSpawns=[];for(const i of t)for(let s=0;s<i.count;s++)n.pendingSpawns.push({t:i.delay+s*i.gap,type:i.type});return n.pendingSpawns.sort((i,s)=>i.t-s.t),n.waveTime=0,n.phase="wave",se.waveStart(),!0}function sb(n){const e=()=>Do[Math.floor(n.rng()*Do.length)],t=e();if(n.act<2)return t;let i=e();for(let s=0;s<5&&i.id===t.id;s++)i=e();return i.id===t.id?t:{id:`${t.id}+${i.id}`,name:`${t.name} ${i.name}`,desc:`${t.desc} & ${i.desc}`,speedMult:(t.speedMult??1)*(i.speedMult??1),hpMult:(t.hpMult??1)*(i.hpMult??1),immune:[...t.immune??[],...i.immune??[]],gustImmune:t.gustImmune||i.gustImmune}}function rb(n,e){var t;if(n.phase!=="wave"){n.phase==="build"&&n.autoplay&&n.autoplayTimer>0&&(n.autoplayTimer-=e,n.autoplayTimer<=0&&pu(n));return}for(n.waveTime+=e;n.pendingSpawns.length>0&&n.pendingSpawns[0].t<=n.waveTime;){const i=n.pendingSpawns.shift();ab(n,i.type)}if(n.pendingSpawns.length===0&&n.enemies.length===0){const i=n.waveKind==="elite",s=n.waveKind==="treasure";if(n.waveModifier=null,n.waveKind="normal",n.round++,n.stats.wavesCleared++,n.round>=cc(n.act).length)Vp(n)&&n.act<Dp-1?(n.phase="actClear",se.actFanfare()):(n.phase="won",se.win());else{const r=a0+o0*n.round;n.gold+=r;for(const a of n.draftMods){const o=(t=a.fx)==null?void 0:t.interest;if(!o)continue;const c=Math.min(o.cap,Math.floor(n.gold/o.per));c>0&&(n.gold+=c,H.floater(480,110,`+${c} interest 🏦`,"#ffd75e",13))}s?(n.pendingRelicDraft=Ll(n,n.perks.trove?3:2),n.phase="relic"):(n.pendingDraft=ou(n,cu(n),i),n.eliteDraft=i,n.phase="draft")}}}function ab(n,e){const t=hc[e],i=n.track.posAt(0),s=n.waveModifier,r=ir[Math.min(n.act,ir.length-1)],a=t.boss?1:1+n.round*r0,o=t.hp*((s==null?void 0:s.hpMult)??1)*r.hp*a,c=No(n,"hasteEnemies")?1.1:1,l=[...t.innateImmune??[],...(s==null?void 0:s.immune)??[]];n.enemies.push({id:n.nextId++,def:t,hp:o,maxHp:o,dist:0,x:i.x,y:i.y,statuses:No(n,"spawnChill")&&!l.includes("chill")?{chill:{t:2.5,pct:.15,stacks:1}}:{},wobble:Math.random()*Math.PI*2,animT:Math.random()*2,angle:i.angle,hitFlash:0,speedMult:((s==null?void 0:s.speedMult)??1)*c*r.speed,immunities:l.length>0?l:void 0,gustImmune:s==null?void 0:s.gustImmune,armorHp:t.armor}),t.boss&&(H.floater(i.x+30,i.y-20,`${t.name}!`,"#ff9db5",14),(t.armor||t.hp>=1500)&&se.bossRoar())}function na(n,e){return n.gold>=e}function Dl(n,e){const t=n.perks.founderDiscount&&!n.firstTowerBought?.75:1;return Math.round(e*(1-n.towerDiscountPct/100)*t)}function tm(n,e){return na(n,e)?(n.gold-=e,!0):!1}function nm(n){return Math.floor(n.invested*su)}function ob(n,e){n.gold+=nm(e),n.wizards=n.wizards.filter(t=>t.id!==e.id),n.selectedWizardId===e.id&&(n.selectedWizardId=null)}const cb={common:"#9a92b5",uncommon:"#5bc8f5",rare:"#ffd75e"};let zi,Dr=null,ho=null;function lb(n){ho=n,zi=document.getElementById("draft-modal")}function db(n){if(n.phase!=="draft"||!n.pendingDraft){Dr&&(zi.classList.add("hidden"),Dr=null);return}Dr!==n.pendingDraft&&(Dr=n.pendingDraft,ub(n))}function ub(n){var i;const e=n.pendingDraft;zi.classList.remove("hidden"),zi.innerHTML=`
    <div id="draft-inner">
      <h2>${n.eliteDraft?"★ Elite Spoils — choose a RARE":"Choose a card"}</h2>
      <div id="draft-cards"></div>
      <div id="draft-footer">
        ${n.rerollTokens>0?`<button id="draft-reroll">🎲 Reroll (${n.rerollTokens} left)</button>`:""}
        <button id="draft-skip">Skip — take ${Op} ◉</button>
      </div>
    </div>`;const t=zi.querySelector("#draft-cards");for(const s of e){const r=s.element==="all"?"#c9b8ff":Kt[s.element].color,a=document.createElement("button");a.className="draft-card",a.style.borderColor=r,a.innerHTML=`
      <div class="dc-icon" style="background:${r}22">${s.icon}</div>
      <div class="dc-name">${s.name}</div>
      <div class="dc-desc">${s.desc}</div>
      <div class="dc-rarity" style="color:${cb[s.rarity]}">◆ ${s.rarity}</div>`,a.addEventListener("click",()=>Th(n,s)),t.appendChild(a)}zi.querySelector("#draft-skip").addEventListener("click",()=>Th(n,null)),(i=zi.querySelector("#draft-reroll"))==null||i.addEventListener("click",()=>{n.rerollTokens<=0||(n.rerollTokens--,n.pendingDraft=ou(n,cu(n),n.eliteDraft),se.click())})}function Th(n,e){e?(ru(n,e),se.upgrade(),H.floater(480,200,`${e.icon} ${e.name}!`,"#c9b8ff",16)):(n.gold+=Op,se.coin()),n.pendingDraft=null,n.eliteDraft=!1,n.phase="build",zi.classList.add("hidden"),Dr=null,ho==null||ho()}let $s,Fr=null,fo=null;function hb(n){fo=n,$s=document.getElementById("specialize-modal")}function fb(n){const e=uc(n,n.selectedWizardId),t=e!=null&&e.pendingSpecialize?e:void 0;if(!t){Fr&&($s.classList.add("hidden"),Fr=null);return}Fr!==t&&(Fr=t,pb(n,t))}function pb(n,e){const t=e.specializeOptions??[];$s.classList.remove("hidden"),$s.innerHTML=`
    <div id="draft-inner">
      <h2>Specialize your ${e.family==="wizard"?"Wizard":"Goblin"}</h2>
      <div id="draft-cards"></div>
      <div id="spec-hint">Click elsewhere to decide later — it'll wait, idle, until you choose.</div>
    </div>`;const i=$s.querySelector("#draft-cards");for(const s of t){const r=document.createElement("button");r.className="draft-card",r.style.borderColor=s.color,r.innerHTML=`
      <div class="dc-icon" style="background:${s.color}22">${s.icon}</div>
      <div class="dc-name">${s.name}</div>
      <div class="dc-desc">${s.desc}</div>`,r.addEventListener("click",()=>mb(n,e,s)),i.appendChild(r)}}function mb(n,e,t){qp(n,e,t),se.upgrade(),H.burst(e.x,e.y,t.color,14,120,3),H.floater(e.x,e.y-24,`${t.icon} ${t.name}!`,t.color,14),$s.classList.add("hidden"),Fr=null,fo==null||fo()}let Js,Uo,Hi,po=null,Nr=null,mo=null,Ah="";function gb(n){mo=n,Js=document.getElementById("relic-modal"),Uo=document.getElementById("relic-bar"),Hi=document.createElement("div"),Hi.id="relic-info",Hi.style.display="none",Uo.insertAdjacentElement("afterend",Hi)}function bb(n){if(po===n.id){po=null,Hi.style.display="none";return}po=n.id,Hi.innerHTML=`<b>${n.icon} ${n.name}</b> — ${n.desc}`,Hi.style.display=""}function _b(n){n.phase!=="relic"||!n.pendingRelicDraft?Nr&&(Js.classList.add("hidden"),Nr=null):Nr!==n.pendingRelicDraft&&(Nr=n.pendingRelicDraft,vb(n));const e=n.relics.map(t=>t.id).join(",");if(e!==Ah){Ah=e,Uo.innerHTML="",po=null,Hi.style.display="none";for(const t of n.relics){const i=document.createElement("div");i.className=`relic-chip ${t.rarity}`,i.textContent=t.icon,i.title=`${t.name} — ${t.desc}`,i.addEventListener("click",()=>{bb(t),se.click()}),Uo.appendChild(i)}}}function vb(n){const e=n.pendingRelicDraft;Js.classList.remove("hidden"),Js.innerHTML=`
    <div id="draft-inner">
      <h2>💎 Treasure! Choose a relic</h2>
      <div id="draft-cards"></div>
    </div>`;const t=Js.querySelector("#draft-cards");for(const i of e){const s=document.createElement("button");s.className="draft-card",s.style.borderColor=i.rarity==="rare"?"#ffd75e":"#5bc8f5",s.innerHTML=`
      <div class="dc-icon" style="background:#ffd75e22">${i.icon}</div>
      <div class="dc-name">${i.name}</div>
      <div class="dc-desc">${i.desc}</div>
      <div class="dc-rarity" style="color:${i.rarity==="rare"?"#ffd75e":"#5bc8f5"}">◆ ${i.rarity} relic</div>`,s.addEventListener("click",()=>xb(n,i)),t.appendChild(s)}}function xb(n,e){Fo(n,e),se.upgrade(),H.floater(480,200,`${e.icon} ${e.name}!`,"#ffd75e",16),n.pendingRelicDraft=null,n.phase="build",Js.classList.add("hidden"),Nr=null,mo==null||mo()}const yb={id:"blessed",name:"Storm-Blessed",desc:"20% slower, +30% HP, 2x bounty",speedMult:.8,hpMult:1.3,bountyMult:2};function Mb(n,e){switch(e){case"chest_open":{const t=Ll(n,1)[0];t&&(Fo(n,t),H.floater(480,180,`${t.icon} ${t.name}!`,"#ffd75e",15)),n.forcedModifier=Do[Math.floor(n.rng()*Do.length)],H.floater(480,210,"⚠ Something stirs... next wave is ELITE","#ff9db5",13),se.upgrade();break}case"blood_pact":{n.lives=Math.max(1,n.lives-3),n.pendingDraft=ou(n,cu(n),!0),n.eliteDraft=!0,n.phase="draft",se.leak();break}case"merchant_buy":{if(n.gold<130){H.floater(480,180,"Not enough gold — he scoffs and rolls on.","#9a92b5",12);break}n.gold-=130;const t=Ll(n,1)[0];t&&(Fo(n,t),H.floater(480,180,`${t.icon} ${t.name}!`,"#ffd75e",15)),se.coin();break}case"training":{if(n.gold<60){H.floater(480,180,"Not enough gold for the drillmaster.","#9a92b5",12);break}const t=n.wizards.filter(a=>!a.pendingSpecialize&&(a.tiers[0]<a.def.upgrades[0].tiers.length||a.tiers[1]<a.def.upgrades[1].tiers.length));if(t.length===0){H.floater(480,180,"No tower can be trained further.","#9a92b5",12);break}n.gold-=60;const i=t[Math.floor(n.rng()*t.length)],s=i.tiers[0]<i.def.upgrades[0].tiers.length?0:1,r=i.def.upgrades[s].tiers[i.tiers[s]];i.tiers[s]++,i.stats=Sb(n,i),H.burst(i.x,i.y,"#c9b8ff",12,110,3),H.floater(i.x,i.y-24,`${r.name} — free!`,"#c9b8ff",12),se.upgrade();break}case"gamble":{n.rng()<.5?(n.gold*=2,H.floater(480,180,`🪙 DOUBLE! ${n.gold} gold`,"#ffd75e",16),se.coin()):(n.gold=Math.floor(n.gold/2),H.floater(480,180,`🪙 The imp cackles. ${n.gold} gold left`,"#ff9db5",14),se.leak());break}case"blessing":{n.forcedModifier=yb,H.floater(480,180,"⛈️ The next wave is Storm-Blessed","#7fd8ff",14),se.waterPulse();break}}n.pendingEvent=null,n.nodeChoice="normal",n.nodePicked=!0,n.nextNodes=n.nextNodes.filter(t=>t!=="event")}function Sb(n,e){return ji(e.def,e.tiers,n.draftMods)}let qs,Ur=null,go=null;function wb(n){go=n,qs=document.getElementById("event-modal")}function Eb(n){if(!n.pendingEvent){Ur&&(qs.classList.add("hidden"),Ur=null);return}Ur!==n.pendingEvent&&(Ur=n.pendingEvent,Tb(n))}function Tb(n){const e=n.pendingEvent;qs.classList.remove("hidden"),qs.innerHTML=`
    <div id="event-inner">
      <div class="ev-icon">${e.icon}</div>
      <h2>${e.name}</h2>
      <div class="ev-desc">${e.desc}</div>
      <div id="event-choices"></div>
    </div>`;const t=qs.querySelector("#event-choices");for(const i of e.choices){const s=document.createElement("button");s.className="ev-choice",s.innerHTML=`
      <div class="evc-label">${i.label}</div>
      <div class="evc-desc">${i.desc}</div>`,s.addEventListener("click",()=>{se.click(),Mb(n,i.effect),qs.classList.add("hidden"),Ur=null,go==null||go()}),t.appendChild(s)}}const im={normal:{icon:"⚔️",label:"Normal",hint:"A standard wave. No surprises."},elite:{icon:"★",label:"Elite",hint:"A modified, harder wave — clear it for a RARE-only card draft."},treasure:{icon:"💎",label:"Treasure",hint:"Guarded wave (+25% HP) — clear it to claim a RELIC."},event:{icon:"❓",label:"Event",hint:"Something is happening on the road..."}};let bo,ns,_o="",Pc=-1;function Ab(){bo=document.getElementById("node-picker"),ns=document.getElementById("path-modal")}function Rb(n){n.phase==="build"&&Xp(n),Cb(n),Ib(n)}function Cb(n){if(!(n.phase==="build"&&!n.nodePicked&&n.nextNodes.length>1&&!n.pendingEvent)){if(Pc===n.round)return;ns.classList.add("hidden");return}if(Pc===n.round&&!ns.classList.contains("hidden"))return;Pc=n.round,ns.classList.remove("hidden"),ns.innerHTML=`
    <div id="draft-inner">
      <h2>🗺️ Choose your path — Wave ${n.round+1}</h2>
      <div id="draft-cards"></div>
    </div>`;const t=ns.querySelector("#draft-cards");for(const i of n.nextNodes){const s=im[i],r=document.createElement("button");r.className=`draft-card path-card ${i}`,r.innerHTML=`
      <div class="dc-icon">${s.icon}</div>
      <div class="dc-name">${s.label}</div>
      <div class="dc-desc">${s.hint}</div>`,r.addEventListener("click",()=>Pb(n,i)),t.appendChild(r)}}function Pb(n,e){se.click(),e==="event"?(n.pendingEvent=Kp(n),n.pendingEvent||(n.nextNodes=n.nextNodes.filter(t=>t!=="event"),n.nodeChoice="normal",n.nodePicked=!0)):(n.nodeChoice=e,n.nodePicked=!0),ns.classList.add("hidden"),_o=""}function Ib(n){const e=n.phase==="build"&&n.nodePicked&&n.nextNodes.length>1,t=`${e}|${n.nextNodes.join(",")}|${n.nodeChoice}|${n.nodesForRound}`;if(t!==_o&&(_o=t,bo.classList.toggle("hidden",!e),!!e)){bo.innerHTML="";for(const i of n.nextNodes){const s=im[i],r=document.createElement("button");r.className=`node-btn ${i}${n.nodeChoice===i?" active":""}`,r.title=s.hint,r.innerHTML=`<span class="nb-icon">${s.icon}</span>${s.label}`,r.addEventListener("click",()=>{if(se.click(),i==="event"){n.pendingEvent=Kp(n),n.pendingEvent||(n.nextNodes=n.nextNodes.filter(a=>a!=="event"));return}n.nodeChoice=i,_o=""}),bo.appendChild(r)}}}let Xs,kr=-1,vo=null;function Lb(n){vo=n,Xs=document.getElementById("actclear-modal")}function Db(n){if(n.phase!=="actClear"){kr!==-1&&(Xs.classList.add("hidden"),kr=-1);return}kr!==n.act&&(kr=n.act,Fb(n))}function Fb(n){const e=Yd(n.act+1,n.seed),t=n.wizards.reduce((i,s)=>i+Math.round(s.invested*su),0);Xs.classList.remove("hidden"),Xs.innerHTML=`
    <div id="event-inner">
      <div class="ev-icon">🏰</div>
      <h2>Act ${["I","II","III"][n.act]} Complete!</h2>
      <div class="ev-desc">
        The ${n.map.name} is safe. The horde regroups ahead at <b>${e.name}</b>.<br/>
        Your towers are packed up and sold for <b>+${t} ◉</b> — cards, relics and gold
        travel with you. Build anew.
      </div>
      <div id="event-choices">
        <button class="ev-choice" id="btn-travel">
          <div class="evc-label">Travel onward ➤</div>
          <div class="evc-desc">Cross into ${e.name} (Act ${["I","II","III"][n.act+1]})</div>
        </button>
      </div>
    </div>`,Xs.querySelector("#btn-travel").addEventListener("click",()=>{Xs.classList.add("hidden"),kr=-1,vo==null||vo(n)})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mu="185",Nb=0,Rh=1,Ub=2,Wr=1,kb=2,Or=3,Mi=0,fn=1,Nt=2,vi=0,Ys=1,ko=2,Ch=3,Ph=4,Ob=5,is=100,Bb=101,zb=102,Gb=103,Vb=104,Hb=200,Wb=201,qb=202,Xb=203,Fl=204,Nl=205,Kb=206,jb=207,$b=208,Jb=209,Yb=210,Zb=211,Qb=212,e_=213,t_=214,Ul=0,kl=1,Ol=2,rr=3,Bl=4,zl=5,Gl=6,Vl=7,sm=0,n_=1,i_=2,ni=0,rm=1,am=2,om=3,gu=4,cm=5,lm=6,dm=7,Ih="attached",s_="detached",um=300,gs=301,ar=302,Ic=303,Lc=304,fc=306,or=1e3,ei=1001,Oo=1002,Ut=1003,hm=1004,Br=1005,kt=1006,xo=1007,gi=1008,_n=1009,fm=1010,pm=1011,ia=1012,bu=1013,si=1014,An=1015,Si=1016,_u=1017,vu=1018,sa=1020,mm=35902,gm=35899,bm=1021,_m=1022,Rn=1023,wi=1026,cs=1027,xu=1028,yu=1029,bs=1030,Mu=1031,Su=1033,yo=33776,Mo=33777,So=33778,wo=33779,Hl=35840,Wl=35841,ql=35842,Xl=35843,Kl=36196,jl=37492,$l=37496,Jl=37488,Yl=37489,Bo=37490,Zl=37491,Ql=37808,ed=37809,td=37810,nd=37811,id=37812,sd=37813,rd=37814,ad=37815,od=37816,cd=37817,ld=37818,dd=37819,ud=37820,hd=37821,fd=36492,pd=36494,md=36495,gd=36283,bd=36284,zo=36285,_d=36286,vd=2200,r_=2201,a_=2202,ra=2300,aa=2301,Dc=2302,Lh=2303,Ks=2400,js=2401,Go=2402,wu=2500,o_=2501,c_=0,vm=1,xd=2,l_=3200,yd=0,d_=1,Gi="",Wt="srgb",xn="srgb-linear",Vo="linear",it="srgb",ws=7680,Dh=519,u_=512,h_=513,f_=514,Eu=515,p_=516,m_=517,Tu=518,g_=519,Md=35044,Fh="300 es",ti=2e3,oa=2001;function b_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function __(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function v_(){const n=ca("canvas");return n.style.display="block",n}const Nh={};function Ho(...n){const e="THREE."+n.shift();console.log(e,...n)}function xm(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Te(...n){n=xm(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ne(...n){n=xm(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Zs(...n){const e=n.join(" ");e in Nh||(Nh[e]=!0,Te(...n))}function x_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const y_={[Ul]:kl,[Ol]:Gl,[Bl]:Vl,[rr]:zl,[kl]:Ul,[Gl]:Ol,[Vl]:Bl,[zl]:rr};class $i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uh=1234567;const qr=Math.PI/180,cr=180/Math.PI;function On(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function Au(n,e){return(n%e+e)%e}function M_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function S_(n,e,t){return n!==e?(t-n)/(e-n):0}function Xr(n,e,t){return(1-t)*n+t*e}function w_(n,e,t,i){return Xr(n,e,1-Math.exp(-t*i))}function E_(n,e=1){return e-Math.abs(Au(n,e*2)-e)}function T_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function A_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function R_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function C_(n,e){return n+Math.random()*(e-n)}function P_(n){return n*(.5-Math.random())}function I_(n){n!==void 0&&(Uh=n);let e=Uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function L_(n){return n*qr}function D_(n){return n*cr}function F_(n){return(n&n-1)===0&&n!==0}function N_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function U_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function k_(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),d=a((e+i)/2),u=r((e-i)/2),h=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*d,c*u,c*h,o*l);break;case"YZY":n.set(c*h,o*d,c*u,o*l);break;case"ZXZ":n.set(c*u,c*h,o*d,o*l);break;case"XZX":n.set(o*d,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*d,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*d,o*l);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function st(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ym={DEG2RAD:qr,RAD2DEG:cr,generateUUID:On,clamp:We,euclideanModulo:Au,mapLinear:M_,inverseLerp:S_,lerp:Xr,damp:w_,pingpong:E_,smoothstep:T_,smootherstep:A_,randInt:R_,randFloat:C_,randFloatSpread:P_,seededRandom:I_,degToRad:L_,radToDeg:D_,isPowerOfTwo:F_,ceilPowerOfTwo:N_,floorPowerOfTwo:U_,setQuaternionFromProperEuler:k_,normalize:st,denormalize:kn},Ju=class Ju{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ju.prototype.isVector2=!0;let xe=Ju;class In{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],d=i[s+2],u=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||c!==h||l!==f||d!==g){let m=c*h+l*f+d*g+u*y;m<0&&(h=-h,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){const x=Math.acos(m),M=Math.sin(x);p=Math.sin(p*x)/M,o=Math.sin(o*x)/M,c=c*p+h*o,l=l*p+f*o,d=d*p+g*o,u=u*p+y*o}else{c=c*p+h*o,l=l*p+f*o,d=d*p+g*o,u=u*p+y*o;const x=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=x,l*=x,d*=x,u*=x}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],d=i[s+3],u=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+d*u+c*f-l*h,e[t+1]=c*g+d*h+l*u-o*f,e[t+2]=l*g+d*f+o*h-c*u,e[t+3]=d*g-o*u-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),d=o(s/2),u=o(r/2),h=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*d*u+l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u+h*f*g;break;case"YZX":this._x=h*d*u+l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u-h*f*g;break;case"XZY":this._x=h*d*u-l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u+h*f*g;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],u=t[10],h=i+o+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(d-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-i*l,this._z=r*d+a*l+i*c-s*o,this._w=a*d-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yu=class Yu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),d=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*d,this.y=i+c*d+o*l-r*u,this.z=s+c*u+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yu.prototype.isVector3=!0;let C=Yu;const Fc=new C,kh=new In,Zu=class Zu{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=i,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],d=i[4],u=i[7],h=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],x=s[1],M=s[4],b=s[7],w=s[2],E=s[5],R=s[8];return r[0]=a*y+o*x+c*w,r[3]=a*m+o*M+c*E,r[6]=a*p+o*b+c*R,r[1]=l*y+d*x+u*w,r[4]=l*m+d*M+u*E,r[7]=l*p+d*b+u*R,r[2]=h*y+f*x+g*w,r[5]=h*m+f*M+g*E,r[8]=h*p+f*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-i*r*d+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=d*a-o*l,h=o*c-d*r,f=l*r-a*c,g=t*u+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=u*y,e[1]=(s*l-d*i)*y,e[2]=(o*i-s*a)*y,e[3]=h*y,e[4]=(d*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(i*c-l*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nc.makeScale(e,t)),this}rotate(e){return Zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nc.makeRotation(-e)),this}translate(e,t){return Zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zu.prototype.isMatrix3=!0;let Oe=Zu;const Nc=new Oe,Oh=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bh=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O_(){const n={enabled:!0,workingColorSpace:xn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gi?Vo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xn]:{primaries:e,whitePoint:i,transfer:Vo,toXYZ:Oh,fromXYZ:Bh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:i,transfer:it,toXYZ:Oh,fromXYZ:Bh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),n}const Xe=O_();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Es;class B_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Es===void 0&&(Es=ca("canvas")),Es.width=e.width,Es.height=e.height;const s=Es.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Es}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ca("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z_=0;class Ru{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uc(s[a].image)):r.push(Uc(s[a]))}else r=Uc(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Uc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?B_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}let G_=0;const kc=new C;class Ot extends $i{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=ei,s=ei,r=kt,a=gi,o=Rn,c=_n,l=Ot.DEFAULT_ANISOTROPY,d=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=On(),this.name="",this.source=new Ru(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kc).x}get height(){return this.source.getSize(kc).y}get depth(){return this.source.getSize(kc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==um)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=um;Ot.DEFAULT_ANISOTROPY=1;const Qu=class Qu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],d=c[4],u=c[8],h=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,b=(f+1)/2,w=(p+1)/2,E=(d+h)/4,R=(u+y)/4,_=(g+m)/4;return M>b&&M>w?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=E/i,r=R/i):b>w?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=_/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=_/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-y)/x,this.z=(h-d)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qu.prototype.isVector4=!0;let ot=Qu;class V_ extends $i{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Ot(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ru(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends V_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Mm extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H_ extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oc=class oc{constructor(e,t,i,s,r,a,o,c,l,d,u,h,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,d,u,h,f,g,y,m)}set(e,t,i,s,r,a,o,c,l,d,u,h,f,g,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),a=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=a*d,f=a*u,g=o*d,y=o*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=h-y*l,t[9]=-o*c,t[2]=y-h*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*d,f=c*u,g=l*d,y=l*u;t[0]=h+y*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=y+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*d,f=c*u,g=l*d,y=l*u;t[0]=h-y*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=y-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*d,f=a*u,g=o*d,y=o*u;t[0]=c*d,t[4]=g*l-f,t[8]=h*l+y,t[1]=c*u,t[5]=y*l+h,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,f=a*l,g=o*c,y=o*l;t[0]=c*d,t[4]=y-h*u,t[8]=g*u+f,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=f*u+g,t[10]=h-y*u}else if(e.order==="XZY"){const h=a*c,f=a*l,g=o*c,y=o*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=h*u+y,t[5]=a*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*d,t[10]=y*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W_,e,q_)}lookAt(e,t,i){const s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ci.crossVectors(i,mn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ci.crossVectors(i,mn)),Ci.normalize(),wa.crossVectors(mn,Ci),s[0]=Ci.x,s[4]=wa.x,s[8]=mn.x,s[1]=Ci.y,s[5]=wa.y,s[9]=mn.y,s[2]=Ci.z,s[6]=wa.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],d=i[1],u=i[5],h=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],x=i[3],M=i[7],b=i[11],w=i[15],E=s[0],R=s[4],_=s[8],T=s[12],P=s[1],I=s[5],F=s[9],W=s[13],$=s[2],O=s[6],K=s[10],q=s[14],ee=s[3],ne=s[7],pe=s[11],ve=s[15];return r[0]=a*E+o*P+c*$+l*ee,r[4]=a*R+o*I+c*O+l*ne,r[8]=a*_+o*F+c*K+l*pe,r[12]=a*T+o*W+c*q+l*ve,r[1]=d*E+u*P+h*$+f*ee,r[5]=d*R+u*I+h*O+f*ne,r[9]=d*_+u*F+h*K+f*pe,r[13]=d*T+u*W+h*q+f*ve,r[2]=g*E+y*P+m*$+p*ee,r[6]=g*R+y*I+m*O+p*ne,r[10]=g*_+y*F+m*K+p*pe,r[14]=g*T+y*W+m*q+p*ve,r[3]=x*E+M*P+b*$+w*ee,r[7]=x*R+M*I+b*O+w*ne,r[11]=x*_+M*F+b*K+w*pe,r[15]=x*T+M*W+b*q+w*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],x=c*f-l*h,M=o*f-l*u,b=o*h-c*u,w=a*f-l*d,E=a*h-c*d,R=a*u-o*d;return t*(y*x-m*M+p*b)-i*(g*x-m*w+p*E)+s*(g*M-y*w+p*R)-r*(g*b-y*E+m*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(a*d-o*l)-i*(r*d-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],x=t*o-i*a,M=t*c-s*a,b=t*l-r*a,w=i*c-s*o,E=i*l-r*o,R=s*l-r*c,_=d*y-u*g,T=d*m-h*g,P=d*p-f*g,I=u*m-h*y,F=u*p-f*y,W=h*p-f*m,$=x*W-M*F+b*I+w*P-E*T+R*_;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/$;return e[0]=(o*W-c*F+l*I)*O,e[1]=(s*F-i*W-r*I)*O,e[2]=(y*R-m*E+p*w)*O,e[3]=(h*E-u*R-f*w)*O,e[4]=(c*P-a*W-l*T)*O,e[5]=(t*W-s*P+r*T)*O,e[6]=(m*b-g*R-p*M)*O,e[7]=(d*R-h*b+f*M)*O,e[8]=(a*F-o*P+l*_)*O,e[9]=(i*P-t*F-r*_)*O,e[10]=(g*E-y*b+p*x)*O,e[11]=(u*b-d*E-f*x)*O,e[12]=(o*T-a*I-c*_)*O,e[13]=(t*I-i*T+s*_)*O,e[14]=(y*M-g*w-m*x)*O,e[15]=(d*w-u*M+h*x)*O,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+i,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,u=o+o,h=r*l,f=r*d,g=r*u,y=a*d,m=a*u,p=o*u,x=c*l,M=c*d,b=c*u,w=i.x,E=i.y,R=i.z;return s[0]=(1-(y+p))*w,s[1]=(f+b)*w,s[2]=(g-M)*w,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(h+p))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+M)*R,s[9]=(m-x)*R,s[10]=(1-(h+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ts.set(s[0],s[1],s[2]).length();const o=Ts.set(s[4],s[5],s[6]).length(),c=Ts.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Dn.copy(this);const l=1/a,d=1/o,u=1/c;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=d,Dn.elements[5]*=d,Dn.elements[6]*=d,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,t.setFromRotationMatrix(Dn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=ti,c=!1){const l=this.elements,d=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===ti)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===oa)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ti,c=!1){const l=this.elements,d=2/(t-e),u=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===ti)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===oa)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};oc.prototype.isMatrix4=!0;let ke=oc;const Ts=new C,Dn=new ke,W_=new C(0,0,0),q_=new C(1,1,1),Ci=new C,wa=new C,mn=new C,zh=new ke,Gh=new In;class Ki{constructor(e=0,t=0,i=0,s=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class Cu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X_=0;const Vh=new C,As=new In,ci=new ke,Ea=new C,gr=new C,K_=new C,j_=new In,Hh=new C(1,0,0),Wh=new C(0,1,0),qh=new C(0,0,1),Xh={type:"added"},$_={type:"removed"},Rs={type:"childadded",child:null},Oc={type:"childremoved",child:null};class mt extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new C,t=new Ki,i=new In,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new Oe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Hh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(qh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ea.copy(e):Ea.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(gr,Ea,this.up):ci.lookAt(Ea,gr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),As.setFromRotationMatrix(ci),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($_),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,K_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,j_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}mt.DEFAULT_UP=new C(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rt extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J_={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(J_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function zc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class U{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Xe.workingColorSpace){if(e=Au(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=zc(a,r,e+1/3),this.g=zc(a,r,e),this.b=zc(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function i(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const i=Sm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Xe.workingToColorSpace(Jt.copy(this),e),Math.round(We(Jt.r*255,0,255))*65536+Math.round(We(Jt.g*255,0,255))*256+Math.round(We(Jt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Jt.copy(this),t);const i=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=d<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Wt){Xe.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,s=Jt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Ta);const i=Xr(Pi.h,Ta.h,t),s=Xr(Pi.s,Ta.s,t),r=Xr(Pi.l,Ta.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new U;U.NAMES=Sm;class Pu{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new U(e),this.near=t,this.far=i}clone(){return new Pu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Y_ extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fn=new C,li=new C,Gc=new C,di=new C,Cs=new C,Ps=new C,Kh=new C,Vc=new C,Hc=new C,Wc=new C,qc=new ot,Xc=new ot,Kc=new ot;class Tn{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Fn.subVectors(e,t),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Fn.subVectors(s,t),li.subVectors(i,t),Gc.subVectors(e,t);const a=Fn.dot(Fn),o=Fn.dot(li),c=Fn.dot(Gc),l=li.dot(li),d=li.dot(Gc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const h=1/u,f=(l*c-o*d)*h,g=(a*d-o*c)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,di.x),c.addScaledVector(a,di.y),c.addScaledVector(o,di.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return qc.setScalar(0),Xc.setScalar(0),Kc.setScalar(0),qc.fromBufferAttribute(e,t),Xc.fromBufferAttribute(e,i),Kc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(qc,r.x),a.addScaledVector(Xc,r.y),a.addScaledVector(Kc,r.z),a}static isFrontFacing(e,t,i,s){return Fn.subVectors(i,t),li.subVectors(e,t),Fn.cross(li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Fn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Cs.subVectors(s,i),Ps.subVectors(r,i),Vc.subVectors(e,i);const c=Cs.dot(Vc),l=Ps.dot(Vc);if(c<=0&&l<=0)return t.copy(i);Hc.subVectors(e,s);const d=Cs.dot(Hc),u=Ps.dot(Hc);if(d>=0&&u<=d)return t.copy(s);const h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(i).addScaledVector(Cs,a);Wc.subVectors(e,r);const f=Cs.dot(Wc),g=Ps.dot(Wc);if(g>=0&&f<=g)return t.copy(r);const y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Ps,o);const m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return Kh.subVectors(r,s),o=(u-d)/(u-d+(f-g)),t.copy(s).addScaledVector(Kh,o);const p=1/(m+y+h);return a=y*p,o=h*p,t.copy(i).addScaledVector(Cs,a).addScaledVector(Ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ln{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Aa.copy(i.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),Ra.subVectors(this.max,br),Is.subVectors(e.a,br),Ls.subVectors(e.b,br),Ds.subVectors(e.c,br),Ii.subVectors(Ls,Is),Li.subVectors(Ds,Ls),Yi.subVectors(Is,Ds);let t=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-Yi.z,Yi.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,Yi.z,0,-Yi.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-Yi.y,Yi.x,0];return!jc(t,Is,Ls,Ds,Ra)||(t=[1,0,0,0,1,0,0,0,1],!jc(t,Is,Ls,Ds,Ra))?!1:(Ca.crossVectors(Ii,Li),t=[Ca.x,Ca.y,Ca.z],jc(t,Is,Ls,Ds,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ui=[new C,new C,new C,new C,new C,new C,new C,new C],Nn=new C,Aa=new Ln,Is=new C,Ls=new C,Ds=new C,Ii=new C,Li=new C,Yi=new C,br=new C,Ra=new C,Ca=new C,Zi=new C;function jc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Zi.fromArray(n,r);const o=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),c=e.dot(Zi),l=t.dot(Zi),d=i.dot(Zi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Dt=new C,Pa=new xe;let Z_=0;class Xt extends $i{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Md,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),s=st(s,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Md&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class wm extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Em extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Je extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Q_=new Ln,_r=new C,$c=new C;class oi{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Q_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_r,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add($c)),this.expandByPoint(_r.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ev=0;const Mn=new ke,Jc=new mt,Fs=new C,gn=new Ln,vr=new Ln,Vt=new C;class bt extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b_(e)?Em:wm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Oe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,i){return Mn.makeTranslation(e,t,i),this.applyMatrix4(Mn),this}scale(e,t,i){return Mn.makeScale(e,t,i),this.applyMatrix4(Mn),this}lookAt(e){return Jc.lookAt(e),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Je(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(gn.min,vr.min),gn.expandByPoint(Vt),Vt.addVectors(gn.max,vr.max),gn.expandByPoint(Vt)):(gn.expandByPoint(vr.min),gn.expandByPoint(vr.max))}gn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Vt.fromBufferAttribute(o,l),c&&(Fs.fromBufferAttribute(e,l),Vt.add(Fs)),s=Math.max(s,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Xt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new C,c[_]=new C;const l=new C,d=new C,u=new C,h=new xe,f=new xe,g=new xe,y=new C,m=new C;function p(_,T,P){l.fromBufferAttribute(i,_),d.fromBufferAttribute(i,T),u.fromBufferAttribute(i,P),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),d.sub(l),u.sub(l),f.sub(h),g.sub(h);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(y.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(I),o[_].add(y),o[T].add(y),o[P].add(y),c[_].add(m),c[T].add(m),c[P].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let _=0,T=x.length;_<T;++_){const P=x[_],I=P.start,F=P.count;for(let W=I,$=I+F;W<$;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const M=new C,b=new C,w=new C,E=new C;function R(_){w.fromBufferAttribute(s,_),E.copy(w);const T=o[_];M.copy(T),M.sub(w.multiplyScalar(w.dot(T))).normalize(),b.crossVectors(E,T);const I=b.dot(c[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,I)}for(let _=0,T=x.length;_<T;++_){const P=x[_],I=P.start,F=P.count;for(let W=I,$=I+F;W<$;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,d=new C,u=new C;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),o.add(d),c.add(d),l.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,u=o.normalized,h=new l.constructor(c.length*d);let f=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*d;for(let p=0;p<d;p++)h[g++]=l[f++]}return new Xt(h,d,u)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,u=l.length;d<u;d++){const h=l[d],f=e(h,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){const f=l[u];d.push(f.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],u=r[l];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Md,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new C;class la{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),s=st(s,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ho("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new la(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ho("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let tv=0;class Bn extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=On(),this.name="",this.type="Material",this.blending=Ys,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Nl,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fl&&(i.blendSrc=this.blendSrc),this.blendDst!==Nl&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Am extends Bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new U(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ns;const xr=new C,Us=new C,ks=new C,Os=new xe,yr=new xe,Rm=new ke,Ia=new C,Mr=new C,La=new C,jh=new xe,Yc=new xe,$h=new xe;class nv extends mt{constructor(e=new Am){if(super(),this.isSprite=!0,this.type="Sprite",Ns===void 0){Ns=new bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Tm(t,5);Ns.setIndex([0,1,2,0,2,3]),Ns.setAttribute("position",new la(i,3,0,!1)),Ns.setAttribute("uv",new la(i,2,3,!1))}this.geometry=Ns,this.material=e,this.center=new xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),Rm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-ks.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Da(Ia.set(-.5,-.5,0),ks,a,Us,s,r),Da(Mr.set(.5,-.5,0),ks,a,Us,s,r),Da(La.set(.5,.5,0),ks,a,Us,s,r),jh.set(0,0),Yc.set(1,0),$h.set(1,1);let o=e.ray.intersectTriangle(Ia,Mr,La,!1,xr);if(o===null&&(Da(Mr.set(-.5,.5,0),ks,a,Us,s,r),Yc.set(0,1),o=e.ray.intersectTriangle(Ia,La,Mr,!1,xr),o===null))return;const c=e.ray.origin.distanceTo(xr);c<e.near||c>e.far||t.push({distance:c,point:xr.clone(),uv:Tn.getInterpolation(xr,Ia,Mr,La,jh,Yc,$h,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Da(n,e,t,i,s,r){Os.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(yr.x=r*Os.x-s*Os.y,yr.y=s*Os.x+r*Os.y):yr.copy(Os),n.copy(e),n.x+=yr.x,n.y+=yr.y,n.applyMatrix4(Rm)}const hi=new C,Zc=new C,Fa=new C,Di=new C,Qc=new C,Na=new C,el=new C;class ga{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Zc.copy(e).add(t).multiplyScalar(.5),Fa.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(Zc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Fa),o=Di.dot(this.direction),c=-Di.dot(Fa),l=Di.lengthSq(),d=Math.abs(1-a*a);let u,h,f,g;if(d>0)if(u=a*c-o,h=a*o-c,g=r*d,u>=0)if(h>=-g)if(h<=g){const y=1/d;u*=y,h*=y,f=u*(u+a*h+2*o)+h*(a*u+h+2*c)+l}else h=r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*c)+l;else h=-r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*c)+l;else h<=-g?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+h*(h+2*c)+l):h<=g?(u=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+h*(h+2*c)+l);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zc).addScaledVector(Fa,h),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,s,r){Qc.subVectors(t,e),Na.subVectors(i,e),el.crossVectors(Qc,Na);let a=this.direction.dot(el),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Di.subVectors(this.origin,e);const c=o*this.direction.dot(Na.crossVectors(Di,Na));if(c<0)return null;const l=o*this.direction.dot(Qc.cross(Di));if(l<0||c+l>a)return null;const d=-o*Di.dot(el);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=sm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jh=new ke,Qi=new ga,Ua=new oi,Yh=new C,ka=new C,Oa=new C,Ba=new C,tl=new C,za=new C,Zh=new C,Ga=new C;class Ie extends mt{constructor(e=new bt,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){za.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],u=r[c];d!==0&&(tl.fromBufferAttribute(u,e),a?za.addScaledVector(tl,d):za.addScaledVector(tl.sub(t),d))}t.add(za)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(Ua.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Ua,Yh)===null||Qi.origin.distanceToSquared(Yh)>(e.far-e.near)**2))&&(Jh.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Jh),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,w=M;b<w;b+=3){const E=o.getX(b),R=o.getX(b+1),_=o.getX(b+2);s=Va(this,p,e,i,l,d,u,E,R,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const x=o.getX(m),M=o.getX(m+1),b=o.getX(m+2);s=Va(this,a,e,i,l,d,u,x,M,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,w=M;b<w;b+=3){const E=b,R=b+1,_=b+2;s=Va(this,p,e,i,l,d,u,E,R,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const x=m,M=m+1,b=m+2;s=Va(this,a,e,i,l,d,u,x,M,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function iv(n,e,t,i,s,r,a,o){let c;if(e.side===fn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Mi,o),c===null)return null;Ga.copy(o),Ga.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ga);return l<t.near||l>t.far?null:{distance:l,point:Ga.clone(),object:n}}function Va(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,ka),n.getVertexPosition(c,Oa),n.getVertexPosition(l,Ba);const d=iv(n,e,t,i,ka,Oa,Ba,Zh);if(d){const u=new C;Tn.getBarycoord(Zh,ka,Oa,Ba,u),s&&(d.uv=Tn.getInterpolatedAttribute(s,o,c,l,u,new xe)),r&&(d.uv1=Tn.getInterpolatedAttribute(r,o,c,l,u,new xe)),a&&(d.normal=Tn.getInterpolatedAttribute(a,o,c,l,u,new C),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new C,materialIndex:0};Tn.getNormal(ka,Oa,Ba,h.normal),d.face=h,d.barycoord=u}return d}const Sr=new ot,Qh=new ot,ef=new ot,sv=new ot,tf=new ke,Ha=new C,nl=new oi,nf=new ke,il=new ga;class rv extends Ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ih,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ha),this.boundingBox.expandByPoint(Ha)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ha),this.boundingSphere.expandByPoint(Ha)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nl.copy(this.boundingSphere),nl.applyMatrix4(s),e.ray.intersectsSphere(nl)!==!1&&(nf.copy(s).invert(),il.copy(e.ray).applyMatrix4(nf),!(this.boundingBox!==null&&il.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,il)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ih?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===s_?this.bindMatrixInverse.copy(this.bindMatrix).invert():Te("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Qh.fromBufferAttribute(s.attributes.skinIndex,e),ef.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Sr.copy(t),t.set(0,0,0,0)):(Sr.set(...t,1),t.set(0,0,0)),Sr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=ef.getComponent(r);if(a!==0){const o=Qh.getComponent(r);tf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(sv.copy(Sr).applyMatrix4(tf),a)}}return t.isVector4&&(t.w=Sr.w),t.applyMatrix4(this.bindMatrixInverse)}}class Cm extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Iu extends Ot{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Ut,d=Ut,u,h){super(null,a,o,c,l,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sf=new ke,av=new ke;class Lu{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Te("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:av;sf.multiplyMatrices(o,t[r]),sf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Lu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Iu(t,e,e,Rn,An);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let a=t[r];a===void 0&&(Te("Skeleton: No bone found with UUID:",r),a=new Cm),this.bones.push(a),this.boneInverses.push(new ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=i[s];e.boneInverses.push(o.toArray())}return e}}class Sd extends Xt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bs=new ke,rf=new ke,Wa=[],af=new Ln,ov=new ke,wr=new Ie,Er=new oi;class Pm extends Ie{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ov)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Bs),af.copy(e.boundingBox).applyMatrix4(Bs),this.boundingBox.union(af)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Bs),Er.copy(e.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(i),e.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bs),rf.multiplyMatrices(i,Bs),wr.matrixWorld=rf,wr.raycast(e,Wa);for(let a=0,o=Wa.length;a<o;a++){const c=Wa[a];c.instanceId=r,c.object=this,t.push(c)}Wa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Sd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Iu(new Float32Array(s*this.count),s,this.count,xu,An));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const sl=new C,cv=new C,lv=new Oe;class Oi{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=sl.subVectors(i,t).cross(cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(sl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lv.getNormalMatrix(e),s=this.coplanarPoint(sl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new oi,dv=new xe(.5,.5),qa=new C;class Du{constructor(e=new Oi,t=new Oi,i=new Oi,s=new Oi,r=new Oi,a=new Oi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ti,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],u=r[5],h=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],x=r[12],M=r[13],b=r[14],w=r[15];if(s[0].setComponents(l-a,f-d,p-g,w-x).normalize(),s[1].setComponents(l+a,f+d,p+g,w+x).normalize(),s[2].setComponents(l+o,f+u,p+y,w+M).normalize(),s[3].setComponents(l-o,f-u,p-y,w-M).normalize(),i)s[4].setComponents(c,h,m,b).normalize(),s[5].setComponents(l-c,f-h,p-m,w-b).normalize();else if(s[4].setComponents(l-c,f-h,p-m,w-b).normalize(),t===ti)s[5].setComponents(l+c,f+h,p+m,w+b).normalize();else if(t===oa)s[5].setComponents(c,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);const t=dv.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(qa.x=s.normal.x>0?e.max.x:e.min.x,qa.y=s.normal.y>0?e.max.y:e.min.y,qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pc extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new U(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wo=new C,qo=new C,of=new ke,Tr=new ga,Xa=new oi,rl=new C,cf=new C;class mc extends mt{constructor(e=new bt,t=new pc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Wo.fromBufferAttribute(t,s-1),qo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Wo.distanceTo(qo);e.setAttribute("lineDistance",new Je(i,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,e.ray.intersectsSphere(Xa)===!1)return;of.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(of);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=l){const p=d.getX(y),x=d.getX(y+1),M=Ka(this,e,Tr,c,p,x,y);M&&t.push(M)}if(this.isLineLoop){const y=d.getX(g-1),m=d.getX(f),p=Ka(this,e,Tr,c,y,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=l){const p=Ka(this,e,Tr,c,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){const y=Ka(this,e,Tr,c,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ka(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Wo.fromBufferAttribute(o,s),qo.fromBufferAttribute(o,r),t.distanceSqToSegment(Wo,qo,rl,cf)>i)return;rl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(rl);if(!(l<e.near||l>e.far))return{distance:l,point:cf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const lf=new C,df=new C;class Im extends mc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)lf.fromBufferAttribute(t,s),df.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+lf.distanceTo(df);e.setAttribute("lineDistance",new Je(i,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uv extends mc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fu extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new U(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const uf=new ke,wd=new ga,ja=new oi,$a=new C;class Lm extends mt{constructor(e=new bt,t=new Fu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(s),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;uf.copy(s).invert(),wd.copy(e.ray).applyMatrix4(uf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){const h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=h,y=f;g<y;g++){const m=l.getX(g);$a.fromBufferAttribute(u,m),hf($a,m,c,s,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=h,y=f;g<y;g++)$a.fromBufferAttribute(u,g),hf($a,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function hf(n,e,t,i,s,r,a){const o=wd.distanceSqToPoint(n);if(o<t){const c=new C;wd.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Dm extends Ot{constructor(e=[],t=gs,i,s,r,a,o,c,l,d){super(e,t,i,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fm extends Ot{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lr extends Ot{constructor(e,t,i=si,s,r,a,o=Ut,c=Ut,l,d=wi,u=1){if(d!==wi&&d!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,s,r,a,o,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ru(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hv extends lr{constructor(e,t=si,i=gs,s,r,a=Ut,o=Ut,c,l=wi){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,i,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Nm extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vn extends bt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],u=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(u,2));function g(y,m,p,x,M,b,w,E,R,_,T){const P=b/R,I=w/_,F=b/2,W=w/2,$=E/2,O=R+1,K=_+1;let q=0,ee=0;const ne=new C;for(let pe=0;pe<K;pe++){const ve=pe*I-W;for(let Se=0;Se<O;Se++){const Ye=Se*P-F;ne[y]=Ye*x,ne[m]=ve*M,ne[p]=$,l.push(ne.x,ne.y,ne.z),ne[y]=0,ne[m]=0,ne[p]=E>0?1:-1,d.push(ne.x,ne.y,ne.z),u.push(Se/R),u.push(1-pe/_),q+=1}}for(let pe=0;pe<_;pe++)for(let ve=0;ve<R;ve++){const Se=h+ve+O*pe,Ye=h+ve+O*(pe+1),_t=h+(ve+1)+O*(pe+1),Ze=h+(ve+1)+O*pe;c.push(Se,Ye,Ze),c.push(Ye,_t,Ze),ee+=6}o.addGroup(f,ee,T),f+=ee,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nu extends bt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new C,d=new xe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const f=i+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(a[h]/e+1)/2,d.y=(a[h+1]/e+1)/2,c.push(d.x,d.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Zt extends bt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],h=[],f=[];let g=0;const y=[],m=i/2;let p=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(f,2));function x(){const b=new C,w=new C;let E=0;const R=(t-e)/i;for(let _=0;_<=r;_++){const T=[],P=_/r,I=P*(t-e)+e;for(let F=0;F<=s;F++){const W=F/s,$=W*c+o,O=Math.sin($),K=Math.cos($);w.x=I*O,w.y=-P*i+m,w.z=I*K,u.push(w.x,w.y,w.z),b.set(O,R,K).normalize(),h.push(b.x,b.y,b.z),f.push(W,1-P),T.push(g++)}y.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){const P=y[T][_],I=y[T+1][_],F=y[T+1][_+1],W=y[T][_+1];(e>0||T!==0)&&(d.push(P,I,W),E+=3),(t>0||T!==r-1)&&(d.push(I,F,W),E+=3)}l.addGroup(p,E,0),p+=E}function M(b){const w=g,E=new xe,R=new C;let _=0;const T=b===!0?e:t,P=b===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*P,0),h.push(0,P,0),f.push(.5,.5),g++;const I=g;for(let F=0;F<=s;F++){const $=F/s*c+o,O=Math.cos($),K=Math.sin($);R.x=T*K,R.y=m*P,R.z=T*O,u.push(R.x,R.y,R.z),h.push(0,P,0),E.x=O*.5+.5,E.y=K*.5*P+.5,f.push(E.x,E.y),g++}for(let F=0;F<s;F++){const W=w+F,$=I+F;b===!0?d.push($,$+1,W):d.push($+1,$,W),_+=3}l.addGroup(p,_,b===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kr extends Zt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Kr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gc extends bt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),l(i),d(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const M=new C,b=new C,w=new C;for(let E=0;E<t.length;E+=3)f(t[E+0],M),f(t[E+1],b),f(t[E+2],w),c(M,b,w,x)}function c(x,M,b,w){const E=w+1,R=[];for(let _=0;_<=E;_++){R[_]=[];const T=x.clone().lerp(b,_/E),P=M.clone().lerp(b,_/E),I=E-_;for(let F=0;F<=I;F++)F===0&&_===E?R[_][F]=T:R[_][F]=T.clone().lerp(P,F/I)}for(let _=0;_<E;_++)for(let T=0;T<2*(E-_)-1;T++){const P=Math.floor(T/2);T%2===0?(h(R[_][P+1]),h(R[_+1][P]),h(R[_][P])):(h(R[_][P+1]),h(R[_+1][P+1]),h(R[_+1][P]))}}function l(x){const M=new C;for(let b=0;b<r.length;b+=3)M.x=r[b+0],M.y=r[b+1],M.z=r[b+2],M.normalize().multiplyScalar(x),r[b+0]=M.x,r[b+1]=M.y,r[b+2]=M.z}function d(){const x=new C;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const b=m(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;a.push(b,1-w)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const M=a[x+0],b=a[x+2],w=a[x+4],E=Math.max(M,b,w),R=Math.min(M,b,w);E>.9&&R<.1&&(M<.2&&(a[x+0]+=1),b<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function f(x,M){const b=x*3;M.x=e[b+0],M.y=e[b+1],M.z=e[b+2]}function g(){const x=new C,M=new C,b=new C,w=new C,E=new xe,R=new xe,_=new xe;for(let T=0,P=0;T<r.length;T+=9,P+=6){x.set(r[T+0],r[T+1],r[T+2]),M.set(r[T+3],r[T+4],r[T+5]),b.set(r[T+6],r[T+7],r[T+8]),E.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),_.set(a[P+4],a[P+5]),w.copy(x).add(M).add(b).divideScalar(3);const I=m(w);y(E,P+0,x,I),y(R,P+2,M,I),y(_,P+4,b,I)}}function y(x,M,b,w){w<0&&x.x===1&&(a[M]=x.x-1),b.x===0&&b.z===0&&(a[M]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.vertices,e.indices,e.radius,e.detail)}}class Uu extends gc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Uu(e.radius,e.detail)}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Te("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const d=i[s],h=i[s+1]-d,f=(a-d)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new xe:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new C,s=[],r=[],a=[],o=new C,c=new ke;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const d=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=l&&(l=d,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),h<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(We(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(We(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Um extends Ei{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new xe){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*d-f*u+this.aX,l=h*u+f*d+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class fv extends Um{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ku(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,d,u){let h=(a-r)/l-(o-r)/(l+d)+(o-a)/d,f=(o-a)/d-(c-a)/(d+u)+(c-o)/u;h*=d,f*=d,s(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const ff=new C,pf=new C,al=new ku,ol=new ku,cl=new ku;class pv extends Ei{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,d;this.closed||o>0?l=s[(o-1)%r]:(pf.subVectors(s[0],s[1]).add(s[0]),l=pf);const u=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(ff.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=ff),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),al.initNonuniformCatmullRom(l.x,u.x,h.x,d.x,g,y,m),ol.initNonuniformCatmullRom(l.y,u.y,h.y,d.y,g,y,m),cl.initNonuniformCatmullRom(l.z,u.z,h.z,d.z,g,y,m)}else this.curveType==="catmullrom"&&(al.initCatmullRom(l.x,u.x,h.x,d.x,this.tension),ol.initCatmullRom(l.y,u.y,h.y,d.y,this.tension),cl.initCatmullRom(l.z,u.z,h.z,d.z,this.tension));return i.set(al.calc(c),ol.calc(c),cl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function mf(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function mv(n,e){const t=1-n;return t*t*e}function gv(n,e){return 2*(1-n)*n*e}function bv(n,e){return n*n*e}function jr(n,e,t,i){return mv(n,e)+gv(n,t)+bv(n,i)}function _v(n,e){const t=1-n;return t*t*t*e}function vv(n,e){const t=1-n;return 3*t*t*n*e}function xv(n,e){return 3*(1-n)*n*n*e}function yv(n,e){return n*n*n*e}function $r(n,e,t,i,s){return _v(n,e)+vv(n,t)+xv(n,i)+yv(n,s)}class Mv extends Ei{constructor(e=new xe,t=new xe,i=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new xe){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set($r(e,s.x,r.x,a.x,o.x),$r(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sv extends Ei{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set($r(e,s.x,r.x,a.x,o.x),$r(e,s.y,r.y,a.y,o.y),$r(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wv extends Ei{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ev extends Ei{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tv extends Ei{constructor(e=new xe,t=new xe,i=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new xe){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(jr(e,s.x,r.x,a.x),jr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bc extends Ei{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(jr(e,s.x,r.x,a.x),jr(e,s.y,r.y,a.y),jr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Av extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],d=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(mf(o,c.x,l.x,d.x,u.x),mf(o,c.y,l.y,d.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new xe().fromArray(s))}return this}}var Rv=Object.freeze({__proto__:null,ArcCurve:fv,CatmullRomCurve3:pv,CubicBezierCurve:Mv,CubicBezierCurve3:Sv,EllipseCurve:Um,LineCurve:wv,LineCurve3:Ev,QuadraticBezierCurve:Tv,QuadraticBezierCurve3:bc,SplineCurve:Av});class Xo extends gc{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xo(e.radius,e.detail)}}class Cn extends bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,d=c+1,u=e/o,h=t/c,f=[],g=[],y=[],m=[];for(let p=0;p<d;p++){const x=p*h-a;for(let M=0;M<l;M++){const b=M*u-r;g.push(b,-x,0),y.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const M=x+l*p,b=x+l*(p+1),w=x+1+l*(p+1),E=x+1+l*p;f.push(M,b,E),f.push(b,w,E)}this.setIndex(f),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(y,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.width,e.height,e.widthSegments,e.heightSegments)}}class _c extends bt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],d=[];let u=e;const h=(t-e)/s,f=new C,g=new xe;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}u+=h}for(let y=0;y<s;y++){const m=y*(i+1);for(let p=0;p<i;p++){const x=p+m,M=x,b=x+i+1,w=x+i+2,E=x+1;o.push(M,b,E),o.push(b,w,E)}}this.setIndex(o),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class _s extends bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const d=[],u=new C,h=new C,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){const x=[],M=p/i,b=a+M*o,w=e*Math.cos(b),E=Math.sqrt(e*e-w*w);let R=0;p===0&&a===0?R=.5/t:p===i&&c===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const T=_/t,P=s+T*r;u.x=-E*Math.cos(P),u.y=w,u.z=E*Math.sin(P),g.push(u.x,u.y,u.z),h.copy(u).normalize(),y.push(h.x,h.y,h.z),m.push(T+R,1-M),x.push(l++)}d.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const M=d[p][x+1],b=d[p][x],w=d[p+1][x],E=d[p+1][x+1];(p!==0||a>0)&&f.push(M,b,E),(p!==i-1||c<Math.PI)&&f.push(b,w,E)}this.setIndex(f),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(y,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ba extends bt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],d=[],u=[],h=new C,f=new C,g=new C;for(let y=0;y<=i;y++){const m=a+y/i*o;for(let p=0;p<=s;p++){const x=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),g.subVectors(f,h).normalize(),d.push(g.x,g.y,g.z),u.push(p/s),u.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){const p=(s+1)*y+m-1,x=(s+1)*(y-1)+m-1,M=(s+1)*(y-1)+m,b=(s+1)*y+m;c.push(p,x,b),c.push(x,M,b)}this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vc extends bt{constructor(e=new bc(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,c=new C,l=new xe;let d=new C;const u=[],h=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(f,2));function y(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),x(),p()}function m(M){d=e.getPointAt(M/t,d);const b=a.normals[M],w=a.binormals[M];for(let E=0;E<=s;E++){const R=E/s*Math.PI*2,_=Math.sin(R),T=-Math.cos(R);c.x=T*b.x+_*w.x,c.y=T*b.y+_*w.y,c.z=T*b.z+_*w.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=d.x+i*c.x,o.y=d.y+i*c.y,o.z=d.z+i*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=t;M++)for(let b=1;b<=s;b++){const w=(s+1)*(M-1)+(b-1),E=(s+1)*M+(b-1),R=(s+1)*M+b,_=(s+1)*(M-1)+b;g.push(w,E,_),g.push(E,R,_)}}function x(){for(let M=0;M<=t;M++)for(let b=0;b<=s;b++)l.x=M/t,l.y=b/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new vc(new Rv[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function dr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(gf(s))s.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(gf(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=dr(n[t]);for(const s in i)e[s]=i[s]}return e}function gf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Cv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function km(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Pv={clone:dr,merge:tn};var Iv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iv,this.fragmentShader=Lv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=Cv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new U().setHex(s.value);break;case"v2":this.uniforms[i].value=new xe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ot().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ke().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Dv extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ct extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new U(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yd,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gn extends ct{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new U(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new U(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new U(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Fv extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nv extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ja(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Uv(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function bf(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=n[o+c]}return s}function kv(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}class ur{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Ov extends ur{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ks,endingEnd:Ks}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case js:r=e,o=2*t-i;break;case Go:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case js:a=e,c=2*i-t;break;case Go:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}const l=(i-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,p=-h*m+2*h*y-h*g,x=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,M=(-1-f)*m+(1.5+f)*y+.5*g,b=f*m-f*y;for(let w=0;w!==o;++w)r[w]=p*a[d+w]+x*a[l+w]+M*a[c+w]+b*a[u+w];return r}}class Om extends ur{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(i-t)/(s-t),u=1-d;for(let h=0;h!==o;++h)r[h]=a[l+h]*u+a[c+h]*d;return r}}class Bv extends ur{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class zv extends ur{interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this.inTangents,u=this.outTangents;if(!d||!u){const g=(i-t)/(s-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*y+a[c+m]*g;return r}const h=o*2,f=e-1;for(let g=0;g!==o;++g){const y=a[l+g],m=a[c+g],p=f*h+g*2,x=u[p],M=u[p+1],b=e*h+g*2,w=d[b],E=d[b+1];let R=(i-t)/(s-t),_,T,P,I,F;for(let W=0;W<8;W++){_=R*R,T=_*R,P=1-R,I=P*P,F=I*P;const O=F*t+3*I*R*x+3*P*_*w+T*s-i;if(Math.abs(O)<1e-10)break;const K=3*I*(x-t)+6*P*R*(w-x)+3*_*(s-w);if(Math.abs(K)<1e-10)break;R=R-O/K,R=Math.max(0,Math.min(1,R))}r[g]=F*y+3*I*R*M+3*P*_*E+T*m}return r}}class Vn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ja(t,this.TimeBufferType),this.values=Ja(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ja(e.times,Array),values:Ja(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Bv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Om(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ov(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new zv(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ra:t=this.InterpolantFactoryMethodDiscrete;break;case aa:t=this.InterpolantFactoryMethodLinear;break;case Dc:t=this.InterpolantFactoryMethodSmooth;break;case Lh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Te("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return Dc;case this.InterpolantFactoryMethodBezier:return Lh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=i[o];if(typeof c=="number"&&isNaN(c)){Ne("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ne("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&__(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){Ne("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Dc,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(s)c=!0;else{const u=o*i,h=u-i,f=u+i;for(let g=0;g!==i;++g){const y=t[u+g];if(y!==t[h+g]||y!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*i,h=a*i;for(let f=0;f!==i;++f)t[h+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=aa;class hr extends Vn{constructor(e,t,i){super(e,t,i)}}hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=ra;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;class Bm extends Vn{constructor(e,t,i,s){super(e,t,i,s)}}Bm.prototype.ValueTypeName="color";class da extends Vn{constructor(e,t,i,s){super(e,t,i,s)}}da.prototype.ValueTypeName="number";class Gv extends ur{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t);let l=e*o;for(let d=l+o;l!==d;l+=4)In.slerpFlat(r,0,a,l-o,a,l,c);return r}}class ua extends Vn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Gv(this.times,this.values,this.getValueSize(),e)}}ua.prototype.ValueTypeName="quaternion";ua.prototype.InterpolantFactoryMethodSmooth=void 0;class fr extends Vn{constructor(e,t,i){super(e,t,i)}}fr.prototype.ValueTypeName="string";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=ra;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ko extends Vn{constructor(e,t,i,s){super(e,t,i,s)}}Ko.prototype.ValueTypeName="vector";class jo{constructor(e="",t=-1,i=[],s=wu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=On(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Hv(i[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(Vn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const d=Uv(c);c=bf(c,1,d),l=bf(l,1,d),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new da(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],d=l.name.match(r);if(d&&d.length>1){const u=d[1];let h=s[u];h||(s[u]=h=[]),h.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Vv(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return da;case"vector":case"vector2":case"vector3":case"vector4":return Ko;case"color":return Bm;case"quaternion":return ua;case"bool":case"boolean":return hr;case"string":return fr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Hv(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Vv(n.type);if(n.times===void 0){const t=[],i=[];kv(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const bi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(_f(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!_f(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function _f(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Wv{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){const u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=l.length;u<h;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const qv=new Wv;class pr{constructor(e){this.manager=e!==void 0?e:qv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}pr.DEFAULT_MATERIAL_NAME="__DEFAULT";const fi={};class Xv extends Error{constructor(e,t){super(e),this.response=t}}class zm extends pr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=bi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:i,onError:s});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Te("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=fi[e],u=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let y=0;const m=new ReadableStream({start(p){x();function x(){u.read().then(({done:M,value:b})=>{if(M)p.close();else{y+=b.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let E=0,R=d.length;E<R;E++){const _=d[E];_.onProgress&&_.onProgress(w)}p.enqueue(b),x()}},M=>{p.error(M)})}}});return new Response(m)}else throw new Xv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{bi.add(`file:${e}`,l);const d=fi[e];delete fi[e];for(let u=0,h=d.length;u<h;u++){const f=d[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const d=fi[e];if(d===void 0)throw this.manager.itemError(e),l;delete fi[e];for(let u=0,h=d.length;u<h;u++){const f=d[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const zs=new WeakMap;class Kv extends pr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=bi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=zs.get(a);u===void 0&&(u=[],zs.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=ca("img");function c(){d(),t&&t(this);const u=zs.get(this)||[];for(let h=0;h<u.length;h++){const f=u[h];f.onLoad&&f.onLoad(this)}zs.delete(this),r.manager.itemEnd(e)}function l(u){d(),s&&s(u),bi.remove(`image:${e}`);const h=zs.get(this)||[];for(let f=0;f<h.length;f++){const g=h[f];g.onError&&g.onError(u)}zs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),bi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class jv extends pr{constructor(e){super(e)}load(e,t,i,s){const r=new Ot,a=new Kv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class xc extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new U(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class $v extends xc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new U(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ll=new ke,vf=new C,xf=new C;class Ou{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Du,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vf.setFromMatrixPosition(e.matrixWorld),t.position.copy(vf),xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xf),t.updateMatrixWorld(),ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===oa||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ya=new C,Za=new In,Kn=new C;class Gm extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ya,Za,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,Kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ya,Za,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new C,yf=new xe,Mf=new xe;class dn extends Gm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,yf,Mf),t.subVectors(Mf,yf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Jv extends Ou{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Yv extends xc{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Jv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Zv extends Ou{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0}}class Vm extends xc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Zv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class _a extends Gm{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qv extends Ou{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hm extends xc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Qv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Jr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const dl=new WeakMap;class ex extends pr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Te("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Te("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=bi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{dl.has(a)===!0?(s&&s(dl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){bi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),dl.set(c,l),bi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});bi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Gs=-90,Vs=1;class tx extends mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Gs,Vs,e,t);s.layers=this.layers,this.add(s);const r=new dn(Gs,Vs,e,t);r.layers=this.layers,this.add(r);const a=new dn(Gs,Vs,e,t);a.layers=this.layers,this.add(a);const o=new dn(Gs,Vs,e,t);o.layers=this.layers,this.add(o);const c=new dn(Gs,Vs,e,t);c.layers=this.layers,this.add(c);const l=new dn(Gs,Vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nx extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ix{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(i,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){o.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,a=s;r!==a;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,s){In.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){const a=this._workIndex*r;In.multiplyQuaternionsFlat(e,a,e,t,e,i),In.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,i,s,r){const a=1-s;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[i+o]*s}}_lerpAdditive(e,t,i,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[i+a]*s}}}const Bu="\\[\\]\\.:\\/",sx=new RegExp("["+Bu+"]","g"),zu="[^"+Bu+"]",rx="[^"+Bu.replace("\\.","")+"]",ax=/((?:WC+[\/:])*)/.source.replace("WC",zu),ox=/(WCOD+)?/.source.replace("WCOD",rx),cx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zu),lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zu),dx=new RegExp("^"+ax+ox+cx+lx+"$"),ux=["material","materials","bones","map"];class hx{constructor(e,t,i){const s=i||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class et{constructor(e,t,i){this.path=t,this.parsedPath=i||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,i):new et(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sx,"")}static parseTrackName(e){const t=dx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);ux.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=hx;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class fx{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Ks,endingEnd:Ks};for(let l=0;l!==a;++l){const d=r[l].createInterpolant(null);o[l]=d,d.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=r_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+i,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*i;c<0||i===0?t=0:(this._startTime=null,t=i*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case o_:for(let d=0,u=c.length;d!==u;++d)c[d].evaluate(a),l[d].accumulateAdditive(o);break;case wu:default:for(let d=0,u=c.length;d!==u;++d)c[d].evaluate(a),l[d].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,r=this._loopCount;const a=i===a_;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(i===vd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=js,s.endingEnd=js):(e?s.endingStart=this.zeroSlopeAtStart?js:Ks:s.endingStart=Go,t?s.endingEnd=this.zeroSlopeAtEnd?js:Ks:s.endingEnd=Go)}_scheduleFading(e,t,i){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=i,this}}const px=new Float32Array(1);class mx extends $i{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let d=l[c];d===void 0&&(d={},l[c]=d);for(let u=0;u!==r;++u){const h=s[u],f=h.name;let g=d[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const y=t&&t._propertyBindings[u].binding.parsedPath;g=new ix(et.create(i,f,y),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],d=e._byClipCacheIndex;l._byClipCacheIndex=d,c[d]=l,c.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete u[h],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Om(new Float32Array(2),new Float32Array(2),1,px),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?jo.findByName(s,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(i===void 0&&(a!==null?i=a.blendMode:i=wu),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const d=new fx(this,a,t,i);return this._bindAction(d,l),this._addInactiveAction(d,o,r),d}existingAction(e,t){const i=t||this._root,s=i.uuid,r=typeof e=="string"?jo.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(s,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const d=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=d,t[d]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}const Sf=new ke;class gx{constructor(e,t,i=0,s=1/0){this.ray=new ga(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Cu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ne("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sf),this}intersectObject(e,t=!0,i=[]){return Ed(e,this,i,t),i.sort(wf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ed(e[s],this,i,t);return i.sort(wf),i}}function wf(n,e){return n.distance-e.distance}function Ed(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Ed(r[a],e,t,!0)}}const eh=class eh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};eh.prototype.isMatrix2=!0;let Ef=eh;function Tf(n,e,t,i){const s=bx(i);switch(t){case bm:return n*e;case xu:return n*e/s.components*s.byteLength;case yu:return n*e/s.components*s.byteLength;case bs:return n*e*2/s.components*s.byteLength;case Mu:return n*e*2/s.components*s.byteLength;case _m:return n*e*3/s.components*s.byteLength;case Rn:return n*e*4/s.components*s.byteLength;case Su:return n*e*4/s.components*s.byteLength;case yo:case Mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case So:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wl:case Xl:return Math.max(n,16)*Math.max(e,8)/4;case Hl:case ql:return Math.max(n,8)*Math.max(e,8)/2;case Kl:case jl:case Jl:case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $l:case Bo:case Zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case td:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case nd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case id:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case sd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case rd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ad:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case od:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case cd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ld:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case dd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ud:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case hd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case fd:case pd:case md:return Math.ceil(n/4)*Math.ceil(e/4)*16;case gd:case bd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case zo:case _d:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bx(n){switch(n){case _n:case fm:return{byteLength:1,components:1};case ia:case pm:case Si:return{byteLength:2,components:1};case _u:case vu:return{byteLength:2,components:4};case si:case bu:case An:return{byteLength:4,components:1};case mm:case gm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mu}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wm(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function _x(n){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,u=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,d),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const d=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){const g=u[h],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,u[h]=y)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){const y=u[f];n.bufferSubData(l,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ex=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ax=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Px=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ix=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$x="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ny=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ry=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ay=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,uy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,py=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,by=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_y=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,My=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ey=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ry=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ly=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ny=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ky=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Oy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,By=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,nM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_M=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,RM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,OM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$M=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:vx,alphahash_pars_fragment:xx,alphamap_fragment:yx,alphamap_pars_fragment:Mx,alphatest_fragment:Sx,alphatest_pars_fragment:wx,aomap_fragment:Ex,aomap_pars_fragment:Tx,batching_pars_vertex:Ax,batching_vertex:Rx,begin_vertex:Cx,beginnormal_vertex:Px,bsdfs:Ix,iridescence_fragment:Lx,bumpmap_pars_fragment:Dx,clipping_planes_fragment:Fx,clipping_planes_pars_fragment:Nx,clipping_planes_pars_vertex:Ux,clipping_planes_vertex:kx,color_fragment:Ox,color_pars_fragment:Bx,color_pars_vertex:zx,color_vertex:Gx,common:Vx,cube_uv_reflection_fragment:Hx,defaultnormal_vertex:Wx,displacementmap_pars_vertex:qx,displacementmap_vertex:Xx,emissivemap_fragment:Kx,emissivemap_pars_fragment:jx,colorspace_fragment:$x,colorspace_pars_fragment:Jx,envmap_fragment:Yx,envmap_common_pars_fragment:Zx,envmap_pars_fragment:Qx,envmap_pars_vertex:ey,envmap_physical_pars_fragment:uy,envmap_vertex:ty,fog_vertex:ny,fog_pars_vertex:iy,fog_fragment:sy,fog_pars_fragment:ry,gradientmap_pars_fragment:ay,lightmap_pars_fragment:oy,lights_lambert_fragment:cy,lights_lambert_pars_fragment:ly,lights_pars_begin:dy,lights_toon_fragment:hy,lights_toon_pars_fragment:fy,lights_phong_fragment:py,lights_phong_pars_fragment:my,lights_physical_fragment:gy,lights_physical_pars_fragment:by,lights_fragment_begin:_y,lights_fragment_maps:vy,lights_fragment_end:xy,lightprobes_pars_fragment:yy,logdepthbuf_fragment:My,logdepthbuf_pars_fragment:Sy,logdepthbuf_pars_vertex:wy,logdepthbuf_vertex:Ey,map_fragment:Ty,map_pars_fragment:Ay,map_particle_fragment:Ry,map_particle_pars_fragment:Cy,metalnessmap_fragment:Py,metalnessmap_pars_fragment:Iy,morphinstance_vertex:Ly,morphcolor_vertex:Dy,morphnormal_vertex:Fy,morphtarget_pars_vertex:Ny,morphtarget_vertex:Uy,normal_fragment_begin:ky,normal_fragment_maps:Oy,normal_pars_fragment:By,normal_pars_vertex:zy,normal_vertex:Gy,normalmap_pars_fragment:Vy,clearcoat_normal_fragment_begin:Hy,clearcoat_normal_fragment_maps:Wy,clearcoat_pars_fragment:qy,iridescence_pars_fragment:Xy,opaque_fragment:Ky,packing:jy,premultiplied_alpha_fragment:$y,project_vertex:Jy,dithering_fragment:Yy,dithering_pars_fragment:Zy,roughnessmap_fragment:Qy,roughnessmap_pars_fragment:eM,shadowmap_pars_fragment:tM,shadowmap_pars_vertex:nM,shadowmap_vertex:iM,shadowmask_pars_fragment:sM,skinbase_vertex:rM,skinning_pars_vertex:aM,skinning_vertex:oM,skinnormal_vertex:cM,specularmap_fragment:lM,specularmap_pars_fragment:dM,tonemapping_fragment:uM,tonemapping_pars_fragment:hM,transmission_fragment:fM,transmission_pars_fragment:pM,uv_pars_fragment:mM,uv_pars_vertex:gM,uv_vertex:bM,worldpos_vertex:_M,background_vert:vM,background_frag:xM,backgroundCube_vert:yM,backgroundCube_frag:MM,cube_vert:SM,cube_frag:wM,depth_vert:EM,depth_frag:TM,distance_vert:AM,distance_frag:RM,equirect_vert:CM,equirect_frag:PM,linedashed_vert:IM,linedashed_frag:LM,meshbasic_vert:DM,meshbasic_frag:FM,meshlambert_vert:NM,meshlambert_frag:UM,meshmatcap_vert:kM,meshmatcap_frag:OM,meshnormal_vert:BM,meshnormal_frag:zM,meshphong_vert:GM,meshphong_frag:VM,meshphysical_vert:HM,meshphysical_frag:WM,meshtoon_vert:qM,meshtoon_frag:XM,points_vert:KM,points_frag:jM,shadow_vert:$M,shadow_frag:JM,sprite_vert:YM,sprite_frag:ZM},fe={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Yn={basic:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:tn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:tn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new U(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:tn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:tn([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:tn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:tn([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:tn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:tn([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:tn([fe.common,fe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:tn([fe.lights,fe.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Yn.physical={uniforms:tn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Qa={r:0,b:0,g:0},QM=new ke,qm=new Oe;qm.set(-1,0,0,0,1,0,0,0,1);function eS(n,e,t,i,s,r){const a=new U(0);let o=s===!0?0:1,c,l,d=null,u=0,h=null;function f(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const b=x.backgroundBlurriness>0;M=e.get(M,b)}return M}function g(x){let M=!1;const b=f(x);b===null?m(a,o):b&&b.isColor&&(m(b,1),M=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(x,M){const b=f(M);b&&(b.isCubeTexture||b.mapping===fc)?(l===void 0&&(l=new Ie(new vn(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:dr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(QM.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(qm),l.material.toneMapped=Xe.getTransfer(b.colorSpace)!==it,(d!==b||u!==b.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=b,u=b.version,h=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ie(new Cn(2,2),new ri({name:"BackgroundMaterial",uniforms:dr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(b.colorSpace)!==it,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=b,u=b.version,h=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,M){x.getRGB(Qa,km(n)),t.buffers.color.setClear(Qa.r,Qa.g,Qa.b,M,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:y,dispose:p}}function tS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(I,F,W,$,O){let K=!1;const q=u(I,$,W,F);r!==q&&(r=q,l(r.object)),K=f(I,$,W,O),K&&g(I,$,W,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,b(I,F,W,$),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return n.createVertexArray()}function l(I){return n.bindVertexArray(I)}function d(I){return n.deleteVertexArray(I)}function u(I,F,W,$){const O=$.wireframe===!0;let K=i[F.id];K===void 0&&(K={},i[F.id]=K);const q=I.isInstancedMesh===!0?I.id:0;let ee=K[q];ee===void 0&&(ee={},K[q]=ee);let ne=ee[W.id];ne===void 0&&(ne={},ee[W.id]=ne);let pe=ne[O];return pe===void 0&&(pe=h(c()),ne[O]=pe),pe}function h(I){const F=[],W=[],$=[];for(let O=0;O<t;O++)F[O]=0,W[O]=0,$[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:$,object:I,attributes:{},index:null}}function f(I,F,W,$){const O=r.attributes,K=F.attributes;let q=0;const ee=W.getAttributes();for(const ne in ee)if(ee[ne].location>=0){const ve=O[ne];let Se=K[ne];if(Se===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(Se=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(Se=I.instanceColor)),ve===void 0||ve.attribute!==Se||Se&&ve.data!==Se.data)return!0;q++}return r.attributesNum!==q||r.index!==$}function g(I,F,W,$){const O={},K=F.attributes;let q=0;const ee=W.getAttributes();for(const ne in ee)if(ee[ne].location>=0){let ve=K[ne];ve===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(ve=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(ve=I.instanceColor));const Se={};Se.attribute=ve,ve&&ve.data&&(Se.data=ve.data),O[ne]=Se,q++}r.attributes=O,r.attributesNum=q,r.index=$}function y(){const I=r.newAttributes;for(let F=0,W=I.length;F<W;F++)I[F]=0}function m(I){p(I,0)}function p(I,F){const W=r.newAttributes,$=r.enabledAttributes,O=r.attributeDivisors;W[I]=1,$[I]===0&&(n.enableVertexAttribArray(I),$[I]=1),O[I]!==F&&(n.vertexAttribDivisor(I,F),O[I]=F)}function x(){const I=r.newAttributes,F=r.enabledAttributes;for(let W=0,$=F.length;W<$;W++)F[W]!==I[W]&&(n.disableVertexAttribArray(W),F[W]=0)}function M(I,F,W,$,O,K,q){q===!0?n.vertexAttribIPointer(I,F,W,O,K):n.vertexAttribPointer(I,F,W,$,O,K)}function b(I,F,W,$){y();const O=$.attributes,K=W.getAttributes(),q=F.defaultAttributeValues;for(const ee in K){const ne=K[ee];if(ne.location>=0){let pe=O[ee];if(pe===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(pe=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(pe=I.instanceColor)),pe!==void 0){const ve=pe.normalized,Se=pe.itemSize,Ye=e.get(pe);if(Ye===void 0)continue;const _t=Ye.buffer,Ze=Ye.type,Q=Ye.bytesPerElement,oe=Ze===n.INT||Ze===n.UNSIGNED_INT||pe.gpuType===bu;if(pe.isInterleavedBufferAttribute){const ie=pe.data,Ue=ie.stride,Be=pe.offset;if(ie.isInstancedInterleavedBuffer){for(let De=0;De<ne.locationSize;De++)p(ne.location+De,ie.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let De=0;De<ne.locationSize;De++)m(ne.location+De);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let De=0;De<ne.locationSize;De++)M(ne.location+De,Se/ne.locationSize,Ze,ve,Ue*Q,(Be+Se/ne.locationSize*De)*Q,oe)}else{if(pe.isInstancedBufferAttribute){for(let ie=0;ie<ne.locationSize;ie++)p(ne.location+ie,pe.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ie=0;ie<ne.locationSize;ie++)m(ne.location+ie);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let ie=0;ie<ne.locationSize;ie++)M(ne.location+ie,Se/ne.locationSize,Ze,ve,Se*Q,Se/ne.locationSize*ie*Q,oe)}}else if(q!==void 0){const ve=q[ee];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(ne.location,ve);break;case 3:n.vertexAttrib3fv(ne.location,ve);break;case 4:n.vertexAttrib4fv(ne.location,ve);break;default:n.vertexAttrib1fv(ne.location,ve)}}}}x()}function w(){T();for(const I in i){const F=i[I];for(const W in F){const $=F[W];for(const O in $){const K=$[O];for(const q in K)d(K[q].object),delete K[q];delete $[O]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;const F=i[I.id];for(const W in F){const $=F[W];for(const O in $){const K=$[O];for(const q in K)d(K[q].object),delete K[q];delete $[O]}}delete i[I.id]}function R(I){for(const F in i){const W=i[F];for(const $ in W){const O=W[$];if(O[I.id]===void 0)continue;const K=O[I.id];for(const q in K)d(K[q].object),delete K[q];delete O[I.id]}}}function _(I){for(const F in i){const W=i[F],$=I.isInstancedMesh===!0?I.id:0,O=W[$];if(O!==void 0){for(const K in O){const q=O[K];for(const ee in q)d(q[ee].object),delete q[ee];delete O[K]}delete W[$],Object.keys(W).length===0&&delete i[F]}}}function T(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function nS(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,d){d!==0&&(n.drawArraysInstanced(i,c,l,d),t.update(l,i,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,d);let h=0;for(let f=0;f<d;f++)h+=l[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function iS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Rn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==_n&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==An&&!_)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(Te("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:b,maxSamples:w,samples:E}}function sS(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Oi,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||i!==0||s;return s=h,i=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?d(null):l();else{const x=r?0:i,M=x*4;let b=p.clippingState||null;c.value=b,b=d(g,h,M,f);for(let w=0;w!==M;++w)b[w]=t[w];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,f,g){const y=u!==null?u.length:0;let m=null;if(y!==0){if(m=c.value,g!==!0||m===null){const p=f+y*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,b=f;M!==y;++M,b+=4)a.copy(u[M]).applyMatrix4(x,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const Wi=4,Af=[.125,.215,.35,.446,.526,.582],ss=20,rS=256,Ar=new _a,Rf=new U;let ul=null,hl=0,fl=0,pl=!1;const aS=new C;class Cf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=aS}=r;ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=If(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,hl,fl),this._renderer.xr.enabled=pl,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Si,format:Rn,colorSpace:xn,depthBuffer:!1},s=Pf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pf(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oS(r)),this._blurMaterial=lS(r,e,t),this._ggxMaterial=cS(r,e,t)}return s}_compileMaterial(e){const t=new Ie(new bt,e);this._renderer.compile(t,Ar)}_sceneToCubeUV(e,t,i,s,r){const c=new dn(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Rf),u.toneMapping=ni,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ie(new vn,new un({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,p=!0):(m.color.copy(Rf),p=!0);for(let M=0;M<6;M++){const b=M%3;b===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[M],r.y,r.z)):b===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[M]));const w=this._cubeSize;Hs(s,b*w,M>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(y,c),u.render(e,c)}u.toneMapping=f,u.autoClear=h,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===gs||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=If());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Hs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Ar)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-d*d),h=0+l*1.25,f=u*h,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-Wi?i-g+Wi:0),p=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Hs(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Ar),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Hs(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(o,Ar)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");const d=3,u=this._lodMeshes[s];u.material=l;const h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ss-1),y=r/g,m=isFinite(r)?1+Math.floor(d*y):ss;m>ss&&Te(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);const p=[];let x=0;for(let R=0;R<ss;++R){const _=R/y,T=Math.exp(-_*_/2);p.push(T),R===0?x+=T:R<m&&(x+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const b=this._sizeLods[s],w=3*b*(s>M-Wi?s-M+Wi:0),E=4*(this._cubeSize-b);Hs(t,w,E,3*b,2*b),c.setRenderTarget(t),c.render(u,Ar)}}function oS(n){const e=[],t=[],i=[];let s=n;const r=n-Wi+1+Af.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>n-Wi?c=Af[a-n+Wi-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),d=-l,u=1+l,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,y=3,m=2,p=1,x=new Float32Array(y*g*f),M=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,_=E>2?0:-1,T=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];x.set(T,y*g*E),M.set(h,m*g*E);const P=[E,E,E,E,E,E];b.set(P,p*g*E)}const w=new bt;w.setAttribute("position",new Xt(x,y)),w.setAttribute("uv",new Xt(M,m)),w.setAttribute("faceIndex",new Xt(b,p)),i.push(new Ie(w,null)),s>Wi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Pf(n,e,t){const i=new ii(n,e,t);return i.texture.mapping=fc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function cS(n,e,t){return new ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function lS(n,e,t){const i=new Float32Array(ss),s=new C(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function If(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Lf(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Xm extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Dm(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vn(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:vi});r.uniforms.tEquirect.value=t;const a=new Ie(s,r),o=t.minFilter;return t.minFilter===gi&&(t.minFilter=kt),new tx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function dS(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Ic||f===Lc)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const y=new Xm(g.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",l),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,g=f===Ic||f===Lc,y=f===gs||f===ar;if(g||y){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Cf(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const x=h.image;return g&&x&&x.height>0||y&&x&&c(x)?(i===null&&(i=new Cf(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,f){return f===Ic?h.mapping=gs:f===Lc&&(h.mapping=ar),h}function c(h){let f=0;const g=6;for(let y=0;y<g;y++)h[y]!==void 0&&f++;return f===g}function l(h){const f=h.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(h){const f=h.target;f.removeEventListener("dispose",d);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function uS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Zs("WebGLRenderer: "+i+" extension not supported."),s}}}function hS(n,e,t,i){const s={},r=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(u){const h=u.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(u){const h=[],f=u.index,g=u.attributes.position;let y=0;if(g===void 0)return;if(f!==null){const x=f.array;y=f.version;for(let M=0,b=x.length;M<b;M+=3){const w=x[M+0],E=x[M+1],R=x[M+2];h.push(w,E,E,R,R,w)}}else{const x=g.array;y=g.version;for(let M=0,b=x.length/3-1;M<b;M+=3){const w=M+0,E=M+1,R=M+2;h.push(w,E,E,R,R,w)}}const m=new(g.count>=65535?Em:wm)(h,1);m.version=y;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function d(u){const h=r.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function fS(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,h){n.drawElements(i,h,r,u*a),t.update(h,i,1)}function l(u,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,u*a,f),t.update(h,i,f))}function d(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,u,0,f);let y=0;for(let m=0;m<f;m++)y+=h[m];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function pS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function mS(n,e,t){const i=new WeakMap,s=new ot;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==u){let T=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let b=o.attributes.position.count*M,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const E=new Float32Array(b*w*4*u),R=new Mm(E,b,w,u);R.type=An,R.needsUpdate=!0;const _=M*4;for(let P=0;P<u;P++){const I=m[P],F=p[P],W=x[P],$=b*w*4*P;for(let O=0;O<I.count;O++){const K=O*_;f===!0&&(s.fromBufferAttribute(I,O),E[$+K+0]=s.x,E[$+K+1]=s.y,E[$+K+2]=s.z,E[$+K+3]=0),g===!0&&(s.fromBufferAttribute(F,O),E[$+K+4]=s.x,E[$+K+5]=s.y,E[$+K+6]=s.z,E[$+K+7]=0),y===!0&&(s.fromBufferAttribute(W,O),E[$+K+8]=s.x,E[$+K+9]=s.y,E[$+K+10]=s.z,E[$+K+11]=W.itemSize===4?s.w:1)}}h={count:u,texture:R,size:new xe(b,w)},i.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function gS(n,e,t,i,s){let r=new WeakMap;function a(l){const d=s.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function o(){r=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const bS={[rm]:"LINEAR_TONE_MAPPING",[am]:"REINHARD_TONE_MAPPING",[om]:"CINEON_TONE_MAPPING",[gu]:"ACES_FILMIC_TONE_MAPPING",[lm]:"AGX_TONE_MAPPING",[dm]:"NEUTRAL_TONE_MAPPING",[cm]:"CUSTOM_TONE_MAPPING"};function _S(n,e,t,i,s,r){const a=new ii(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new lr(e,t):void 0}),o=new ii(e,t,{type:Si,depthBuffer:!1,stencilBuffer:!1}),c=new bt;c.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Je([0,2,0,0,2,0],2));const l=new Dv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ie(c,l),u=new _a(-1,1,1,-1,0,1);let h=null,f=null,g=!1,y,m=null,p=[],x=!1;this.setSize=function(M,b){a.setSize(M,b),o.setSize(M,b);for(let w=0;w<p.length;w++){const E=p[w];E.setSize&&E.setSize(M,b)}},this.setEffects=function(M){p=M,x=p.length>0&&p[0].isRenderPass===!0;const b=a.width,w=a.height;for(let E=0;E<p.length;E++){const R=p[E];R.setSize&&R.setSize(b,w)}},this.begin=function(M,b){if(g||M.toneMapping===ni&&p.length===0)return!1;if(m=b,b!==null){const w=b.width,E=b.height;(a.width!==w||a.height!==E)&&this.setSize(w,E)}return x===!1&&M.setRenderTarget(a),y=M.toneMapping,M.toneMapping=ni,!0},this.hasRenderPass=function(){return x},this.end=function(M,b){M.toneMapping=y,g=!0;let w=a,E=o;for(let R=0;R<p.length;R++){const _=p[R];if(_.enabled!==!1&&(_.render(M,E,w,b),_.needsSwap!==!1)){const T=w;w=E,E=T}}if(h!==M.outputColorSpace||f!==M.toneMapping){h=M.outputColorSpace,f=M.toneMapping,l.defines={},Xe.getTransfer(h)===it&&(l.defines.SRGB_TRANSFER="");const R=bS[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(m),M.render(d,u),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const Km=new Ot,Td=new lr(1,1),jm=new Mm,$m=new H_,Jm=new Dm,Df=[],Ff=[],Nf=new Float32Array(16),Uf=new Float32Array(9),kf=new Float32Array(4);function mr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Df[s];if(r===void 0&&(r=new Float32Array(s),Df[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Mc(n,e){let t=Ff[e];t===void 0&&(t=new Int32Array(e),Ff[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function yS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function MS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function SS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;kf.set(i),n.uniformMatrix2fv(this.addr,!1,kf),zt(t,i)}}function wS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;Uf.set(i),n.uniformMatrix3fv(this.addr,!1,Uf),zt(t,i)}}function ES(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;Nf.set(i),n.uniformMatrix4fv(this.addr,!1,Nf),zt(t,i)}}function TS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function AS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function RS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function CS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function PS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function IS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function LS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function DS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function FS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Td.compareFunction=t.isReversedDepthBuffer()?Tu:Eu,r=Td):r=Km,t.setTexture2D(e||r,s)}function NS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||$m,s)}function US(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Jm,s)}function kS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||jm,s)}function OS(n){switch(n){case 5126:return vS;case 35664:return xS;case 35665:return yS;case 35666:return MS;case 35674:return SS;case 35675:return wS;case 35676:return ES;case 5124:case 35670:return TS;case 35667:case 35671:return AS;case 35668:case 35672:return RS;case 35669:case 35673:return CS;case 5125:return PS;case 36294:return IS;case 36295:return LS;case 36296:return DS;case 35678:case 36198:case 36298:case 36306:case 35682:return FS;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return US;case 36289:case 36303:case 36311:case 36292:return kS}}function BS(n,e){n.uniform1fv(this.addr,e)}function zS(n,e){const t=mr(e,this.size,2);n.uniform2fv(this.addr,t)}function GS(n,e){const t=mr(e,this.size,3);n.uniform3fv(this.addr,t)}function VS(n,e){const t=mr(e,this.size,4);n.uniform4fv(this.addr,t)}function HS(n,e){const t=mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function WS(n,e){const t=mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qS(n,e){const t=mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function XS(n,e){n.uniform1iv(this.addr,e)}function KS(n,e){n.uniform2iv(this.addr,e)}function jS(n,e){n.uniform3iv(this.addr,e)}function $S(n,e){n.uniform4iv(this.addr,e)}function JS(n,e){n.uniform1uiv(this.addr,e)}function YS(n,e){n.uniform2uiv(this.addr,e)}function ZS(n,e){n.uniform3uiv(this.addr,e)}function QS(n,e){n.uniform4uiv(this.addr,e)}function e1(n,e,t){const i=this.cache,s=e.length,r=Mc(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Td:a=Km;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function t1(n,e,t){const i=this.cache,s=e.length,r=Mc(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$m,r[a])}function n1(n,e,t){const i=this.cache,s=e.length,r=Mc(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Jm,r[a])}function i1(n,e,t){const i=this.cache,s=e.length,r=Mc(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||jm,r[a])}function s1(n){switch(n){case 5126:return BS;case 35664:return zS;case 35665:return GS;case 35666:return VS;case 35674:return HS;case 35675:return WS;case 35676:return qS;case 5124:case 35670:return XS;case 35667:case 35671:return KS;case 35668:case 35672:return jS;case 35669:case 35673:return $S;case 5125:return JS;case 36294:return YS;case 36295:return ZS;case 36296:return QS;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}class r1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=OS(t.type)}}class a1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s1(t.type)}}class o1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const ml=/(\w+)(\])?(\[|\.)?/g;function Of(n,e){n.seq.push(e),n.map[e.id]=e}function c1(n,e,t){const i=n.name,s=i.length;for(ml.lastIndex=0;;){const r=ml.exec(i),a=ml.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Of(t,l===void 0?new r1(o,n,e):new a1(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new o1(o),Of(t,u)),t=u}}}class Eo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);c1(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Bf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const l1=37297;let d1=0;function u1(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const zf=new Oe;function h1(n){Xe._getMatrix(zf,Xe.workingColorSpace,n);const e=`mat3( ${zf.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(n)){case Vo:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+u1(n.getShaderSource(e),o)}else return r}function f1(n,e){const t=h1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const p1={[rm]:"Linear",[am]:"Reinhard",[om]:"Cineon",[gu]:"ACESFilmic",[lm]:"AgX",[dm]:"Neutral",[cm]:"Custom"};function m1(n,e){const t=p1[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const eo=new C;function g1(){Xe.getLuminanceCoefficients(eo);const n=eo.x.toFixed(4),e=eo.y.toFixed(4),t=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function _1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function v1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function zr(n){return n!==""}function Vf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const x1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(n){return n.replace(x1,M1)}const y1=new Map;function M1(n,e){let t=Ve[e];if(t===void 0){const i=y1.get(e);if(i!==void 0)t=Ve[i],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ad(t)}const S1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(n){return n.replace(S1,w1)}function w1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const E1={[Wr]:"SHADOWMAP_TYPE_PCF",[Or]:"SHADOWMAP_TYPE_VSM"};function T1(n){return E1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const A1={[gs]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE",[fc]:"ENVMAP_TYPE_CUBE_UV"};function R1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":A1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const C1={[ar]:"ENVMAP_MODE_REFRACTION"};function P1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":C1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const I1={[sm]:"ENVMAP_BLENDING_MULTIPLY",[n_]:"ENVMAP_BLENDING_MIX",[i_]:"ENVMAP_BLENDING_ADD"};function L1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":I1[n.combine]||"ENVMAP_BLENDING_NONE"}function D1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function F1(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=T1(t),l=R1(t),d=P1(t),u=L1(t),h=D1(t),f=b1(t),g=_1(r),y=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zr).join(`
`),p.length>0&&(p+=`
`)):(m=[qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),p=[qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Ve.tonemapping_pars_fragment:"",t.toneMapping!==ni?m1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,f1("linearToOutputTexel",t.outputColorSpace),g1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),a=Ad(a),a=Vf(a,t),a=Hf(a,t),o=Ad(o),o=Vf(o,t),o=Hf(o,t),a=Wf(a),o=Wf(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+a,b=x+p+o,w=Bf(s,s.VERTEX_SHADER,M),E=Bf(s,s.FRAGMENT_SHADER,b);s.attachShader(y,w),s.attachShader(y,E),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(I){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(y)||"",W=s.getShaderInfoLog(w)||"",$=s.getShaderInfoLog(E)||"",O=F.trim(),K=W.trim(),q=$.trim();let ee=!0,ne=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,w,E);else{const pe=Gf(s,w,"vertex"),ve=Gf(s,E,"fragment");Ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+pe+`
`+ve)}else O!==""?Te("WebGLProgram: Program Info Log:",O):(K===""||q==="")&&(ne=!1);ne&&(I.diagnostics={runnable:ee,programLog:O,vertexShader:{log:K,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(w),s.deleteShader(E),_=new Eo(s,y),T=v1(s,y)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,l1)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=E,this}let N1=0;class U1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new k1(e),t.set(e,i)),i}}class k1{constructor(e){this.id=N1++,this.code=e,this.usedTimes=0}}function O1(n){return n===bs||n===Bo||n===zo}function B1(n,e,t,i,s,r){const a=new Cu,o=new U1,c=new Set,l=[],d=new Map,u=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,T,P,I,F,W){const $=I.fog,O=F.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ee=e.get(_.envMap||K,q),ne=ee&&ee.mapping===fc?ee.image.height:null,pe=f[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Te("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const ve=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Se=ve!==void 0?ve.length:0;let Ye=0;O.morphAttributes.position!==void 0&&(Ye=1),O.morphAttributes.normal!==void 0&&(Ye=2),O.morphAttributes.color!==void 0&&(Ye=3);let _t,Ze,Q,oe;if(pe){const we=Yn[pe];_t=we.vertexShader,Ze=we.fragmentShader}else{_t=_.vertexShader,Ze=_.fragmentShader;const we=o.getVertexShaderStage(_),xt=o.getFragmentShaderStage(_);o.update(_,we,xt),Q=we.id,oe=xt.id}const ie=n.getRenderTarget(),Ue=n.state.buffers.depth.getReversed(),Be=F.isInstancedMesh===!0,De=F.isBatchedMesh===!0,St=!!_.map,Ke=!!_.matcap,lt=!!ee,Qe=!!_.aoMap,je=!!_.lightMap,Pt=!!_.bumpMap&&_.wireframe===!1,Ft=!!_.normalMap,Gt=!!_.displacementMap,qt=!!_.emissiveMap,vt=!!_.metalnessMap,It=!!_.roughnessMap,D=_.anisotropy>0,rn=_.clearcoat>0,tt=_.dispersion>0,A=_.iridescence>0,v=_.sheen>0,k=_.transmission>0,G=D&&!!_.anisotropyMap,j=rn&&!!_.clearcoatMap,re=rn&&!!_.clearcoatNormalMap,ce=rn&&!!_.clearcoatRoughnessMap,J=A&&!!_.iridescenceMap,Z=A&&!!_.iridescenceThicknessMap,le=v&&!!_.sheenColorMap,Re=v&&!!_.sheenRoughnessMap,he=!!_.specularMap,de=!!_.specularColorMap,Le=!!_.specularIntensityMap,Fe=k&&!!_.transmissionMap,ze=k&&!!_.thicknessMap,L=!!_.gradientMap,ae=!!_.alphaMap,Y=_.alphaTest>0,ue=!!_.alphaHash,be=!!_.extensions;let te=ni;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(te=n.toneMapping);const Ae={shaderID:pe,shaderType:_.type,shaderName:_.name,vertexShader:_t,fragmentShader:Ze,defines:_.defines,customVertexShaderID:Q,customFragmentShaderID:oe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:De,batchingColor:De&&F._colorsTexture!==null,instancing:Be,instancingColor:Be&&F.instanceColor!==null,instancingMorph:Be&&F.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:St,matcap:Ke,envMap:lt,envMapMode:lt&&ee.mapping,envMapCubeUVHeight:ne,aoMap:Qe,lightMap:je,bumpMap:Pt,normalMap:Ft,displacementMap:Gt,emissiveMap:qt,normalMapObjectSpace:Ft&&_.normalMapType===d_,normalMapTangentSpace:Ft&&_.normalMapType===yd,packedNormalMap:Ft&&_.normalMapType===yd&&O1(_.normalMap.format),metalnessMap:vt,roughnessMap:It,anisotropy:D,anisotropyMap:G,clearcoat:rn,clearcoatMap:j,clearcoatNormalMap:re,clearcoatRoughnessMap:ce,dispersion:tt,iridescence:A,iridescenceMap:J,iridescenceThicknessMap:Z,sheen:v,sheenColorMap:le,sheenRoughnessMap:Re,specularMap:he,specularColorMap:de,specularIntensityMap:Le,transmission:k,transmissionMap:Fe,thicknessMap:ze,gradientMap:L,opaque:_.transparent===!1&&_.blending===Ys&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:Y,alphaHash:ue,combine:_.combine,mapUv:St&&g(_.map.channel),aoMapUv:Qe&&g(_.aoMap.channel),lightMapUv:je&&g(_.lightMap.channel),bumpMapUv:Pt&&g(_.bumpMap.channel),normalMapUv:Ft&&g(_.normalMap.channel),displacementMapUv:Gt&&g(_.displacementMap.channel),emissiveMapUv:qt&&g(_.emissiveMap.channel),metalnessMapUv:vt&&g(_.metalnessMap.channel),roughnessMapUv:It&&g(_.roughnessMap.channel),anisotropyMapUv:G&&g(_.anisotropyMap.channel),clearcoatMapUv:j&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:le&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(_.sheenRoughnessMap.channel),specularMapUv:he&&g(_.specularMap.channel),specularColorMapUv:de&&g(_.specularColorMap.channel),specularIntensityMapUv:Le&&g(_.specularIntensityMap.channel),transmissionMapUv:Fe&&g(_.transmissionMap.channel),thicknessMapUv:ze&&g(_.thicknessMap.channel),alphaMapUv:ae&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ft||D),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(St||ae),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&Ft===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ue,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ye,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:te,decodeVideoTexture:St&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===it,decodeVideoTextureEmissive:qt&&_.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(_.emissiveMap.colorSpace)===it,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Nt,flipSided:_.side===fn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:be&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&_.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function m(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(T,_),x(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function x(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){const T=f[_.type];let P;if(T){const I=Yn[T];P=Pv.clone(I.uniforms)}else P=_.uniforms;return P}function b(_,T){let P=d.get(T);return P!==void 0?++P.usedTimes:(P=new F1(n,T,_,s),l.push(P),d.set(T,P)),P}function w(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),d.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:M,acquireProgram:b,releaseProgram:w,releaseShaderCache:E,programs:l,dispose:R}}function z1(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function G1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Xf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,y,m,p){let x=n[e];return x===void 0?(x={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},n[e]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=g,x.materialVariant=a(h),x.groupOrder=y,x.renderOrder=h.renderOrder,x.z=m,x.group=p),e++,x}function c(h,f,g,y,m,p){const x=o(h,f,g,y,m,p);g.transmission>0?i.push(x):g.transparent===!0?s.push(x):t.push(x)}function l(h,f,g,y,m,p){const x=o(h,f,g,y,m,p);g.transmission>0?i.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function d(h,f,g){t.length>1&&t.sort(h||G1),i.length>1&&i.sort(f||Xf),s.length>1&&s.sort(f||Xf),g&&(t.reverse(),i.reverse(),s.reverse())}function u(){for(let h=e,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:d}}function V1(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Kf,n.set(i,[a])):s>=r.length?(a=new Kf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function H1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new U};break;case"SpotLight":t={position:new C,direction:new C,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new U,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new U,groundColor:new U};break;case"RectAreaLight":t={color:new U,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function W1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let q1=0;function X1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function K1(n){const e=new H1,t=W1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new C);const s=new C,r=new ke,a=new ke;function o(l){let d=0,u=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,x=0,M=0,b=0,w=0,E=0,R=0;l.sort(X1);for(let T=0,P=l.length;T<P;T++){const I=l[T],F=I.color,W=I.intensity,$=I.distance;let O=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===bs?O=I.shadow.map.texture:O=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=F.r*W,u+=F.g*W,h+=F.b*W;else if(I.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(I.sh.coefficients[K],W);R++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const q=I.shadow,ee=t.get(I);ee.shadowIntensity=q.intensity,ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,i.directionalShadow[f]=ee,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=I.shadow.matrix,x++}i.directional[f]=K,f++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(F).multiplyScalar(W),K.distance=$,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,i.spot[y]=K;const q=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,q.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[y]=q.matrix,I.castShadow){const ee=t.get(I);ee.shadowIntensity=q.intensity,ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,i.spotShadow[y]=ee,i.spotShadowMap[y]=O,b++}y++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(F).multiplyScalar(W),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=K,m++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){const q=I.shadow,ee=t.get(I);ee.shadowIntensity=q.intensity,ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,ee.shadowCameraNear=q.camera.near,ee.shadowCameraFar=q.camera.far,i.pointShadow[g]=ee,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=I.shadow.matrix,M++}i.point[g]=K,g++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(W),K.groundColor.copy(I.groundColor).multiplyScalar(W),i.hemi[p]=K,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const _=i.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==y||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==x||_.numPointShadows!==M||_.numSpotShadows!==b||_.numSpotMaps!==w||_.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+w-E,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,_.directionalLength=f,_.pointLength=g,_.spotLength=y,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=x,_.numPointShadows=M,_.numSpotShadows=b,_.numSpotMaps=w,_.numLightProbes=R,i.version=q1++)}function c(l,d){let u=0,h=0,f=0,g=0,y=0;const m=d.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const M=l[p];if(M.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(M.isSpotLight){const b=i.spot[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const b=i.hemi[y];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:o,setupView:c,state:i}}function jf(n){const e=new K1(n),t=[],i=[],s=[];function r(h){u.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function d(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function j1(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new jf(n),e.set(s,[o])):r>=a.length?(o=new jf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const $1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Y1=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Z1=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],$f=new ke,Rr=new C,gl=new C;function Q1(n,e,t){let i=new Du;const s=new xe,r=new xe,a=new ot,o=new Fv,c=new Nv,l={},d=t.maxTextureSize,u={[Mi]:fn,[fn]:Mi,[Nt]:Nt},h=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:$1,fragmentShader:J1}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ie(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wr;let p=this.type;this.render=function(E,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===kb&&(Te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Wr);const T=n.getRenderTarget(),P=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),F=n.state;F.setBlending(vi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=p!==this.type;W&&R.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(O=>O.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,O=E.length;$<O;$++){const K=E[$],q=K.shadow;if(q===void 0){Te("WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const ee=q.getFrameExtents();s.multiply(ee),r.copy(q.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ee.x),s.x=r.x*ee.x,q.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ee.y),s.y=r.y*ee.y,q.mapSize.y=r.y));const ne=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=ne,q.map===null||W===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Or){if(K.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new ii(s.x,s.y,{format:bs,type:Si,minFilter:kt,magFilter:kt,generateMipmaps:!1}),q.map.texture.name=K.name+".shadowMap",q.map.depthTexture=new lr(s.x,s.y,An),q.map.depthTexture.name=K.name+".shadowMapDepth",q.map.depthTexture.format=wi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ut,q.map.depthTexture.magFilter=Ut}else K.isPointLight?(q.map=new Xm(s.x),q.map.depthTexture=new hv(s.x,si)):(q.map=new ii(s.x,s.y),q.map.depthTexture=new lr(s.x,s.y,si)),q.map.depthTexture.name=K.name+".shadowMap",q.map.depthTexture.format=wi,this.type===Wr?(q.map.depthTexture.compareFunction=ne?Tu:Eu,q.map.depthTexture.minFilter=kt,q.map.depthTexture.magFilter=kt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ut,q.map.depthTexture.magFilter=Ut);q.camera.updateProjectionMatrix()}const pe=q.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<pe;ve++){if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,ve),n.clear();else{ve===0&&(n.setRenderTarget(q.map),n.clear());const Se=q.getViewport(ve);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),F.viewport(a)}if(K.isPointLight){const Se=q.camera,Ye=q.matrix,_t=K.distance||Se.far;_t!==Se.far&&(Se.far=_t,Se.updateProjectionMatrix()),Rr.setFromMatrixPosition(K.matrixWorld),Se.position.copy(Rr),gl.copy(Se.position),gl.add(Y1[ve]),Se.up.copy(Z1[ve]),Se.lookAt(gl),Se.updateMatrixWorld(),Ye.makeTranslation(-Rr.x,-Rr.y,-Rr.z),$f.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),q._frustum.setFromProjectionMatrix($f,Se.coordinateSystem,Se.reversedDepth)}else q.updateMatrices(K);i=q.getFrustum(),b(R,_,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===Or&&x(q,_),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,P,I)};function x(E,R){const _=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ii(s.x,s.y,{format:bs,type:Si})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,_,h,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,_,f,y,null)}function M(E,R,_,T){let P=null;const I=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)P=I;else if(P=_.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=P.uuid,W=R.uuid;let $=l[F];$===void 0&&($={},l[F]=$);let O=$[W];O===void 0&&(O=P.clone(),$[W]=O,R.addEventListener("dispose",w)),P=O}if(P.visible=R.visible,P.wireframe=R.wireframe,T===Or?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:u[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=n.properties.get(P);F.light=_}return P}function b(E,R,_,T,P){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Or)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const W=e.update(E),$=E.material;if(Array.isArray($)){const O=W.groups;for(let K=0,q=O.length;K<q;K++){const ee=O[K],ne=$[ee.materialIndex];if(ne&&ne.visible){const pe=M(E,ne,T,P);E.onBeforeShadow(n,E,R,_,W,pe,ee),n.renderBufferDirect(_,null,W,pe,E,ee),E.onAfterShadow(n,E,R,_,W,pe,ee)}}}else if($.visible){const O=M(E,$,T,P);E.onBeforeShadow(n,E,R,_,W,O,null),n.renderBufferDirect(_,null,W,O,E,null),E.onAfterShadow(n,E,R,_,W,O,null)}}const F=E.children;for(let W=0,$=F.length;W<$;W++)b(F[W],R,_,T,P)}function w(E){E.target.removeEventListener("dispose",w);for(const _ in l){const T=l[_],P=E.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function ew(n,e){function t(){let L=!1;const ae=new ot;let Y=null;const ue=new ot(0,0,0,0);return{setMask:function(be){Y!==be&&!L&&(n.colorMask(be,be,be,be),Y=be)},setLocked:function(be){L=be},setClear:function(be,te,Ae,we,xt){xt===!0&&(be*=we,te*=we,Ae*=we),ae.set(be,te,Ae,we),ue.equals(ae)===!1&&(n.clearColor(be,te,Ae,we),ue.copy(ae))},reset:function(){L=!1,Y=null,ue.set(-1,0,0,0)}}}function i(){let L=!1,ae=!1,Y=null,ue=null,be=null;return{setReversed:function(te){if(ae!==te){const Ae=e.get("EXT_clip_control");te?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ae=te;const we=be;be=null,this.setClear(we)}},getReversed:function(){return ae},setTest:function(te){te?ie(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(te){Y!==te&&!L&&(n.depthMask(te),Y=te)},setFunc:function(te){if(ae&&(te=y_[te]),ue!==te){switch(te){case Ul:n.depthFunc(n.NEVER);break;case kl:n.depthFunc(n.ALWAYS);break;case Ol:n.depthFunc(n.LESS);break;case rr:n.depthFunc(n.LEQUAL);break;case Bl:n.depthFunc(n.EQUAL);break;case zl:n.depthFunc(n.GEQUAL);break;case Gl:n.depthFunc(n.GREATER);break;case Vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=te}},setLocked:function(te){L=te},setClear:function(te){be!==te&&(be=te,ae&&(te=1-te),n.clearDepth(te))},reset:function(){L=!1,Y=null,ue=null,be=null,ae=!1}}}function s(){let L=!1,ae=null,Y=null,ue=null,be=null,te=null,Ae=null,we=null,xt=null;return{setTest:function(ht){L||(ht?ie(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(ht){ae!==ht&&!L&&(n.stencilMask(ht),ae=ht)},setFunc:function(ht,Wn,qn){(Y!==ht||ue!==Wn||be!==qn)&&(n.stencilFunc(ht,Wn,qn),Y=ht,ue=Wn,be=qn)},setOp:function(ht,Wn,qn){(te!==ht||Ae!==Wn||we!==qn)&&(n.stencilOp(ht,Wn,qn),te=ht,Ae=Wn,we=qn)},setLocked:function(ht){L=ht},setClear:function(ht){xt!==ht&&(n.clearStencil(ht),xt=ht)},reset:function(){L=!1,ae=null,Y=null,ue=null,be=null,te=null,Ae=null,we=null,xt=null}}}const r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let d={},u={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,x=null,M=null,b=null,w=null,E=null,R=null,_=new U(0,0,0),T=0,P=!1,I=null,F=null,W=null,$=null,O=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ee=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ne)[1]),q=ee>=1):ne.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),q=ee>=2);let pe=null,ve={};const Se=n.getParameter(n.SCISSOR_BOX),Ye=n.getParameter(n.VIEWPORT),_t=new ot().fromArray(Se),Ze=new ot().fromArray(Ye);function Q(L,ae,Y,ue){const be=new Uint8Array(4),te=n.createTexture();n.bindTexture(L,te),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<Y;Ae++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(ae+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return te}const oe={};oe[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(rr),Pt(!1),Ft(Rh),ie(n.CULL_FACE),Qe(vi);function ie(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function Ue(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function Be(L,ae){return h[L]!==ae?(n.bindFramebuffer(L,ae),h[L]=ae,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ae),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function De(L,ae){let Y=g,ue=!1;if(L){Y=f.get(ae),Y===void 0&&(Y=[],f.set(ae,Y));const be=L.textures;if(Y.length!==be.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Ae=be.length;te<Ae;te++)Y[te]=n.COLOR_ATTACHMENT0+te;Y.length=be.length,ue=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,ue=!0);ue&&n.drawBuffers(Y)}function St(L){return y!==L?(n.useProgram(L),y=L,!0):!1}const Ke={[is]:n.FUNC_ADD,[Bb]:n.FUNC_SUBTRACT,[zb]:n.FUNC_REVERSE_SUBTRACT};Ke[Gb]=n.MIN,Ke[Vb]=n.MAX;const lt={[Hb]:n.ZERO,[Wb]:n.ONE,[qb]:n.SRC_COLOR,[Fl]:n.SRC_ALPHA,[Yb]:n.SRC_ALPHA_SATURATE,[$b]:n.DST_COLOR,[Kb]:n.DST_ALPHA,[Xb]:n.ONE_MINUS_SRC_COLOR,[Nl]:n.ONE_MINUS_SRC_ALPHA,[Jb]:n.ONE_MINUS_DST_COLOR,[jb]:n.ONE_MINUS_DST_ALPHA,[Zb]:n.CONSTANT_COLOR,[Qb]:n.ONE_MINUS_CONSTANT_COLOR,[e_]:n.CONSTANT_ALPHA,[t_]:n.ONE_MINUS_CONSTANT_ALPHA};function Qe(L,ae,Y,ue,be,te,Ae,we,xt,ht){if(L===vi){m===!0&&(Ue(n.BLEND),m=!1);return}if(m===!1&&(ie(n.BLEND),m=!0),L!==Ob){if(L!==p||ht!==P){if((x!==is||w!==is)&&(n.blendEquation(n.FUNC_ADD),x=is,w=is),ht)switch(L){case Ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ko:n.blendFunc(n.ONE,n.ONE);break;case Ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ph:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ne("WebGLState: Invalid blending: ",L);break}else switch(L){case Ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ko:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ch:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ph:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",L);break}M=null,b=null,E=null,R=null,_.set(0,0,0),T=0,p=L,P=ht}return}be=be||ae,te=te||Y,Ae=Ae||ue,(ae!==x||be!==w)&&(n.blendEquationSeparate(Ke[ae],Ke[be]),x=ae,w=be),(Y!==M||ue!==b||te!==E||Ae!==R)&&(n.blendFuncSeparate(lt[Y],lt[ue],lt[te],lt[Ae]),M=Y,b=ue,E=te,R=Ae),(we.equals(_)===!1||xt!==T)&&(n.blendColor(we.r,we.g,we.b,xt),_.copy(we),T=xt),p=L,P=!1}function je(L,ae){L.side===Nt?Ue(n.CULL_FACE):ie(n.CULL_FACE);let Y=L.side===fn;ae&&(Y=!Y),Pt(Y),L.blending===Ys&&L.transparent===!1?Qe(vi):Qe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const ue=L.stencilWrite;o.setTest(ue),ue&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),qt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(L){I!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),I=L)}function Ft(L){L!==Nb?(ie(n.CULL_FACE),L!==F&&(L===Rh?n.cullFace(n.BACK):L===Ub?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),F=L}function Gt(L){L!==W&&(q&&n.lineWidth(L),W=L)}function qt(L,ae,Y){L?(ie(n.POLYGON_OFFSET_FILL),($!==ae||O!==Y)&&($=ae,O=Y,a.getReversed()&&(ae=-ae),n.polygonOffset(ae,Y))):Ue(n.POLYGON_OFFSET_FILL)}function vt(L){L?ie(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function It(L){L===void 0&&(L=n.TEXTURE0+K-1),pe!==L&&(n.activeTexture(L),pe=L)}function D(L,ae,Y){Y===void 0&&(pe===null?Y=n.TEXTURE0+K-1:Y=pe);let ue=ve[Y];ue===void 0&&(ue={type:void 0,texture:void 0},ve[Y]=ue),(ue.type!==L||ue.texture!==ae)&&(pe!==Y&&(n.activeTexture(Y),pe=Y),n.bindTexture(L,ae||oe[L]),ue.type=L,ue.texture=ae)}function rn(){const L=ve[pe];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function tt(){try{n.compressedTexImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function v(){try{n.texSubImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function k(){try{n.texSubImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function j(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function re(){try{n.texStorage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function ce(){try{n.texStorage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function J(){try{n.texImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function Z(){try{n.texImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function le(L){return u[L]!==void 0?u[L]:n.getParameter(L)}function Re(L,ae){u[L]!==ae&&(n.pixelStorei(L,ae),u[L]=ae)}function he(L){_t.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),_t.copy(L))}function de(L){Ze.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Ze.copy(L))}function Le(L,ae){let Y=l.get(ae);Y===void 0&&(Y=new WeakMap,l.set(ae,Y));let ue=Y.get(L);ue===void 0&&(ue=n.getUniformBlockIndex(ae,L.name),Y.set(L,ue))}function Fe(L,ae){const ue=l.get(ae).get(L);c.get(ae)!==ue&&(n.uniformBlockBinding(ae,ue,L.__bindingPointIndex),c.set(ae,ue))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},u={},pe=null,ve={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,x=null,M=null,b=null,w=null,E=null,R=null,_=new U(0,0,0),T=0,P=!1,I=null,F=null,W=null,$=null,O=null,_t.set(0,0,n.canvas.width,n.canvas.height),Ze.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Ue,bindFramebuffer:Be,drawBuffers:De,useProgram:St,setBlending:Qe,setMaterial:je,setFlipSided:Pt,setCullFace:Ft,setLineWidth:Gt,setPolygonOffset:qt,setScissorTest:vt,activeTexture:It,bindTexture:D,unbindTexture:rn,compressedTexImage2D:tt,compressedTexImage3D:A,texImage2D:J,texImage3D:Z,pixelStorei:Re,getParameter:le,updateUBOMapping:Le,uniformBlockBinding:Fe,texStorage2D:re,texStorage3D:ce,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:G,compressedTexSubImage3D:j,scissor:he,viewport:de,reset:ze}}function tw(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xe,d=new WeakMap,u=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,v){return g?new OffscreenCanvas(A,v):ca("canvas")}function m(A,v,k){let G=1;const j=tt(A);if((j.width>k||j.height>k)&&(G=k/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const re=Math.floor(G*j.width),ce=Math.floor(G*j.height);h===void 0&&(h=y(re,ce));const J=v?y(re,ce):h;return J.width=re,J.height=ce,J.getContext("2d").drawImage(A,0,0,re,ce),Te("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+re+"x"+ce+")."),J}else return"data"in A&&Te("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function p(A){return A.generateMipmaps}function x(A){n.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(A,v,k,G,j,re=!1){if(A!==null){if(n[A]!==void 0)return n[A];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce;G&&(ce=e.get("EXT_texture_norm16"),ce||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===n.RED&&(k===n.FLOAT&&(J=n.R32F),k===n.HALF_FLOAT&&(J=n.R16F),k===n.UNSIGNED_BYTE&&(J=n.R8),k===n.UNSIGNED_SHORT&&ce&&(J=ce.R16_EXT),k===n.SHORT&&ce&&(J=ce.R16_SNORM_EXT)),v===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.R8UI),k===n.UNSIGNED_SHORT&&(J=n.R16UI),k===n.UNSIGNED_INT&&(J=n.R32UI),k===n.BYTE&&(J=n.R8I),k===n.SHORT&&(J=n.R16I),k===n.INT&&(J=n.R32I)),v===n.RG&&(k===n.FLOAT&&(J=n.RG32F),k===n.HALF_FLOAT&&(J=n.RG16F),k===n.UNSIGNED_BYTE&&(J=n.RG8),k===n.UNSIGNED_SHORT&&ce&&(J=ce.RG16_EXT),k===n.SHORT&&ce&&(J=ce.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RG8UI),k===n.UNSIGNED_SHORT&&(J=n.RG16UI),k===n.UNSIGNED_INT&&(J=n.RG32UI),k===n.BYTE&&(J=n.RG8I),k===n.SHORT&&(J=n.RG16I),k===n.INT&&(J=n.RG32I)),v===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGB8UI),k===n.UNSIGNED_SHORT&&(J=n.RGB16UI),k===n.UNSIGNED_INT&&(J=n.RGB32UI),k===n.BYTE&&(J=n.RGB8I),k===n.SHORT&&(J=n.RGB16I),k===n.INT&&(J=n.RGB32I)),v===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),k===n.UNSIGNED_INT&&(J=n.RGBA32UI),k===n.BYTE&&(J=n.RGBA8I),k===n.SHORT&&(J=n.RGBA16I),k===n.INT&&(J=n.RGBA32I)),v===n.RGB&&(k===n.UNSIGNED_SHORT&&ce&&(J=ce.RGB16_EXT),k===n.SHORT&&ce&&(J=ce.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),v===n.RGBA){const Z=re?Vo:Xe.getTransfer(j);k===n.FLOAT&&(J=n.RGBA32F),k===n.HALF_FLOAT&&(J=n.RGBA16F),k===n.UNSIGNED_BYTE&&(J=Z===it?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&ce&&(J=ce.RGBA16_EXT),k===n.SHORT&&ce&&(J=ce.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function w(A,v){let k;return A?v===null||v===si||v===sa?k=n.DEPTH24_STENCIL8:v===An?k=n.DEPTH32F_STENCIL8:v===ia&&(k=n.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===si||v===sa?k=n.DEPTH_COMPONENT24:v===An?k=n.DEPTH_COMPONENT32F:v===ia&&(k=n.DEPTH_COMPONENT16),k}function E(A,v){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ut&&A.minFilter!==kt?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function R(A){const v=A.target;v.removeEventListener("dispose",R),T(v),v.isVideoTexture&&d.delete(v),v.isHTMLTexture&&u.delete(v)}function _(A){const v=A.target;v.removeEventListener("dispose",_),I(v)}function T(A){const v=i.get(A);if(v.__webglInit===void 0)return;const k=A.source,G=f.get(k);if(G){const j=G[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(A),Object.keys(G).length===0&&f.delete(k)}i.remove(A)}function P(A){const v=i.get(A);n.deleteTexture(v.__webglTexture);const k=A.source,G=f.get(k);delete G[v.__cacheKey],a.memory.textures--}function I(A){const v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let j=0;j<v.__webglFramebuffer[G].length;j++)n.deleteFramebuffer(v.__webglFramebuffer[G][j]);else n.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)n.deleteFramebuffer(v.__webglFramebuffer[G]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=A.textures;for(let G=0,j=k.length;G<j;G++){const re=i.get(k[G]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(k[G])}i.remove(A)}let F=0;function W(){F=0}function $(){return F}function O(A){F=A}function K(){const A=F;return A>=s.maxTextures&&Te("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function q(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function ee(A,v){const k=i.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const G=A.image;if(G===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(k,A,v);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+v)}function ne(A,v){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Ue(k,A,v);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+v)}function pe(A,v){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Ue(k,A,v);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+v)}function ve(A,v){const k=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){Be(k,A,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+v)}const Se={[or]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[Oo]:n.MIRRORED_REPEAT},Ye={[Ut]:n.NEAREST,[hm]:n.NEAREST_MIPMAP_NEAREST,[Br]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[xo]:n.LINEAR_MIPMAP_NEAREST,[gi]:n.LINEAR_MIPMAP_LINEAR},_t={[u_]:n.NEVER,[g_]:n.ALWAYS,[h_]:n.LESS,[Eu]:n.LEQUAL,[f_]:n.EQUAL,[Tu]:n.GEQUAL,[p_]:n.GREATER,[m_]:n.NOTEQUAL};function Ze(A,v){if(v.type===An&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===kt||v.magFilter===xo||v.magFilter===Br||v.magFilter===gi||v.minFilter===kt||v.minFilter===xo||v.minFilter===Br||v.minFilter===gi)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Se[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Se[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Se[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Ye[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Ye[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,_t[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ut||v.minFilter!==Br&&v.minFilter!==gi||v.type===An&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Q(A,v){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",R));const G=v.source;let j=f.get(G);j===void 0&&(j={},f.set(G,j));const re=q(v);if(re!==A.__cacheKey){j[re]===void 0&&(j[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),j[re].usedTimes++;const ce=j[A.__cacheKey];ce!==void 0&&(j[A.__cacheKey].usedTimes--,ce.usedTimes===0&&P(v)),A.__cacheKey=re,A.__webglTexture=j[re].texture}return k}function oe(A,v,k){return Math.floor(Math.floor(A/k)/v)}function ie(A,v,k,G){const re=A.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,k,G,v.data);else{re.sort((Re,he)=>Re.start-he.start);let ce=0;for(let Re=1;Re<re.length;Re++){const he=re[ce],de=re[Re],Le=he.start+he.count,Fe=oe(de.start,v.width,4),ze=oe(he.start,v.width,4);de.start<=Le+1&&Fe===ze&&oe(de.start+de.count-1,v.width,4)===Fe?he.count=Math.max(he.count,de.start+de.count-he.start):(++ce,re[ce]=de)}re.length=ce+1;const J=t.getParameter(n.UNPACK_ROW_LENGTH),Z=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Re=0,he=re.length;Re<he;Re++){const de=re[Re],Le=Math.floor(de.start/4),Fe=Math.ceil(de.count/4),ze=Le%v.width,L=Math.floor(Le/v.width),ae=Fe,Y=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,ze,L,ae,Y,k,G,v.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function Ue(A,v,k){let G=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=n.TEXTURE_3D);const j=Q(A,v),re=v.source;t.bindTexture(G,A.__webglTexture,n.TEXTURE0+k);const ce=i.get(re);if(re.version!==ce.__version||j===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const Y=Xe.getPrimaries(Xe.workingColorSpace),ue=v.colorSpace===Gi?null:Xe.getPrimaries(v.colorSpace),be=v.colorSpace===Gi||Y===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let Z=m(v.image,!1,s.maxTextureSize);Z=rn(v,Z);const le=r.convert(v.format,v.colorSpace),Re=r.convert(v.type);let he=b(v.internalFormat,le,Re,v.normalized,v.colorSpace,v.isVideoTexture);Ze(G,v);let de;const Le=v.mipmaps,Fe=v.isVideoTexture!==!0,ze=ce.__version===void 0||j===!0,L=re.dataReady,ae=E(v,Z);if(v.isDepthTexture)he=w(v.format===cs,v.type),ze&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,he,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,he,Z.width,Z.height,0,le,Re,null));else if(v.isDataTexture)if(Le.length>0){Fe&&ze&&t.texStorage2D(n.TEXTURE_2D,ae,he,Le[0].width,Le[0].height);for(let Y=0,ue=Le.length;Y<ue;Y++)de=Le[Y],Fe?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,de.width,de.height,le,Re,de.data):t.texImage2D(n.TEXTURE_2D,Y,he,de.width,de.height,0,le,Re,de.data);v.generateMipmaps=!1}else Fe?(ze&&t.texStorage2D(n.TEXTURE_2D,ae,he,Z.width,Z.height),L&&ie(v,Z,le,Re)):t.texImage2D(n.TEXTURE_2D,0,he,Z.width,Z.height,0,le,Re,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Fe&&ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,he,Le[0].width,Le[0].height,Z.depth);for(let Y=0,ue=Le.length;Y<ue;Y++)if(de=Le[Y],v.format!==Rn)if(le!==null)if(Fe){if(L)if(v.layerUpdates.size>0){const be=Tf(de.width,de.height,v.format,v.type);for(const te of v.layerUpdates){const Ae=de.data.subarray(te*be/de.data.BYTES_PER_ELEMENT,(te+1)*be/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,te,de.width,de.height,1,le,Ae)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,de.width,de.height,Z.depth,le,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,he,de.width,de.height,Z.depth,0,de.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,de.width,de.height,Z.depth,le,Re,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,he,de.width,de.height,Z.depth,0,le,Re,de.data)}else{Fe&&ze&&t.texStorage2D(n.TEXTURE_2D,ae,he,Le[0].width,Le[0].height);for(let Y=0,ue=Le.length;Y<ue;Y++)de=Le[Y],v.format!==Rn?le!==null?Fe?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,de.width,de.height,le,de.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,he,de.width,de.height,0,de.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,de.width,de.height,le,Re,de.data):t.texImage2D(n.TEXTURE_2D,Y,he,de.width,de.height,0,le,Re,de.data)}else if(v.isDataArrayTexture)if(Fe){if(ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,he,Z.width,Z.height,Z.depth),L)if(v.layerUpdates.size>0){const Y=Tf(Z.width,Z.height,v.format,v.type);for(const ue of v.layerUpdates){const be=Z.data.subarray(ue*Y/Z.data.BYTES_PER_ELEMENT,(ue+1)*Y/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,Z.width,Z.height,1,le,Re,be)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,Re,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,Z.width,Z.height,Z.depth,0,le,Re,Z.data);else if(v.isData3DTexture)Fe?(ze&&t.texStorage3D(n.TEXTURE_3D,ae,he,Z.width,Z.height,Z.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,Re,Z.data)):t.texImage3D(n.TEXTURE_3D,0,he,Z.width,Z.height,Z.depth,0,le,Re,Z.data);else if(v.isFramebufferTexture){if(ze)if(Fe)t.texStorage2D(n.TEXTURE_2D,ae,he,Z.width,Z.height);else{let Y=Z.width,ue=Z.height;for(let be=0;be<ae;be++)t.texImage2D(n.TEXTURE_2D,be,he,Y,ue,0,le,Re,null),Y>>=1,ue>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const Y=n.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),Z.parentNode!==Y){Y.appendChild(Z),u.add(v),Y.onpaint=ue=>{const be=ue.changedElements;for(const te of u)be.includes(te.image)&&(te.needsUpdate=!0)},Y.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{const be=n.RGBA,te=n.RGBA,Ae=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,be,te,Ae,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Fe&&ze){const Y=tt(Le[0]);t.texStorage2D(n.TEXTURE_2D,ae,he,Y.width,Y.height)}for(let Y=0,ue=Le.length;Y<ue;Y++)de=Le[Y],Fe?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,le,Re,de):t.texImage2D(n.TEXTURE_2D,Y,he,le,Re,de);v.generateMipmaps=!1}else if(Fe){if(ze){const Y=tt(Z);t.texStorage2D(n.TEXTURE_2D,ae,he,Y.width,Y.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Re,Z)}else t.texImage2D(n.TEXTURE_2D,0,he,le,Re,Z);p(v)&&x(G),ce.__version=re.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Be(A,v,k){if(v.image.length!==6)return;const G=Q(A,v),j=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);const re=i.get(j);if(j.version!==re.__version||G===!0){t.activeTexture(n.TEXTURE0+k);const ce=Xe.getPrimaries(Xe.workingColorSpace),J=v.colorSpace===Gi?null:Xe.getPrimaries(v.colorSpace),Z=v.colorSpace===Gi||ce===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const le=v.isCompressedTexture||v.image[0].isCompressedTexture,Re=v.image[0]&&v.image[0].isDataTexture,he=[];for(let te=0;te<6;te++)!le&&!Re?he[te]=m(v.image[te],!0,s.maxCubemapSize):he[te]=Re?v.image[te].image:v.image[te],he[te]=rn(v,he[te]);const de=he[0],Le=r.convert(v.format,v.colorSpace),Fe=r.convert(v.type),ze=b(v.internalFormat,Le,Fe,v.normalized,v.colorSpace),L=v.isVideoTexture!==!0,ae=re.__version===void 0||G===!0,Y=j.dataReady;let ue=E(v,de);Ze(n.TEXTURE_CUBE_MAP,v);let be;if(le){L&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ze,de.width,de.height);for(let te=0;te<6;te++){be=he[te].mipmaps;for(let Ae=0;Ae<be.length;Ae++){const we=be[Ae];v.format!==Rn?Le!==null?L?Y&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,we.width,we.height,Le,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,ze,we.width,we.height,0,we.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,we.width,we.height,Le,Fe,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,ze,we.width,we.height,0,Le,Fe,we.data)}}}else{if(be=v.mipmaps,L&&ae){be.length>0&&ue++;const te=tt(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ze,te.width,te.height)}for(let te=0;te<6;te++)if(Re){L?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he[te].width,he[te].height,Le,Fe,he[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ze,he[te].width,he[te].height,0,Le,Fe,he[te].data);for(let Ae=0;Ae<be.length;Ae++){const xt=be[Ae].image[te].image;L?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,xt.width,xt.height,Le,Fe,xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,ze,xt.width,xt.height,0,Le,Fe,xt.data)}}else{L?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Le,Fe,he[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ze,Le,Fe,he[te]);for(let Ae=0;Ae<be.length;Ae++){const we=be[Ae];L?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,Le,Fe,we.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,ze,Le,Fe,we.image[te])}}}p(v)&&x(n.TEXTURE_CUBE_MAP),re.__version=j.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function De(A,v,k,G,j,re){const ce=r.convert(k.format,k.colorSpace),J=r.convert(k.type),Z=b(k.internalFormat,ce,J,k.normalized,k.colorSpace),le=i.get(v),Re=i.get(k);if(Re.__renderTarget=v,!le.__hasExternalTextures){const he=Math.max(1,v.width>>re),de=Math.max(1,v.height>>re);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,re,Z,he,de,v.depth,0,ce,J,null):t.texImage2D(j,re,Z,he,de,0,ce,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),It(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,j,Re.__webglTexture,0,vt(v)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,j,Re.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function St(A,v,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){const G=v.depthTexture,j=G&&G.isDepthTexture?G.type:null,re=w(v.stencilBuffer,j),ce=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;It(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(v),re,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(v),re,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,re,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,A)}else{const G=v.textures;for(let j=0;j<G.length;j++){const re=G[j],ce=r.convert(re.format,re.colorSpace),J=r.convert(re.type),Z=b(re.internalFormat,ce,J,re.normalized,re.colorSpace);It(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(v),Z,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(v),Z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Z,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ke(A,v,k){const G=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(v.depthTexture);if(j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G){if(j.__webglInit===void 0&&(j.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,v.depthTexture);const le=r.convert(v.depthTexture.format),Re=r.convert(v.depthTexture.type);let he;v.depthTexture.format===wi?he=n.DEPTH_COMPONENT24:v.depthTexture.format===cs&&(he=n.DEPTH24_STENCIL8);for(let de=0;de<6;de++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,he,v.width,v.height,0,le,Re,null)}}else ee(v.depthTexture,0);const re=j.__webglTexture,ce=vt(v),J=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,Z=v.depthTexture.format===cs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===wi)It(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,J,re,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,Z,J,re,0);else if(v.depthTexture.format===cs)It(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,J,re,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,Z,J,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(A){const v=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const G=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=G}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let G=0;G<6;G++)Ke(v.__webglFramebuffer[G],A,G);else{const G=A.texture.mipmaps;G&&G.length>0?Ke(v.__webglFramebuffer[0],A,0):Ke(v.__webglFramebuffer,A,0)}else if(k){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=n.createRenderbuffer(),St(v.__webglDepthbuffer[G],A,!1);else{const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,re)}}else{const G=A.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),St(v.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(A,v,k){const G=i.get(A);v!==void 0&&De(G.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&lt(A)}function je(A){const v=A.texture,k=i.get(A),G=i.get(v);A.addEventListener("dispose",_);const j=A.textures,re=A.isWebGLCubeRenderTarget===!0,ce=j.length>1;if(ce||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=v.version,a.memory.textures++),re){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let Z=0;Z<v.mipmaps.length;Z++)k.__webglFramebuffer[J][Z]=n.createFramebuffer()}else k.__webglFramebuffer[J]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)k.__webglFramebuffer[J]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(ce)for(let J=0,Z=j.length;J<Z;J++){const le=i.get(j[J]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&It(A)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<j.length;J++){const Z=j[J];k.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[J]);const le=r.convert(Z.format,Z.colorSpace),Re=r.convert(Z.type),he=b(Z.internalFormat,le,Re,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),de=vt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,de,he,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,k.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),St(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)De(k.__webglFramebuffer[J][Z],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Z);else De(k.__webglFramebuffer[J],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(v)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let J=0,Z=j.length;J<Z;J++){const le=j[J],Re=i.get(le);let he=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Re.__webglTexture),Ze(he,le),De(k.__webglFramebuffer,A,le,n.COLOR_ATTACHMENT0+J,he,0),p(le)&&x(he)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,G.__webglTexture),Ze(J,v),v.mipmaps&&v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)De(k.__webglFramebuffer[Z],A,v,n.COLOR_ATTACHMENT0,J,Z);else De(k.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,J,0);p(v)&&x(J),t.unbindTexture()}A.depthBuffer&&lt(A)}function Pt(A){const v=A.textures;for(let k=0,G=v.length;k<G;k++){const j=v[k];if(p(j)){const re=M(A),ce=i.get(j).__webglTexture;t.bindTexture(re,ce),x(re),t.unbindTexture()}}}const Ft=[],Gt=[];function qt(A){if(A.samples>0){if(It(A)===!1){const v=A.textures,k=A.width,G=A.height;let j=n.COLOR_BUFFER_BIT;const re=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(A),J=v.length>1;if(J)for(let le=0;le<v.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const Z=A.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let le=0;le<v.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);const Re=i.get(v[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,k,G,0,0,k,G,j,n.NEAREST),c===!0&&(Ft.length=0,Gt.length=0,Ft.push(n.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ft.push(re),Gt.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Gt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let le=0;le<v.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);const Re=i.get(v[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function vt(A){return Math.min(s.maxSamples,A.samples)}function It(A){const v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(A){const v=a.render.frame;d.get(A)!==v&&(d.set(A,v),A.update())}function rn(A,v){const k=A.colorSpace,G=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==xn&&k!==Gi&&(Xe.getTransfer(k)===it?(G!==Rn||j!==_n)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",k)),v}function tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=W,this.getTextureUnits=$,this.setTextureUnits=O,this.setTexture2D=ee,this.setTexture2DArray=ne,this.setTexture3D=pe,this.setTextureCube=ve,this.rebindTextures=Qe,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nw(n,e){function t(i,s=Gi){let r;const a=Xe.getTransfer(s);if(i===_n)return n.UNSIGNED_BYTE;if(i===_u)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===fm)return n.BYTE;if(i===pm)return n.SHORT;if(i===ia)return n.UNSIGNED_SHORT;if(i===bu)return n.INT;if(i===si)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===Si)return n.HALF_FLOAT;if(i===bm)return n.ALPHA;if(i===_m)return n.RGB;if(i===Rn)return n.RGBA;if(i===wi)return n.DEPTH_COMPONENT;if(i===cs)return n.DEPTH_STENCIL;if(i===xu)return n.RED;if(i===yu)return n.RED_INTEGER;if(i===bs)return n.RG;if(i===Mu)return n.RG_INTEGER;if(i===Su)return n.RGBA_INTEGER;if(i===yo||i===Mo||i===So||i===wo)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hl||i===Wl||i===ql||i===Xl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kl||i===jl||i===$l||i===Jl||i===Yl||i===Bo||i===Zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Kl||i===jl)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$l)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Jl)return r.COMPRESSED_R11_EAC;if(i===Yl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Bo)return r.COMPRESSED_RG11_EAC;if(i===Zl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ql||i===ed||i===td||i===nd||i===id||i===sd||i===rd||i===ad||i===od||i===cd||i===ld||i===dd||i===ud||i===hd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ql)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ed)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===td)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===id)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ad)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===od)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ld)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ud)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fd||i===pd||i===md)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===fd)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===md)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gd||i===bd||i===zo||i===_d)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===gd)return r.COMPRESSED_RED_RGTC1_EXT;if(i===bd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_d)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const iw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Nm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ri({vertexShader:iw,fragmentShader:sw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new Cn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aw extends $i{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,u=null,h=null,f=null,g=null;const y=typeof XRWebGLBinding<"u",m=new rw,p={},x=t.getContextAttributes();let M=null,b=null;const w=[],E=[],R=new xe;let _=null;const T=new dn;T.viewport=new ot;const P=new dn;P.viewport=new ot;const I=[T,P],F=new nx;let W=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let oe=w[Q];return oe===void 0&&(oe=new Bc,w[Q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Q){let oe=w[Q];return oe===void 0&&(oe=new Bc,w[Q]=oe),oe.getGripSpace()},this.getHand=function(Q){let oe=w[Q];return oe===void 0&&(oe=new Bc,w[Q]=oe),oe.getHandSpace()};function O(Q){const oe=E.indexOf(Q.inputSource);if(oe===-1)return;const ie=w[oe];ie!==void 0&&(ie.update(Q.inputSource,Q.frame,l||a),ie.dispatchEvent({type:Q.type,data:Q.inputSource}))}function K(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",q);for(let Q=0;Q<w.length;Q++){const oe=E[Q];oe!==null&&(E[Q]=null,w[Q].disconnect(oe))}W=null,$=null,m.reset();for(const Q in p)delete p[Q];e.setRenderTarget(M),f=null,h=null,u=null,s=null,b=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",K),s.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ue=null,Be=null;x.depth&&(Be=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=x.stencil?cs:wi,Ue=x.stencil?sa:si);const De={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(De),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new ii(h.textureWidth,h.textureHeight,{format:Rn,type:_n,depthTexture:new lr(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ie={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ii(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(Q){for(let oe=0;oe<Q.removed.length;oe++){const ie=Q.removed[oe],Ue=E.indexOf(ie);Ue>=0&&(E[Ue]=null,w[Ue].disconnect(ie))}for(let oe=0;oe<Q.added.length;oe++){const ie=Q.added[oe];let Ue=E.indexOf(ie);if(Ue===-1){for(let De=0;De<w.length;De++)if(De>=E.length){E.push(ie),Ue=De;break}else if(E[De]===null){E[De]=ie,Ue=De;break}if(Ue===-1)break}const Be=w[Ue];Be&&Be.connect(ie)}}const ee=new C,ne=new C;function pe(Q,oe,ie){ee.setFromMatrixPosition(oe.matrixWorld),ne.setFromMatrixPosition(ie.matrixWorld);const Ue=ee.distanceTo(ne),Be=oe.projectionMatrix.elements,De=ie.projectionMatrix.elements,St=Be[14]/(Be[10]-1),Ke=Be[14]/(Be[10]+1),lt=(Be[9]+1)/Be[5],Qe=(Be[9]-1)/Be[5],je=(Be[8]-1)/Be[0],Pt=(De[8]+1)/De[0],Ft=St*je,Gt=St*Pt,qt=Ue/(-je+Pt),vt=qt*-je;if(oe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(vt),Q.translateZ(qt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Be[10]===-1)Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const It=St+qt,D=Ke+qt,rn=Ft-vt,tt=Gt+(Ue-vt),A=lt*Ke/D*It,v=Qe*Ke/D*It;Q.projectionMatrix.makePerspective(rn,tt,A,v,It,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ve(Q,oe){oe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(oe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let oe=Q.near,ie=Q.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),F.near=P.near=T.near=oe,F.far=P.far=T.far=ie,(W!==F.near||$!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),W=F.near,$=F.far),F.layers.mask=Q.layers.mask|6,T.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;const Ue=Q.parent,Be=F.cameras;ve(F,Ue);for(let De=0;De<Be.length;De++)ve(Be[De],Ue);Be.length===2?pe(F,T,P):F.projectionMatrix.copy(T.projectionMatrix),Se(Q,F,Ue)};function Se(Q,oe,ie){ie===null?Q.matrix.copy(oe.matrixWorld):(Q.matrix.copy(ie.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(oe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=cr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Q){c=Q,h!==null&&(h.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Q){return p[Q]};let Ye=null;function _t(Q,oe){if(d=oe.getViewerPose(l||a),g=oe,d!==null){const ie=d.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ue=!1;ie.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let Ke=0;Ke<ie.length;Ke++){const lt=ie[Ke];let Qe=null;if(f!==null)Qe=f.getViewport(lt);else{const Pt=u.getViewSubImage(h,lt);Qe=Pt.viewport,Ke===0&&(e.setRenderTargetTextures(b,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(b))}let je=I[Ke];je===void 0&&(je=new dn,je.layers.enable(Ke),je.viewport=new ot,I[Ke]=je),je.matrix.fromArray(lt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(lt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ke===0&&(F.matrix.copy(je.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(je)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=i.getBinding();const Ke=u.getDepthInformation(ie[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,s.renderState)}if(Be&&Be.includes("camera-access")&&y){e.state.unbindTexture(),u=i.getBinding();for(let Ke=0;Ke<ie.length;Ke++){const lt=ie[Ke].camera;if(lt){let Qe=p[lt];Qe||(Qe=new Nm,p[lt]=Qe);const je=u.getCameraImage(lt);Qe.sourceTexture=je}}}}for(let ie=0;ie<w.length;ie++){const Ue=E[ie],Be=w[ie];Ue!==null&&Be!==void 0&&Be.update(Ue,oe,l||a)}Ye&&Ye(Q,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Ze=new Wm;Ze.setAnimationLoop(_t),this.setAnimationLoop=function(Q){Ye=Q},this.dispose=function(){}}}const ow=new ke,Ym=new Oe;Ym.set(-1,0,0,0,1,0,0,0,1);function cw(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,km(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,M,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),M=x.envMap,b=x.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(ow.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ym),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lw(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,w){const E=w.program;i.uniformBlockBinding(b,E)}function l(b,w){let E=s[b.id];E===void 0&&(m(b),E=d(b),s[b.id]=E,b.addEventListener("dispose",x));const R=w.program;i.updateUBOMapping(b,R);const _=e.render.frame;r[b.id]!==_&&(h(b),r[b.id]=_)}function d(b){const w=u();b.__bindingPointIndex=w;const E=n.createBuffer(),R=b.__size,_=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,E),E}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const w=s[b.id],E=b.uniforms,R=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let _=0,T=E.length;_<T;_++){const P=E[_];if(Array.isArray(P))for(let I=0,F=P.length;I<F;I++)f(P[I],_,I,R);else f(P,_,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,w,E,R){if(y(b,w,E,R)===!0){const _=b.__offset,T=b.value;if(Array.isArray(T)){let P=0;for(let I=0;I<T.length;I++){const F=T[I],W=p(F);g(F,b.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,b.__data)}}function g(b,w,E){typeof b=="number"||typeof b=="boolean"?w[0]=b:b.isMatrix3?(w[0]=b.elements[0],w[1]=b.elements[1],w[2]=b.elements[2],w[3]=0,w[4]=b.elements[3],w[5]=b.elements[4],w[6]=b.elements[5],w[7]=0,w[8]=b.elements[6],w[9]=b.elements[7],w[10]=b.elements[8],w[11]=0):ArrayBuffer.isView(b)?w.set(new b.constructor(b.buffer,b.byteOffset,w.length)):b.toArray(w,E)}function y(b,w,E,R){const _=b.value,T=w+"_"+E;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{const P=R[T];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(b){const w=b.uniforms;let E=0;const R=16;for(let T=0,P=w.length;T<P;T++){const I=Array.isArray(w[T])?w[T]:[w[T]];for(let F=0,W=I.length;F<W;F++){const $=I[F],O=Array.isArray($.value)?$.value:[$.value];for(let K=0,q=O.length;K<q;K++){const ee=O[K],ne=p(ee),pe=E%R,ve=pe%ne.boundary,Se=pe+ve;E+=ve,Se!==0&&R-Se<ne.storage&&(E+=R-Se),$.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=E,E+=ne.storage}}}const _=E%R;return _>0&&(E+=R-_),b.__size=E,b.__cache={},this}function p(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(w.boundary=16,w.storage=b.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",b),w}function x(b){const w=b.target;w.removeEventListener("dispose",x);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function M(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:M}}const dw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jn=null;function uw(){return jn===null&&(jn=new Iu(dw,16,16,bs,Si),jn.name="DFG_LUT",jn.minFilter=kt,jn.magFilter=kt,jn.wrapS=ei,jn.wrapT=ei,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class hw{constructor(e={}){const{canvas:t=v_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=_n}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const y=f,m=new Set([Su,Mu,yu]),p=new Set([_n,si,ia,sa,_u,vu]),x=new Uint32Array(4),M=new Int32Array(4),b=new C;let w=null,E=null;const R=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,F=null,W=null,$=null,O=null;this._outputColorSpace=Wt;let K=0,q=0,ee=null,ne=-1,pe=null;const ve=new ot,Se=new ot;let Ye=null;const _t=new U(0);let Ze=0,Q=t.width,oe=t.height,ie=1,Ue=null,Be=null;const De=new ot(0,0,Q,oe),St=new ot(0,0,Q,oe);let Ke=!1;const lt=new Du;let Qe=!1,je=!1;const Pt=new ke,Ft=new C,Gt=new ot,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function It(){return ee===null?ie:1}let D=i;function rn(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mu}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Wn,!1),D===null){const N="webgl2";if(D=rn(N,S),D===null)throw rn(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Ne("WebGLRenderer: "+S.message),S}let tt,A,v,k,G,j,re,ce,J,Z,le,Re,he,de,Le,Fe,ze,L,ae,Y,ue,be,te;function Ae(){tt=new uS(D),tt.init(),ue=new nw(D,tt),A=new iS(D,tt,e,ue),v=new ew(D,tt),A.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),W=D.createFramebuffer(),$=D.createFramebuffer(),O=D.createFramebuffer(),k=new pS(D),G=new z1,j=new tw(D,tt,v,G,A,ue,k),re=new dS(P),ce=new _x(D),be=new tS(D,ce),J=new hS(D,ce,k,be),Z=new gS(D,J,ce,be,k),L=new mS(D,A,j),Le=new sS(G),le=new B1(P,re,tt,A,be,Le),Re=new cw(P,G),he=new V1,de=new j1(tt),ze=new eS(P,re,v,Z,g,c),Fe=new Q1(P,Z,A),te=new lw(D,k,A,v),ae=new nS(D,tt,k),Y=new fS(D,tt,k),k.programs=le.programs,P.capabilities=A,P.extensions=tt,P.properties=G,P.renderLists=he,P.shadowMap=Fe,P.state=v,P.info=k}Ae(),y!==_n&&(T=new _S(y,t.width,t.height,o,s,r));const we=new aw(P,D);this.xr=we,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=tt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=tt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(S){S!==void 0&&(ie=S,this.setSize(Q,oe,!1))},this.getSize=function(S){return S.set(Q,oe)},this.setSize=function(S,N,V=!0){if(we.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=S,oe=N,t.width=Math.floor(S*ie),t.height=Math.floor(N*ie),V===!0&&(t.style.width=S+"px",t.style.height=N+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(Q*ie,oe*ie).floor()},this.setDrawingBufferSize=function(S,N,V){Q=S,oe=N,ie=V,t.width=Math.floor(S*V),t.height=Math.floor(N*V),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(y===_n){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ve)},this.getViewport=function(S){return S.copy(De)},this.setViewport=function(S,N,V,B){S.isVector4?De.set(S.x,S.y,S.z,S.w):De.set(S,N,V,B),v.viewport(ve.copy(De).multiplyScalar(ie).round())},this.getScissor=function(S){return S.copy(St)},this.setScissor=function(S,N,V,B){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,N,V,B),v.scissor(Se.copy(St).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(S){v.setScissorTest(Ke=S)},this.setOpaqueSort=function(S){Ue=S},this.setTransparentSort=function(S){Be=S},this.getClearColor=function(S){return S.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,V=!0){let B=0;if(S){let z=!1;if(ee!==null){const ge=ee.texture.format;z=m.has(ge)}if(z){const ge=ee.texture.type,Me=p.has(ge),me=ze.getClearColor(),Ee=ze.getClearAlpha(),Ce=me.r,Ge=me.g,He=me.b;Me?(x[0]=Ce,x[1]=Ge,x[2]=He,x[3]=Ee,D.clearBufferuiv(D.COLOR,0,x)):(M[0]=Ce,M[1]=Ge,M[2]=He,M[3]=Ee,D.clearBufferiv(D.COLOR,0,M))}else B|=D.COLOR_BUFFER_BIT}N&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Wn,!1),ze.dispose(),he.dispose(),de.dispose(),G.dispose(),re.dispose(),Z.dispose(),be.dispose(),te.dispose(),le.dispose(),we.dispose(),we.removeEventListener("sessionstart",nh),we.removeEventListener("sessionend",ih),Ji.stop()};function xt(S){S.preventDefault(),Ho("WebGLRenderer: Context Lost."),I=!0}function ht(){Ho("WebGLRenderer: Context Restored."),I=!1;const S=k.autoReset,N=Fe.enabled,V=Fe.autoUpdate,B=Fe.needsUpdate,z=Fe.type;Ae(),k.autoReset=S,Fe.enabled=N,Fe.autoUpdate=V,Fe.needsUpdate=B,Fe.type=z}function Wn(S){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function qn(S){const N=S.target;N.removeEventListener("dispose",qn),Hg(N)}function Hg(S){Wg(S),G.remove(S)}function Wg(S){const N=G.get(S).programs;N!==void 0&&(N.forEach(function(V){le.releaseProgram(V)}),S.isShaderMaterial&&le.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,V,B,z,ge){N===null&&(N=qt);const Me=z.isMesh&&z.matrixWorld.determinantAffine()<0,me=Kg(S,N,V,B,z);v.setMaterial(B,Me);let Ee=V.index,Ce=1;if(B.wireframe===!0){if(Ee=J.getWireframeAttribute(V),Ee===void 0)return;Ce=2}const Ge=V.drawRange,He=V.attributes.position;let Pe=Ge.start*Ce,at=(Ge.start+Ge.count)*Ce;ge!==null&&(Pe=Math.max(Pe,ge.start*Ce),at=Math.min(at,(ge.start+ge.count)*Ce)),Ee!==null?(Pe=Math.max(Pe,0),at=Math.min(at,Ee.count)):He!=null&&(Pe=Math.max(Pe,0),at=Math.min(at,He.count));const wt=at-Pe;if(wt<0||wt===1/0)return;be.setup(z,B,me,V,Ee);let yt,dt=ae;if(Ee!==null&&(yt=ce.get(Ee),dt=Y,dt.setIndex(yt)),z.isMesh)B.wireframe===!0?(v.setLineWidth(B.wireframeLinewidth*It()),dt.setMode(D.LINES)):dt.setMode(D.TRIANGLES);else if(z.isLine){let jt=B.linewidth;jt===void 0&&(jt=1),v.setLineWidth(jt*It()),z.isLineSegments?dt.setMode(D.LINES):z.isLineLoop?dt.setMode(D.LINE_LOOP):dt.setMode(D.LINE_STRIP)}else z.isPoints?dt.setMode(D.POINTS):z.isSprite&&dt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))dt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const jt=z._multiDrawStarts,ye=z._multiDrawCounts,pn=z._multiDrawCount,$e=Ee?ce.get(Ee).bytesPerElement:1,yn=G.get(B).currentProgram.getUniforms();for(let Xn=0;Xn<pn;Xn++)yn.setValue(D,"_gl_DrawID",Xn),dt.render(jt[Xn]/$e,ye[Xn])}else if(z.isInstancedMesh)dt.renderInstances(Pe,wt,z.count);else if(V.isInstancedBufferGeometry){const jt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ye=Math.min(V.instanceCount,jt);dt.renderInstances(Pe,wt,ye)}else dt.render(Pe,wt)};function th(S,N,V){S.transparent===!0&&S.side===Nt&&S.forceSinglePass===!1?(S.side=fn,S.needsUpdate=!0,ya(S,N,V),S.side=Mi,S.needsUpdate=!0,ya(S,N,V),S.side=Nt):ya(S,N,V)}this.compile=function(S,N,V=null){V===null&&(V=S),E=de.get(V),E.init(N),_.push(E),V.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),S!==V&&S.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights();const B=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ge=z.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){const me=ge[Me];th(me,V,z),B.add(me)}else th(ge,V,z),B.add(ge)}),E=_.pop(),B},this.compileAsync=function(S,N,V=null){const B=this.compile(S,N,V);return new Promise(z=>{function ge(){if(B.forEach(function(Me){G.get(Me).currentProgram.isReady()&&B.delete(Me)}),B.size===0){z(S);return}setTimeout(ge,10)}tt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let wc=null;function qg(S){wc&&wc(S)}function nh(){Ji.stop()}function ih(){Ji.start()}const Ji=new Wm;Ji.setAnimationLoop(qg),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(S){wc=S,we.setAnimationLoop(S),S===null?Ji.stop():Ji.start()},we.addEventListener("sessionstart",nh),we.addEventListener("sessionend",ih),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(S,N);const V=we.enabled===!0&&we.isPresenting===!0,B=T!==null&&(ee===null||V)&&T.begin(P,ee);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(N),N=we.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,N,ee),E=de.get(S,_.length),E.init(N),E.state.textureUnits=j.getTextureUnits(),_.push(E),Pt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),lt.setFromProjectionMatrix(Pt,ti,N.reversedDepth),je=this.localClippingEnabled,Qe=Le.init(this.clippingPlanes,je),w=he.get(S,R.length),w.init(),R.push(w),we.enabled===!0&&we.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&Ec(Me,N,-1/0,P.sortObjects)}Ec(S,N,0,P.sortObjects),w.finish(),P.sortObjects===!0&&w.sort(Ue,Be,N.reversedDepth),vt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,vt&&ze.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Le.beginShadows();const z=E.state.shadowsArray;if(Fe.render(z,S,N),Qe===!0&&Le.endShadows(),(B&&T.hasRenderPass())===!1){const Me=w.opaque,me=w.transmissive;if(E.setupLights(),N.isArrayCamera){const Ee=N.cameras;if(me.length>0)for(let Ce=0,Ge=Ee.length;Ce<Ge;Ce++){const He=Ee[Ce];rh(Me,me,S,He)}vt&&ze.render(S);for(let Ce=0,Ge=Ee.length;Ce<Ge;Ce++){const He=Ee[Ce];sh(w,S,He,He.viewport)}}else me.length>0&&rh(Me,me,S,N),vt&&ze.render(S),sh(w,S,N)}ee!==null&&q===0&&(j.updateMultisampleRenderTarget(ee),j.updateRenderTargetMipmap(ee)),B&&T.end(P),S.isScene===!0&&S.onAfterRender(P,S,N),be.resetDefaultState(),ne=-1,pe=null,_.pop(),_.length>0?(E=_[_.length-1],j.setTextureUnits(E.state.textureUnits),Qe===!0&&Le.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,F!==null&&F.renderEnd()};function Ec(S,N,V,B){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||lt.intersectsSprite(S)){B&&Gt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pt);const Me=Z.update(S),me=S.material;me.visible&&w.push(S,Me,me,V,Gt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||lt.intersectsObject(S))){const Me=Z.update(S),me=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Gt.copy(S.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Gt.copy(Me.boundingSphere.center)),Gt.applyMatrix4(S.matrixWorld).applyMatrix4(Pt)),Array.isArray(me)){const Ee=Me.groups;for(let Ce=0,Ge=Ee.length;Ce<Ge;Ce++){const He=Ee[Ce],Pe=me[He.materialIndex];Pe&&Pe.visible&&w.push(S,Me,Pe,V,Gt.z,He)}}else me.visible&&w.push(S,Me,me,V,Gt.z,null)}}const ge=S.children;for(let Me=0,me=ge.length;Me<me;Me++)Ec(ge[Me],N,V,B)}function sh(S,N,V,B){const{opaque:z,transmissive:ge,transparent:Me}=S;E.setupLightsView(V),Qe===!0&&Le.setGlobalState(P.clippingPlanes,V),B&&v.viewport(ve.copy(B)),z.length>0&&xa(z,N,V),ge.length>0&&xa(ge,N,V),Me.length>0&&xa(Me,N,V),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function rh(S,N,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){const Pe=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new ii(1,1,{generateMipmaps:!0,type:Pe?Si:_n,minFilter:gi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const ge=E.state.transmissionRenderTarget[B.id],Me=B.viewport||ve;ge.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);const me=P.getRenderTarget(),Ee=P.getActiveCubeFace(),Ce=P.getActiveMipmapLevel();P.setRenderTarget(ge),P.getClearColor(_t),Ze=P.getClearAlpha(),Ze<1&&P.setClearColor(16777215,.5),P.clear(),vt&&ze.render(V);const Ge=P.toneMapping;P.toneMapping=ni;const He=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),Qe===!0&&Le.setGlobalState(P.clippingPlanes,B),xa(S,V,B),j.updateMultisampleRenderTarget(ge),j.updateRenderTargetMipmap(ge),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let at=0,wt=N.length;at<wt;at++){const yt=N[at],{object:dt,geometry:jt,material:ye,group:pn}=yt;if(ye.side===Nt&&dt.layers.test(B.layers)){const $e=ye.side;ye.side=fn,ye.needsUpdate=!0,ah(dt,V,B,jt,ye,pn),ye.side=$e,ye.needsUpdate=!0,Pe=!0}}Pe===!0&&(j.updateMultisampleRenderTarget(ge),j.updateRenderTargetMipmap(ge))}P.setRenderTarget(me,Ee,Ce),P.setClearColor(_t,Ze),He!==void 0&&(B.viewport=He),P.toneMapping=Ge}function xa(S,N,V){const B=N.isScene===!0?N.overrideMaterial:null;for(let z=0,ge=S.length;z<ge;z++){const Me=S[z],{object:me,geometry:Ee,group:Ce}=Me;let Ge=Me.material;Ge.allowOverride===!0&&B!==null&&(Ge=B),me.layers.test(V.layers)&&ah(me,N,V,Ee,Ge,Ce)}}function ah(S,N,V,B,z,ge){S.onBeforeRender(P,N,V,B,z,ge),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(P,N,V,B,S,ge),z.transparent===!0&&z.side===Nt&&z.forceSinglePass===!1?(z.side=fn,z.needsUpdate=!0,P.renderBufferDirect(V,N,B,z,S,ge),z.side=Mi,z.needsUpdate=!0,P.renderBufferDirect(V,N,B,z,S,ge),z.side=Nt):P.renderBufferDirect(V,N,B,z,S,ge),S.onAfterRender(P,N,V,B,z,ge)}function ya(S,N,V){N.isScene!==!0&&(N=qt);const B=G.get(S),z=E.state.lights,ge=E.state.shadowsArray,Me=z.state.version,me=le.getParameters(S,z.state,ge,N,V,E.state.lightProbeGridArray),Ee=le.getProgramCacheKey(me);let Ce=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;const Ge=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=re.get(S.envMap||B.environment,Ge),B.envMapRotation=B.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ce===void 0&&(S.addEventListener("dispose",qn),Ce=new Map,B.programs=Ce);let He=Ce.get(Ee);if(He!==void 0){if(B.currentProgram===He&&B.lightsStateVersion===Me)return ch(S,me),He}else me.uniforms=le.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,V,me),S.onBeforeCompile(me,P),He=le.acquireProgram(me,Ee),Ce.set(Ee,He),B.uniforms=me.uniforms;const Pe=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=Le.uniform),ch(S,me),B.needsLights=$g(S),B.lightsStateVersion=Me,B.needsLights&&(Pe.ambientLightColor.value=z.state.ambient,Pe.lightProbe.value=z.state.probe,Pe.directionalLights.value=z.state.directional,Pe.directionalLightShadows.value=z.state.directionalShadow,Pe.spotLights.value=z.state.spot,Pe.spotLightShadows.value=z.state.spotShadow,Pe.rectAreaLights.value=z.state.rectArea,Pe.ltc_1.value=z.state.rectAreaLTC1,Pe.ltc_2.value=z.state.rectAreaLTC2,Pe.pointLights.value=z.state.point,Pe.pointLightShadows.value=z.state.pointShadow,Pe.hemisphereLights.value=z.state.hemi,Pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pe.spotLightMatrix.value=z.state.spotLightMatrix,Pe.spotLightMap.value=z.state.spotLightMap,Pe.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=E.state.lightProbeGridArray.length>0,B.currentProgram=He,B.uniformsList=null,He}function oh(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Eo.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function ch(S,N){const V=G.get(S);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Xg(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;b.setFromMatrixPosition(N.matrixWorld);for(let V=0,B=S.length;V<B;V++){const z=S[V];if(z.texture!==null&&z.boundingBox.containsPoint(b))return z}return null}function Kg(S,N,V,B,z){N.isScene!==!0&&(N=qt),j.resetTextureUnits();const ge=N.fog,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,me=ee===null?P.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Xe.workingColorSpace,Ee=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ce=re.get(B.envMap||Me,Ee),Ge=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pe=!!V.morphAttributes.position,at=!!V.morphAttributes.normal,wt=!!V.morphAttributes.color;let yt=ni;B.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(yt=P.toneMapping);const dt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,jt=dt!==void 0?dt.length:0,ye=G.get(B),pn=E.state.lights;if(Qe===!0&&(je===!0||S!==pe)){const ft=S===pe&&B.id===ne;Le.setState(B,S,ft)}let $e=!1;B.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==pn.state.version||ye.outputColorSpace!==me||z.isBatchedMesh&&ye.batching===!1||!z.isBatchedMesh&&ye.batching===!0||z.isBatchedMesh&&ye.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ye.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ye.instancing===!1||!z.isInstancedMesh&&ye.instancing===!0||z.isSkinnedMesh&&ye.skinning===!1||!z.isSkinnedMesh&&ye.skinning===!0||z.isInstancedMesh&&ye.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ye.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ye.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ye.instancingMorph===!1&&z.morphTexture!==null||ye.envMap!==Ce||B.fog===!0&&ye.fog!==ge||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Le.numPlanes||ye.numIntersection!==Le.numIntersection)||ye.vertexAlphas!==Ge||ye.vertexTangents!==He||ye.morphTargets!==Pe||ye.morphNormals!==at||ye.morphColors!==wt||ye.toneMapping!==yt||ye.morphTargetsCount!==jt||!!ye.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,ye.__version=B.version);let yn=ye.currentProgram;$e===!0&&(yn=ya(B,N,z),F&&B.isNodeMaterial&&F.onUpdateProgram(B,yn,ye));let Xn=!1,Ti=!1,Ms=!1;const ut=yn.getUniforms(),Et=ye.uniforms;if(v.useProgram(yn.program)&&(Xn=!0,Ti=!0,Ms=!0),B.id!==ne&&(ne=B.id,Ti=!0),ye.needsLights){const ft=Xg(E.state.lightProbeGridArray,z);ye.lightProbeGrid!==ft&&(ye.lightProbeGrid=ft,Ti=!0)}if(Xn||pe!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ut.setValue(D,"projectionMatrix",S.projectionMatrix),ut.setValue(D,"viewMatrix",S.matrixWorldInverse);const Ri=ut.map.cameraPosition;Ri!==void 0&&Ri.setValue(D,Ft.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&ut.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ut.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),pe!==S&&(pe=S,Ti=!0,Ms=!0)}if(ye.needsLights&&(pn.state.directionalShadowMap.length>0&&ut.setValue(D,"directionalShadowMap",pn.state.directionalShadowMap,j),pn.state.spotShadowMap.length>0&&ut.setValue(D,"spotShadowMap",pn.state.spotShadowMap,j),pn.state.pointShadowMap.length>0&&ut.setValue(D,"pointShadowMap",pn.state.pointShadowMap,j)),z.isSkinnedMesh){ut.setOptional(D,z,"bindMatrix"),ut.setOptional(D,z,"bindMatrixInverse");const ft=z.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ut.setValue(D,"boneTexture",ft.boneTexture,j))}z.isBatchedMesh&&(ut.setOptional(D,z,"batchingTexture"),ut.setValue(D,"batchingTexture",z._matricesTexture,j),ut.setOptional(D,z,"batchingIdTexture"),ut.setValue(D,"batchingIdTexture",z._indirectTexture,j),ut.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&ut.setValue(D,"batchingColorTexture",z._colorsTexture,j));const Ai=V.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&L.update(z,V,yn),(Ti||ye.receiveShadow!==z.receiveShadow)&&(ye.receiveShadow=z.receiveShadow,ut.setValue(D,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(Et.envMapIntensity.value=N.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=uw()),Ti){if(ut.setValue(D,"toneMappingExposure",P.toneMappingExposure),ye.needsLights&&jg(Et,Ms),ge&&B.fog===!0&&Re.refreshFogUniforms(Et,ge),Re.refreshMaterialUniforms(Et,B,ie,oe,E.state.transmissionRenderTarget[S.id]),ye.needsLights&&ye.lightProbeGrid){const ft=ye.lightProbeGrid;Et.probesSH.value=ft.texture,Et.probesMin.value.copy(ft.boundingBox.min),Et.probesMax.value.copy(ft.boundingBox.max),Et.probesResolution.value.copy(ft.resolution)}Eo.upload(D,oh(ye),Et,j)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Eo.upload(D,oh(ye),Et,j),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ut.setValue(D,"center",z.center),ut.setValue(D,"modelViewMatrix",z.modelViewMatrix),ut.setValue(D,"normalMatrix",z.normalMatrix),ut.setValue(D,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const ft=B.uniformsGroups;for(let Ri=0,Ss=ft.length;Ri<Ss;Ri++){const lh=ft[Ri];te.update(lh,yn),te.bind(lh,yn)}}return yn}function jg(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function $g(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(S,N,V){const B=G.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=N,G.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const V=G.get(S);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,V=0){ee=S,K=N,q=V;let B=null,z=!1,ge=!1;if(S){const me=G.get(S);if(me.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(D.FRAMEBUFFER,me.__webglFramebuffer),ve.copy(S.viewport),Se.copy(S.scissor),Ye=S.scissorTest,v.viewport(ve),v.scissor(Se),v.setScissorTest(Ye),ne=-1;return}else if(me.__webglFramebuffer===void 0)j.setupRenderTarget(S);else if(me.__hasExternalTextures)j.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ge=S.depthTexture;if(me.__boundDepthTexture!==Ge){if(Ge!==null&&G.has(Ge)&&(S.width!==Ge.image.width||S.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(S)}}const Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);const Ce=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ce[N])?B=Ce[N][V]:B=Ce[N],z=!0):S.samples>0&&j.useMultisampledRTT(S)===!1?B=G.get(S).__webglMultisampledFramebuffer:Array.isArray(Ce)?B=Ce[V]:B=Ce,ve.copy(S.viewport),Se.copy(S.scissor),Ye=S.scissorTest}else ve.copy(De).multiplyScalar(ie).floor(),Se.copy(St).multiplyScalar(ie).floor(),Ye=Ke;if(V!==0&&(B=W),v.bindFramebuffer(D.FRAMEBUFFER,B)&&v.drawBuffers(S,B),v.viewport(ve),v.scissor(Se),v.setScissorTest(Ye),z){const me=G.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,V)}else if(ge){const me=N;for(let Ee=0;Ee<S.textures.length;Ee++){const Ce=G.get(S.textures[Ee]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ee,Ce.__webglTexture,V,me)}}else if(S!==null&&V!==0){const me=G.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,me.__webglTexture,V)}ne=-1},this.readRenderTargetPixels=function(S,N,V,B,z,ge,Me,me=0){if(!(S&&S.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){v.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const Ce=S.textures[me],Ge=Ce.format,He=Ce.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!A.textureFormatReadable(Ge)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(He)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-B&&V>=0&&V<=S.height-z&&D.readPixels(N,V,B,z,ue.convert(Ge),ue.convert(He),ge)}finally{const Ce=ee!==null?G.get(ee).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(S,N,V,B,z,ge,Me,me=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee)if(N>=0&&N<=S.width-B&&V>=0&&V<=S.height-z){v.bindFramebuffer(D.FRAMEBUFFER,Ee);const Ce=S.textures[me],Ge=Ce.format,He=Ce.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!A.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.bufferData(D.PIXEL_PACK_BUFFER,ge.byteLength,D.STREAM_READ),D.readPixels(N,V,B,z,ue.convert(Ge),ue.convert(He),0);const at=ee!==null?G.get(ee).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,at);const wt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await x_(D,wt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ge),D.deleteBuffer(Pe),D.deleteSync(wt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,V=0){const B=Math.pow(2,-V),z=Math.floor(S.image.width*B),ge=Math.floor(S.image.height*B),Me=N!==null?N.x:0,me=N!==null?N.y:0;j.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,Me,me,z,ge),v.unbindTexture()},this.copyTextureToTexture=function(S,N,V=null,B=null,z=0,ge=0){let Me,me,Ee,Ce,Ge,He,Pe,at,wt;const yt=S.isCompressedTexture?S.mipmaps[ge]:S.image;if(V!==null)Me=V.max.x-V.min.x,me=V.max.y-V.min.y,Ee=V.isBox3?V.max.z-V.min.z:1,Ce=V.min.x,Ge=V.min.y,He=V.isBox3?V.min.z:0;else{const Et=Math.pow(2,-z);Me=Math.floor(yt.width*Et),me=Math.floor(yt.height*Et),S.isDataArrayTexture?Ee=yt.depth:S.isData3DTexture?Ee=Math.floor(yt.depth*Et):Ee=1,Ce=0,Ge=0,He=0}B!==null?(Pe=B.x,at=B.y,wt=B.z):(Pe=0,at=0,wt=0);const dt=ue.convert(N.format),jt=ue.convert(N.type);let ye;N.isData3DTexture?(j.setTexture3D(N,0),ye=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(j.setTexture2DArray(N,0),ye=D.TEXTURE_2D_ARRAY):(j.setTexture2D(N,0),ye=D.TEXTURE_2D),v.activeTexture(D.TEXTURE0),v.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),v.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),v.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const pn=v.getParameter(D.UNPACK_ROW_LENGTH),$e=v.getParameter(D.UNPACK_IMAGE_HEIGHT),yn=v.getParameter(D.UNPACK_SKIP_PIXELS),Xn=v.getParameter(D.UNPACK_SKIP_ROWS),Ti=v.getParameter(D.UNPACK_SKIP_IMAGES);v.pixelStorei(D.UNPACK_ROW_LENGTH,yt.width),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt.height),v.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),v.pixelStorei(D.UNPACK_SKIP_ROWS,Ge),v.pixelStorei(D.UNPACK_SKIP_IMAGES,He);const Ms=S.isDataArrayTexture||S.isData3DTexture,ut=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const Et=G.get(S),Ai=G.get(N),ft=G.get(Et.__renderTarget),Ri=G.get(Ai.__renderTarget);v.bindFramebuffer(D.READ_FRAMEBUFFER,ft.__webglFramebuffer),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Ss=0;Ss<Ee;Ss++)Ms&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(S).__webglTexture,z,He+Ss),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(N).__webglTexture,ge,wt+Ss)),D.blitFramebuffer(Ce,Ge,Me,me,Pe,at,Me,me,D.DEPTH_BUFFER_BIT,D.NEAREST);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||G.has(S)){const Et=G.get(S),Ai=G.get(N);v.bindFramebuffer(D.READ_FRAMEBUFFER,$),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let ft=0;ft<Ee;ft++)Ms?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,z,He+ft):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Et.__webglTexture,z),ut?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ai.__webglTexture,ge,wt+ft):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ai.__webglTexture,ge),z!==0?D.blitFramebuffer(Ce,Ge,Me,me,Pe,at,Me,me,D.COLOR_BUFFER_BIT,D.NEAREST):ut?D.copyTexSubImage3D(ye,ge,Pe,at,wt+ft,Ce,Ge,Me,me):D.copyTexSubImage2D(ye,ge,Pe,at,Ce,Ge,Me,me);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ut?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(ye,ge,Pe,at,wt,Me,me,Ee,dt,jt,yt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(ye,ge,Pe,at,wt,Me,me,Ee,dt,yt.data):D.texSubImage3D(ye,ge,Pe,at,wt,Me,me,Ee,dt,jt,yt):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ge,Pe,at,Me,me,dt,jt,yt.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ge,Pe,at,yt.width,yt.height,dt,yt.data):D.texSubImage2D(D.TEXTURE_2D,ge,Pe,at,Me,me,dt,jt,yt);v.pixelStorei(D.UNPACK_ROW_LENGTH,pn),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$e),v.pixelStorei(D.UNPACK_SKIP_PIXELS,yn),v.pixelStorei(D.UNPACK_SKIP_ROWS,Xn),v.pixelStorei(D.UNPACK_SKIP_IMAGES,Ti),ge===0&&N.generateMipmaps&&D.generateMipmap(ye),v.unbindTexture()},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&j.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?j.setTextureCube(S,0):S.isData3DTexture?j.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?j.setTexture2DArray(S,0):j.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){K=0,q=0,ee=null,v.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}function Jf(n,e){if(e===c_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===xd||e===vm){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===xd)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function Zm(n){const e=new Map,t=new Map,i=n.clone();return Qm(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function Qm(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)Qm(n.children[i],e.children[i],t)}class eg extends pr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new bw(t)}),this.register(function(t){return new _w(t)}),this.register(function(t){return new Aw(t)}),this.register(function(t){return new Rw(t)}),this.register(function(t){return new Cw(t)}),this.register(function(t){return new xw(t)}),this.register(function(t){return new yw(t)}),this.register(function(t){return new Mw(t)}),this.register(function(t){return new Sw(t)}),this.register(function(t){return new gw(t)}),this.register(function(t){return new ww(t)}),this.register(function(t){return new vw(t)}),this.register(function(t){return new Tw(t)}),this.register(function(t){return new Ew(t)}),this.register(function(t){return new pw(t)}),this.register(function(t){return new Yf(t,qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Yf(t,qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Pw(t)})}load(e,t,i,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Jr.extractUrlBase(e);a=Jr.resolveURL(l,this.path)}else a=Jr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new zm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===tg){try{a[qe.KHR_BINARY_GLTF]=new Iw(e)}catch(u){s&&s(u);return}r=JSON.parse(a[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Ww(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const u=this.pluginCallbacks[d](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const u=r.extensionsUsed[d],h=r.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:a[u]=new mw;break;case qe.KHR_DRACO_MESH_COMPRESSION:a[u]=new Lw(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:a[u]=new Dw;break;case qe.KHR_MESH_QUANTIZATION:a[u]=new Fw;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function fw(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Ct(n,e,t){const i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pw{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const d=new U(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],xn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Hm(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Vm(d),l.distance=u;break;case"spot":l=new Yv(d),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Jn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(t.cache,o,c)})}}class mw{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return un}extendParams(e,t,i){const s=[];e.color=new U(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],xn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Wt))}return Promise.all(s)}}class gw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class bw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(r,r)}return Promise.all(s)}}class _w{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class vw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}}class xw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(t.sheenColor=new U(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],xn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Wt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}}class yw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}}class Mw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const r=i.attenuationColor||[1,1,1];return t.attenuationColor=new U().setRGB(r[0],r[1],r[2],xn),Promise.all(s)}}class Sw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class ww{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const r=i.specularColorFactor||[1,1,1];return t.specularColor=new U().setRGB(r[0],r[1],r[2],xn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Wt)),Promise.all(s)}}class Ew{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}}class Tw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}}class Aw{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Rw{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=i.textureLoader;if(o.uri){const l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}}class Cw{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=i.textureLoader;if(o.uri){const l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}}class Yf{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,d=s.count,u=s.byteStride,h=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,u,h,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(d*u);return a.decodeGltfBuffer(new Uint8Array(f),d,u,h,s.mode,s.filter),f})})}else return null}}class Pw{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==wn.TRIANGLES&&l.mode!==wn.TRIANGLE_STRIP&&l.mode!==wn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(d=>(c[l]=d,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const d=l.pop(),u=d.isGroup?d.children:[d],h=l[0].count,f=[];for(const g of u){const y=new ke,m=new C,p=new In,x=new C(1,1,1),M=new Pm(g.geometry,g.material,h);for(let b=0;b<h;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&x.fromBufferAttribute(c.SCALE,b),M.setMatrixAt(b,y.compose(m,p,x));for(const b in c)if(b==="_COLOR_0"){const w=c[b];M.instanceColor=new Sd(w.array,w.itemSize,w.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);mt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const tg="glTF",Cr=12,Zf={JSON:1313821514,BIN:5130562};class Iw{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Cr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==tg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Cr,r=new DataView(e,Cr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Zf.JSON){const l=new Uint8Array(e,Cr+a,o);this.content=i.decode(l)}else if(c===Zf.BIN){const l=Cr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Lw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const d in a){const u=Rd[d]||d.toLowerCase();o[u]=a[d]}for(const d in e.attributes){const u=Rd[d]||d.toLowerCase();if(a[d]!==void 0){const h=i.accessors[e.attributes[d]],f=er[h.componentType];l[u]=f.name,c[u]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(u,h){s.decodeDracoFile(d,function(f){for(const g in f.attributes){const y=f.attributes[g],m=c[g];m!==void 0&&(y.normalized=m)}u(f)},o,l,xn,h)})})}}class Dw{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Fw{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class ng extends ur{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,d=s-t,u=(i-t)/d,h=u*u,f=h*u,g=e*l,y=g-l,m=-2*f+3*h,p=f-h,x=1-m,M=p-h+u;for(let b=0;b!==o;b++){const w=a[y+b+o],E=a[y+b+c]*d,R=a[g+b+o],_=a[g+b]*d;r[b]=x*w+M*E+m*R+p*_}return r}}const Nw=new In;class Uw extends ng{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return Nw.fromArray(r).normalize().toArray(r),r}}const wn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},er={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qf={9728:Ut,9729:kt,9984:hm,9985:xo,9986:Br,9987:gi},ep={33071:ei,33648:Oo,10497:or},bl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kw={CUBICSPLINE:void 0,LINEAR:aa,STEP:ra},_l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ow(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ct({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mi})),n.DefaultMaterial}function ts(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Jn(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Bw(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,d=e.length;l<d;l++){const u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const a=[],o=[],c=[];for(let l=0,d=e.length;l<d;l++){const u=e[l];if(i){const h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;a.push(h)}if(s){const h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;o.push(h)}if(r){const h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const d=l[0],u=l[1],h=l[2];return i&&(n.morphAttributes.position=d),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function zw(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Gw(n){let e;const t=n.extensions&&n.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vl(t.attributes):e=n.indices+":"+vl(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+vl(n.targets[i]);return e}function vl(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Cd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Vw(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Hw=new ke;class Ww{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new jv(this.options.manager):this.textureLoader=new ex(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return ts(r,o,s),Jn(o,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,d]of a.children.entries())r(d,o.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){i.load(Jr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=bl[s.type],o=er[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Xt(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=bl[s.type],l=er[s.componentType],d=l.BYTES_PER_ELEMENT,u=d*c,h=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let y,m;if(f&&f!==u){const p=Math.floor(h/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let M=t.cache.get(x);M||(y=new l(o,p*f,s.count*f/d),M=new Tm(y,f/d),t.cache.add(x,M)),m=new la(M,c,h%f/d,g)}else o===null?y=new l(s.count*c):y=new l(o,h,s.count*c),m=new Xt(y,c,g);if(s.sparse!==void 0){const p=bl.SCALAR,x=er[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,w=new x(a[1],M,s.sparse.count*p),E=new l(a[2],b,s.sparse.count*c);o!==null&&(m=new Xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,_=w.length;R<_;R++){const T=w[R];if(m.setX(T,E[R*c]),c>=2&&m.setY(T,E[R*c+1]),c>=3&&m.setZ(T,E[R*c+2]),c>=4&&m.setW(T,E[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const h=(r.samplers||{})[a.sampler]||{};return d.magFilter=Qf[h.magFilter]||kt,d.minFilter=Qf[h.minFilter]||gi,d.wrapS=ep[h.wrapS]||or,d.wrapT=ep[h.wrapT]||or,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Ut&&d.minFilter!==kt,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const h=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(u){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(y){const m=new Ot(y);m.needsUpdate=!0,h(m)}),t.load(Jr.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Jn(u,a),u.userData.mimeType=a.mimeType||Vw(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=d,d}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new Fu,Bn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new pc,Bn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return ct}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[qe.KHR_MATERIALS_UNLIT]){const u=s[qe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new U(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const h=u.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],xn),o.opacity=h[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Wt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Nt);const d=r.alphaMode||_l.OPAQUE;if(d===_l.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===_l.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==un&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new xe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==un&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==un){const u=r.emissiveFactor;o.emissive=new U().setRGB(u[0],u[1],u[2],xn)}return r.emissiveTexture!==void 0&&a!==un&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Wt)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Jn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ts(s,u,r),u})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return tp(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],d=Gw(l),u=s[d];if(u)a.push(u.promise);else{let h;l.extensions&&l.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?h=r(l):h=tp(new bt,l,t),s[d]={primitive:l,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const d=a[c].material===void 0?Ow(this.cache):this.getDependency("material",a[c].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],u=[];for(let f=0,g=d.length;f<g;f++){const y=d[f],m=a[f];let p;const x=l[f];if(m.mode===wn.TRIANGLES||m.mode===wn.TRIANGLE_STRIP||m.mode===wn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new rv(y,x):new Ie(y,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===wn.TRIANGLE_STRIP?p.geometry=Jf(p.geometry,vm):m.mode===wn.TRIANGLE_FAN&&(p.geometry=Jf(p.geometry,xd));else if(m.mode===wn.LINES)p=new Im(y,x);else if(m.mode===wn.LINE_STRIP)p=new mc(y,x);else if(m.mode===wn.LINE_LOOP)p=new uv(y,x);else if(m.mode===wn.POINTS)p=new Lm(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&zw(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Jn(p,r),m.extensions&&ts(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ts(s,u[0],r),u[0];const h=new rt;r.extensions&&ts(s,h,r),t.associations.set(h,{meshes:e});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new dn(ym.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new _a(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Jn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,d=a.length;l<d;l++){const u=a[l];if(u){o.push(u);const h=new ke;r!==null&&h.fromArray(r.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Lu(o,c)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],d=[];for(let u=0,h=s.channels.length;u<h;u++){const f=s.channels[u],g=s.samplers[f.sampler],y=f.target,m=y.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),d.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(u){const h=u[0],f=u[1],g=u[2],y=u[3],m=u[4],p=[];for(let M=0,b=h.length;M<b;M++){const w=h[M],E=f[M],R=g[M],_=y[M],T=m[M];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const P=i._createAnimationTracks(w,E,R,_,T);if(P)for(let I=0;I<P.length;I++)p.push(P[I])}const x=new jo(r,void 0,p);return Jn(x,s),x})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,d=o.length;l<d;l++)a.push(i.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const d=l[0],u=l[1],h=l[2];h!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(h,Hw)});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);if(d.userData.pivot!==void 0&&u.length>0){const f=d.userData.pivot,g=u[0];d.pivot=new C().fromArray(f),d.position.x-=f[0],d.position.y-=f[1],d.position.z-=f[2],g.position.set(0,0,0),delete d.userData.pivot}return d})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let d;if(r.isBone===!0?d=new Cm:l.length>1?d=new rt:l.length===1?d=l[0]:d=new mt,d!==l[0])for(let u=0,h=l.length;u<h;u++)d.add(l[u]);if(r.name&&(d.userData.name=r.name,d.name=a),Jn(d,r),r.extensions&&ts(i,d,r),r.matrix!==void 0){const u=new ke;u.fromArray(r.matrix),d.applyMatrix4(u)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);if(!s.associations.has(d))s.associations.set(d,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(d);s.associations.set(d,{...u})}return s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new rt;i.name&&(r.name=s.createUniqueName(i.name)),Jn(r,i),i.extensions&&ts(t,r,i);const a=i.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let d=0,u=c.length;d<u;d++){const h=c[d];h.parent!==null?r.add(Zm(h)):r.add(h)}const l=d=>{const u=new Map;for(const[h,f]of s.associations)(h instanceof Bn||h instanceof Ot)&&u.set(h,f);return d.traverse(h=>{const f=s.associations.get(h);f!=null&&u.set(h,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Ni[r.path]===Ni.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let d;switch(Ni[r.path]){case Ni.weights:d=da;break;case Ni.rotation:d=ua;break;case Ni.translation:case Ni.scale:d=Ko;break;default:switch(i.itemSize){case 1:d=da;break;case 2:case 3:default:d=Ko;break}break}const u=s.interpolation!==void 0?kw[s.interpolation]:aa,h=this._getArrayFromAccessor(i);for(let f=0,g=c.length;f<g;f++){const y=new d(c[f]+"."+Ni[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Cd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof ua?Uw:ng;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qw(n,e,t){const i=e.attributes,s=new Ln;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){const d=Cd(er[o.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new C,c=new C;for(let l=0,d=r.length;l<d;l++){const u=r[l];if(u.POSITION!==void 0){const h=t.json.accessors[u.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const y=Cd(er[h.componentType]);c.multiplyScalar(y)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;const a=new oi;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function tp(n,e,t){const i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){n.setAttribute(o,c)})}for(const a in i){const o=Rd[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return Xe.workingColorSpace!==xn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),Jn(n,e),qw(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Bw(n,e.targets,t):n})}var Xw=(function(){var n="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(n),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),M=0;M<p.length;++M){var b=p.charCodeAt(M);x[M]=b>96?b-97:b>64?b-39:b+4}for(var w=0,M=0;M<p.length;++M)x[w++]=x[M]<60?i[x[M]]:(x[M]-60)*64+x[++M];return x.buffer.slice(0,w)}function c(p,x,M,b,w,E,R){var _=p.exports.sbrk,T=b+3&-4,P=_(T*w),I=_(E.length),F=new Uint8Array(p.exports.memory.buffer);F.set(E,I);var W=x(P,b,w,I,E.length);if(W==0&&R&&R(P,T,w),M.set(F.subarray(P,P+b*w)),_(P-_(0)),W!=0)throw new Error("Malformed buffer data: "+W)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},d={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],h=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(M){var b=M.data;x.pending-=b.count,x.requests[b.id][b.action](b.value),delete x.requests[b.id]},x}function g(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),M=new Blob([x],{type:"text/javascript"}),b=URL.createObjectURL(M),w=u.length;w<p;++w)u[w]=f(b);for(var w=p;w<u.length;++w)u[w].object.postMessage({});u.length=p,URL.revokeObjectURL(b)}function y(p,x,M,b,w){for(var E=u[0],R=1;R<u.length;++R)u[R].pending<E.pending&&(E=u[R]);return new Promise(function(_,T){var P=new Uint8Array(M),I=++h;E.pending+=p,E.requests[I]={resolve:_,reject:T},E.object.postMessage({id:I,count:p,size:x,source:P,mode:b,filter:w},[P.buffer])})}function m(p){var x=p.data;self.ready.then(function(M){if(!x.id)return self.close();try{var b=new Uint8Array(x.count*x.size);c(M,M.exports[x.mode],b,x.count,x.size,x.source,M.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:b},[b.buffer])}catch(w){self.postMessage({id:x.id,count:x.count,action:"reject",value:w})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,x,M,b,w){c(r,r.exports.meshopt_decodeVertexBuffer,p,x,M,b,r.exports[l[w]])},decodeIndexBuffer:function(p,x,M,b){c(r,r.exports.meshopt_decodeIndexBuffer,p,x,M,b)},decodeIndexSequence:function(p,x,M,b){c(r,r.exports.meshopt_decodeIndexSequence,p,x,M,b)},decodeGltfBuffer:function(p,x,M,b,w,E){c(r,r.exports[d[w]],p,x,M,b,r.exports[l[E]])},decodeGltfBufferAsync:function(p,x,M,b,w){return u.length>0?y(p,x,M,d[b],l[w]):a.then(function(){var E=new Uint8Array(p*x);return c(r,r.exports[d[b]],E,p,x,M,r.exports[l[w]]),E})}}})();const np={mage:en("models/Mage.glb"),knight:en("models/Knight.glb"),ranger:en("models/Rogue_Hooded.glb"),skel_mage:en("models/Skeleton_Mage.glb"),skel_minion:en("models/Skeleton_Minion.glb"),skel_rogue:en("models/Skeleton_Rogue.glb"),skel_warrior:en("models/Skeleton_Warrior.glb"),goblin_real:en("models/Goblin.glb"),orc_real:en("models/Orc.glb"),cactoro:en("models/Cactoro.glb"),mushroom_king:en("models/Mushroom_King.glb"),mushnub:en("models/Mushnub_Evolved.glb"),dragon:en("models/Dragon.glb")},ip={},sp={default:[/spellcast.*shoot/i,/spellcast/i,/cast/i,/attack/i,/melee/i],ranger:[/2h_ranged.*shoot/i,/ranged.*shoot/i,/ranged/i,/shoot/i,/throw/i,/attack/i],knight:[/1h_ranged.*shoot/i,/ranged.*shoot/i,/ranged/i,/shoot/i,/throw/i,/attack/i],goblin_real:[/attack/i],orc_real:[/weapon/i,/punch/i,/attack/i],cactoro:[/punch/i,/weapon/i,/attack/i],mushroom_king:[/weapon/i,/punch/i,/attack/i],mushnub:[/bite_front/i,/bite/i],dragon:[/attack2/i,/attack/i]},Gr=new Map,ki=new Map;function xl(n,e,t){var i;for(const s of e){const r=n.find(a=>s.test(a.name));if(r)return r.name}return((i=n[0])==null?void 0:i.name)??t}function rp(n,e){for(const t of e){const i=n.find(s=>t.test(s.name));if(i)return i.name}return null}async function Kw(n){const e=new eg;e.setMeshoptDecoder(Xw);const t=Object.keys(np).length+Object.keys(ip).length;let i=0;const s=()=>n==null?void 0:n(++i,t);await Promise.all(Object.entries(np).map(async([r,a])=>{const o=await e.loadAsync(a);s();const c=o.scene;c.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.frustumCulled=!1)});const l=new Ln().setFromObject(c),d=Math.max(.001,l.max.y-l.min.y),u=o.animations;Gr.set(r,{scene:c,clips:u,idle:xl(u,[/^idle$/i,/idle/i,/flying/i],"Idle"),walk:xl(u,[/^walking_a$/i,/walking/i,/walk/i,/running/i,/flying/i],"Walking_A"),attack:xl(u,sp[r]??sp.default,"Attack"),death:rp(u,[/^death_a$/i,/death/i]),cheer:rp(u,[/cheer/i]),unitScale:1/d}),console.log(`[3d] ${r}: ${u.length} clips (idle=${Gr.get(r).idle}, walk=${Gr.get(r).walk}, attack=${Gr.get(r).attack})`)})),await Promise.all(Object.entries(ip).map(async([r,a])=>{try{const o=await e.loadAsync(a);o.scene.traverse(l=>{l.isMesh&&(l.castShadow=!0)});const c=new Ln().setFromObject(o.scene);ki.set(r,{scene:o.scene,rawHeight:Math.max(.001,c.max.y-c.min.y)})}catch(o){console.warn(`attachment prop failed to load: ${r}`,o)}s()})),ki.set("bow",{scene:Jw(),rawHeight:.9}),ki.set("crossbow",{scene:Yw(),rawHeight:.5}),ki.set("vehicle_wagon",{scene:jw(),rawHeight:1}),ki.set("vehicle_tower",{scene:$w(),rawHeight:2.3}),ki.set("gong",{scene:Zw(),rawHeight:.5}),ki.set("drum",{scene:Qw(),rawHeight:.4})}const hs=()=>new ct({color:"#4a3826",roughness:.85}),Gu=()=>new ct({color:"#6b4f30",roughness:.8}),Vu=()=>new ct({color:"#3a3f47",roughness:.5,metalness:.6});function ig(n){const e=new Ie(new Zt(n,n,.08,10),Vu());return e.rotation.z=Math.PI/2,e.name="wheel",e.castShadow=!0,e}function jw(){const n=new rt,e=new Ie(new vn(.55,.34,.95),Gu());e.position.y=.42,e.castShadow=!0;const t=new Ie(new vn(.62,.08,1.02),hs());t.position.y=.6;const i=new Ie(new Zt(.3,.3,.6,10,1,!1,0,Math.PI),new ct({color:"#5e5346",roughness:.95,side:Nt}));i.rotation.z=Math.PI/2,i.rotation.y=Math.PI/2,i.position.set(0,.64,-.15);const s=new Ie(new Zt(.02,.02,.5,5),hs());s.position.set(0,.95,.4);const r=new Ie(new Cn(.24,.14),new ct({color:"#8a2f2f",side:Nt,roughness:.9}));r.position.set(.12,1.1,.4),n.add(e,t,i,s,r);for(const[a,o]of[[-.32,.3],[.32,.3],[-.32,-.32],[.32,-.32]]){const c=ig(.19);c.position.set(a,.19,o),n.add(c)}return n}function $w(){const n=new rt,e=new Ie(new vn(.8,.24,1),hs());e.position.y=.34,e.castShadow=!0;const t=new Ie(new vn(.62,1.5,.7),Gu());t.position.y=1.2,t.castShadow=!0;const i=new Ie(new vn(.66,.07,.74),Vu());i.position.y=1;const s=i.clone();s.position.y=1.6,n.add(e,t,i,s);for(const[o,c]of[[-.24,-.24],[.24,-.24],[-.24,.24],[.24,.24]]){const l=new Ie(new vn(.14,.18,.14),hs());l.position.set(o,2.03,c),n.add(l)}const r=new Ie(new Zt(.02,.02,.5,5),hs());r.position.y=2.3;const a=new Ie(new Cn(.3,.18),new ct({color:"#8a2f2f",side:Nt,roughness:.9}));a.position.set(.15,2.42,0),n.add(r,a);for(const[o,c]of[[-.44,.34],[.44,.34],[-.44,-.34],[.44,-.34]]){const l=ig(.22);l.position.set(o,.22,c),n.add(l)}return n}function Jw(){const n=new rt,e=new ct({color:"#6b4a2f",roughness:.75}),t=new bc(new C(0,-.45,0),new C(.2,0,0),new C(0,.45,0)),i=new Ie(new vc(t,16,.028,6),e);i.castShadow=!0;const s=new Ie(new Zt(.007,.007,.9,4),new ct({color:"#e8e2d5",roughness:.4}));return n.add(i,s),n}function Yw(){const n=new rt,e=new ct({color:"#5a4630",roughness:.75}),t=new ct({color:"#9aa6b5",roughness:.4,metalness:.5}),i=new Ie(new vn(.42,.05,.06),e);i.castShadow=!0;const s=new bc(new C(.18,0,-.25),new C(.3,0,0),new C(.18,0,.25)),r=new Ie(new vc(s,12,.02,6),t),a=new Ie(new Zt(.006,.006,.5,4),new ct({color:"#e8e2d5",roughness:.4}));return a.rotation.x=Math.PI/2,a.position.x=.18,n.add(i,r,a),n}function Zw(){const n=new rt,e=new ct({color:"#c9a24a",roughness:.4,metalness:.7}),t=new Ie(new Zt(.24,.24,.04,16),e);t.rotation.x=Math.PI/2,t.castShadow=!0;const i=new Ie(new ba(.24,.02,6,16),hs());i.rotation.x=Math.PI/2;const s=new Ie(new Zt(.015,.015,.22,5),hs());return s.position.y=-.28,n.add(t,i,s),n}function Qw(){const n=new rt,e=new Ie(new Zt(.22,.22,.3,12),Gu());e.castShadow=!0;const t=new Ie(new Zt(.23,.23,.02,12),new ct({color:"#e8dcc0",roughness:.6}));t.position.y=.16;const i=new Ie(new ba(.225,.015,5,12),Vu());i.rotation.x=Math.PI/2,i.position.y=.1;const s=i.clone();return s.position.y=-.1,n.add(e,t,i,s),n}function eE(n){const e=Gr.get(n);if(!e)throw new Error(`asset not loaded: ${n}`);return e}function sg(n){return ki.get(n)}function Ws(n,e,t,i){return{"#758718":n,"#cf9f41":e,"#715e40":t,"#b141ff":i,"#45433b":"#33291f"}}const ap={fire:{model:"mage",height:1.45,tint:new U("#ff6a1e"),tintStrength:.75,mage:{hat:{sx:.78,sy:1.55,sz:.78,rotX:-.18},hatEmissive:new U("#ff5500")}},ice:{model:"mage",height:1.45,tint:new U("#5bc8f5"),tintStrength:.55,mage:{hat:{sx:1.4,sy:.62,sz:1.4},spellbook:!0,hatEmissive:new U("#7fd8ff")}},lightning:{model:"mage",height:1.45,tint:new U("#b06bff"),tintStrength:.55,mage:{hat:{sx:.92,sy:1.35,sz:.92,rotZ:.34},hatEmissive:new U("#d9a8ff")}},water:{model:"mage",height:1.45,tint:new U("#26c2e8"),tintStrength:.55,watery:!0,mage:{hat:{sx:1.15,sy:.85,sz:1.15,rotX:.35},hatEmissive:new U("#7fe8ff")}},wind:{model:"mage",height:1.45,tint:new U("#bcd9ce"),tintStrength:.5,mage:{hat:{sx:1.22,sy:1,sz:1.22},hatEmissive:new U("#eafff5")}},generic_wizard:{model:"mage",height:1.45,tint:new U("#8a8494"),tintStrength:.5},generic_goblin:{model:"goblin_real",height:1.15,tint:new U("#8a8494"),tintStrength:.55},slingshot:{model:"goblin_real",height:1.15,atlasRemap:Ws("#4f9e3f","#a3271b","#6b3a24","#ffc93d")},dynamite:{model:"goblin_real",height:1.15,atlasRemap:Ws("#5da33a","#d1571f","#5a3020","#ffd75e"),emissive:new U("#ff6a1e"),emissiveIntensity:.12},gong:{model:"goblin_real",height:1.15,atlasRemap:Ws("#3f8f3f","#8f1d2e","#b8862f","#ffcf4d"),held:{key:"gong",hand:"r",scale:.4}},generic_archer:{model:"ranger",height:1.4,tint:new U("#8a8494"),tintStrength:.5,hideRe:/knife|dagger|sword|crossbow/i,held:{key:"bow",hand:"l",scale:.55}},longbow:{model:"ranger",height:1.5,tint:new U("#4e8f4e"),tintStrength:.55,emissive:new U("#3fae5a"),hideRe:/knife|dagger|sword|crossbow/i,held:{key:"bow",hand:"l",scale:.62}},ballesta:{model:"knight",height:1.35,tint:new U("#5b7fc9"),tintStrength:.5,hideRe:/sword|shield/i,held:{key:"crossbow",hand:"l",scale:.5}},bolas:{model:"orc_real",height:1.3,tint:new U("#4a5548"),tintStrength:.4,hideRe:/orc_weapon/i},generic_tree:{model:"cactoro",height:1.1,tint:new U("#8a8494"),tintStrength:.55},rootgrasp:{model:"mushroom_king",height:1.7,tint:new U("#5e4630"),tintStrength:.45},boulder:{model:"mushnub",height:1.95,tint:new U("#6b543c"),tintStrength:.45},thornspitter:{model:"cactoro",height:1.35,tint:new U("#55663d"),tintStrength:.3},generic_void:{model:"skel_rogue",height:1.3,tint:new U("#8a8494"),tintStrength:.55},voidgazer:{model:"skel_rogue",height:1.45,palette:{dark:new U("#151021"),mid:new U("#38265c"),accent:new U("#b04df0"),accentEmissive:new U("#9b30e8")}},voidsylph:{model:"skel_mage",height:1.1,palette:{dark:new U("#1c1233"),mid:new U("#4a2f73"),accent:new U("#ff5fc8"),accentEmissive:new U("#ff3db6")},wings:!0},voidmaw:{model:"dragon",height:1.5,palette:{dark:new U("#10142a"),mid:new U("#283064"),accent:new U("#8a4be0"),accentEmissive:new U("#5a7bff")}},phoenix:{model:"mage",height:1.7,tint:new U("#ff8c42"),tintStrength:.85,emissive:new U("#ff5500"),mage:{hat:{sx:.7,sy:1.9,sz:.7,rotX:-.3},hatEmissive:new U("#ffb163")}},wintercourt:{model:"mage",height:1.7,tint:new U("#a8e6ff"),tintStrength:.7,emissive:new U("#7fd8ff"),mage:{hat:{sx:1.6,sy:.7,sz:1.6},spellbook:!0,hatEmissive:new U("#ffffff")}},tempest:{model:"mage",height:1.7,tint:new U("#d9a8ff"),tintStrength:.7,emissive:new U("#b06bff"),mage:{hat:{sx:.95,sy:1.7,sz:.95,rotZ:.45},hatEmissive:new U("#f0dcff")}},tidelord:{model:"mage",height:1.7,tint:new U("#26c2e8"),tintStrength:.6,watery:!0,mage:{hat:{sx:1.3,sy:1,sz:1.3,rotX:.4},hatEmissive:new U("#bff4ff")}},zephyr:{model:"mage",height:1.7,tint:new U("#dff2ea"),tintStrength:.6,emissive:new U("#bcd9ce"),mage:{hat:{sx:1.4,sy:1.15,sz:1.4},hatEmissive:new U("#ffffff")}},warlord:{model:"goblin_real",height:1.45,atlasRemap:Ws("#4f9e3f","#c2231a","#7a2e1c","#ffe08a"),emissive:new U("#c9e08a"),emissiveIntensity:.15},sapperking:{model:"goblin_real",height:1.45,atlasRemap:Ws("#5da33a","#e0641f","#5a3020","#ffd75e"),emissive:new U("#ff6a1e"),emissiveIntensity:.15},doomgong:{model:"goblin_real",height:1.45,atlasRemap:Ws("#3f8f3f","#a01f33","#d1a13d","#ffcf4d"),emissive:new U("#f4d98a"),emissiveIntensity:.15,held:{key:"gong",hand:"r",scale:.5}},stormpiercer:{model:"ranger",height:1.75,tint:new U("#4e8f4e"),tintStrength:.65,emissive:new U("#7dff9b"),hideRe:/knife|dagger|sword|crossbow/i,held:{key:"bow",hand:"l",scale:.7}},ironstorm:{model:"knight",height:1.55,tint:new U("#5b7fc9"),tintStrength:.65,emissive:new U("#8fb4ff"),hideRe:/sword|shield/i,held:{key:"crossbow",hand:"l",scale:.58}},chainwarden:{model:"orc_real",height:1.55,tint:new U("#4a5548"),tintStrength:.45,emissive:new U("#c8d6b0"),hideRe:/orc_weapon/i},elderroot:{model:"mushroom_king",height:2.15,tint:new U("#4a3624"),tintStrength:.55,emissive:new U("#3f6b33")},mountain:{model:"mushnub",height:2.4,tint:new U("#5e4c38"),tintStrength:.5,emissive:new U("#8d7a5e")},bramblehydra:{model:"cactoro",height:1.7,tint:new U("#3f6b33"),tintStrength:.45,emissive:new U("#6fcf5f")}},op={grunt:{model:"skel_minion",height:1.05,tint:new U("#7da35c"),tintStrength:.35},runner:{model:"skel_rogue",height:1.1,tint:new U("#d9a648"),tintStrength:.35},knight:{model:"knight",height:1.25,tint:new U("#8d99ae"),tintStrength:.25},shade:{model:"skel_mage",height:1.15,tint:new U("#b35442"),tintStrength:.45,emissive:new U("#ff5522")},golem:{model:"skel_warrior",height:2.6,tint:new U("#3d2f5e"),tintStrength:.6},golemling:{model:"skel_warrior",height:1.45,tint:new U("#7a68a6"),tintStrength:.5},orcraider:{model:"orc_real",height:1.15,tint:new U("#5e7a3a"),tintStrength:.35},orcbrute:{model:"orc_real",height:1.5,tint:new U("#4a5d33"),tintStrength:.45},troll:{model:"orc_real",height:2.3,tint:new U("#6a7d5e"),tintStrength:.5,emissive:new U("#38553f")},orcshaman:{model:"skel_mage",height:1.2,tint:new U("#3f8f5c"),tintStrength:.6,emissive:new U("#3fae5a")},wardrummer:{model:"orc_real",height:1.35,tint:new U("#8a5c3a"),tintStrength:.4,hideRe:/orc_weapon/i,held:{key:"drum",hand:"l",scale:.42}},wraith:{model:"skel_rogue",height:1.15,tint:new U("#9db8c9"),tintStrength:.5,emissive:new U("#bcd9ff"),ghostly:!0},warwagon:{model:"goblin",height:1,vehicle:"vehicle_wagon",tint:new U("#7a5c38"),tintStrength:.2},siegetower:{model:"goblin",height:2.3,vehicle:"vehicle_tower",tint:new U("#6b4f30"),tintStrength:.2},gargoyle:{model:"skel_minion",height:1.05,tint:new U("#8d99ae"),tintStrength:.6,wings:!0},drake:{model:"skel_rogue",height:1.3,tint:new U("#c25a2e"),tintStrength:.65,emissive:new U("#ff5522"),wings:!0},hexer:{model:"skel_mage",height:1.25,tint:new U("#7a4a9e"),tintStrength:.65,emissive:new U("#b06bff")},banshee:{model:"skel_rogue",height:1.15,tint:new U("#cfd8e8"),tintStrength:.6,emissive:new U("#e8f2ff"),ghostly:!0},necromancer:{model:"skel_mage",height:1.35,tint:new U("#3a2f4e"),tintStrength:.7,emissive:new U("#7a4a9e")},risen:{model:"skel_minion",height:.95,tint:new U("#9a92b5"),tintStrength:.5},thief:{model:"skel_rogue",height:1.05,tint:new U("#d9c148"),tintStrength:.55},shieldbearer:{model:"knight",height:1.35,tint:new U("#5b7fc9"),tintStrength:.5,emissive:new U("#8fb4ff")},slime_big:{model:"goblin",height:.85,tint:new U("#5fbf4a"),blob:!0},slime_mid:{model:"goblin",height:.6,tint:new U("#74d15e"),blob:!0},slime_small:{model:"goblin",height:.42,tint:new U("#8ce276"),blob:!0},heartstone:{model:"goblin",height:1,tint:new U("#e05a7a"),crystal:!0},frostshaman:{model:"skel_mage",height:1.2,tint:new U("#7fc8e8"),tintStrength:.65,emissive:new U("#b3ecff")},burrower:{model:"skel_rogue",height:.95,tint:new U("#8a6a42"),tintStrength:.6,burrower:!0},mirrorslime:{model:"goblin",height:.9,tint:new U("#b8e0e8"),blob:!0},mirrorling:{model:"goblin",height:.5,tint:new U("#d4f0f6"),blob:!0},warlord:{model:"skel_warrior",height:3,tint:new U("#6e7b8a"),tintStrength:.55,emissive:new U("#8fa2b8")},pyretitan:{model:"skel_mage",height:3.1,tint:new U("#c25a2e"),tintStrength:.6,emissive:new U("#ff5522")},colossus:{model:"skel_warrior",height:3.6,tint:new U("#3d2f5e"),tintStrength:.7,emissive:new U("#b14aed")}},$o=1/Qr;function Jo(n){return Math.atan2(Math.cos(n),Math.sin(n))}const tE=1.05,Hu=.28,cp=new Map;function nE(n,e){const t=JSON.stringify(e),i=cp.get(t);if(i)return i;const s=n.image,r=document.createElement("canvas");r.width=s.width,r.height=s.height;const a=r.getContext("2d");a.drawImage(s,0,0);const o=a.getImageData(0,0,r.width,r.height),c=u=>[parseInt(u.slice(1,3),16),parseInt(u.slice(3,5),16),parseInt(u.slice(5,7),16)],l=Object.entries(e).map(([u,h])=>({f:c(u),t:c(h)}));for(let u=0;u<o.data.length;u+=4)for(const{f:h,t:f}of l)if(Math.abs(o.data[u]-h[0])<=8&&Math.abs(o.data[u+1]-h[1])<=8&&Math.abs(o.data[u+2]-h[2])<=8){o.data[u]=f[0],o.data[u+1]=f[1],o.data[u+2]=f[2];break}a.putImageData(o,0,0);const d=new Fm(r);return d.flipY=n.flipY,d.colorSpace=n.colorSpace,d.magFilter=n.magFilter,d.minFilter=n.minFilter,d.generateMipmaps=n.generateMipmaps,d.wrapS=n.wrapS,d.wrapT=n.wrapT,d.offset.copy(n.offset),d.repeat.copy(n.repeat),d.rotation=n.rotation,d.center.copy(n.center),d.channel=n.channel,d.matrixAutoUpdate=n.matrixAutoUpdate,n.matrixAutoUpdate||d.matrix.copy(n.matrix),cp.set(t,d),d}const to=new Map,Pr=new Map,tr=[];let ha,rg=new C;function ag(n,e){ha=n,rg=e}function iE(n){const e=new rt,t=new rt;e.add(t);const i=new ct({color:n.tint??new U("#5fbf4a"),roughness:.25,transparent:!0,opacity:.92}),s=new Ie(new _s(n.height/2,14,12),i);s.position.y=n.height/2,s.castShadow=!0,t.add(s);const r=new ct({color:"#1a2415"});for(const a of[-1,1]){const o=new Ie(new _s(n.height*.06,6,6),r);o.position.set(a*n.height*.14,n.height*.62,n.height*.4),t.add(o)}return{root:e,inner:t,mats:[i],origColors:[i.color.clone()],baseEmissive:new U(0),yaw:0,casting:!1,cheering:!1,becalmed:!1,watery:!1,prevRecoil:0,blob:!0,height:n.height}}function sE(n){const e=new rt,t=new rt;e.add(t);const i=n.tint??new U("#e05a7a"),s=new ct({color:i,emissive:i.clone().multiplyScalar(.55),roughness:.2,metalness:.1,transparent:!0,opacity:.92}),r=new Ie(new Xo(n.height*.42),s);r.position.y=n.height*.62,r.castShadow=!0,t.add(r);for(const[o,c,l]of[[.28,.1,.5],[-.24,-.14,.4]]){const d=new Ie(new Xo(n.height*.42*l),s);d.position.set(o*n.height,n.height*.3*l+.05,c*n.height),d.castShadow=!0,t.add(d)}const a=new Ie(new Zt(n.height*.34,n.height*.44,n.height*.16,7),new ct({color:"#4a4252",roughness:1}));return a.position.y=n.height*.08,a.castShadow=!0,t.add(a),{root:e,inner:t,mats:[s],origColors:[s.color.clone()],baseEmissive:s.emissive.clone(),yaw:0,casting:!1,cheering:!1,becalmed:!1,watery:!1,prevRecoil:0,crystal:!0,height:n.height}}function rE(n){const e=sg(n.vehicle),t=new rt,i=new rt;t.add(i);const s=[],r=[];if(e){const a=e.scene.clone(!0);a.scale.setScalar(n.height/e.rawHeight),i.add(a),a.traverse(o=>{const c=o;if(!c.isMesh)return;const l=c.material.clone();n.tint&&l.color.lerp(n.tint,n.tintStrength??.25),c.material=l,s.push(l),/wheel/i.test(c.name)&&r.push(c)})}return{root:t,inner:i,mats:s,origColors:s.map(a=>a.color.clone()),baseEmissive:new U(0),yaw:0,casting:!1,cheering:!1,becalmed:!1,watery:!1,prevRecoil:0,wheels:r,height:n.height}}function og(n){if(n.vehicle)return rE(n);if(n.blob)return iE(n);if(n.crystal)return sE(n);const e=eE(n.model),t=Zm(e.scene),i=e.unitScale*n.height;t.scale.setScalar(i);const s=p=>{const x=new Set;return p==null||p.traverse(M=>{M.isMesh&&x.add(M)}),x};let r=new Set,a=new Set;if(n.mage){const p=t.getObjectByName("Mage_Hat");if(p){const b=n.mage.hat;p.scale.set(p.scale.x*b.sx,p.scale.y*b.sy,p.scale.z*b.sz),b.rotZ&&(p.rotation.z+=b.rotZ),b.rotX&&(p.rotation.x+=b.rotX),a=s(p)}const x=t.getObjectByName("Spellbook"),M=t.getObjectByName("Spellbook_open");x&&(x.visible=!1),M&&(M.visible=!!n.mage.spellbook),r=s(t.getObjectByName("Mage_Head"))}if(n.hideRe&&t.traverse(p=>{n.hideRe.test(p.name)&&(p.visible=!1)}),n.held){const p=sg(n.held.key),x=n.held.hand==="l"?"L":"R",M=t.getObjectByName(`handslot${n.held.hand}`)??t.getObjectByName(`hand${n.held.hand}`)??t.getObjectByName(`Arm${x}_end_end`)??t.getObjectByName(`LowerArm${x}`);if(p&&M){t.updateMatrixWorld(!0);const b=p.scene.clone(!0),w=new C;M.getWorldScale(w);const E=1/Math.max(1e-6,w.y),R=n.held.scale*n.height;b.scale.setScalar(R*E/p.rawHeight),b.rotation.set(n.held.rotX??0,n.held.rotY??Math.PI/2,n.held.rotZ??0),M.add(b)}}const o=[];if(t.traverse(p=>{var E,R;const x=p;if(!x.isMesh)return;const M=x.material;let b;if(n.watery?b=new Gn({map:M.map??null,color:((E=M.color)==null?void 0:E.clone())??new U("#ffffff"),transparent:!0,opacity:.72,roughness:.08,metalness:.1,clearcoat:.6,side:Nt}):b=M.clone(),n.tint){let _=n.tintStrength??.4;n.mage&&(r.has(x)?_=.08:a.has(x)&&(_=Math.min(1,_+.25))),b.color.lerp(n.tint,_)}const w=(R=n.mage)==null?void 0:R.hatEmissive;w&&a.has(x)?(b.emissive.copy(w),b.emissiveIntensity=.18):n.emissive&&(b.emissive.copy(n.emissive),b.emissiveIntensity=n.emissiveIntensity??.35),n.ghostly&&(b.transparent=!0),x.material=b,o.push(b)}),n.atlasRemap)for(const p of o)p.map&&(p.map=nE(p.map,n.atlasRemap),p.needsUpdate=!0);if(n.palette){const p=M=>.299*M.r+.587*M.g+.114*M.b,x=[...o].sort((M,b)=>p(M.color)-p(b.color));x.forEach((M,b)=>{const w=x.length<=1?1:b/(x.length-1),E=w<.4?n.palette.dark:w<.8?n.palette.mid:n.palette.accent;M.color.copy(E),w>=.8&&n.palette.accentEmissive&&(M.emissive.copy(n.palette.accentEmissive),M.emissiveIntensity=.5)})}let c;if(n.wings){const x=1/(e.unitScale*n.height),M=new ct({color:"#2e3238",roughness:.7,side:Nt,transparent:!0,opacity:.92});c=[];for(const b of[-1,1]){const w=new Ie(new Cn(.55*n.height*x,.26*n.height*x),M);w.geometry.translate(b*.55*n.height*x/2,0,0),w.position.set(b*.06*n.height*x,.6*n.height*x,-.08*n.height*x),w.rotation.x=-.4,t.add(w),c.push(w)}}const l=new mx(t),d=p=>{const x=jo.findByName(e.clips,p);return l.clipAction(x)},u=d(e.idle),h=d(e.walk),f=d(e.attack);f.setLoop(vd,1);const g=e.death?d(e.death):null;g&&(g.setLoop(vd,1),g.clampWhenFinished=!0);const y=e.cheer?d(e.cheer):null,m=new rt;return m.add(t),{root:m,inner:t,mixer:l,idle:u,walk:h,attack:f,death:g,cheer:y,mats:o,origColors:o.map(p=>p.color.clone()),baseEmissive:n.emissive?n.emissive.clone():new U(0),yaw:0,casting:!1,cheering:!1,becalmed:!1,watery:!!n.watery,prevRecoil:0,flapWings:c,height:n.height}}function aE(n){const e=(t,i)=>{const s=new Am({color:t,depthTest:!1}),r=new nv(s);return r.center.set(0,.5),r.scale.set(.8,.09,1),r.position.set(-.4,n.height+.25,0),r.renderOrder=10+i,n.root.add(r),r};n.hpBar={bg:e("#3a0d12",0),fg:e("#58e05e",1)}}function oE(n,e){cE(n,e),lE(n,e),dE(e)}function cE(n,e){var i,s,r;const t=new Set;for(const a of n.enemies){t.add(a.id);let o=to.get(a.id);if(!o){const f=op[a.def.id]??op.grunt;o=og(f),o.ghostly=f.ghostly,o.burrow=f.burrower,aE(o),(i=o.walk)==null||i.play(),o.yaw=Jo(a.angle),to.set(a.id,o),ha.add(o.root),o.root.scale.setScalar(.01)}const c=a.def.flying?1.05+Math.sin(performance.now()/380+a.id)*.12:0;if(o.burrow){const f=a.phased?-.72:0;o.sink=(o.sink??0)+(f-(o.sink??0))*Math.min(1,e*7)}o.root.position.set(a.x*$o,c+(o.sink??0),a.y*$o);const l=Jo(a.angle);if(o.yaw+=cg(o.yaw,l)*Math.min(1,e*10),o.root.rotation.y=o.yaw,o.flapWings){const f=Math.sin(performance.now()/90+a.id)*.55;o.flapWings[0].rotation.y=-.35-f,o.flapWings[1].rotation.y=.35+f}if(o.blob){const f=Math.abs(Math.sin(a.animT*6));o.inner.scale.set(1+.14*f,1-.18*f,1+.14*f)}if(o.crystal){const f=1+Math.sin(performance.now()/320+a.id)*.06;o.inner.scale.setScalar(f),o.inner.rotation.y+=e*.6}const d=o.root.scale.x;d<1&&o.root.scale.setScalar(Math.min(1,d+e*5));let u=1;if(a.statuses.frozen?u=0:a.statuses.chill&&(u=Math.max(.25,1-a.statuses.chill.pct*(.6+.2*a.statuses.chill.stacks))),o.walk&&(o.walk.timeScale=a.def.speed/60*u),(s=o.mixer)==null||s.update(e),o.wheels&&o.wheels.length>0){for(const f of o.wheels)f.rotation.x=a.animT*a.def.speed*.09;o.inner.rotation.z=Math.sin(a.animT*5)*.02}if(o.ghostly){const f=a.phased?.22:.95;for(const g of o.mats)g.opacity+=(f-g.opacity)*Math.min(1,e*8)}if(o.hpBar){const f=Math.max(0,a.hp/a.maxHp);o.hpBar.fg.scale.x=.8*f;const g=f>.5?"#58e05e":f>.25?"#ffd75e":"#ff5e5e";o.hpBar.fg.material.color.set(g),o.hpBar.bg.visible=o.hpBar.fg.visible=f<1}for(const f of o.mats)a.hitFlash>0?(f.emissive.setRGB(1,1,1),f.emissiveIntensity=.7):a.statuses.burn?(f.emissive.set("#ff6a1e"),f.emissiveIntensity=.45+Math.sin(performance.now()/90)*.15):a.statuses.wet?(f.emissive.set("#2277ff"),f.emissiveIntensity=.3):a.statuses.chill?(f.emissive.set("#66ccff"),f.emissiveIntensity=.25):(f.emissive.copy(o.baseEmissive),f.emissiveIntensity=o.baseEmissive.getHex()===0?0:.35);const h=(a.armorHp??0)>0;if(h&&!o.armorShell){const f=new Ie(new _s(.62,12,10),new ct({color:"#9aa6b5",transparent:!0,opacity:.4,roughness:.35,metalness:.6}));f.scale.set(1,(o.height+.2)/1.24,1),f.position.y=(o.height+.2)/2,o.root.add(f),o.armorShell=f}else!h&&o.armorShell&&(o.root.remove(o.armorShell),Yo(o.armorShell),o.armorShell=void 0);if(o.armorShell){const f=Math.max(.15,(a.armorHp??0)/(a.def.armor??1));o.armorShell.material.opacity=.18+f*.3+Math.sin(performance.now()/300)*.04}if(a.statuses.frozen&&!o.iceCube){const f=new Ie(new vn(.7,o.height+.15,.7),new ct({color:"#9fdcff",transparent:!0,opacity:.45,roughness:.1}));f.position.y=(o.height+.15)/2,o.root.add(f),o.iceCube=f}else!a.statuses.frozen&&o.iceCube&&(o.root.remove(o.iceCube),Yo(o.iceCube),o.iceCube=void 0)}for(const[a,o]of to)if(!t.has(a)){to.delete(a);const c=o.root.position.distanceTo(rg)<1.2;o.death&&!c?((r=o.walk)==null||r.fadeOut(.08),o.death.reset().setEffectiveTimeScale(1.5).fadeIn(.05).play(),o.hpBar&&(o.hpBar.bg.visible=o.hpBar.fg.visible=!1),tr.push({view:o,t:tE,mode:"anim"})):tr.push({view:o,t:Hu,mode:"shrink"})}}function lE(n,e){var i,s,r,a,o,c,l,d;const t=new Set;for(const u of n.wizards){t.add(u.id);let h=Pr.get(u.id);h&&h.defId!==u.def.id&&(ha.remove(h.root),h.root.traverse(m=>Yo(m)),Pr.delete(u.id),h=void 0),h||(h=og(ap[u.def.id]??ap.generic_wizard),h.defId=u.def.id,(i=h.idle)==null||i.play(),h.yaw=Jo(u.aim),Pr.set(u.id,h),ha.add(h.root),h.root.position.set(u.x*$o,0,u.y*$o),h.root.scale.setScalar(.01));const f=h.root.scale.x;f<1&&h.root.scale.setScalar(Math.min(1,f+e*4));const g=Jo(u.aim);h.yaw+=cg(h.yaw,g)*Math.min(1,e*12),h.root.rotation.y=h.yaw;const y=!!u.becalmed||(u.silencedT??0)>0;if(y!==h.becalmed&&(h.becalmed=y,h.mats.forEach((m,p)=>{m.color.copy(h.origColors[p]),y&&m.color.lerp(new U("#777777"),.6)}),h.idle&&(h.idle.timeScale=y?.35:1)),n.phase==="won"&&h.cheer&&!h.cheering?(h.cheering=!0,(s=h.idle)==null||s.fadeOut(.2),(r=h.attack)==null||r.fadeOut(.2),h.cheer.reset().fadeIn(.2).play()):n.phase!=="won"&&h.cheering&&(h.cheering=!1,(a=h.cheer)==null||a.fadeOut(.2),(o=h.idle)==null||o.reset().fadeIn(.2).play()),!h.cheering&&h.attack&&u.recoil>h.prevRecoil+.01){const m=h.attack.getClip().duration;h.attack.reset(),h.attack.timeScale=m/Math.min(Math.max(u.stats.rate*.85,.35),1.1),h.attack.play(),(c=h.idle)==null||c.fadeOut(.08),h.casting=!0}if(h.casting&&h.attack&&!h.attack.isRunning()&&(h.casting=!1,(l=h.idle)==null||l.reset().fadeIn(.15).play()),h.prevRecoil=u.recoil,(d=h.mixer)==null||d.update(e),h.flapWings){const m=Math.sin(performance.now()/110+u.id)*.5;h.flapWings[0].rotation.y=-.35-m,h.flapWings[1].rotation.y=.35+m}if(h.watery){const m=.72+Math.sin(performance.now()/380+u.id)*.06;for(const p of h.mats)p.opacity=m}}for(const[u,h]of Pr)t.has(u)||(Pr.delete(u),tr.push({view:h,t:Hu,mode:"shrink"}))}function dE(n){var e;for(let t=tr.length-1;t>=0;t--){const i=tr[t];if(i.t-=n,i.mode==="anim"){if((e=i.view.mixer)==null||e.update(n),i.t<.3){const s=Math.max(.01,i.t/.3);i.view.root.position.y=-(1-s)*.5}}else{const s=Math.max(.01,i.t/Hu);i.view.root.scale.setScalar(s),i.view.root.position.y=-(1-s)*.4}i.t<=0&&(ha.remove(i.view.root),i.view.root.traverse(s=>Yo(s)),tr.splice(t,1))}}function cg(n,e){let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function Yo(n){var t;if(!n.isMesh)return;(t=n.geometry)==null||t.dispose();const e=n.material;Array.isArray(e)?e.forEach(i=>i.dispose()):e==null||e.dispose()}const Sn=1/Qr,no=.45;let Vr,lg,Zo;const Pd=800;let To,Qo,ec;const uE=["orb","rock","stick","arrow","bolt","needle"],lp={orb:[],rock:[],stick:[],arrow:[],bolt:[],needle:[]};let dg;const hE={orb:null,rock:"#8d8578",stick:"#c8452e",arrow:"#e6d7b0",bolt:"#cdd7e0",needle:"#7fce6a"};let io=0,tc,nc;const so=new Map;let Ao;function fE(n,e,t){Vr=n,lg=e,Zo=t;const i=new bt;Qo=new Xt(new Float32Array(Pd*3),3),ec=new Xt(new Float32Array(Pd*3),3),i.setAttribute("position",Qo),i.setAttribute("color",ec);const s=new Fu({size:.15,vertexColors:!0,transparent:!0,opacity:.95,blending:ko,depthWrite:!1});To=new Lm(i,s),To.frustumCulled=!1,Vr.add(To),dg={orb:new _s(.11,10,8),rock:new Uu(.12),stick:new Zt(.05,.05,.28,8).rotateZ(Math.PI/2),arrow:new Kr(.04,.44,6).rotateZ(-Math.PI/2),bolt:new Kr(.06,.34,6).rotateZ(-Math.PI/2),needle:new Kr(.022,.22,5).rotateZ(-Math.PI/2)},tc=new rt,Vr.add(tc),nc=new rt,Vr.add(nc),Ao=document.createElement("div"),Ao.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:4;font-family:Segoe UI,sans-serif;",Zo.appendChild(Ao)}const ro=new U;function pE(n){let e=0;for(const a of H.particles){if(e>=Pd)break;Qo.setXYZ(e,a.x*Sn,no+(1-a.life/a.maxLife)*.3,a.y*Sn),ro.set(a.color),ec.setXYZ(e,ro.r,ro.g,ro.b),e++}Qo.needsUpdate=!0,ec.needsUpdate=!0,To.geometry.setDrawRange(0,e),io+=.22;const t={orb:0,rock:0,stick:0,arrow:0,bolt:0,needle:0};for(const a of n.projectiles){const o=a.visual??"orb",c=lp[o];let l=c[t[o]];l||(l=new Ie(dg[o],new un({color:"#ffffff"})),Vr.add(l),c.push(l)),t[o]++,l.visible=!0;let d=0;if((o==="rock"||o==="stick")&&a.sx!==void 0&&a.sy!==void 0){const f=Math.hypot(a.tx-a.sx,a.ty-a.sy)||1,g=Math.hypot(a.x-a.sx,a.y-a.sy),y=Math.min(1,g/f),m=Math.min(.95,.35+f*Sn*.05);d=Math.sin(y*Math.PI)*m}l.position.set(a.x*Sn,no+d,a.y*Sn),l.material.color.set(a.element==="void"?Kt.void.color:hE[o]??Kt[a.element].color);const h=Math.atan2(a.ty-a.y,a.tx-a.x);l.rotation.set(0,-h,0),o==="orb"?l.scale.set(1.8,1,1):o==="rock"?(l.scale.setScalar(1),l.rotation.x=io,l.rotation.z=io*.7):o==="stick"?(l.scale.setScalar(1),l.rotation.z=io*1.6,Math.random()<.5&&H.burst(a.x,a.y,"#ffd75e",1,20,1.5,.2)):l.scale.setScalar(1)}for(const a of uE){const o=lp[a];for(let c=t[a];c<o.length;c++)o[c].visible=!1}tc.clear();for(const a of H.arcs){const o=a.life/a.maxLife,c=a.pts.map(u=>new C(u.x*Sn,no+.15,u.y*Sn)),l=new bt().setFromPoints(c),d=new pc({color:a.color,transparent:!0,opacity:o,blending:ko,depthWrite:!1});tc.add(new mc(l,d))}nc.clear();for(const a of H.rings){const o=1-a.life/a.maxLife,c=Math.max(.02,a.maxR*o*Sn),l=new _c(c*.82,c,28),d=new un({color:a.color,transparent:!0,opacity:(1-o)*.7,side:Nt,depthWrite:!1}),u=new Ie(l,d);u.rotation.x=-Math.PI/2,u.position.set(a.x*Sn,.02,a.y*Sn),nc.add(u)}const i=new Set,s={w:Zo.clientWidth,h:Zo.clientHeight},r=new C;for(const a of H.floaters){i.add(a);let o=so.get(a);o||(o=document.createElement("div"),o.textContent=a.text,o.style.cssText=`position:absolute;transform:translate(-50%,-50%);font-weight:700;font-size:${a.size}px;color:${a.color};text-shadow:0 1px 3px rgba(0,0,0,0.8);white-space:nowrap;`,Ao.appendChild(o),so.set(a,o)),r.set(a.x*Sn,no+.3,a.y*Sn).project(lg),o.style.left=`${(r.x+1)/2*s.w}px`,o.style.top=`${(1-r.y)/2*s.h-(1-a.life/a.maxLife)*26}px`,o.style.opacity=String(Math.min(1,a.life/a.maxLife*2))}for(const[a,o]of so)i.has(a)||(o.remove(),so.delete(a))}const Mt=1/Qr,mi=ps*Mt,Bi=nr*Mt;let bn,Ht,Pn,Id,ug,Ro,ao,Ld=[],Dd=[],ic,cn,Yr,Fd,_i,Un,rs,ls,yl="",qi,as,Hr,Co,Nd=0;const Ud=.3,dp=ym.degToRad(52),up=30,hp=1,mE=3;let Zn=mi/2+Ud,Vi=Zn/(ps/nr),yi=1,vs=0,xs=0,kd=0,Od=0;function hg(){const n=bn.domElement;kd=n.clientWidth,Od=n.clientHeight;const e=kd||ps,t=Od||nr;bn.setSize(e,t,!1);const i=e/t;i>=ps/nr?(Vi=Bi/2+Ud,Zn=Vi*i):(Zn=mi/2+Ud,Vi=Zn/i),Pn.left=-Zn,Pn.right=Zn,Pn.top=Vi,Pn.bottom=-Vi,Wu(),fa()}function fa(){const n=new C(mi/2+vs,0,Bi/2-.2+xs);Pn.position.set(n.x,Math.sin(dp)*up,n.z+Math.cos(dp)*up),Pn.lookAt(n),Pn.zoom=yi,Pn.updateProjectionMatrix()}function Wu(){const n=Zn*(1-1/yi),e=Vi*(1-1/yi);vs=Math.max(-n,Math.min(n,vs)),xs=Math.max(-e,Math.min(e,xs))}function va(n,e,t){const i=e!==void 0&&t!==void 0?sc(e,t):null,s=i?{x:i.x,y:i.y}:null;if(yi=Math.max(hp,Math.min(mE,yi*n)),yi<=hp+.001)vs=0,xs=0;else if(s&&e!==void 0&&t!==void 0){fa();const r=sc(e,t);r&&(vs+=(s.x-r.x)*Mt,xs+=(s.y-r.y)*Mt)}Wu(),fa()}function gE(n,e){const t=bn.domElement,i=Zn*2/(t.clientWidth||ps)/yi;vs-=n*i,xs-=e*i,Wu(),fa()}function bE(){yi=1,vs=0,xs=0,fa()}function fg(){return yi}async function _E(n,e,t){bn=new hw({canvas:n,antialias:!0}),bn.setPixelRatio(Math.min(2,window.devicePixelRatio)),bn.shadowMap.enabled=!0,bn.shadowMap.type=Wr,bn.toneMapping=gu,bn.toneMappingExposure=1.25,Ht=new Y_,Ht.background=new U("#1a2419"),Pn=new _a(-Zn,Zn,Vi,-Vi,.1,100),hg(),ic=new $v("#cfe8ff","#3a4a30",1.7),Ht.add(ic),cn=new Hm("#fff4d6",2.4),cn.position.set(mi*.3,14,Bi*.15),cn.target.position.set(mi/2,0,Bi/2-.2),cn.castShadow=!0,cn.shadow.mapSize.set(2048,2048);const i=15;cn.shadow.camera.left=-i,cn.shadow.camera.right=i,cn.shadow.camera.top=i,cn.shadow.camera.bottom=-i,cn.shadow.camera.far=60,Ht.add(cn,cn.target),Yr=new ct({roughness:1});const s=new Ie(new Cn(mi,Bi),Yr);s.rotation.x=-Math.PI/2,s.position.set(mi/2,0,Bi/2),s.receiveShadow=!0,Ht.add(s),Fd=new ct({color:"#1c2b1c",roughness:1});const r=new Ie(new Cn(mi*4,Bi*4),Fd);r.rotation.x=-Math.PI/2,r.position.set(mi/2,-.02,Bi/2),r.receiveShadow=!0,Ht.add(r),pg(e.map.theme??Qd),await mg(e),Un=new Ie(new _c(.97,1,48),new un({color:"#c9b8ff",transparent:!0,opacity:.5,side:Nt,depthWrite:!1})),Un.rotation.x=-Math.PI/2,Un.position.y=.03,Un.visible=!1,Ht.add(Un),rs=new rt;const a=[];for(let d=0;d<=Ir;d++)a.push(d,0,0,d,0,Lr);for(let d=0;d<=Lr;d++)a.push(0,0,d,Ir,0,d);const o=new bt;o.setAttribute("position",new Je(a,3));const c=new Im(o,new pc({color:"#ffffff",transparent:!0,opacity:.13,depthWrite:!1}));c.position.y=.016,rs.add(c),ls=new Pm(new Cn(.92,.92),new un({transparent:!0,opacity:.14,depthWrite:!1,side:Nt}),Ir*Lr);{const d=new ke,u=new ke().makeRotationX(-Math.PI/2);let h=0;for(let f=0;f<Lr;f++)for(let g=0;g<Ir;g++)d.copy(u),d.setPosition(g+.5,.012,f+.5),ls.setMatrixAt(h,d),ls.setColorAt(h,new U("#59c96a")),h++}rs.add(ls),rs.visible=!1,Ht.add(rs),qi=new rt,as=Un.clone(),as.material=Un.material.clone(),as.visible=!0,as.position.set(0,.03,0),Hr=new Ie(new Cn(1,1),new un({color:"#7dff9b",transparent:!0,opacity:.3,side:Nt,depthWrite:!1})),Hr.rotation.x=-Math.PI/2,Hr.position.y=.02,Co=new Ie(new Zt(.28,.36,1,12),new ct({color:"#ffffff",transparent:!0,opacity:.45})),Co.position.y=.5,qi.add(as,Hr,Co),qi.visible=!1,Ht.add(qi),Id=new gx,ug=new Oi(new C(0,1,0),0);const l=e.track.posAt(e.track.total);ag(Ht,new C(l.x*Mt,0,l.y*Mt)),fE(Ht,Pn,n.parentElement),await Kw(t),Nd=performance.now(),window.__scene=Ht}function pg(n){ic.color.set(n.hemiSky),ic.groundColor.set(n.hemiGround),cn.color.set(n.sun),cn.intensity=n.sunIntensity,bn.toneMappingExposure=n.exposure,Ht.fog=new Pu(n.fog,34,62),Ht.background=new U(n.fog).multiplyScalar(.35),Fd.color.set(n.grassB).multiplyScalar(.75)}async function mg(n){var s;const e=n.map.theme??Qd,t=new Fm(Zg(n.track,n.map.water??[],e));t.colorSpace=Wt,t.anisotropy=8,(s=Yr.map)==null||s.dispose(),Yr.map=t,Yr.needsUpdate=!0,_i=new rt,Ht.add(_i),fp(n.track.posAt(0),"#b14aed"),fp(n.track.posAt(n.track.total),"#3a86ff"),Ro=new rt;for(const[r,a]of n.map.water??[]){const o=new Ie(new Cn(1.02,1.02),new ct({color:new U(e.water).lerp(new U("#4f9fe4"),.4),transparent:!0,opacity:.72,roughness:.12,metalness:.35}));o.rotation.x=-Math.PI/2,o.position.set(r+.5,.04,a+.5),Ro.add(o)}_i.add(Ro),ao=new rt,Dd=[],Ld=[];const i=new ct({color:"#f4f9ff",transparent:!0,opacity:.88,roughness:.9});for(let r=0;r<n.clouds.length;r++){const a=new rt,o=[[0,0,0,.65],[.6,.1,.15,.45],[-.55,.05,-.1,.5],[.15,.35,-.2,.4]];for(const[l,d,u,h]of o){const f=new Ie(new _s(h,12,10),i);f.position.set(l,d,u),a.add(f)}a.position.y=3.1,ao.add(a),Dd.push(a);const c=new Ie(new Nu(1.05,24),new un({color:"#000000",transparent:!0,opacity:.16,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.03,ao.add(c),Ld.push(c)}_i.add(ao),await vE(n)}function qu(n){_i&&(Ht.remove(_i),_i.traverse(t=>{var s;const i=t;if(i.isMesh){(s=i.geometry)==null||s.dispose();const r=i.material;Array.isArray(r)?r.forEach(a=>a.dispose()):r==null||r.dispose()}})),pg(n.map.theme??Qd);const e=n.track.posAt(n.track.total);ag(Ht,new C(e.x*Mt,0,e.y*Mt)),mg(n).catch(t=>console.warn("map rebuild failed",t))}async function vE(n){const e=n.map.props??[];if(e.length===0)return;const t=new eg,i=new Map;for(const s of new Set(e.map(r=>r.model))){const r=Ap[s];if(r)try{const a=await t.loadAsync(r.file);a.scene.traverse(l=>{l.isMesh&&(l.castShadow=!0)});const o=new Ln().setFromObject(a.scene),c=Math.max(.001,o.max.y-o.min.y);i.set(s,{scene:a.scene,unitScale:r.height/c})}catch(a){console.warn(`prop model failed to load: ${s}`,a)}}for(const s of e){const r=i.get(s.model);if(!r)continue;const a=r.scene.clone(!0);a.scale.setScalar(r.unitScale*s.scale),a.position.set(s.x*Mt,0,s.y*Mt),a.rotation.y=-s.rot,_i.add(a)}}function fp(n,e){const t=new rt,i=new Ie(new ba(.55,.09,10,24),new un({color:e}));i.position.y=.7,i.rotation.y=n.angle+Math.PI/2;const s=new Vm(e,6,4);s.position.y=.7,t.add(i,s),t.position.set(n.x*Mt,0,n.y*Mt),_i.add(t)}function sc(n,e){const t=bn.domElement,i=t.clientWidth||ps,s=t.clientHeight||nr,r=new xe(n/i*2-1,-(e/s)*2+1);Id.setFromCamera(r,Pn);const a=new C;if(!Id.ray.intersectPlane(ug,a))return null;const o=a.x*Qr,c=a.z*Qr;return o<0||c<0||o>=ps||c>=nr?null:{x:o,y:c}}function xE(n){const e=bn.domElement;(e.clientWidth!==kd||e.clientHeight!==Od)&&hg();const t=performance.now(),i=Math.min(.1,(t-Nd)/1e3);Nd=t,oE(n,i),pE(n);const s=t/1e3;Ro.children.forEach((a,o)=>{a.position.y=.04+Math.sin(s*1.8+o*1.3)*.012,a.material.opacity=.68+Math.sin(s*2.4+o*.7)*.07}),n.clouds.forEach((a,o)=>{const c=Dd[o],l=Ld[o];c&&(c.position.set(a.x*Mt,3.1+Math.sin(s*.9+o)*.12,a.y*Mt),l.position.set(a.x*Mt,.03,a.y*Mt))});const r=uc(n,n.selectedWizardId);if(r){Un.visible=!0,Un.position.set(r.x*Mt,.03,r.y*Mt);const a=r.stats.range*Mt;Un.scale.setScalar(a)}else Un.visible=!1;if(n.placingType){rs.visible=!0;const a=`${n.placingType}|${n.wizards.length}|${n.map.id}|${n.act}`;if(a!==yl){yl=a;const o=nn[n.placingType],c=new U("#59c96a"),l=new U("#c94d4d");let d=0;for(let u=0;u<Lr;u++)for(let h=0;h<Ir;h++)ls.setColorAt(d++,sr(n,h,u,o)?c:l);ls.instanceColor&&(ls.instanceColor.needsUpdate=!0)}}else rs.visible=!1,yl="";if(n.placingType&&n.mouseOnBoard){const a=nn[n.placingType],{cx:o,cy:c}=Zd(n.mouseX,n.mouseY);if(Pp(o,c)){const l=sr(n,o,c,a),d=Rp(o,c);qi.visible=!0,qi.position.set(d.x*Mt,0,d.y*Mt),as.scale.setScalar(a.range*Mt);const u=l?"#7dff9b":"#ff6b6b";as.material.color.set(u),Hr.material.color.set(u),Co.material.color.set(Kt[a.element].color)}else qi.visible=!1}else qi.visible=!1;bn.render(Ht,Pn)}const gg=[[[220,261.63,329.63],[174.61,220,261.63],[196,261.63,329.63],[196,246.94,293.66]],[[146.83,174.61,220],[196,233.08,293.66],[174.61,233.08,293.66],[164.81,220,277.18]],[[164.81,196,246.94],[174.61,220,261.63],[164.81,196,246.94],[146.83,174.61,220]]],yE=[7.5,7,6],ME=.5,pp=.12,SE=.22,wE=.13,EE=.07,TE=.09;let Ml=!1,Bd=!0,bg=.5,_g=!1,En=0,zd=0,Sl=0,oo=0,Xi=0,ds=0,hn=null,pi=null,Ui=null,co=null;function vg(){return Bd&&!_g?ME*bg*2:0}function wl(){const n=se.bus();!hn||!n||(hn.gain.cancelScheduledValues(n.ctx.currentTime),hn.gain.linearRampToValueAtTime(vg(),n.ctx.currentTime+.6))}const zn={start(){if(Ml)return;const n=se.musicBus()??se.bus();n&&(Ml=!0,hn=n.ctx.createGain(),hn.gain.value=vg(),hn.connect(n.target),Xi=n.ctx.currentTime+.1,ds=Xi,co=setInterval(()=>El(n.ctx),500),El(n.ctx),document.addEventListener("visibilitychange",()=>{if(!document.hidden&&hn){const e=se.bus();e&&(Xi=Math.max(Xi,e.ctx.currentTime+.05),ds=Math.max(ds,e.ctx.currentTime+.05),El(e.ctx))}}))},setEnabled(n){Bd=n,n&&zn.start(),wl()},isEnabled(){return Bd},setVolume(n){bg=Math.max(0,Math.min(1,n)),wl()},setMuted(n){_g=n,wl()},setIntensity(n){n!==En&&(En=n,IE())},setAct(n){zd=Math.max(0,Math.min(gg.length-1,n))},stop(){co&&clearInterval(co),co=null,Ml=!1}};function El(n){if(!hn)return;const e=n.currentTime+2.6,t=gg[zd],i=yE[zd];for(;Xi<e;){const r=t[Sl%t.length];AE(n,r,Xi,i),En>=4&&RE(n,r[0],Xi,i),Sl++,Xi+=i}const s=En>=4?.375:En>=3?.4:En>=2?.45:.5;for(;ds<e;){if(En>=1){const r=t[(Sl-1+t.length)%t.length],a=(En>=2&&oo%2===1?r[0]*1.5:r[0])/2;PE(n,a,ds),En>=3&&oo%4===2&&CE(n,r[(oo>>2)%r.length]*2,ds),oo++}ds+=s}}function AE(n,e,t,i){const s=En>=4;for(const r of e)for(const a of[-3,3]){const o=n.createOscillator();o.type="triangle",o.frequency.value=r,o.detune.value=a;const c=n.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(pp,t+2.2),c.gain.setValueAtTime(pp,t+i-2),c.gain.linearRampToValueAtTime(1e-4,t+i+.6);const l=n.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(s?500:750,t),l.frequency.linearRampToValueAtTime(s?380:950,t+i),o.connect(l),l.connect(c),c.connect(hn),o.start(t),o.stop(t+i+.8)}}function RE(n,e,t,i){const s=e*2,r=[[0,s],[.75,s*(16/15)],[1.5,s],[2.25,e*3],[3,s*(16/15)],[3.75,s]];for(const[a,o]of r){if(a+.5>i)break;const c=n.createOscillator();c.type="sawtooth",c.frequency.value=o;const l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=1100,l.Q.value=2;const d=n.createGain();d.gain.setValueAtTime(1e-4,t+a),d.gain.exponentialRampToValueAtTime(TE,t+a+.02),d.gain.exponentialRampToValueAtTime(1e-4,t+a+.4),c.connect(l),l.connect(d),d.connect(hn),c.start(t+a),c.stop(t+a+.45)}}function CE(n,e,t){const i=n.createOscillator();i.type="triangle",i.frequency.value=e;const s=n.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(EE,t+.03),s.gain.exponentialRampToValueAtTime(1e-4,t+.5),i.connect(s),s.connect(hn),i.start(t),i.stop(t+.55)}function PE(n,e,t){const i=n.createOscillator();i.type="sine",i.frequency.value=e;const s=n.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(SE,t+.02),s.gain.exponentialRampToValueAtTime(1e-4,t+.3),i.connect(s),s.connect(hn),i.start(t),i.stop(t+.35)}function IE(){const n=se.bus();if(!n||!hn)return;const{ctx:e}=n;if(En>=4&&!pi){pi=e.createOscillator(),pi.type="sawtooth",pi.frequency.value=55;const t=e.createBiquadFilter();t.type="lowpass",t.frequency.value=160,Ui=e.createGain(),Ui.gain.setValueAtTime(1e-4,e.currentTime),Ui.gain.linearRampToValueAtTime(wE,e.currentTime+2.5),pi.connect(t),t.connect(Ui),Ui.connect(hn),pi.start()}else if(En<4&&pi&&Ui){const t=pi;Ui.gain.linearRampToValueAtTime(1e-4,e.currentTime+1.5),setTimeout(()=>t.stop(),1800),pi=null,Ui=null}}const mp=2.5,LE=.3,DE=60,FE=.25,NE=6,UE=3,kE=25,OE=130,BE=1.5,zE=.3,GE=12,VE=Object.fromEntries(Object.entries(Ip).map(([n,e])=>[e.to,n]));function xg(n,e){const t=new Set;for(const i of n.wizards)i.family!==e||i.pendingSpecialize||t.add(VE[i.def.id]??i.def.id);return t.size}function Gd(n,e){return xg(n,e.family)>=e.needed}function Xu(n,e){return Gd(n,e)&&(n.spellCds[e.id]??0)<=0&&n.phase==="wave"}function Po(n,e,t,i,s=!1){return n.enemies.filter(r=>{if(r.hp<=0||r.phased||s&&r.def.flying)return!1;const a=i+r.def.radius;return(r.x-e)**2+(r.y-t)**2<=a*a})}function HE(n,e,t){const i=new Set;for(const c of n.wizards)c.family==="wizard"&&!c.pendingSpecialize&&i.add(c.def.element);const r=["water","lightning","ice","fire","wind"].filter(c=>i.has(c)),a=Po(n,e,t,ai.convergence.radius),o=new Map;for(const c of a){const l=r.filter(d=>(c.def.resist[d]??1)>0).length;o.set(c.id,l>0?c.maxHp*FE/l:0)}H.ring(e,t,"#c9b8ff",ai.convergence.radius),se.explosion();for(const c of r){H.burst(e,t,Kt[c].glow,12,160,3,.5);for(const l of a){if(l.hp<=0)continue;const d=Math.max(DE,o.get(l.id)??0),u=h=>{var f;return((f=l.immunities)==null?void 0:f.includes(h))??!1};if(c==="lightning"&&l.statuses.wet?(delete l.statuses.wet,n.stats.reactions.conduct++,H.floater(l.x,l.y-18,"Conduct!","#e8c3ff",13),se.conduct(),ea(n,void 0,l,d*n.reaction.conductMult,c)):ea(n,void 0,l,d,c),!(l.hp<=0)){if(c==="water"&&!u("wet"))l.statuses.burn?(delete l.statuses.burn,n.stats.reactions.evaporate++,H.floater(l.x,l.y-18,"Evaporate!","#ffffff",12),se.evaporate(),sn(n,l,n.reaction.evaporateBurst,"water")):l.statuses.wet={t:4};else if(c==="ice")!u("wet")&&!l.statuses.burn&&(l.statuses.wet={t:4}),uu(n,l,.3);else if(c==="fire"&&!u("burn"))if(l.statuses.wet)delete l.statuses.wet,n.stats.reactions.evaporate++,H.floater(l.x,l.y-18,"Evaporate!","#ffffff",12),se.evaporate(),sn(n,l,n.reaction.evaporateBurst,"fire");else{const h=l.statuses.burn;l.statuses.burn={t:2.5,dps:Math.max((h==null?void 0:h.dps)??0,8)}}}}}}function WE(n){se.gongPulse(),H.ring(480,320,"#ffd75e",400),H.floater(480,240,"🔔 GREAT GONG!","#ffd75e",18);for(const e of n.enemies){if(e.hp<=0)continue;const t=e.def.boss?mp*LE:mp,i=e.statuses.stunned;e.statuses.stunned={t:Math.max((i==null?void 0:i.t)??0,t)},H.burst(e.x,e.y,"#ffd75e",5,70,2.5,.35)}}function qE(n,e,t){se.thud(),H.ring(e,t,"#6a8f4f",ai.roots.radius),H.burst(e,t,"#4c6b38",16,120,3.5,.6),n.spellEffects.push({kind:"roots",x:e,y:t,r:ai.roots.radius,t:NE,tickT:0})}function XE(n,e,t){se.hexZap(),H.ring(e,t,Kt.void.color,ai.blackhole.radius),n.spellEffects.push({kind:"blackhole",x:e,y:t,r:ai.blackhole.radius,t:UE,pointDist:n.track.nearestDist(e,t),tickT:0})}function KE(n,e,t){n.spellEffects.push({kind:"arrowstorm",x:e,y:t,r:ai.arrowstorm.radius,t:BE,tickT:0})}const fs=[{id:"convergence",family:"wizard",name:"Elemental Convergence",icon:"🌀",desc:"Blast an area once per fielded element — together the blasts strip a quarter of each victim's health",needed:4,cooldown:40,needsTarget:!0,radius:85,color:"#c9b8ff",cast:HE},{id:"gong",family:"goblin",name:"Great Gong",icon:"🔔",desc:"Stun every enemy on the battlefield for 2.5s (bosses briefly)",needed:3,cooldown:45,needsTarget:!1,radius:0,color:"#ffd75e",cast:WE},{id:"arrowstorm",family:"archer",name:"Arrow Storm",icon:"🏹",desc:"Five volleys rain on an area — extra damage to flyers",needed:3,cooldown:35,needsTarget:!0,radius:95,color:"#e6d7b0",cast:KE},{id:"roots",family:"tree",name:"Living Roots",icon:"🌿",desc:"Roots erupt across an area for 6s, holding ground enemies fast",needed:3,cooldown:40,needsTarget:!0,radius:90,color:"#6a8f4f",cast:qE},{id:"blackhole",family:"void",name:"Black Hole",icon:"🕳️",desc:"Drags enemies backward along the road for 3s while searing them",needed:3,cooldown:45,needsTarget:!0,radius:110,color:"#e34bb2",cast:XE}],ai=Object.fromEntries(fs.map(n=>[n.id,n]));function jE(n){return ai[n]}function Ku(n,e,t=0,i=0){const s=ai[e];return!s||!Xu(n,s)?!1:(n.spellCds[e]=s.cooldown,s.cast(n,t,i),!0)}function $E(n,e){for(const t of Object.keys(n.spellCds))n.spellCds[t]>0&&(n.spellCds[t]=Math.max(0,n.spellCds[t]-e));if(n.castingSpell){const t=ai[n.castingSpell];(!t||!Xu(n,t))&&(n.castingSpell=null)}for(const t of n.spellEffects)if(t.t-=e,t.tickT=(t.tickT??0)-e,t.kind==="roots"){for(const i of Po(n,t.x,t.y,t.r,!0))if(i.def.boss){const s=i.statuses.snared;i.statuses.snared={t:Math.max((s==null?void 0:s.t)??0,.3),pct:Math.max((s==null?void 0:s.pct)??0,.6)}}else{const s=i.statuses.entangled;i.statuses.entangled={t:Math.max((s==null?void 0:s.t)??0,.25)}}t.tickT<=0&&(t.tickT=.4,H.ring(t.x,t.y,"#6a8f4f",t.r))}else if(t.kind==="blackhole"){const i=t.pointDist??0;for(const s of Po(n,t.x,t.y,t.r))sn(n,s,kE*e,"void"),s.hp>0&&!s.def.flying&&s.dist>i&&(s.dist=Math.max(i,s.dist-OE*e));t.tickT<=0&&(t.tickT=.3,H.ring(t.x,t.y,Kt.void.color,t.r*.7),H.burst(t.x,t.y,"#9b30e8",6,-90,2.5,.4))}else if(t.kind==="arrowstorm"&&t.tickT<=0){t.tickT=zE,se.bowTwang();for(let i=0;i<6;i++){const s=i/6*Math.PI*2;H.burst(t.x+Math.cos(s)*t.r*.5,t.y+Math.sin(s)*t.r*.5,"#e6d7b0",3,60,2,.3)}for(const i of Po(n,t.x,t.y,t.r))sn(n,i,GE*(i.def.flying?1.5:1),"physical")}n.spellEffects=n.spellEffects.filter(t=>t.t>0)}const JE=["fire","ice","lightning","water","wind","physical","void"];let os;function YE(){var n,e;os=document.getElementById("grove-modal"),(n=document.getElementById("btn-grove"))==null||n.addEventListener("click",gp),(e=document.getElementById("btn-grove-over"))==null||e.addEventListener("click",gp)}function gp(){Vd(ms()),os.classList.remove("hidden"),se.click()}function Vd(n){const e=Up.map(t=>{const i=lc(n,t.id),s=t.costs.length,r=kp(n,t),a=Array.from({length:s},(d,u)=>u<i?"●":"○").join(""),o=Math.min(i,s-1),c=r===null?'<span class="gv-maxed">MAXED</span>':`<button class="gv-buy" data-perk="${t.id}" ${n.essence<r?"disabled":""}>${r} ✦</button>`,l=t.id==="attune"&&i>0?ZE(n):"";return`
      <div class="gv-perk">
        <div class="gv-icon">${t.icon}</div>
        <div class="gv-info">
          <div class="gv-name">${t.name} <span class="gv-pips">${a}</span></div>
          <div class="gv-desc">${t.desc(o)}</div>
          ${l}
        </div>
        ${c}
      </div>`}).join("");os.innerHTML=`
    <div id="grove-inner">
      <h2>🌳 Warden's Grove</h2>
      <div id="gv-balance">✦ <b>${n.essence}</b> essence <span id="gv-lifetime">· ${n.lifetimeEssence} lifetime</span></div>
      <div id="gv-perks">${e}</div>
      <div id="gv-note">Every run earns essence — win or lose. New perks take effect on your next run.</div>
      <button id="gv-close">Back</button>
    </div>`,os.querySelector("#gv-close").addEventListener("click",()=>{os.classList.add("hidden"),se.click()}),os.querySelectorAll(".gv-buy").forEach(t=>{t.addEventListener("click",()=>{const i=ms();l0(i,t.dataset.perk)&&(se.upgrade(),Vd(i))})}),os.querySelectorAll(".gv-el").forEach(t=>{t.addEventListener("click",()=>{const i=ms();i.attunedElement=t.dataset.el,tu(i),se.click(),Vd(i)})})}function ZE(n){return`<div class="gv-attune">${JE.map(t=>{const i=Kt[t],s=n.attunedElement===t;return`<button class="gv-el ${s?"active":""}" data-el="${t}"
      style="border-color:${i.color};${s?`background:${i.color}33`:""}" title="${i.name}">${i.name}</button>`}).join("")}</div>`}const yg=["Q","W","E","R","T"];let Io,Mg=[],bp,_p="",vp=null,Tl=new Set,xp=0;function QE(n){bp=n,Io=document.getElementById("spell-bar"),Io.innerHTML="",Mg=fs.map((e,t)=>{const i=document.createElement("button");return i.className="spell-btn",i.innerHTML=`<span class="sp-key">${yg[t]}</span>${e.icon}<span class="sp-cd hidden"></span>`,i.addEventListener("click",()=>bp(e.id)),Io.appendChild(i),i})}function eT(n){if(n!==vp&&(vp=n,Tl=new Set),n.castingSpell&&n.mouseOnBoard){const i=fs.find(r=>r.id===n.castingSpell),s=performance.now();i&&i.radius>0&&s-xp>150&&(xp=s,H.ring(n.mouseX,n.mouseY,i.color,i.radius))}const e=fs.map(i=>{const s=Gd(n,i),r=Math.ceil(n.spellCds[i.id]??0);return`${s?1:0}${r}`}).join("|")+`|${n.castingSpell}|${n.phase}`;if(e===_p)return;_p=e;let t=!1;fs.forEach((i,s)=>{const r=Mg[s],a=Gd(n,i);if(r.style.display=a?"":"none",!a)return;t=!0,Tl.has(i.id)||(Tl.add(i.id),r.classList.add("pop"),setTimeout(()=>r.classList.remove("pop"),700),H.floater(480,150,`${i.icon} ${i.name} unlocked!`,i.color,16),se.upgrade());const o=n.spellCds[i.id]??0,c=o<=0&&n.phase==="wave",l=r.querySelector(".sp-cd");l.classList.toggle("hidden",o<=0),l.style.display=o>0?"":"none",o>0&&(l.textContent=String(Math.ceil(o))),r.disabled=!c,r.classList.toggle("ready",c),r.classList.toggle("casting",n.castingSpell===i.id),r.title=`${i.name} [${yg[s]}] — ${i.desc}`+(c?"":o>0?` (recharging ${Math.ceil(o)}s)`:n.phase!=="wave"?" (casts during waves)":"")+` · needs ${i.needed} different ${i.family} towers (have ${xg(n,i.family)})`}),Io.classList.toggle("hidden",!t)}let Sg,wg,Eg,ln,Tg,yp="";function tT(n){Sg=document.getElementById("hud-gold"),wg=document.getElementById("hud-lives"),Eg=document.getElementById("hud-round"),ln=document.getElementById("btn-start"),Tg=document.getElementById("wave-preview"),ln.addEventListener("click",n)}function nT(n){var r;const e=`${n.gold}|${n.lives}|${n.round}|${n.act}|${n.phase}|${((r=n.waveModifier)==null?void 0:r.id)??""}|${n.nodeChoice}|${n.nodePicked}`;if(e===yp)return;yp=e,document.body.dataset.act=String(n.act);const t=eu(n.act),i=Vp(n)?`Act ${["I","II","III"][n.act]??n.act+1} · `:"";Sg.textContent=String(n.gold),wg.textContent=String(n.lives),Eg.textContent=`${i}${Math.min(n.round+1,t)}/${t}`;const s=n.round===t-1;if(n.phase==="build"&&n.round<t){const a=!n.nodePicked&&n.nextNodes.length>1;ln.disabled=a;const o=s?" 👹 BOSS":n.nodeChoice==="elite"?" ★":n.nodeChoice==="treasure"?" 💎":"";ln.textContent=a?"Choose your path…":`Start Wave ${n.round+1}${o}`,Tg.innerHTML=iT(n)}else n.phase==="wave"?(ln.disabled=!0,ln.textContent=n.waveModifier?`W${n.round+1} ★ ${n.waveModifier.name} (${n.waveModifier.desc})`:s?"👹 BOSS — hold the line!":`Wave ${n.round+1} — Defend!`):n.phase==="draft"?(ln.disabled=!0,ln.textContent="Choose a card…"):n.phase==="relic"?(ln.disabled=!0,ln.textContent="Claim your relic…"):n.phase==="actClear"?(ln.disabled=!0,ln.textContent=`Act ${["I","II","III"][n.act]} complete!`):(ln.disabled=!0,ln.textContent=n.phase==="won"?"Victory!":"Defeat")}function iT(n){const e=cc(n.act)[n.round];if(!e)return"";const t=new Map;for(const s of e)t.set(s.type,(t.get(s.type)??0)+s.count);const i=[];for(const[s,r]of t){const a=hc[s];i.push(`${r}× ${a.name}${sT(s)}`)}return`<b>Next wave:</b> ${i.join(", ")}`}function sT(n){switch(n){case"knight":return" <i>(armored — burn them!)</i>";case"shade":return" <i>(fire-immune!)</i>";case"runner":return" <i>(fast — chill them!)</i>";case"golem":return" <i>(BOSS)</i>";case"golemling":return" <i>(mini-boss)</i>";case"warlord":return" <i>(BOSS — armor breaks to PHYSICAL only, lobs tower-stunning grenades!)</i>";case"pyretitan":return" <i>(BOSS — fire-immune, periodically SHIELDS: pelt it with fast attacks!)</i>";case"colossus":return" <i>(THE BOSS — armored, fire-hardened, plants healing Heartstones: snipe them!)</i>";case"heartstone":return" <i>(heal-crystal — destroy it fast!)</i>";case"frostshaman":return" <i>(his cold SLOWS your towers — kill him first!)</i>";case"burrower":return" <i>(tunnels underground — untargetable and fast below!)</i>";case"mirrorslime":return" <i>(magic kills SPLIT it — finish with physical!)</i>";case"orcbrute":return" <i>(armored — physical!)</i>";case"troll":return" <i>(armored + REGENERATES — crack, then burst!)</i>";case"warwagon":return" <i>(carrier — kill it EARLY, leaks -8!)</i>";case"siegetower":return" <i>(unloads orcs as it rolls, leaks -10!)</i>";case"orcshaman":return" <i>(HEALER — focus him first!)</i>";case"wardrummer":return" <i>(hastens the horde — silence the drums)</i>";case"wraith":return" <i>(phases out — spread your damage)</i>";case"gargoyle":return" <i>(FLIES straight across — archers ready!)</i>";case"drake":return" <i>(fast FLYER, burn-proof — arrows up!)</i>";case"hexer":return" <i>(SILENCES towers — kill him first!)</i>";case"banshee":return" <i>(death-wail silences — kill her at range!)</i>";case"slime_big":return" <i>(splits, and splits again)</i>";case"necromancer":return" <i>(raises the dead as he walks)</i>";case"thief":return" <i>(steals GOLD and runs — catch him!)</i>";case"shieldbearer":return" <i>(ward caps your big hits)</i>";default:return""}}const Ag=new Map;function rT(n){const e=document.getElementById("shop");e.innerHTML="";for(const t of Pl){const i=nn[t],s=Kt[i.element],r=document.createElement("div");r.className="shop-card",r.innerHTML=`
      <div class="shop-icon" style="background:${s.color}22;border:2px solid ${s.color}">
        <img src="${en(`icons/portrait_${i.id}.png`)}" onerror="this.remove()" alt="" /><span>${i.icon}</span>
      </div>
      <div class="shop-info">
        <div class="shop-name">${i.name}</div>
        <div class="shop-desc">${i.desc}</div>
      </div>
      <div class="shop-cost">${i.cost}</div>
    `,r.title=`${i.name} — ${i.desc}`,r.addEventListener("click",()=>n(t)),e.appendChild(r),Ag.set(t,r)}}function aT(n){for(const[e,t]of Ag){const i=nn[e];t.classList.toggle("unaffordable",n.gold<i.cost),t.classList.toggle("selected",n.placingType===e)}}const oT=["first","last","strong","close"],cT={first:"First",last:"Last",strong:"Strong",close:"Close"};let us,lo="",Rg,Cg,Pg,Ig;function lT(n){us=document.getElementById("tower-panel"),Rg=n.upgrade,Cg=n.sell,Pg=n.mode,Ig=n.evolve}function dT(n){const e=uc(n,n.selectedWizardId);if(!e||e.pendingSpecialize){lo!==""&&(us.classList.add("hidden"),lo="");return}const t=lu(n,e),i=`${e.id}|${e.def.id}|${e.tiers[0]}|${e.tiers[1]}|${e.mode}|${uT(n,e)}|${t?`${t.ok}${t.cost}`:""}`;i!==lo&&(lo=i,us.classList.remove("hidden"),hT(n,e))}function uT(n,e){return[0,1].map(t=>{const i=e.def.upgrades[t].tiers[e.tiers[t]];return i?n.gold>=i.cost?"y":"n":"x"}).join("")}function hT(n,e){const t=e.stats,i=[`Dmg <b>${Math.round(t.damage)}</b>`,`Rate <b>${t.rate.toFixed(2)}s</b>`,`Range <b>${Math.round(t.range)}</b>`];t.splash>0&&i.push(`Splash <b>${Math.round(t.splash)}</b>`),t.chains>0&&i.push(`Chains <b>${t.chains}</b>`),t.burnDps>0&&i.push(`Burn <b>${t.burnDps}/s × ${t.burnDuration.toFixed(0)}s</b>`),t.chillPct>0&&i.push(`Chill <b>${Math.round(t.chillPct*100)}%</b>`),e.def.pierce&&i.push("<b>Pierces</b>"),t.entangleDur>0&&i.push(`Root <b>${t.entangleDur.toFixed(1)}s</b>`),t.rootSlow>0&&i.push(`Slow <b>${Math.round(t.rootSlow*100)}%</b>`),us.innerHTML=`
    <div class="tp-title">${e.def.icon} ${e.def.name}</div>
    <div class="tp-stats">${i.join(" · ")}</div>
    <div class="tp-modes">${oT.map(r=>`<button class="tp-mode${e.mode===r?" active":""}" data-mode="${r}">${cT[r]}</button>`).join("")}</div>
    <div id="tp-upgrades"></div>
    <button class="tp-sell">Sell for ${nm(e)} ◉</button>
  `,us.querySelectorAll(".tp-mode").forEach(r=>{r.addEventListener("click",()=>Pg(e,r.dataset.mode))}),us.querySelector(".tp-sell").addEventListener("click",()=>Cg(e));const s=us.querySelector("#tp-upgrades");if(e.def.isEvolved){const r=document.createElement("div");r.className="tp-evolved-tag",r.textContent="★ EVOLVED ★",s.appendChild(r)}else{[0,1].forEach(a=>{const o=e.def.upgrades[a],c=e.tiers[a],l=o.tiers[c],d=document.createElement("div");d.className="tp-upgrade";const u=l?c:o.tiers.length-1,h=`<img class="tp-upg-icon" src="${en(`icons/upg_${e.def.id}_${a}_${u}.png`)}" onerror="this.style.display='none'" alt="" />`;if(!l)d.classList.add("maxed"),d.innerHTML=`
          ${h}<div><div class="tp-upg-name">${o.name} ★MAX</div>
          <div class="tp-upg-desc">All ${o.tiers.length} tiers owned</div></div>`;else{const f=n.gold>=l.cost;f||d.classList.add("unaffordable"),d.innerHTML=`
          ${h}<div style="flex:1"><div class="tp-upg-name">${o.name} ${c+1}/${o.tiers.length}: ${l.name}</div>
          <div class="tp-upg-desc">${l.desc}</div></div>
          <div class="tp-upg-cost">${l.cost}</div>`,f&&d.addEventListener("click",()=>Rg(e,a))}s.appendChild(d),s.appendChild(document.createTextNode(" "))});const r=lu(n,e);if(r&&(r.ok||e.tiers[0]+e.tiers[1]>0)){const a=document.createElement("button");a.className="tp-evolve",a.disabled=!r.ok,a.innerHTML=r.ok?`⬆ EVOLVE — ${r.cost} ◉${r.discounted?" (card bonus!)":""}`:`⬆ Evolve: ${r.reason} (${r.cost} ◉${r.discounted?", card bonus":""})`,r.ok&&a.addEventListener("click",()=>Ig(e)),s.appendChild(a)}}}let Hd,Wd,qd,Mp="";function fT(n){Hd=document.getElementById("overlay"),Wd=document.getElementById("overlay-title"),qd=document.getElementById("overlay-text"),document.getElementById("btn-restart").addEventListener("click",n)}function pT(n){const e=n.phase==="won"||n.phase==="lost"?n.phase:"";if(e===Mp)return;if(Mp=e,!e){Hd.classList.add("hidden");return}Hd.classList.remove("hidden"),fu();const t=ms(),i=d0(n.stats,n.act,e==="won");c0(t,i);const s=`<div class="sum-line sum-essence">✦ Essence earned <b>+${i}</b> · grove total ${t.essence}</div>`;e==="won"?(Wd.textContent="🏆 Victory!",qd.innerHTML=`The realm stands! ${n.lives} lives to spare.${Sp(n,s)}`):(Wd.textContent="💀 Defeat",qd.innerHTML=`The horde broke through on wave ${n.round+1}.${Sp(n,s)}`)}function Sp(n,e=""){var c;const t=n.stats,i=Object.entries(t.dmgByElement).filter(([,l])=>l>0);i.sort((l,d)=>d[1]-l[1]);const s=((c=i[0])==null?void 0:c[1])??1,r=i.map(([l,d])=>`
      <div class="sum-bar-row">
        <span class="sum-bar-label">${Kt[l].name}</span>
        <div class="sum-bar"><div style="width:${Math.max(4,d/s*100)}%;background:${Kt[l].color}"></div></div>
        <span class="sum-bar-val">${Math.round(d)}</span>
      </div>`).join(""),a=t.cardIds.map(l=>iu.find(d=>d.id===l)).filter(Boolean).map(l=>`<span class="sum-card" title="${l.name}">${l.icon}</span>`).join(""),o=t.reactions;return`
    <div id="run-summary">
      ${e}
      <div class="sum-line">Waves <b>${t.wavesCleared}</b> · Kills <b>${t.kills}</b> · Leaks <b>${t.leaks}</b></div>
      <div class="sum-line">💫 Conduct ×${o.conduct} · 💎 Shatter ×${o.shatter} · ♨️ Evaporate ×${o.evaporate} · 🧊 Frozen ×${o.frozen}</div>
      ${r?`<div class="sum-section">Damage by element</div>${r}`:""}
      ${a?`<div class="sum-section">Cards drafted (${t.cardIds.length})</div><div class="sum-cards">${a}</div>`:""}
    </div>`}const rc=new URLSearchParams(location.search).get("map"),ju=rc&&Cp(rc)||void 0,Lg=nu(ms()),Al=nb(),Xd=Al&&(!rc||rc===Al.mapId)?ib(Al,Lg):null;let X=Xd??dc(ju,void 0,Lg);const Hn=document.getElementById("board");Hn.addEventListener("mousemove",n=>{const e=sc(n.offsetX,n.offsetY);e?(X.mouseX=e.x,X.mouseY=e.y,X.mouseOnBoard=!0):X.mouseOnBoard=!1});Hn.addEventListener("mouseleave",()=>{X.mouseOnBoard=!1});const mT=window.matchMedia("(pointer: coarse)").matches;let Yt=null;function Dg(n,e,t=!1){if(!X.placingType)return!1;const i=nn[X.placingType],s=Dl(X,i.cost);if(!sr(X,n,e,i)||!na(X,s))return!1;tm(X,s),X.firstTowerBought=!0;const r=au(X,i,n,e);return r.invested=s,X.wizards.push(r),H.burst(r.x,r.y,i.color,14,120,3),se.place(),(!t||!na(X,Dl(X,i.cost)))&&(X.placingType=null),X.selectedWizardId=r.id,Yt=null,!0}Hn.addEventListener("click",n=>{if(pa){pa=!1;return}const e=sc(n.offsetX,n.offsetY);if(!e){X.placingType||(X.selectedWizardId=null),X.castingSpell=null;return}if(X.castingSpell){Ku(X,X.castingSpell,e.x,e.y),X.castingSpell=null;return}const{cx:t,cy:i}=Zd(e.x,e.y);if(!Pp(t,i))return;if(X.placingType){const r=nn[X.placingType];if(mT&&(X.mouseX=e.x,X.mouseY=e.y,X.mouseOnBoard=!0,!Yt||Yt.cx!==t||Yt.cy!==i)){Yt={cx:t,cy:i},sr(X,t,i,r)||H.floater(e.x,e.y-26,"can't build here","#ff9db5",12);return}Dg(t,i,n.shiftKey);return}const s=Wp(X,t,i);X.selectedWizardId=s?s.id:null});const Qn=new Map;let Zr=0,ac=!1,pa=!1,Rl=0,wp=0,Ep=0;Hn.addEventListener("pointerdown",n=>{if(Qn.set(n.pointerId,{x:n.offsetX,y:n.offsetY}),ac=!1,Qn.size===2){const[e,t]=[...Qn.values()];Zr=Math.hypot(e.x-t.x,e.y-t.y)}});Hn.addEventListener("pointermove",n=>{const e=Qn.get(n.pointerId);if(!e)return;if(Qn.size===2){Qn.set(n.pointerId,{x:n.offsetX,y:n.offsetY});const[s,r]=[...Qn.values()],a=Math.hypot(s.x-r.x,s.y-r.y);Zr>0&&a>0&&va(a/Zr,(s.x+r.x)/2,(s.y+r.y)/2),Zr=a,pa=!0;return}const t=n.offsetX-e.x,i=n.offsetY-e.y;Math.abs(t)+Math.abs(i)>6&&(ac=!0),ac&&fg()>1.01&&(gE(t,i),pa=!0),Qn.set(n.pointerId,{x:n.offsetX,y:n.offsetY})});const Fg=n=>{Qn.delete(n.pointerId),Zr=0};Hn.addEventListener("pointerup",Fg);Hn.addEventListener("pointercancel",Fg);Hn.addEventListener("pointerup",n=>{if(n.pointerType!=="touch"||ac||Qn.size>0||X.placingType)return;const e=performance.now();e-Rl<300&&Math.hypot(n.offsetX-wp,n.offsetY-Ep)<30?(va(fg()>1.5?.01:2.2,n.offsetX,n.offsetY),pa=!0,Rl=0):(Rl=e,wp=n.offsetX,Ep=n.offsetY)});Hn.addEventListener("wheel",n=>{n.preventDefault(),va(n.deltaY<0?1.15:1/1.15,n.offsetX,n.offsetY)},{passive:!1});document.getElementById("zoom-in").addEventListener("click",()=>va(1.4));document.getElementById("zoom-out").addEventListener("click",()=>va(1/1.4));document.getElementById("zoom-reset").addEventListener("click",()=>bE());const gT=document.getElementById("place-confirm"),Kd=document.getElementById("pc-build");document.getElementById("pc-cancel").addEventListener("click",()=>{Yt=null});Kd.addEventListener("click",()=>{Yt&&Dg(Yt.cx,Yt.cy)});function bT(){const n=Yt!==null&&X.placingType!==null;if(gT.classList.toggle("hidden",!n),n&&X.placingType){const e=nn[X.placingType],t=Dl(X,e.cost),i=sr(X,Yt.cx,Yt.cy,e)&&na(X,t);Kd.disabled=!i,Kd.textContent=i?`✓ Build ${e.name} · ${t} ◉`:"✕ blocked spot"}}Hn.addEventListener("contextmenu",n=>{n.preventDefault(),X.placingType=null,X.selectedWizardId=null,X.castingSpell=null,Yt=null});const _T=["q","w","e","r","t"];window.addEventListener("keydown",n=>{if(n.key==="Escape")X.placingType=null,X.selectedWizardId=null,X.castingSpell=null,Yt=null;else if(n.key===" ")n.preventDefault(),pu(X);else if(n.key>="1"&&n.key<=String(Pl.length))Ng(Pl[Number(n.key)-1]);else{const e=_T.indexOf(n.key.toLowerCase());e>=0&&fs[e]&&Ug(fs[e].id)}});function Ng(n){if(X.phase==="won"||X.phase==="lost")return;const e=nn[n];na(X,e.cost)&&(X.placingType=X.placingType===n?null:n,X.selectedWizardId=null,X.castingSpell=null,Yt=null)}function Ug(n){const e=jE(n);!e||!Xu(X,e)||(e.needsTarget?(X.castingSpell=X.castingSpell===n?null:n,X.placingType=null,Yt=null,se.click()):Ku(X,n))}rT(Ng);QE(Ug);YE();tT(()=>pu(X));lb(()=>{ys(X),X.autoplay&&(X.autoplayTimer=1.2)});hb(()=>{ys(X)});gb(()=>{ys(X),X.autoplay&&(X.autoplayTimer=1.2)});wb(()=>{ys(X)});Ab();Lb(n=>{g0(n)&&(qu(n),H.clear(),H.floater(480,120,`⚑ ${n.map.name} — Act ${["I","II","III"][n.act]}`,"#7dff9b",16),ys(n))});var Tp;(Tp=document.getElementById("btn-newrun"))==null||Tp.addEventListener("click",()=>{fu(),X=dc(ju,void 0,nu(ms())),qu(X),H.clear(),se.click()});Xd&&H.floater(480,120,`▶ Run resumed — Wave ${Xd.round+1}`,"#7dff9b",15);fT(()=>{fu(),X=dc(ju,void 0,nu(ms())),qu(X),H.clear()});const jd=document.getElementById("map-select");for(const n of Qg()){const e=document.createElement("option");e.value=n.id,e.textContent=(n.custom?"✏️ ":"")+n.name,n.id===(X.map.id??"vale")&&(e.selected=!0),jd.appendChild(e)}jd.addEventListener("change",()=>{location.href=`${location.pathname}?map=${encodeURIComponent(jd.value)}`});lT({upgrade(n,e){const t=n.def.upgrades[e].tiers[n.tiers[e]];!t||!tm(X,t.cost)||(n.tiers[e]++,n.invested+=t.cost,n.stats=ji(n.def,n.tiers),H.burst(n.x,n.y,"#c9b8ff",12,110,3),H.floater(n.x,n.y-24,t.name+"!","#c9b8ff",12),se.upgrade())},sell(n){ob(X,n),se.sell()},mode(n,e){n.mode=e,se.click()},evolve(n){const e=n.def.name;M0(X,n)&&(H.ring(n.x,n.y,"#ffd75e",60),H.burst(n.x,n.y,"#ffd75e",24,180,4,.7),H.floater(n.x,n.y-34,`${e} → ${n.def.name}!`,"#ffd75e",15),se.win(),ys(X))}});function vT(n){X.speed=n,document.querySelectorAll(".btn-speed").forEach(e=>e.classList.toggle("active",Number(e.dataset.speed)===n))}document.querySelectorAll(".btn-speed").forEach(n=>{n.addEventListener("click",()=>vT(Number(n.dataset.speed)))});const kg=()=>{se.init(),zn.start()};window.addEventListener("pointerdown",kg,{once:!0});window.addEventListener("keydown",kg,{once:!0});const Og="wizardtd.audio",Rt=(()=>{try{return{sfx:.5,music:.5,muted:!1,musicOn:!0,...JSON.parse(localStorage.getItem(Og)??"{}")}}catch{return{sfx:.5,music:.5,muted:!1,musicOn:!0}}})();function Sc(){try{localStorage.setItem(Og,JSON.stringify(Rt))}catch{}}const Bg=document.getElementById("btn-music"),zg=document.getElementById("btn-mute"),$d=document.getElementById("vol-slider"),Jd=document.getElementById("music-slider");function $u(){zg.textContent=Rt.muted?"🔇":"🔊",Bg.style.opacity=Rt.musicOn?"1":"0.4",$d.value=String(Math.round(Rt.sfx*100)),Jd.value=String(Math.round(Rt.music*100))}se.setVolume(Rt.sfx);se.setMuted(Rt.muted);zn.setVolume(Rt.music);zn.setEnabled(Rt.musicOn);zn.setMuted(Rt.muted);$u();Bg.addEventListener("click",()=>{Rt.musicOn=!Rt.musicOn,zn.setEnabled(Rt.musicOn),$u(),Sc()});zg.addEventListener("click",()=>{Rt.muted=!Rt.muted,se.setMuted(Rt.muted),zn.setMuted(Rt.muted),$u(),Sc()});$d.addEventListener("input",()=>{Rt.sfx=Number($d.value)/100,se.setVolume(Rt.sfx),Sc()});Jd.addEventListener("input",()=>{Rt.music=Number(Jd.value)/100,zn.setVolume(Rt.music),Sc()});document.getElementById("chk-auto").addEventListener("change",n=>{X.autoplay=n.target.checked,X.autoplay&&X.phase==="build"&&(X.autoplayTimer=.8)});function Gg(n){X.phase==="build"&&Xp(X);const e=X.phase==="build"&&!X.nodePicked&&X.nextNodes.length>1;if(X.phase==="won"||X.phase==="lost"||X.phase==="draft"||X.phase==="relic"||X.phase==="actClear"||X.pendingEvent!==null||e){H.update(n);return}rb(X,n),B0(X,n),G0(X,n),$0(X,n),$E(X,n),eb(X,n),H.update(n)}function Vg(){zn.setAct(X.act),zn.setIntensity(X.phase!=="wave"?0:X.round===eu(X.act)-1?4:1+Math.min(2,Math.floor(X.round/2))),xE(X),bT(),nT(X),eT(X),aT(X),dT(X),db(X),fb(X),_b(X),Eb(X),Rb(X),Db(X),pT(X)}const xT=document.getElementById("loading"),yT=document.getElementById("loading-fill"),Cl=document.getElementById("loading-text");_E(Hn,X,(n,e)=>{yT.style.width=`${Math.round(n/e*100)}%`,Cl.textContent=`Summoning defenders… ${n}/${e}`}).then(()=>{xT.remove(),MT(),n0(Gg,Vg,()=>X.speed)}).catch(n=>{console.error("renderer failed to initialize",n),Cl.textContent=`Failed to load game assets: ${(n==null?void 0:n.message)??n}. Check your connection and refresh.`,Cl.style.color="#ff9db5"});function MT(){const n="wizardtd.hintSeen";if(!window.matchMedia("(pointer: coarse)").matches||localStorage.getItem(n))return;const t=document.getElementById("gesture-hint");t.classList.remove("hidden"),document.body.dataset.hint="1",document.getElementById("gh-ok").addEventListener("click",()=>{t.classList.add("hidden"),delete document.body.dataset.hint,localStorage.setItem(n,"1"),se.click()},{once:!0})}"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").catch(()=>{});Object.defineProperty(window,"__game",{get:()=>X});window.__fx=H;window.__computeStats=ji;window.__audio={sfx:se,music:zn};window.__place=(n,e,t)=>{const i=nn[n];if(!i||!sr(X,e,t,i))return null;const s=au(X,i,e,t);return X.wizards.push(s),s.id};window.__cast=(n,e=0,t=0)=>Ku(X,n,e,t);window.__spawn=(n,e=200)=>{const t=hc[n];if(!t)return null;const i=X.track.posAt(Math.min(e,X.track.total-1)),s={id:X.nextId++,def:t,hp:t.hp,maxHp:t.hp,dist:e,x:i.x,y:i.y,statuses:{},wobble:0,animT:0,angle:i.angle,hitFlash:0,armorHp:t.armor};return X.enemies.push(s),s.id};window.__specialize=(n,e)=>{var s;const t=uc(X,n),i=((s=t==null?void 0:t.specializeOptions)==null?void 0:s.find(r=>r.id===e))??nn[e];return!t||!i?!1:(qp(X,t,i),!0)};window.__step=n=>{const e=.016666666666666666,t=Math.min(60*600,Math.round(n/e));for(let i=0;i<t;i++)Gg(e);return Vg(),{phase:X.phase,enemies:X.enemies.length,round:X.round}};
