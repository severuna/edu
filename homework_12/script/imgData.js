const imgData = [

    // characters list

    {
        name: 'Luke Skywalker',
        whrascwo: 'Lhuorwo Sorroohraanorworc',
        src: 'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg'
    },

    {
        name: 'C-3PO',
        whrascwo: 'C-3PO',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/3/35/C-3PO.png/'
    },

    {
        name: 'R2-D2',
        whrascwo: 'R2-D2',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/1/1a/R2d2.jpg/'
    },

    {
        name: 'Darth Vader',
        whrascwo: 'Drarcaoac Vrawaworc',
        src: 'https://static.wikia.nocookie.net/villains/images/7/76/Darth_Vader.jpg/'
    },

    {
        name: 'Leia Organa',
        whrascwo: 'Lwoahra Orcrrrawhra',
        src: 'https://pm1.narvii.com/6690/c9dfdff22abbc0b755756a6e8c5e2d5ea220f605_hq.jpg'
    },

    {
        name: 'Owen Lars',
        whrascwo: 'Oohwowh Lrarcc',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/8/81/Owen-OP.jpg/'
    },
    
    {
        name: 'Beru Whitesun lars',
        whrascwo: 'Bworchu Wacahaowochuwh anrarcc',
        src: 'https://static.wikia.nocookie.net/starwars/images/8/84/BeruWhitesunLars.jpg/'
    },
    
    {
        name: 'R5-D4',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/2/2c/R5d4.jpg/'
    },
    
    {
        name: 'Biggs Darklighter',
        whrascwo: 'Bahrrrrc Drarcoranahrracaoworc',
        src: 'https://www.starwars-union.de/bilder/lexikon/20060819Biggs.jpg'
    },
    
    {
        name: 'Obi-Wan Kenobi',
        whrascwo: 'Orhah-Wrawh Kwowhoorhah',
        src: 'https://cdnb.artstation.com/p/assets/images/images/032/846/253/4k/adam-o-donnell-final.jpg'
    },
    
    {
        name: 'Anakin Skywalker',
        whrascwo: 'Awhraorahwh Sorroohraanorworc',
        src: 'https://static.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/'
    },
    
    {
        name: 'Wilhuff Tarkin',
        whrascwo: 'Wahanachuwwww Trarcorahwh',
        src: 'https://static.wikia.nocookie.net/starwars/images/9/95/Tarkin-SWG4.jpg/'
    },
    
    {
        name: 'Chewbacca',
        whrascwo: 'Cacwoohrhraoaoara',
        src: 'https://static.wikia.nocookie.net/starwars/images/e/ec/ChewbaccaCSWE.jpg/'
    },
    
    {
        name: 'Han Solo',
        whrascwo: 'Hrawh Sooanoo',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/f/fc/HanChillinAtChalmuns-ANH.jpg/'
    },
    
    {
        name: 'Greedo',
        whrascwo: 'Grcwowowaoo',
        src: 'https://static.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg/'
    },
    
    {
        name: 'Jabba Desilijic Tiure',
        whrascwo: 'Jrarhrhra Dwocahanahshahoa Tahhurcwo',
        src: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Jabba_the_Hutt.jpg'
    },
    
    {
        name: 'Wedge Antilles',
        whrascwo: 'Wwowarrwo Awhaoahananwoc',
        src: 'https://static.wikia.nocookie.net/starwars/images/7/7e/WedgesEntireHead-ROTJ.png/'
    },
    
    {
        name: 'Jek Tono Porkins',
        whrascwo: 'Jwoor Toowhoo Poorcorahwhc',
        src: 'https://static.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png/'
    },
    
    {
        name: 'Yoda',
        whrascwo: 'Yoowara',
        src: 'https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/'
    },
    
    {
        name: 'Palpatine',
        whrascwo: 'Praanakraaoahwhwo',
        src: 'https://static.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png/'
    },
    
    {
        name: 'Boba Fett',
        whrascwo: 'Boorhra Fwoaoao',
        src: 'https://upload.wikimedia.org/wikipedia/en/3/3e/FettbobaJB.png'
    },
    
    {
        name: 'IG-88',
        whrascwo: 'IG-88',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/a/aa/IG-88B-ESB.jpg/'
    },
    
    {
        name: 'Bossk',
        whrascwo: 'Booccor',
        src: 'https://static.wikia.nocookie.net/starwars/images/1/1d/Bossk.png/'
    },
    
    {
        name: 'Lando Calrissian',
        whrascwo: 'Lrawhwaoo Craanrcahccahrawh',
        src: 'https://static.wikia.nocookie.net/star-wars-canon-extended/images/0/0a/Lando5.jpg/'
    },
    
    {
        name: 'Lobot',
        whrascwo: 'Loorhooao',
        src: 'https://static.wikia.nocookie.net/starwars/images/0/0e/Lobot_SWDR.png/'
    },
    
    {
        name: 'Ackbar',
        whrascwo: 'Aoaorrhrarc',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/f/fb/Ackbar_HS.jpg/'
    },
    
    {
        name: 'Mon Mothma',
        whrascwo: 'Moowh Mooaoacscra',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/4/46/Monmothma.jpg/'
    },
    
    {
        name: 'Arvel Crynyd',
        whrascwo: 'Archowoan Crcrowhrowa',
        src: 'https://ayay.co.uk/backgrounds/star_wars/rebel_alliance_characters/arvel-crynyd.jpg'
    },
    
    {
        name: 'Wicket Systri Warrick',
        whrascwo: 'Wahoaorwoao Srocaorcah Wrarcrcahoaor',
        src: 'https://static.wikia.nocookie.net/starwarsofthecaribbean/images/0/06/Wicket_wosw.jpg/'
    },
    
    {
        name: 'Nien Nunb',
        whrascwo: 'Nahwowh Nhuwhrh',
        src: 'https://static.wikia.nocookie.net/starwars/images/4/46/NienNunbHS-SWE.png/'
    },
    
    {
        name: 'Qui-Gon Jinn',
        whrascwo: 'Qhuah-Goowh Jahwhwh',
        src: 'https://static.wikia.nocookie.net/swfanon/images/d/d6/QuiGonPortrait-SWE.jpg/'
    },
    
    {
        name: 'Nute Gunray',
        whrascwo: 'Nhuaowo Ghuwhrcraro',
        src: 'https://static.wikia.nocookie.net/swfanon/images/1/14/Nute_Gunray_Commands.jpg/'
    },
    
    {
        name: 'Finis Valorum',
        whrascwo: 'Fahwhahc Vraanoorchusc',
        src: 'https://i.pinimg.com/originals/29/16/62/29166227119bf6376119c9d89c3d88c7.jpg'
    },
    
    {
        name: 'Padmé Amidala',
        whrascwo: 'Padmé Amidala',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/c/cb/%D0%9F%D0%B0%D0%B4%D0%BC%D0%B5_%D0%90%D0%BC%D0%B8%D0%B4%D0%B0%D0%BB%D0%B0.png/'
    },
    
    {
        name: 'Jar Jar Binks',
        whrascwo: 'Jrarc Jrarc Bahwhorc',
        src: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Jjportrait.jpg'
    },
    
    {
        name: 'Roos Tarpals',
        whrascwo: 'Rooooc Trarcakraanc',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/c/ca/%D0%A0%D1%83%D1%81_%D0%A2%D0%B0%D1%80%D0%BF%D0%B0%D0%BB%D1%8C%D1%81.jpg/'
    },
    
    {
        name: 'Rugor Nass',
        whrascwo: 'Rhurroorc Nracc',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/8/86/Bossnas.jpg/'
    },
    
    {
        name: 'Ric Olié',
        whrascwo: 'Ric Olié',
        src: 'https://static.wikia.nocookie.net/starwars/images/4/4c/RicOlieHS-SWE.png/'
    },
    
    {
        name: 'Watto',
        whrascwo: 'Wraaoaooo',
        src: 'https://static.wikia.nocookie.net/starwars/images/e/eb/WattoHS.jpg/'
    },
    
    {
        name: 'Sebulba',
        whrascwo: 'Sworhhuanrhra',
        src: 'https://i.pinimg.com/originals/8a/90/dc/8a90dcda66d0da09fa1a74bab9af33d2.jpg'
    },
    
    {
        name: 'Quarsh Panaka',
        whrascwo: 'Qhurarccac Prawhraorra',
        src: 'https://static.wikia.nocookie.net/headhuntersholosuite/images/6/65/Panaka.jpg/'
    },
    
    {
        name: 'Shmi Skywalker',
        whrascwo: 'Sacscah Sorroohraanorworc',
        src: 'https://static.wikia.nocookie.net/starwars/images/6/6c/ShmiSkywalkerLars-Databank.jpg/'
    },
    
    {
        name: 'Darth Maul',
        whrascwo: 'Drarcaoac Mrahuan',
        src: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Darth_Maul_Cosplayer_at_MCM_Comic_Con_October_2016.jpg'
    },
    
    {
        name: 'Bib Fortuna',
        whrascwo: 'Bahrh Foorcaohuwhra'
        src: 'https://static.wikia.nocookie.net/awakening-of-the-rebellion/images/3/33/BibFortunaHS-ROTJ.png/'
    },
    
    {
        name: 'Ayla Secura',
        whrascwo: 'Aroanra Swooahurcra',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/4/4d/Aayla_Secura_SWE.png/'
    },
    
    {
        name: 'Ratts Tyerel',
        whrascwo: 'Rraaoaoc Troworcwoan',
        src: 'https://rpggamer.org/uploaded_images/RattsHS.jpg'
    },
    
    {
        name: 'Dud Bolt',
        whrascwo: 'Dhuwa Booanao',
        src: 'https://s3.eu-west-2.amazonaws.com/ourartcorner/20190430/6c9dc7-DUD-BOLT-max.jpeg'
    },
    
    {
        name: 'Gasgano',
        whrascwo: 'Gracrrrawhoo',
        src: 'https://static.wikia.nocookie.net/starwars/images/a/a4/GasganoHS-SWE.png'
    },
    
    {
        name: 'Ben Quadinaros',
        whrascwo: 'Bwowh Qhurawaahwhrarcooc',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/6/62/Ben_quadinaros2.jpg/'
    },
    
    {
        name: 'Mace Windu',
        whrascwo: 'Mraoawo Wahwhwahu',
        src: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Mace_Windu.png'
    },
    
    {
        name: 'Ki-Adi-Mundi',
        whrascwo: 'Kah-Awaah-Mhuwhwaah',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/9/9e/KiAdiMundi.jpg/'
    },
    
    {
        name: 'Kit Fisto',
        whrascwo: 'Kahao Fahcaooo',
        src: 'https://static.wikia.nocookie.net/starwars/images/2/25/KitFisto-USWNE.png/'
    },
    
    {
        name: 'Eeth Koth',
        whrascwo: 'Ewoaoac Kooaoac',
        src: 'https://static.wikia.nocookie.net/starwars/images/4/4e/EethKothCardTrader.png/'
    },
    
    {
        name: 'Adi Gallia',
        whrascwo: 'Awaah Graananahra',
        src: 'https://static.wikia.nocookie.net/starwars/images/f/f2/AdiGallia2-SWE.png/'
    },
    
    {
        name: 'Saesee Tiin',
        whrascwo: 'Srawocwowo Tahahwh',
        src: 'https://static.wikia.nocookie.net/starwars/images/a/a3/SaeseeTiin-SWCT.png/'
    },
    
    {
        name: 'Yarael Poof',
        whrascwo: 'Yrarcrawoan Pooooww',
        src: 'https://static.wikia.nocookie.net/starwars/images/9/96/Yarael_Poof.png/'
    },
    
    {
        name: 'Plo Koon',
        whrascwo: 'Panoo Koooowh',
        src: 'https://static.wikia.nocookie.net/starwars/images/8/89/Guard_SWD_2017_Q3_Tournament_Kit.png/'
    },
    
    {
        name: 'Mas Amedda',
        whrascwo: 'Mrac Ascwowawara',
        src: 'https://static.wikia.nocookie.net/starwars/images/3/37/Mas_Amedda_SWCT.png/'
    },
    
    {
        name: 'Gregar Typho',
        whrascwo: 'Grcworrrarc Troakacoo',
        src: 'https://static.wikia.nocookie.net/starwars/images/d/d3/CaptainTypho-SWCT.png/'
    },
    
    {
        name: 'Cordé',
        whrascwo: 'Cordé',
        src: 'https://static.wikia.nocookie.net/starwars/images/6/6c/Corde-ChroniclesPrequels.jpg/'
    },
    
    {
        name: 'Cliegg Lars',
        whrascwo: 'Canahworrrr Lrarcc',
        src: 'https://static.wikia.nocookie.net/starwars/images/3/36/ClieggLarsHS-SWE.jpg/'
    },
    
    {
        name: 'Poggle the Lesser',
        whrascwo: 'Poorrrranwo aoacwo Lwoccworc',
        src: 'https://static.wikia.nocookie.net/starwars/images/9/93/Poggle_the_lesser_-_sw_card_trader.png/'
    },
    
    {
        name: 'Luminara Unduli',
        whrascwo: 'Lhuscahwhrarcra Uwhwahuanah',
        src: 'https://static.wikia.nocookie.net/starwars/images/b/ba/Luminarafull.jpg/'
    },
    
    {
        name: 'Barriss Offee',
        whrascwo: 'Brarcrcahcc Owwwwwowo',
        src: 'https://static.wikia.nocookie.net/starwars/images/a/a4/BarrissOffee-OP.png/'
    },
    
    {
        name: 'Dormé',
        whrascwo: 'Dormé',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/c/c9/%D0%94%D0%BE%D1%80%D0%BC%D0%B5%D0%AD%D0%BF2.jpg/'
    },
    
    {
        name: 'Dooku',
        whrascwo: 'Dooooorhu',
        src: 'https://static.wikia.nocookie.net/villains/images/f/f5/Count-dooku.jpg/'
    },
    
    {
        name: 'Bail Prestor Organa',
        whrascwo: 'Braahan Prcwocaooorc Orcrrrawhra',
        src: 'https://static.wikia.nocookie.net/starwars/images/b/b0/Bailrogueone.jpg/'
    },
    
    {
        name: 'Jango Fett',
        whrascwo: 'Jrawhrroo Fwoaoao',
        src: 'https://static.wikia.nocookie.net/starwars/images/0/03/Jango_OS_TPB.png/'
    },
    
    {
        name: 'Zam Wesell',
        whrascwo: 'Zrasc Wwocwoanan',
        src: 'https://comicvine.gamespot.com/a/uploads/original/1/15317/322749-47126-zam-wesell.jpg'
    },
    
    {
        name: 'Dexter Jettster',
        whrascwo: 'Dwokaoworc Jwoaoaocaoworc',
        src: 'https://static.wikia.nocookie.net/swfanon/images/8/82/Dexter.jpg/'
    },
    
    {
        name: 'Lama Su',
        whrascwo: 'Lrascra Shu',
        src: 'https://static.wikia.nocookie.net/star-wars-canon-extended/images/5/5b/Lama_Su1.jpg/'
    },
    
    {
        name: 'Taun We',
        whrascwo: 'Trahuwh Wwo',
        src: 'https://static.wikia.nocookie.net/swfanon/images/9/9c/TaunWe.jpg/'
    },
    
    {
        name: 'Jocasta Nu',
        whrascwo: 'Joooaracaora Nhu',
        src: 'https://static.wikia.nocookie.net/starwars/images/4/44/Jocasta_Nu.jpg/'
    },
    
    {
        name: 'R4-P17',
        whrascwo: 'R4-P17',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/7/77/R4-G9.jpg/'
    },
    
    {
        name: 'Wat Tambor',
        whrascwo: 'Wraao Trascrhoorc',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/e/e8/TamborBoomHeadshot.jpg/'
    },
    
    {
        name: 'San Hill',
        whrascwo: 'Srawh Hahanan',
        src: 'https://static.wikia.nocookie.net/swfanon/images/8/8a/3429_plageuis.jpg/'
    },
    
    {
        name: 'Shaak Ti',
        whrascwo: 'Sacraraor Tah',
        src: 'https://static.wikia.nocookie.net/starwars/images/2/20/Shaak_Ti_closeup-SWE.png/'
    },
    
    {
        name: 'Grievous',
        whrascwo: 'Grcahwohooohuc',
        src: 'https://upload.wikimedia.org/wikipedia/en/5/54/General_Grievous.png'
    },
    
    {
        name: 'Tarfful',
        whrascwo: 'Trarcwwwwhuan',
        src: 'https://static.wikia.nocookie.net/starwars/images/d/d9/Tarfful-TSWB.png/'
    },
    
    {
        name: 'Raymus Antilles',
        whrascwo: 'Rraroschuc Awhaoahananwoc',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/d/d7/Antilles-SWE.png/'
    },
    
    {
        name: 'Sly Moore',
        whrascwo: 'Sanro Moooorcwo',
        src: 'https://static.wikia.nocookie.net/starwars/images/b/b7/SlyMooreStare-OP.png/revision/latest?cb=20211214041804'
    },
    
    {
        name: 'Tion Medon',
        whrascwo: 'Tahoowh Mwowaoowh',
        src: 'https://static.wikia.nocookie.net/headhuntersholosuite/images/9/9a/Tion_Medon_002.jpg/'
    },

    // planets list
    
    {
        name: 'Tatooine',
        whrascwo: 'Traaoooooahwhwo',
        src: 'https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png/'
    },
    
    {
        name: 'Alderaan',
        whrascwo: 'Aanwaworcrarawh',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/4/4a/Alderaan.jpg/'
    },
    
    {
        name: 'Yavin IV',
        whrascwo: 'Yrahoahwh IV',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/a/a0/Eaw_Yavin4.jpg/'
    },
    
    {
        name: 'Hoth',
        whrascwo: 'Hooaoac',
        src: 'https://static.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png/'
    },
    
    {
        name: 'Dagobah',
        whrascwo: 'Drarroorhraac',
        src: 'https://static.wikia.nocookie.net/starwars/images/4/48/Dagobah_ep3.jpg/'
    },
    
    {
        name: 'Bespin',
        whrascwo: 'Bwocakahwh',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/2/2c/Bespin_EotECR.png/'
    },
    
    {
        name: 'Endor',
        whrascwo: 'Ewhwaoorc',
        src: 'https://static.wikia.nocookie.net/starwars/images/5/50/Endor_FFGRebellion.png/'
    },
    
    {
        name: 'Naboo',
        whrascwo: 'Nrarhoooo',
        src: 'https://static.wikia.nocookie.net/starwars/images/f/f0/Naboo_planet.png/'
    },
    
    {
        name: 'Coruscant',
        whrascwo: 'Coorchucoarawhao',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/1/16/Coruscant-EotE.jpg/'
    },
    
    {
        name: 'Kamino',
        whrascwo: 'Krascahwhoo',
        src: 'https://static.wikia.nocookie.net/starwars/images/a/a9/Eaw_Kamino.jpg/'
    },
    
    {
        name: 'Geonosis',
        whrascwo: 'Gwooowhoocahc',
        src: 'https://pm1.narvii.com/6338/457966eab9d1f09aaa104b6c4ebde5af9ed0e237_00.jpg'
    },
    
    {
        name: 'Utapau',
        whrascwo: 'Uaoraakrahu',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/c/ce/UtapauRotS.png/'
    },
    
    {
        name: 'Mustafar',
        whrascwo: 'Mhucaorawwrarc',
        src: 'https://static.wikia.nocookie.net/starwars/images/a/af/Mustafar_DB.png/'
    },
    
    {
        name: 'Kashyyyk',
        whrascwo: 'Kracacrororoor',
        src: 'https://static.wikia.nocookie.net/starwars/images/d/d0/Kashyyyk_FFGRebellion.png/'
    },
    
    {
        name: 'Polis Massa',
        whrascwo: 'Pooanahc Mraccra',
        src: 'https://comicvine.gamespot.com/a/uploads/square_small/4/48250/901019-esseles.jpg'
    },
    
    {
        name: 'Mygeeto',
        whrascwo: 'Mrorrwowoaooo',
        src: 'https://static.wikia.nocookie.net/starwars/images/e/e5/Mygeeto_GE2.jpg/'
    },
    
    {
        name: 'Felucia',
        whrascwo: 'Fwoanhuoaahra',
        src: 'https://static.wikia.nocookie.net/starwars/images/a/a2/Felucia_SWCT.png/'
    },
    
    {
        name: 'Cato Neimoidia',
        whrascwo: 'Craaooo Nwoahscooahwaahra',
        src: 'https://static.wikia.nocookie.net/starwars/images/f/fe/CatoNeimoidia-BTCG.png/'
    },
    
    {
        name: 'Saleucami',
        whrascwo: 'Sraanwohuoarascah',
        src: 'https://static.wikia.nocookie.net/ptstarwars/images/7/75/Saleucami.jpg/'
    },
    
    {
        name: 'Stewjon',
        whrascwo: 'Saowoohshoowh',
        src: 'https://static.wikia.nocookie.net/starwarscavalryofdarkness/images/b/bd/ImagesCA533VT4.jpg/'
    },
    
    {
        name: 'Eriadu',
        whrascwo: 'Ercahrawahu',
        src: 'https://static.wikia.nocookie.net/starwars/images/d/dc/Eriadu_TEA.jpg/'
    },
    
    {
        name: 'Corellia',
        whrascwo: 'Coorcwoananahra',
        src: 'https://static.wikia.nocookie.net/starwars/images/d/d7/Corellia-SWCT.png/'
    },
    
    {
        name: 'Rodia',
        whrascwo: 'Roowaahra',
        src: 'https://static.wikia.nocookie.net/starwars/images/c/c3/Rodia_canon.png/'
    },
    
    {
        name: 'Nal Hutta',
        whrascwo: 'Nraan Hhuaoaora',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/8/8d/Nal-hutta.png/'
    },
    
    {
        name: 'Dantooine',
        whrascwo: 'Drawhaoooooahwhwo',
        src: 'https://static.wikia.nocookie.net/starwars/images/a/a5/Dantooine_Resistance.jpg/'
    },
    
    {
        name: 'Bestine IV',
        whrascwo: 'Bwocaoahwhwo IV',
        src: 'https://static.wikia.nocookie.net/starwars/images/7/79/Bestine_TEA.png/'
    },
    
    {
        name: 'Ord Mantell',
        whrascwo: 'Orcwa Mrawhaowoanan',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/3/36/Ord_Mantell_EotECR.png/'
    },
    
    {
        name: 'unknown',
        whrascwo: 'huwhorwhooohwh',
        src: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Death_star1.png'
    },
    
    {
        name: 'Trandosha',
        whrascwo: 'Trcrawhwaoocacra',
        src: 'https://static.wikia.nocookie.net/starwars/images/4/40/Trandosha-PL.png/'
    },
    
    {
        name: 'Socorro',
        whrascwo: 'Soooaoorcrcoo',
        src: 'https://static.wikia.nocookie.net/star-wars-extended-universe/images/5/5f/Alderaan.png/'
    },
    
    {
        name: 'Mon Cala',
        whrascwo: 'Moowh Craanra',
        src: 'https://static.wikia.nocookie.net/starwars/images/0/04/Dac-AORCR.png/'
    },
    
    {
        name: 'Chandrila',
        whrascwo: 'Cacrawhwarcahanra',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/9/9b/Chandrila_AoRCR.png/'
    },
    
    {
        name: 'Sullust',
        whrascwo: 'Shuananhucao',
        src: 'https://static.wikia.nocookie.net/starwars/images/2/2d/SullustAoR.png/'
    },
    
    {
        name: 'Toydaria',
        whrascwo: 'Toorowararcahra',
        src: 'https://static.wikia.nocookie.net/starwars/images/d/d6/Toydaria-TCW.png/'
    },
    
    {
        name: 'Malastare',
        whrascwo: 'Mraanracaorarcwo',
        src: 'https://static.wikia.nocookie.net/starwars/images/0/00/Malastare_TEA.jpg/'
    },
    
    {
        name: 'Dathomir',
        whrascwo: 'Draaoacooscahrc',
        src: 'https://static.wikia.nocookie.net/starwars/images/3/34/DathomirJFO.jpg/'
    },
    
    {
        name: 'Ryloth',
        whrascwo: 'Rroanooaoac',
        src: 'https://static.wikia.nocookie.net/starwars/images/9/96/Ryloth-Homecoming.png/'
    },
    
    {
        name: 'Aleen Minor',
        whrascwo: 'Aanwowowh Mahwhoorc',
        src: 'https://static.wikia.nocookie.net/starwars/images/f/f6/Aleen_NEGAS.jpg/'
    },
    
    {
        name: 'Vulpter',
        whrascwo: 'Vhuanakaoworc',
        src: 'https://static.wikia.nocookie.net/starwars/images/b/be/Vulpter_FF7.jpg/'
    },
    
    {
        name: 'Troiken',
        whrascwo: 'Trcooahorwowh',
        src: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Death_star1.png'
    },
    
    {
        name: 'Tund',
        whrascwo: 'Thuwhwa',
        src: 'https://static.wikia.nocookie.net/starwars/images/3/31/Tund_TEA.jpg/'
    },
    
    {
        name: 'Haruun Kal',
        whrascwo: 'Hrarchuhuwh Kraan',
        src: 'https://static.wikia.nocookie.net/starwars/images/7/75/HaruunKalCSWE.jpg/'
    },
    
    {
        name: 'Cerea',
        whrascwo: 'Cworcwora',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/c/cc/Cerea-FDCR.png/'
    },
    
    {
        name: 'Glee Anselm',
        whrascwo: 'Ganwowo Awhcwoansc',
        src: 'https://static.wikia.nocookie.net/starwars/images/0/0c/GleeAnselm.jpg/'
    },
    
    {
        name: 'Iridonia',
        whrascwo: 'Ircahwaoowhahra',
        src: 'https://static.wikia.nocookie.net/starwars/images/c/c5/Iridonia.jpg/'
    },
    
    {
        name: 'Tholoth',
        whrascwo: 'Tacooanooaoac',
        src: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Death_star1.png'
    },
    
    {
        name: 'Iktotch',
        whrascwo: 'Ioraoooaooaac',
        src: 'https://static.wikia.nocookie.net/starwars/images/f/f1/Iktotch_FDNP.png/'
    },
    
    {
        name: 'Quermia',
        whrascwo: 'Qhuworcscahra',
        src: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Death_star1.png'
    },
    
    {
        name: 'Dorin',
        whrascwo: 'Doorcahwh',
        src: 'https://static.wikia.nocookie.net/starwars/images/8/8d/Dorin_NEGAS.jpg/'
    },
    
    {
        name: 'Champala',
        whrascwo: 'Cacrascakraanra',
        src: 'https://static.wikia.nocookie.net/starwars/images/d/d7/Champala_NEGAS.jpg/'
    },
    
    {
        name: 'Mirial',
        whrascwo: 'Mahrcahraan',
        src: 'https://static.wikia.nocookie.net/star-wars-pathfinder/images/e/e0/Mirial.jpg/'
    },
    
    {
        name: 'Serenno',
        whrascwo: 'Sworcwowhwhoo',
        src: 'https://static.wikia.nocookie.net/starwars/images/b/b2/Serenno-Massacre.png/'
    },
    
    {
        name: 'Concord Dawn',
        whrascwo: 'Coowhoaoorcwa Draohwh',
        src: 'https://static.wikia.nocookie.net/starwars/images/b/bc/Mandalorian_Gauntlet_Fighter_SWA.png/'
    },
    
    {
        name: 'Zolan',
        whrascwo: 'Zooanrawh',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/d/d3/Zolan_FF49.jpg/'
    },
    
    {
        name: 'Ojom',
        whrascwo: 'Oshoosc',
        src: 'https://static.wikia.nocookie.net/starwars/images/9/9f/Ojom.jpg/'
    },
    
    {
        name: 'Skako',
        whrascwo: 'Sorraoroo',
        src: 'https://static.wikia.nocookie.net/starwars/images/c/cd/Skako.jpg/'
    },
    
    {
        name: 'Muunilinst',
        whrascwo: 'Mhuhuwhahanahwhcao',
        src: 'https://static.wikia.nocookie.net/starwars/images/1/19/Muunilinst.jpg/'
    },
    
    {
        name: 'Shili',
        whrascwo: 'Sacahanah',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/b/b8/ShiliNEGAS.jpg/'
    },
    
    {
        name: 'Kalee',
        whrascwo: 'Kraanwowo',
        src: 'https://static.wikia.nocookie.net/rustarwars/images/0/08/KaleePlanet.jpg/'
    },
    
    {
        name: 'Umbara',
        whrascwo: 'Uscrhrarcra',
        src: 'https://static.wikia.nocookie.net/starwars/images/8/82/Umbara_TVE.png/'
    },

];