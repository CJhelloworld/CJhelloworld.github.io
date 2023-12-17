const e="Simulateur de v\u0153ux Genshin Impact",n="Personnage",t="Arme",s="Vision",a="An\xE9mo",i="Cryo",o="Dendro",r="\xC9lectro",u="Hydro",l="G\xE9o",d="Pyro",p="Arc",c="Catalyseur",m="\xC9p\xE9e \xE0 deux mains",b="\xC9p\xE9e \xE0 une main",v="Arme d'hast",g="Extra",h="Obtenu",f="En attente",x="Connexion Echou\xE9e!",y="Confirmer",q="Annuler",z="Tous les \xE9l\xE9ments utilis\xE9s sur ce site sont la propri\xE9t\xE9 de miHoYo.",j="Il s'agit simplement d'une application r\xE9alis\xE9e par un fan, amusez-vous bien !",T="Appuyez n'importe o\xF9 dans la zone vide pour continuer",C="Instructions pour l'installation sur l'\xE9cran d'accueil/le bureau",w="Partager",P="Prendre une photo",S="Enregistrement",L="R\xE9compense pour le premier partage : {qty}",A="Version",V="Faire un don",D={beginner:"V\u0153ux\u2008pour les d\xE9butants",wanderlust:"Envie\u2008de voyage","epitome-invocation":"Incarnation divine","adrift-in-the-harbor":"Doute passager","auric-blaze":"Brasier aurique","azure-excursion":"Excursion azur\xE9e","ballad-in-goblets":"Ballade en pintes","born-of-ocean-swell":"Flots dansants","caution-in-confidence":"Prudence\u2008en toute confidence","chanson-of-many-waters":"Chant\u2008de toutes les eaux","conjuring-chiaroscuro":"Conjuring Chiaroscuro","dance-of-lantern":"Danse\u2008des lanternes","decree-of-the-deeps":"D\xE9cret\u2008des profondeurs","discerner-of-enigmas":"Discerneuse d'\xE9nigmes","drifting-luminescence":"Luminescence\u2008\xE0 la d\xE9rive","everbloom-violet":"Infinit\xE9 violette","farewell-of-snezhnaya":"Adieux au Nord","from-ashes-reborn":"Renaissant des cendres","gentry-of-hermitage":"Monts et march\xE9s","immaculate-pulse":"Pouls immacul\xE9","invitation-to-mundane-life":"Invitation scintillante","leaves-in-the-wind":"Feuilles\u2008dans le vent","moment-of-bloom":"Floraison \xC9carlate","oni_s-royale":"Baroud d'Oni","reign-of-serenity":"R\xE8gne\u2008de s\xE9r\xE9nit\xE9","secretum-secretorum":"Nouvelles myst\xE9rieuses","sparkling-steps":"Foul\xE9es \xE9tincelantes","tapestry-of-golden-flames":"Draperie d'\xE9tincelles dor\xE9es","tempestuous-destiny":"Destin tumultueux","the-heron_s-court":"Prestance du h\xE9ron","the-moongrass-enlightenment":"Dessillement\u2008de l'herbe lunaire","the-transcendent-one-returns":"Retour\u2008de la sublim\xE9e","twilight-arbiter":"Arbitre\u2008du cr\xE9puscule","twirling-lotus":"Lotus tournoyant","viridescent-vigil":"Veill\xE9e \xE9cologique"},N={bannerConfig:"{banner} Configuration",baseRate:"{rarity}-Star Base Rate:",maxPity:"{rarity}-Star Max Pity:",hardPity:"Boost {rarity}-Star rate starts from pity:",currentPity:"{rarity}-Star Current Pity",winRate:"Chance to get Featured Item:",charRate:"Chance to get Character instead of Weapon",nonRateup:"(When losing 4-Star Item)",selectedRate:"Selected Weapon Rate:",guaranteedSystem:"Guaranteed System",backToDefault:"Back to Default",resetPrompt:'Are you sure to Reset <b>"{banner}"</b> probabilities back to default?',default:"Default",never:"Never",always:"Always"},R={wishTitle:"V\u0153ux",rollButton:"Faire {count} v\u0153u(x)",stellaFortuna:"Stella Fortuna du personnage correspondant",loadFailed:"\xC9chec du chargement de la banni\xE8re ! <br /> Veuillez passer \xE0 une autre banni\xE8re ou vous reconnecter \xE0 l'internet pour \xE9viter les erreurs !",loadMeteor:"Load Meteor",skipMeteor:"Skip Meteor",loadMeteorMsg:"Loading <span>{star} Star Meteor Animation </span>",meteorNotLoaded:"Can't find Meteor Animation in your storage, <span> Load the Meteor</span> first before wishing, or <span> Turn ON </span> the option to skip Meteor Animation!",preloadFilesMsg:"* Loaded files will be stored to Browser Storage, so you don't need to load them again until the site update.",banner:{text:"Banni\xE8re",allBanner:"Toutes les banni\xE8res",previous:"Banni\xE8res pr\xE9c\xE9dentes",findBanner:"Trouver une banni\xE8re",group:"Groupe",beginner:"V\u0153ux\u2008pour les d\xE9butants","character-event":"V\u0153ux \xE9v\xE9nements de personnage","weapon-event":"V\u0153ux \xE9v\xE9nements d'arme",standard:"V\u0153ux permanents",wishDescription:"Garantie d'obtention d'un personnage 4* ou plus tous les 10 v\u0153ux",novice:"V\u0153ux des d\xE9butants",up:"UP!",beginnerSet:"-20% sur 10 v\u0153ux cons\xE9cutifs. Garantie d'obtention de {character} dans la premi\xE8re s\xE9rie de 10 v\u0153ux.",beginnerNote:"Comme doit l'\xEAtre une servante.",beginnerChance:"Tentatives restantes: {chances}",standardNote:"Standard whises have no time limit.",allWeaponTypes:"Tous types d'arme",etc:"etc.",probIncreased:"Chance d'obtention augment\xE9e !",eventNote:"Les personnages 5* exclusifs de l'\xE9v\xE9nement ne peuvent qu'\xEAtre obtenus pendant une p\xE9riode limit\xE9e par le biais de v\u0153ux sp\xE9cifiques. Pour en savoir plus, rendez-vous dans les d\xE9tails de l'\xE9v\xE9nement.",viewDetails:"Pour en savoir plus, rendez-vous dans les d\xE9tails de l'\xE9v\xE9nement."},epitomizedPath:{text:"Chemin divin",fatePoint:"Points de destin",cancelPrompt:"Souhaitez-vous annuler la s\xE9lection actuelle ?",cancelDesc:"Vos points de destin seront r\xE9initialis\xE9s apr\xE8s l'annulation",selectWeapon:"Choisir une arme",chartCourseOf:"Vous obtiendez : {target}",cancelCourse:"R\xE9initialiser",chartCourse:"Choisir",courseSetFor:"Chemin d\xE9fini pour: {selectedCourse}",description:["Le Chemin divin est un nouveau m\xE9canisme inclus dans les v\u0153ux Incarnation divine:","Une fois que vous choisissez une arme 5*, vous recevez 1 point de destin <span>si l'arme 5* que vous obtenez via les v\u0153ux n'est pas celle souhait\xE9e</span>.","Une fois suffisamment de points de destin accumul\xE9s, la prochaine arme 5* que vous obtiendrez via les v\u0153ux Incarnation divine sera celle choisie dans le Chemin divin.","Vos points de destin <span>se r\xE9initialisent lorsque vous obtenez une arme du Chemin divin</span> pendant ces v\u0153ux Incarnation divine.","Vous ne cumulez pas de points de destin si vous n'avez pas choisi d'arme vers laquelle vous frayer un chemin.","Vous pouvez modifier ou annuler votre s\xE9lection, <span>mais cela r\xE9initialisera vos points de destin d\xE9j\xE0 accumul\xE9s</span>.","<span>Les points de destin acccumul\xE9s lors de ces v\u0153ux Incarnation divine disparaissent lorsque ces v\u0153ux \xE9v\xE9nements prennent fin</span>."]},result:{skip:"Passer",meteorFailed:"L'animation Meteor n'a pas pu \xEAtre charg\xE9e",new:"Nouv.",convertion:"Conversion",title:"R\xE9sultat des v\u0153ux pour {item}"}},k={heading:"Skins",default:"Default",setOutfit:"Appliquer le skin",owned:"D\xE9j\xE0 poss\xE9d\xE9",purchasePrompt:"Vous n'avez pas encore de personnage pour ce skin, \xEAtes-vous s\xFBr de vouloir acheter ce skin ?",promptInfo:"Vous pouvez toujours utiliser ce skin apr\xE8s avoir obtenu le bon personnage.",obtained:"Nouveau skin obtenu",unlocked:"Skin d\xE9bloqu\xE9: {character}",item:{"5-star-outrider":{name:"5-Star Outrider"},"favonian-fevotion":{name:"Favonian Devotion"},"flowing-fate":{name:"Flowing Fate"},"executor_s-thorns":{name:"Executor's Thorns"},"sea-breeze-dandelion":{name:"R\xEAve de la brise marine",description:"Tenue d'\xE9t\xE9 de Jean. L\xE9g\xE8re et d\xE9contract\xE9e, mais pas moins \xE9l\xE9gante pour autant. Elle est parfaire pour un voyage \xE0 la mer."},"summertime-sparkle":{name:"\xC9t\xE9 radieux",description:"Tenue de plage de Barbara. La jolie mini-jupe d\xE9borde de vitalit\xE9 estivale et porte la fra\xEEcheur de l'oc\xE9an."},"opulent-splendor":{name:"Splendeur opulente",description:"Tenue formelle de Keqing. Dans la splendeur du Festival des lanternes, des fils ont \xE9t\xE9 tiss\xE9s pendant des jours de labeur pour assembler cette tenue du soir pleine de l\xE9g\xE8ret\xE9 et d'\xE9l\xE9gance."},"orchid_s-evening-gown":{name:"Robe de soir\xE9e d'orchid\xE9es",description:"Tenue formelle de Ningguang. La longue jupe bleue \xE9pouse ses formes \xE9l\xE9gantes et les ailes de papillons \xE0 ses chevilles ajoutent une touche a\xE9rienne."},"ein-immernachtstraum":{name:"Songe de la nuit \xE9ternelle",description:"Tenue c\xE9r\xE9moniale de Fischl. Que celle qui est noble conserve pour toujours son courage, sa sinc\xE9rit\xE9 et sa bont\xE9, de telle sorte qu'aucun mal ne puisse jamais l'atteindre."},"red-dead-of-night":{name:"Nuit \xE9carlate",description:"Une tenue que Diluc porte lorsqu'il part en mission secr\xE8te. Elle ressemble \xE0 une flamme dansante dans l'ombre dont les traces \xE9carlates hanteront les nuits des ennemis pour le restant de leurs jours."},"a-sobriquet-under-shade":{name:"Sobriquet \xE0 l'ombre",description:"Tenue que Lisa avait command\xE9e lors d'une nouvelle visite \xE0 Sumeru. D'un \xE9quilibre parfait entre praticit\xE9 et \xE9l\xE9gance, cette robe ressemble \xE0 l'uniforme qu'elle portait lorsqu'elle \xE9tudiait \xE0 l'Acad\xE9mie."},"springbloom-missive":{name:"Missive de floraison printani\xE8re",description:"Tenue de voyage d'Ayaka. Sa conception est bas\xE9e sur les robes fontainoises repr\xE9sent\xE9es dans les romans l\xE9gers et semble refl\xE9ter le style de vie des dames respectables qui r\xE9sident dans cette nation."},"blossoming-starlight":{name:"Lumi\xE8re stellaire en fleurs",description:"Une tenue exquise que Klee ne porte que pour les performances les plus importantes. Les couleurs sont brillantes, comme un g\xE2teau \xE0 la cr\xE8me d\xE9cor\xE9 de fleurs et couronn\xE9 de bougies \xE9carlates. Avec cette tenue, bonheur et sourires combleront vos aventures !"},"sailwind-shadow":{name:"Ombre nautique",description:"La tenue que Kaeya porte en jouant le Bandit au poignard. Bien qu'il s'agisse d'une tenue flamboyante con\xE7ue pour \xEAtre aussi accrocheuse que possible, elle n'est pas difficile \xE0 enfiler, bien qu'il faille un certain temps pour arranger tous les accessoires et son poignard."}}},B={text:"D\xE9tails",promotional:"Objets boost\xE9s",itemlist:"Liste des objets",increasedRate:"Taux d'obtention augment\xE9s !",percentageDrop:"Taux d'obtention lors du tirage d'un objet {rarity}* : {percentage}",wishDetails:"D\xE9tails",probInfo:"Taux d'obtention de base d'un objet {rarity}* : {singlePercentage} (Garantie incluse : {avgPercentage})",itemWishFor:"Liste d'objets disponibles par le biais des v\u0153ux :",itemType:"Type",itemName:"Nom",beginnerInfo:"Pas de limtie de temps (Disparait apr\xE8s 20 v\u0153ux)",limited:"Ev\xE9nement \xE0 dur\xE9e limit\xE9e",permanent:"Permanent",alert:"\u203B Ces v\u0153ux sont des {wishName}. Les v\u0153ux effectu\xE9s lors des {wishName}, ils ne sont pas cumulables avec les v\u0153ux effectu\xE9s lors d'autres types de v\u0153ux \xE9v\xE9nements.",beginner:["Les v\u0153ux <span>pour les d\xE9butants</span> n'ont pas de limite de temps et sont disponibles pour les Voyageurs r\xE9cemment arriv\xE9s en Teyvat. Aucune personnage et aucune arme \xE9v\xE9nement ne sont disponibles. <br /> Dans cette banni\xE8re un lot de 10 v\u0153ux co\xFBte <span>20%</span> de pierres en moins, Et {character} et automatiquement inclus dans votre premier lot de 10 v\u0153ux , et votre second lot de 10 v\u0153ux vous garanti un <span>autre</span> personnage 4*! <br/> La banni\xE8re expire apr\xE8s <span>20</span> v\u0153ux effectu\xE9s. Apr\xE8s l'expiration de la banni\xE8re, la page disparait.","\u203B Dans les circonstances habituelles, les taux d'obention de base des personnages et des armes sont r\xE9partis \xE9quitablement. Veuillez vous r\xE9f\xE9rer aux r\xE8gles correspondantes en cas d'une augmentation du taux d'obtention ou d'une garantie d'obtention.","\u3013 R\xE8gles \u3013","Taux d'obtention de base d'un objet 4* :<span> 0.600%</span> <br /> Base probability of winning 4-Star character = <span> 5.100%</span>; consolidated probability (incl. guarantee) = <span> 13.000%</span>;"],standard:[`Les v\u0153ux permanents "{bannerName}" sont disponibles de mani\xE8re illimit\xE9e dans le temps et vous permettent d'obtenir armes et personnages non exclusifs.<br/> Chaque s\xE9rie de 10 v\u0153ux vous <span>garantit</span> l'obtention d'au moins un objet 4* ou plus.`,"\u203B Dans les circonstances habituelles, les taux d'obention de base des personnages et des armes sont r\xE9partis \xE9quitablement. Veuillez vous r\xE9f\xE9rer aux r\xE8gles correspondantes en cas d'une augmentation du taux d'obtention ou d'une garantie d'obtention.","\u3013 R\xE8gles \u3013","Taux d'obtention de base d'un objet 5* : <span>0.600%</span>. Taux d'obtention de base d'un personnage 5* : <span>0.300%</span>. Taux d'obtention d'une arme 5* : <span>0.300%</span>. Taux d'obtention total d'un objet 5* (obtention garantie incluse) : <span>1.600%</span>. L'obtention d'un objet 5* est garantie au moins une fois tous les <span>90</span> v\u0153ux. <br> Taux d'obtention d'un objet 4* : <span>5.100%</span>. Taux d'obtention de base d'un personnage 4* :  <span>2.550%</span>. Taux d'obtention de base d'une arme 4* : <span>2.550%</span>. Taux d'obention total d'un objet 4* (obtention garantie incluse) : <span>13.000%</span>. L'obtention d'un objet 4* ou plus est garantie au moins une fois tous les <span>10</span> v\u0153ux effectu\xE9s. Le taux d'obtention d'un objet 4* gr\xE2ce \xE0 la garantie d'obtention est de <span>99.400%</span> et le taux d'obtention d'un objet 5* gr\xE2ce \xE0 la garantie d'obtention est de <span>0.600%</span>. "],events:[`Les V\u0153ux \xE9v\xE9nements "{bannerName}" sont d\xE9sormais disponibles! Les taux d'obtention du personnage 5* suivant : {featuredCharacter} et des personnages 4* suivants :  {rateupCharacters} sont <span>fortement augment\xE9s</span>, alors tentez votre chance !`,"\u203B Dans les circonstances habituelles, les taux d'obention de base des personnages et des armes sont r\xE9partis \xE9quitablement. Veuillez vous r\xE9f\xE9rer aux r\xE8gles correspondantes en cas d'une augmentation du taux d'obtention ou d'une garantie d'obtention.","\u3013 R\xE8gles \u3013","[Objets 5*]","Taux d'obtention d'un personnage 5* : <span>0.600%</span>. Taux d'obtention total (obtention garantie incluse) : <span>1.600%</span>. L'obtention d'un personnage 5* est garantie au moins une fois tous les <span>90</span> v\u0153ux.<br/> Lorsque vous tirez un personnage 5* pour la premi\xE8re fois, il y a <span>50.000%</span> de chance qu'il s'agisse de {featuredCharacter}. Si ce n'est pas le cas, le personnage sera donc <span>garanti</span> lors de votre prochain tirage d'un personnage 5*.","Objets 4*","Taux d'obtention d'un objet 4* : <span>5.100%</span>. Taux d'obtention de base d'un personnage 4* : <span>2.550%</span>, Taux d'obtention de base d'une arme 4* : <span>2.550%</span>; Taux d'obtention total d'un objet 4* (obtention garantie incluse) : <span>13.000%</span>. L'obtention d'un objet 4* ou plus est garantie au moins une fois tous les <span>10</span> v\u0153ux effectu\xE9s. Le taux d'obtention d'un objet 4* gr\xE2ce \xE0 la garantie d'obtention est de <span>99.400%</span> et le taux d'obtention d'un objet 5* gr\xE2ce \xE0 la garantie d'obtention est de <span>0.600%</span>.<br/> Lorsque vous tirez un objet 4* pour la premi\xE8re fois, il y a <span>50.000%</span> de chance qu'il s'agisse de {rateupCharacters}. Si ce n'est pas le cas, l'un de ces personnages sera donc <span>garanti</span> lors de votre prochain tirage d'un objet 4*. Si vous obtenez un objet 4* par le biais d'un v\u0153u, la probabilt\xE9 d'obtention de chaque personnage 4* \xE0 la une est \xE9gale."],weapons:[`Les v\u0153ux \xE9v\xE9nements "{bannerName}" sont d\xE9sormais disponibles! Les taux d'obtention des armes 5* <span>exclusives</span> suivantes :{featuredWeapon1} et {featuredWeapon2}, des armes 4* <span>exclusives</span> suivantes {rateupWeapons} sont <span>fortement augment\xE9s</span>, alors tentez votre chance! <br/> <span> \u203B Les armes exclusives cit\xE9es ci-dessus ne seront pas disponibles  dans les v\u0153ux permanents "Envie de voyage."</span>`,"\u203B Dans les circonstances habituelles, les taux d'obtention de base des personnages et des armes sont r\xE9partis \xE9quitablement. Veuillez vous r\xE9f\xE9rer aux r\xE8gles correspondantes en cas d'une augmentation du taux d'obtention ou d'une garantie d'obtention.","\u3013 R\xE8gles \u3013","[Objets 5*]",`Taux d'obtention d'une arme 5* :  <span>0.700%</span>. Taux d'obtention total (obtention garantie incluse) :  <span>1.850%</span>. L'obtention d'une arme 5* est garantie au moins une fois tous les <span>80</span> v\u0153ux.<br/> Lorsque vous tirez une arme 5* pour la premi\xE8re fois, il y a <span>75.000%</span> de chance qu'il s'agisse de {featuredWeapon1} ou {featuredWeapon2}. Si ce n'est pas le cas, l'une de ces armes sera donc <span>garantie</span> lors de votre prochain tirage d'une arme 5*. Si vous obtenez une arme 5* par le biais d'un v\u0153u sans avoir atteint le nombre de points de destin max, la probabilit\xE9 d'obtention de chaque arme 5* \xE0 la une est \xE9gale.<br/> Au cours de ces V\u0153ux \xE9v\xE9nements "{bannerName}", vous pouvez vous frayer une voie vers l'arme 5* \xE0 la une que vous souhaitez obtenir avec le m\xE9canisme de  "Chemin divin.". Le choix de l'arme ne sera valide que pendant la dur\xE9e de ces V\u0153ux \xE9v\xE9nements "{bannerName}". <br/> Au cours de ces V\u0153ux \xE9v\xE9nements "{bannerName}", lorsque vous obtenez une arme 5* apr\xE8s avoir utilsi\xE9 le "Chemin divin" et que cette arme 5* obtenue n'est pas votre arme choisie, 1 point de destin vous sera accord\xE9. Une fois le <span>nombre maximum</span> de points de destin atteint, l'arme 5* que vous avez pr\xE9c\xE9demment choisie sera donc <span>garantie</span> lors de votre prochain tirage d'une arme 5*. Apr\xE8s avoir obtenu l'arme choisie, le nombre de points de destin max sera r\xE9initialis\xE9 \xE0 <span>0</span>, que vous ayez atteint ou non le nombre de points de destin max, et vous devrez les accumuler de nouveau. Si vous n'utilisez pas le "Chemin divin" pour vous frayer une voie vers une arme de votre choix, <span>aucun</span> point de destin ne vous sera accord\xE9. <br/> Il est possible de modifier ou d'annuler votre choix d'arme. Une fois modifi\xE9 ou annul\xE9, vos points de destin seront <span>r\xE9initialis\xE9s</span> par ces actions et vous devrez en cumuler \xE0 nouveau. <br/> \u203B Les points de destin obtenus au cours de ces v\u0153ux ne seront valables que pendant cette p\xE9riode de V\u0153ux \xE9v\xE9n\xE9ments "Incarnation divine". Apr\xE8s la fin de ces v\u0153ux, les points de destin seront r\xE9initialis\xE9s et vous devrez en cumuler \xE0 nouveau.`,"[Objets 4*]","Taux d'obtention de base d'un objet 4* : <span>6.000%</span>. Taux d'obtention de base d'un personnage 4* : <span>3.000%</span>. Taux d'obtention de base d'une arme 4* : <span>3.000%</span>. Taux d'obtention total d'un objet 4* (obtention garantie incluse) :  <span>14.500%</span>. L'obtention d'un objet 4* ou plus est garantie au moins une fois tous les <span>10</span> v\u0153ux effectu\xE9s. Le taux d'obtention d'un objet 4* gr\xE2ce \xE0 la garantie d'obtention est de <span>99.300%</span> et le taux d'obtention d'un objet 5* gr\xE2ce \xE0 la garantie d'obtention est de <span>0.700%</span>. <br/> Lorsque vous tirez un objet 4* pour la premi\xE8re fois, il y a <span>75.000%</span> de chance qu'il s'agisse de {rateupWeapons}. Si ce n'est pas le cas, l'une de ces armes sera donc <span>garantie</span> lors de votre prochain tirage d'un objet 4*. Si vous obtenez une arme 4* par le biais d'un v\u0153u , la probabilit\xE9 de chaque arme 4* \xE0 la une est \xE9gale."],convertion:{fiveStar:"Les armes 5* obtenues par le biais de ces v\u0153ux s'accompagnent de 10 {starglitter}.",fourStar:"Les armes 4* en double vous rapportent 2 {starglitter},",threeStar:" et les armes 3*, 15 {stardust}."},duplicate:{heading:"\u3013 Personnages en double \u3013",text:"Lorsque vous obtenez un personnage {rarity}* que vous poss\xE9dez d\xE9j\xE0 (par le biais de v\u0153ux, d'achat en boutique, en r\xE9compense ou par d'autres moyens): De la 2e \xE0 la 7e obtention, vous obtenez 1 {stellaFortuna} et {constBonus} {starglitter}, puis \xE0 partir de la 8e obtention, le personnage sera converti en {fullConstBonus} {starglitter}."}},F={title:"Historique des v\u0153ux",text:"Historique",resetButton:"Effacer",resetPromptTitle:"Effacer l'historique ?",resetPrompt:'Cela va aussi supprimer tous les personnages et toutes les armes li\xE9es \xE0 la banni\xE8re "{bannerName}" de votre inventaire. <br /> Voulez-vous vraiment r\xE9initialiser ?',resetSuccess:"R\xE9initialisation r\xE9ussie !",keepPity:"Don't reset Pity and Guaranteed Status",selectWish:"S\xE9lectionner le type de v\u0153u :",disclaimer:"Nous ne sauvegardons jamais vos donn\xE9es en ligne. Toutes les donn\xE9es sont stock\xE9es dans IndexedDB, ce qui veut dire que les donn\xE9es sont sauvegard\xE9es dans votre navigateur. Elle ne seront pas supprimm\xE9es tant que vous n'utilisez pas le bouton de suppression/r\xE9initialisation ou tant que vous ne videz pas le cache de votre navigateur.",currentPity:"Current Pity :",totalPull:"Total Pull :",totalSpend:"Total d\xE9pens\xE9 :",filterTxt:"Filtrer",filter:"{rarity} Etoiles",filterAll:"All",pity:"Pity",timeReceived:"Time Received",waiting:"En attente",noData:"Aucune donn\xE9e disponible.",untracked:"Non suivi",item:"Item",win:"50/50 gagn\xE9",lose:"50/50 perdu",guaranteed:"Garanti",selected:"Arme s\xE9lectionn\xE9e",olderLayout:"Ancienne mise en page",switchv2:"Changer pour la V2"},E={text:"Boutique",paimonBargains:"\xC9change astral",fateNeeded:"Il manque {rollQty} {currency} requis.",primoNeeded:"Acheter avec {primoPrice} primo-gemmes ?",purchaseUpto:"1 disponible(s)",purchaseConfirm:"Confirmation d'achat",exchangeHeading:"Echange contre objet",purchaseHeading:"Objet",purchaseButton:"Acheter",pay:"Payer",product:"Produit",consume:"Consommer",selectPayment:"S\xE9lectionnez le moyen de paiement",unrealWallet:"Portefeuille irr\xE9el",convertPrimo:" Convertir automatiquement en primo-gemmes ?",proceedPayment:"Payer",qty:"Quantit\xE9",insufficient:"Vous n'avez pas assez de ressources.",crystalTopup:"Recharge cristaux",initialBonus:"Bonus d'achat initial",bonus:"Bonus",buyGenesisHeading:"Acheter des Cristaux primaires",recomendedHeading:"Produits recommand\xE9s",paimonHeading:"Echange astral",welkinNote:"Peut \xEAtre achet\xE9 plusieurs fois",limitedOffer:"Offre \xE0 dur\xE9e limit\xE9e",noLimitTime:"Aucun objet \xE0 dur\xE9e limit\xE9e disponible",paymentChilde:"Childe",paymentTears:"Tears",paymentWakaranai:"Wakaranai",recomended:{welkin:"Faveur de l'astre de la nuit",newOutfit:"Nouveaux skins",dayRemaining:"Jours restants: {days}",alreadyClaimed:"(R\xE9cup\xE9r\xE9 aujourd'hui)",instantlyGet:"Inclus avec l'achat",dailyGift:"et chaque jour :",obtainTotal:"* Valide pendant 30 jours!<br> Obtenez un total de {totalGenesis} cristaux primaires et {totalPrimo} primo-gemmes!",claimingBlessing:"Cliquez pour r\xE9cup\xE9rer votre r\xE9compense journali\xE8re de Faveur de l'astre de la nuit",issuedPurchase:"Re\xE7us lors de l'achat",collect:"R\xE9cup\xE9rez votre r\xE9compense journali\xE8re pendant 30 jours"},exchange:{starglitter:"Echange Ast\xE9ries",stardust:"Echange Astrions",primogem:"Echange primo-gemmes"},item:{genesis:"Cristaux primaires",primogem:"Primo-gemme",intertwined:"Pierre de la fatalit\xE9",acquaint:"Pierre de la destin\xE9e",starglitter:"ast\xE9ries libres",stardust:"astrion libres"},description:{intertwined:"Une graine du destin qui relie les r\xEAves. La lueur de la pierre de la fatalit\xE9 peut faire s'entrelacer les sorts qui ne devraient pas se croiser. C'est gr\xE2ce \xE0 cette lueur que les \xE9toiles peuvent former l'image de vote c\u0153ur.",acquaint:"Une graine d'espoir qui illumine le ciel \xE9toil\xE9. Peu importe la distance qui les s\xE9pare l'un de l'autre, ceux qui sont destin\xE9s \xE0 se rencontrer seront guid\xE9s par la lueur de la pierre de la fatalit\xE9 et se retrouveront enfin sous le ciel \xE9toil\xE9."}},I={text:"Inventaire",unsetOutfit:"Retirer un skin",setOutfit:"Appliquer un skin sur un personnage",refinement:"Raffinement {count}",constellation:"Constellation {count}",extra:"{count} Extra",firstSummon:"Premi\xE8re invocation le : {date}",notOwned:"Non poss\xE9d\xE9",sort:"Trier",rarity:"Raret\xE9",name:"Nom",quantity:"Quantit\xE9",element:"El\xE9ment",release:"Date de sortie",type:"Type",owned:"Poss\xE9d\xE9",showAllOption:"Afficher tous/toutes les {item}s"},O={no:"Non",yes:"Oui",text:"Menu",feedback:"Feedback",options:"Options",updates:"Historique des mises \xE0 jour",language:"Langue",currency:"Monnaie",fates:"Nombre de V\u0153ux",unlimited:"Illimit\xE9",manual:"Saisie manuelle",mute:"D\xE9sactiver la musique et les effets sonores",switchBanner:"Changer de banni\xE8re",showAllitems:"Afficher tous les objets dans l'inventaire",autoskip:"Passer automatiquement le Splash Art",animatedbg:"Arri\xE8re-plan anim\xE9",multiRoll:"Number per multi-roll",factoryReset:"Effacer les donn\xE9es et restaurer les valeurs par d\xE9faut",resetTitle:"R\xE9initialisation d'usine",rotate:"Tourner pour une meilleure exp\xE9rience",keepSetting:"Keep Settings? <small> Current Pity, Balance and the Settings will not be deleted </small>",clearCache:"Nettoyer le cache ( {size} ) ? <small> Vous devrez re-t\xE9l\xE9charger toutes les ressources en cache apr\xE8s cette ation! </small>",resetButton:"R\xE9initialier maintenant",resetPrompt:"Voulez-vous vraiment supprimer <strong> Toutes les Donn\xE9es </strong> et restaurer l'\xE9tat par d\xE9faut?",resetSuccess:"R\xE9initialisation r\xE9ussie",removeAds:"Supprimer les publicit\xE9s",removeKey:"Supprimer l'AdKey",removeKeyConfirm:"Are You sure to remove the current adKey ? You need to enter a new key to remove the future ads!",getNewKey:"Obtenez-en une nouvelle ici !",noKey:"Vous n'avez pas de cl\xE9 ?",verifyFail:"V\xE9rification de l'AdKey \xE9chou\xE9e, V\xE9rifieez votre connexion !",invalidKey:"Votre cl\xE9 est invalide",keyExpired1:"Cl\xE9 expir\xE9e !",keyExpired2:'Votre cl\xE9: "{key}" est expir\xE9e depuis le {date}!',adFreeUser:"Vous profitez du simulateur sans publicit\xE9s !",inputKeyPlaceholder:"Entrez la cl\xE9",inputKeyTxt:"Entrez la cl\xE9 pour supprimer les publicit\xE9s !",checkingKey:"V\xE9rification de l'AdKey enregistr\xE9e",authorNotes:"* Je suis d\xE9sol\xE9 pour les publicit\xE9s. En fait, je ne veux pas g\xE2cher votre exp\xE9rience de navigation, mais je n'ai pas d'\xE9quipe ou de sponsor pour maintenir cette application en vie. Si vous ne voulez rien d\xE9penser, vous pouvez toujours activer le bloqueur de publicit\xE9 ou simplement utiliser des DNS personnalis\xE9s, je ne vous l'interdirai pas."},M={title:e,character:n,weapon:t,vision:s,anemo:a,cryo:i,dendro:o,electro:r,hydro:u,geo:l,pyro:d,bow:p,catalyst:c,claymore:m,sword:b,polearm:v,extra:g,obtained:h,waiting:f,connectionFailed:x,confirmButton:y,cancelButton:q,disclaimer:z,fanmade:j,pressToContinue:T,installInstruction:C,share:w,screenshot:P,capturing:S,rewardFirstShare:L,version:A,donate:V,banner:D,editor:N,wish:R,outfit:k,details:B,history:F,shop:E,inventory:I,menu:O};export{a as anemo,D as banner,p as bow,q as cancelButton,S as capturing,c as catalyst,n as character,m as claymore,y as confirmButton,x as connectionFailed,i as cryo,M as default,o as dendro,B as details,z as disclaimer,V as donate,N as editor,r as electro,g as extra,j as fanmade,l as geo,F as history,u as hydro,C as installInstruction,I as inventory,O as menu,h as obtained,k as outfit,v as polearm,T as pressToContinue,d as pyro,L as rewardFirstShare,P as screenshot,w as share,E as shop,b as sword,e as title,A as version,s as vision,f as waiting,t as weapon,R as wish};
