const wordList = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"];

const words = [{
    "name": "past",
    "singular": {
        "female": {
            "v1": "Jaz <span class='v'>sem bila</span> tukaj. Ti <span class='v'>si bila</span> tukaj. Ona <span class='v'>je bila</span> tukaj. <i>(I was/You were/She was here)</i>",
            "v2": "Jaz <span class='v'>sem imela</span> mačke. Ti <span class='v'>si imela</span> mačke. Ona <span class='v'>je imela</span> mačke. <i>(I/You/She had cats)</i>",
            "v3": "Jaz <span class='v'>sem delala</span>. Ti <span class='v'>si delala</span>. Ona <span class='v'>je delala</span>. <i>(I/You/She worked)</i>",
            "v4": "Jaz <span class='v'>sem govorila</span> angleško. Ti <span class='v'>si govorila</span> angleško. Ona <span class='v'>je govorila</span> angleško. <i>(I/You/She spoke English)</i>",
            "v5": "Jaz <span class='v'>sem šla</span> na kavo. Ti <span class='v'>si šla</span> na kavo. Ona <span class='v'>je šla</span> na kavo. <i>(I/You/She went for a coffee)</i>",
            "v6": "Jaz <span class='v'>sem jedla</span> pico. Ti <span class='v'>si jedla</span> pico. Ona <span class='v'>je jedla</span> pico. <i>(I/You/She ate a pizza)</i>",
            "v7": "Jaz <span class='v'>sem spala</span> na kavču. Ti <span class='v'>si spala</span> na kavču. Ona <span class='v'>je spala</span> na kavču. <i>(I/You/She slept on the couch)</i>",
            "v8": "Jaz <span class='v'>sem živela</span> v Kopru. Ti <span class='v'>si živela</span> v Kopru. Ona <span class='v'>je živela</span> v Kopru. <i>(I/You/She lived in Koper)</i>"
        },
        "neutral": {
            "v1": "Dekle <span class='v'>je bilo</span> tukaj. <i>(The girl was here)</i>",
            "v2": "Dekle <span class='v'>je imelo</span> mačke. <i>(The girl had cats)</i>",
            "v3": "Dekle <span class='v'>je delalo</span>. <i>(The girl worked)</i>",
            "v4": "Dekle <span class='v'>je govorilo</span> angleško. <i>(The girl spoke English)</i>",
            "v5": "Dekle <span class='v'>je šlo</span> na kavo. <i>(The girl went for a coffee)</i>",
            "v6": "Dekle <span class='v'>je jedlo</span> pico. <i>(The girl ate a pizza)</i>",
            "v7": "Dekle <span class='v'>je spalo</span> na kavču. <i>(The girl slept on the couch)</i>",
            "v8": "Dekle <span class='v'>je živelo</span> v Kopru. <i>(The girl lived in Koper)</i>"
        },
        "male": {
            "v1": "Jaz <span class='v'>sem bil</span> tukaj. Ti <span class='v'>si bil</span> tukaj. On <span class='v'>je bil</span> tukaj. <i>(I was/You were/He was here)</i>",
            "v2": "Jaz <span class='v'>sem imel</span> mačke. Ti <span class='v'>si imel</span> mačke. On <span class='v'>je imel</span> mačke. <i>(I/You/He had cats)</i>",
            "v3": "Jaz <span class='v'>sem delal</span>. Ti <span class='v'>si delal</span>. Ona <span class='v'>je delal</span>. <i>(I/You/He worked)</i>",
            "v4": "Jaz <span class='v'>sem govoril</span> angleško. Ti <span class='v'>si govoril</span> angleško. On <span class='v'>je govoril</span> angleško. <i>(I/You/He spoke English)</i>",
            "v5": "Jaz <span class='v'>sem šel</span> na kavo. Ti <span class='v'>si šel</span> na kavo. On <span class='v'>je šel</span> na kavo. <i>(I/You/He went for a coffee)</i>",
            "v6": "Jaz <span class='v'>sem jedel</span> pico. Ti <span class='v'>si jedel</span> pico. On <span class='v'>je jedel</span> pico. <i>(I/You/He ate a pizza)</i>",
            "v7": "Jaz <span class='v'>sem spal</span> na kavču. Ti <span class='v'>si spal</span> na kavču. On <span class='v'>je spal</span> na kavču. <i>(I/You/He slept on the couch)</i>",
            "v8": "Jaz <span class='v'>sem živel</span> v Kopru. Ti <span class='v'>si živel</span> v Kopru. On <span class='v'>je živel</span> v Kopru. <i>(I/You/He lived in Koper)</i>"
        }
    },
    "dual": {
        "female": {
            "v1": "Medve <span class='v'>sva bili</span> tukaj. Vedve <span class='v'>sta bili</span> tukaj. Onidve <span class='v'>sta bili</span> tukaj. <i>(We/You/They both lived in Koper)</i>",
            "v2": "Medve <span class='v'>sva imeli</span> mačke. Vedve <span class='v'>sta imeli</span> mačke. Onidve <span class='v'>sta imeli</span> mačke. <i>(We/You/They both had cats)</i>",
            "v3": "Medve <span class='v'>sva delali</span>. Vedve <span class='v'>sta delali</span>. Onidve <span class='v'>sta delali</span>. <i>(We/You/They both worked)</i>",
            "v4": "Medve <span class='v'>sva govorili</span> angleško. Vedve <span class='v'>sta govorili</span> angleško. Onidve <span class='v'>sta govorili</span> angleško. <i>(We/You/They both spoke English)</i>",
            "v5": "Medve <span class='v'>sva šli</span> na kavo. Vedve <span class='v'>sta šli</span> na kavo. Onidve <span class='v'>sta šli</span> na kavo. <i>(We/You/They both went for a coffee)</i>",
            "v6": "Medve <span class='v'>sva jedli</span> pico. Vedve <span class='v'>sta jedli</span> pico. Onidve <span class='v'>sta jedli</span> pico. <i>(We/You/They both ate a pizza)</i>",
            "v7": "Medve <span class='v'>sva spali</span> na kavču. Vedve <span class='v'>sta spali</span> na kavču. Onidve <span class='v'>sta spali</span> na kavču. <i>(We/You/They both slept on the couch)</i>",
            "v8": "Medve <span class='v'>sva živeli</span> v Kopru. Vedve <span class='v'>sta živeli</span> v Kopru. Onidve <span class='v'>sta živeli</span> v Kopru. <i>(We/You/They both lived in Koper)</i>"
        },
        "neutral": {
            "v1": "Dekleti <span class='v'>sta bili</span> tukaj. <i>(The two girls were here)</i>",
            "v2": "Dekleti <span class='v'>sta imeli</span> mačke. <i>(The two girls had cats)</i>",
            "v3": "Dekleti <span class='v'>sta delali</span>. <i>(The two girls worked)</i>",
            "v4": "Dekleti <span class='v'>sta govorili</span> angleško. <i>(The two girls spoke English)</i>",
            "v5": "Dekleti <span class='v'>sta šli</span> na kavo. <i>(The two girls went for a coffee)</i>",
            "v6": "Dekleti <span class='v'>sta jedli</span> pico. <i>(The two girls ate a pizza)</i>",
            "v7": "Dekleti <span class='v'>sta spali</span> na kavču. <i>(The two girls slept on the couch)</i>",
            "v8": "Dekleti <span class='v'>sta živeli</span> v Kopru. <i>(The two girls lived in Koper)</i>"
        },
        "male": {
            "v1": "Midva <span class='v'>sva bila</span> tukaj. Vidva <span class='v'>sta bila</span> tukaj. Onadva <span class='v'>sta bila</span> tukaj. <i>(We/You/They both lived in Koper)</i>",
            "v2": "Midva <span class='v'>sva imela</span> mačke. Vidva <span class='v'>sta imela</span> mačke. Onadva <span class='v'>sta imela</span> mačke. <i>(We/You/They both had cats)</i>",
            "v3": "Midva <span class='v'>sva delala</span>. Vidva <span class='v'>sta delala</span>. Onadva <span class='v'>sta delala</span>. <i>(We/You/They both worked)</i>",
            "v4": "Midva <span class='v'>sva govorila</span> angleško. Vidva <span class='v'>sta govorila</span> angleško. Onadva <span class='v'>sta govorila</span> angleško. <i>(We/You/They both spoke English)</i>",
            "v5": "Midva <span class='v'>sva šla</span> na kavo. Vidva <span class='v'>sta šla</span> na kavo. Onadva <span class='v'>sta šla</span> na kavo. <i>(We/You/They both went for a coffee)</i>",
            "v6": "Midva <span class='v'>sva jedla</span> pico. Vidva <span class='v'>sta jedla</span> pico. Onadva <span class='v'>sta jedla</span> pico. <i>(We/You/They both ate a pizza)</i>",
            "v7": "Midva <span class='v'>sva spala</span> na kavču. Vidva <span class='v'>sta spala</span> na kavču. Onadva <span class='v'>sta spala</span> na kavču. <i>(We/You/They both slept on the couch)</i>",
            "v8": "Midva <span class='v'>sva živela</span> v Kopru. Vidva <span class='v'>sta živela</span> v Kopru. Onadva <span class='v'>sta živela</span> v Kopru. <i>(We/You/They both lived in Koper)</i>"
        }
    },
    "plural": {
        "female": {
            "v1": "Me <span class='v'>smo bile</span> tukaj. Ve <span class='v'>ste bile</span> tukaj. One <span class='v'>so bile</span> tukaj. <i>(We/You/They were here)</i>",
            "v2": "Me <span class='v'>smo imele</span> mačke. Ve <span class='v'>ste imele</span> mačke. One <span class='v'>so imele</span> mačke. <i>(We/You/They had cats)</i>",
            "v3": "Me <span class='v'>smo delale</span>. Ve <span class='v'>ste delale</span>. One <span class='v'>so delale</span>. <i>(We/You/They worked)</i>",
            "v4": "Me <span class='v'>smo govorile</span> angleško. Ve <span class='v'>ste govorile</span> angleško. One <span class='v'>so govorile</span> angleško. <i>(We/You/They spoke English)</i>",
            "v5": "Me <span class='v'>smo šle</span> na kavo. Ve <span class='v'>ste šle</span> na kavo. One <span class='v'>so šle</span> na kavo. <i>(We/You/They went for a coffee)</i>",
            "v6": "Me <span class='v'>smo jedle</span> pico. Ve <span class='v'>ste jedle</span> pico. One <span class='v'>so jedle</span> pico. <i>(We/You/They are a pizza)</i>",
            "v7": "Me <span class='v'>smo spale</span> na kavču. Ve <span class='v'>ste spale</span> na kavču. One <span class='v'>so spale</span> na kavču. <i>(We/You/They slept on the couch)</i>",
            "v8": "Me <span class='v'>smo živele</span> v Kopru. Ve <span class='v'>ste živele</span> v Kopru. One <span class='v'>so živele</span> v Kopru. <i>(We/You/They lived in Koper)</i>"
        },
        "neutral": {
            "v1": "Dekleta <span class='v'>so bila</span> tukaj. <i>(The girls were here)</i>",
            "v2": "Dekleta <span class='v'>so imela</span> mačke. <i>(The girls had cats)</i>",
            "v3": "Dekleta <span class='v'>so delala</span>. <i>(The girls worked)</i>",
            "v4": "Dekleta <span class='v'>so govorila</span> angleško. <i>(The girls spoke English)</i>",
            "v5": "Dekleta <span class='v'>so šla</span> na kavo. <i>(The girls went for a coffee)</i>",
            "v6": "Dekleta <span class='v'>so jedla</span> pico. <i>(The girls ate a pizza)</i>",
            "v7": "Dekleta <span class='v'>so spala</span> na kavču. <i>(The girls slept on the couch)</i>",
            "v8": "Dekleta <span class='v'>so živela</span> v Kopru. <i>(The girls lived in Koper)</i>"
        },
        "male": {
            "v1": "Mi <span class='v'>smo bili</span> tukaj. Vi <span class='v'>ste bili</span> tukaj. Oni <span class='v'>so bili</span> tukaj. <i>(We/You/They were here)</i>",
            "v2": "Mi <span class='v'>smo imeli</span> mačke. Vi <span class='v'>ste imeli</span> mačke. Oni <span class='v'>so imeli</span> mačke. <i>(We/You/They had cats)</i>",
            "v3": "Mi <span class='v'>smo delali</span>. Vi <span class='v'>ste delali</span>. Oni <span class='v'>so delali</span>. <i>(We/You/They worked)</i>",
            "v4": "Mi <span class='v'>smo govorili</span> angleško. Vi <span class='v'>ste govorili</span> angleško. Oni <span class='v'>so govorili</span> angleško. <i>(We/You/They spoke English)</i>",
            "v5": "Mi <span class='v'>smo šli</span> na kavo. Vi <span class='v'>ste šli</span> na kavo. Oni <span class='v'>so šli</span> na kavo. <i>(We/You/They went for a coffee)</i>",
            "v6": "Mi <span class='v'>smo jedli</span> pico. Vi <span class='v'>ste jedli</span> pico. Oni <span class='v'>so jedli</span> pico. <i>(We/You/They ate a pizza)</i>",
            "v7": "Mi <span class='v'>smo spali</span> na kavču. Vi <span class='v'>ste spali</span> na kavču. Oni <span class='v'>so spali</span> na kavču. <i>(We/You/They slept on the couch)</i>",
            "v8": "Mi <span class='v'>smo živeli</span> v Kopru. Vi <span class='v'>ste živeli</span> v Kopru. Oni <span class='v'>so živeli</span> v Kopru. <i>(We/You/They lived in Koper)</i>"
        }
    }
},
{
    "name": "present",
    "singular": {
        "female": {
            "v1": "Jaz <span class='v'>sem</span> tukaj. Ti <span class='v'>si</span> tukaj. Ona <span class='v'>je</span> tukaj. <i>(I am / You are / She is there)</i>",
            "v2": "Jaz <span class='v'>imam</span> mačke. Ti <span class='v'>imaš</span> mačke. Ona <span class='v'>ima</span> mačke. <i>(I have / You have / She has cats)</i>",
            "v3": "Jaz <span class='v'>delam</span>. Ti <span class='v'>delaš</span>. Ona <span class='v'>dela</span>. <i>(I/You/She work(s))</i>",
            "v4": "Jaz <span class='v'>govorim</span> angleško. Ti <span class='v'>govoriš</span> angleško. Ona <span class='v'>govori</span> angleško. <i>(I/You/She speak(s) English)</i>",
            "v5": "Jaz <span class='v'>grem</span> na kavo. Ti <span class='v'>greš</span> na kavo. Ona <span class='v'>gre</span> na kavo. <i>(I/You/She go(es) for a coffee)</i>",
            "v6": "Jaz <span class='v'>jem</span> pico. Ti <span class='v'>ješ</span> pico. Ona <span class='v'>je</span> pico. <i>(I/You/She eat(s) a pizza)</i>",
            "v7": "Jaz <span class='v'>spim</span> na kavču. Ti <span class='v'>spiš</span> na kavču. Ona <span class='v'>spi</span> na kavču. <i>(I/You/She sleep(s) on the couch)</i>",
            "v8": "Jaz <span class='v'>živim</span> v Kopru. Ti <span class='v'>živiš</span> v Kopru. Ona <span class='v'>živi</span> v Kopru. <i>(I/You/She live(s) in Koper)</i>"
        },
        "neutral": {
            "v1": "Dekle <span class='v'>je</span> tukaj. <i>(The girl is here)</i>",
            "v2": "Dekle <span class='v'>ima</span> mačke. <i>(The girl has cats)</i>",
            "v3": "Dekle <span class='v'>dela</span>. <i>(The girl works)</i>",
            "v4": "Dekle <span class='v'>govori</span> angleško. <i>(The girl speaks English)</i>",
            "v5": "Dekle <span class='v'>gre</span> na kavo. <i>(The girl goes for a coffee)</i>",
            "v6": "Dekle <span class='v'>je</span> pico. <i>(The girl eats a pizza)</i>",
            "v7": "Dekle <span class='v'>spi</span> na kavču. <i>(The girl sleeps on the couch)</i>",
            "v8": "Dekle <span class='v'>živi</span> v Kopru. <i>(The girl lives in Koper)</i>"
        },
        "male": {
            "v1": "Jaz <span class='v'>sem</span> tukaj. Ti <span class='v'>si</span> tukaj. On <span class='v'>je</span> tukaj. <i>(I am / You are / He is there)</i>",
            "v2": "Jaz <span class='v'>imam</span> mačke. Ti <span class='v'>imaš</span> mačke. On <span class='v'>ima</span> mačke. <i>(I have / You have / He has cats)</i>",
            "v3": "Jaz <span class='v'>delam</span>. Ti <span class='v'>delaš</span>. On <span class='v'>dela</span>. <i>(I/You/He work(s))</i>",
            "v4": "Jaz <span class='v'>govorim</span> angleško. Ti <span class='v'>govoriš</span> angleško. On <span class='v'>govori</span> angleško. <i>(I/You/He speak(s) English)</i>",
            "v5": "Jaz <span class='v'>grem</span> na kavo. Ti <span class='v'>greš</span> na kavo. On <span class='v'>gre</span> na kavo. <i>(I/You/He go(es) for a coffee)</i>",
            "v6": "Jaz <span class='v'>jem</span> pico. Ti <span class='v'>ješ</span> pico. On <span class='v'>je</span> pico. <i>(I/You/He eat(s) a pizza)</i>",
            "v7": "Jaz <span class='v'>spim</span> na kavču. Ti <span class='v'>spiš</span> na kavču. On <span class='v'>spi</span> na kavču. <i>(I/You/He sleep(s) on the couch)</i>",
            "v8": "Jaz <span class='v'>živim</span> v Kopru. Ti <span class='v'>živiš</span> v Kopru. On <span class='v'>živi</span> v Kopru. <i>(I/You/He live(s) in Koper)</i>"
        }
    },
    "dual": {
        "female": {
            "v1": "Medve <span class='v'>sva</span> tukaj. Vedve <span class='v'>sta</span> tukaj. Onadve <span class='v'>sta</span> tukaj. <i>(We/You/They are both here)</i>",
            "v2": "Medve <span class='v'>imava</span> mačke. Vedve <span class='v'>imata</span> mačke. Onadve <span class='v'>imata</span> mačke. <i>(We/You/They both have cats)</i>",
            "v3": "Medve <span class='v'>delava</span>. Vedve <span class='v'>delata</span>. Onadve <span class='v'>delata</span>. <i>(We/You/They both work)</i>",
            "v4": "Medve <span class='v'>govoriva</span> angleško. Vedve <span class='v'>govorita</span> angleško. Onadve <span class='v'>govorita</span> angleško. <i>(We/You/They both speak English)</i>",
            "v5": "Medve <span class='v'>greva</span> na kavo. Vedve <span class='v'>gresta</span> na kavo. Onadve <span class='v'>gresta</span> na kavo. <i>(We/You/They both go for a coffee)</i>",
            "v6": "Medve <span class='v'>jeva</span> pico. Vedve <span class='v'>jesta</span> pico. Onadve <span class='v'>jesta</span> pico. <i>(We/You/They both eat a pizza)</i>",
            "v7": "Medve <span class='v'>spiva</span> na kavču. Vedve <span class='v'>spita</span> na kavču. Onadve <span class='v'>spita</span> na kavču. <i>(We/You/They both sleep on the couch)</i>",
            "v8": "Medve <span class='v'>živiva</span> v Kopru. Vedve <span class='v'>živita</span> v Kopru. Onadve <span class='v'>živita</span> v Kopru. <i>(We/You/They both live in Koper)</i>"
        },
        "neutral": {
            "v1": "Dekleti <span class='v'>jesta</span> tukaj. <i>(The two girls are here)</i>",
            "v2": "Dekleti <span class='v'>imata</span> mačke. <i>(The two girls have cats)</i>",
            "v3": "Dekleti <span class='v'>delata</span>. <i>(The two girls work)</i>",
            "v4": "Dekleti <span class='v'>govorita</span> angleško. <i>(The two girls speak English)</i>",
            "v5": "Dekleti <span class='v'>gresta</span> na kavo. <i>(The two girls go for a coffee)</i>",
            "v6": "Dekleti <span class='v'>jesta</span> pico. <i>(The two girls eat a pizza)</i>",
            "v7": "Dekleti <span class='v'>spita</span> na kavču. <i>(The two girls sleep on the couch)</i>",
            "v8": "Dekleti <span class='v'>živita</span> v Kopru. <i>(The two girls live in Koper)</i>"
        },
        "male": {
            "v1": "Midva <span class='v'>sva</span> tukaj. Vidva <span class='v'>sta</span> tukaj. Onidva <span class='v'>sta</span> tukaj. <i>(We/You/They are both here)</i>",
            "v2": "Midva <span class='v'>imava</span> mačke. Vidva <span class='v'>imata</span> mačke. Onidva <span class='v'>imata</span> mačke. <i>(We/You/They both have cats)</i>",
            "v3": "Midva <span class='v'>delava</span>. Vidva <span class='v'>delata</span>. Onidva <span class='v'>delata</span>. <i>(We/You/They both work)</i>",
            "v4": "Midva <span class='v'>govoriva</span> angleško. Vidva <span class='v'>govorita</span> angleško. Onidva <span class='v'>govorita</span> angleško. <i>(We/You/They both speak English)</i>",
            "v5": "Midva <span class='v'>greva</span> na kavo. Vidva <span class='v'>gresta</span> na kavo. Onidva <span class='v'>gresta</span> na kavo. <i>(We/You/They both go for a coffee)</i>",
            "v6": "Midva <span class='v'>jeva</span> pico. Vidva <span class='v'>jesta</span> pico. Onidva <span class='v'>jesta</span> pico. <i>(We/You/They both eat a pizza)</i>",
            "v7": "Midva <span class='v'>spiva</span> na kavču. Vidva <span class='v'>spita</span> na kavču. Onidva <span class='v'>spita</span> na kavču. <i>(We/You/They both sleep on the couch)</i>",
            "v8": "Midva <span class='v'>živiva</span> v Kopru. Vidva <span class='v'>živita</span> v Kopru. Onidva <span class='v'>živita</span> v Kopru. <i>(We/You/They both live in Koper)</i>"
        }
    },
    "plural": {
        "female": {
            "v1": "Me <span class='v'>smo</span> tukaj. Ve <span class='v'>ste</span> tukaj. One <span class='v'>so</span> tukaj. <i>(We/You/They are here)</i>",
            "v2": "Me <span class='v'>imamo</span> mačke. Ve <span class='v'>imate</span> mačke. One <span class='v'>imajo</span> mačke. <i>(We/You/They have cats)</i>",
            "v3": "Me <span class='v'>delamo</span>. Ve <span class='v'>delate</span>. One <span class='v'>delajo</span>. <i>(We/You/They work)</i>",
            "v4": "Me <span class='v'>govorimo</span> angleško. Ve <span class='v'>govorite</span> angleško. One <span class='v'>govorijo</span> angleško. <i>(We/You/They speak English)</i>",
            "v5": "Me <span class='v'>gremo</span> na kavo. Ve <span class='v'>greste</span> na kavo. One <span class='v'>grejo</span> na kavo. <i>(We/You/They go for a coffee)</i>",
            "v6": "Me <span class='v'>jemo</span> pico. Ve <span class='v'>jeste</span> pico. One <span class='v'>jejo</span> pico. <i>(We/You/They eat pizza)</i>",
            "v7": "Me <span class='v'>spimo</span> na kavču. Ve <span class='v'>spite</span> na kavču. One <span class='v'>spijo</span> na kavču. <i>(We/You/They sleep on the couch)</i>",
            "v8": "Me <span class='v'>živimo</span> v Kopru. Ve <span class='v'>živite</span> v Kopru. One <span class='v'>živijo</span> v Kopru. <i>(We/You/They live in Koper)</i>"
        },
        "neutral": {
            "v1": "Dekleta <span class='v'>so</span> tukaj. <i>(The girls are here)</i>",
            "v2": "Dekleta <span class='v'>imajo</span> mačke. <i>(The girls have cats)</i>",
            "v3": "Dekleta <span class='v'>delajo</span>. <i>(The girls work)</i>",
            "v4": "Dekleta <span class='v'>govorijo</span> angleško. <i>(The girls speak English)</i>",
            "v5": "Dekleta <span class='v'>grejo</span> na kavo. <i>(The girls go for a coffee)</i>",
            "v6": "Dekleta <span class='v'>jejo</span> pico. <i>(The girls eat pizza)</i>",
            "v7": "Dekleta <span class='v'>spijo</span> na kavču. <i>(The girls sleep on the couch)</i>",
            "v8": "Dekleta <span class='v'>živijo</span> v Kopru. <i>(The girls live in Koper)</i>"
        },
        "male": {
            "v1": "Mi <span class='v'>smo</span> tukaj. Vi <span class='v'>ste</span> tukaj. Oni <span class='v'>so</span> tukaj. <i>(We/You/They are here)</i>",
            "v2": "Mi <span class='v'>imamo</span> mačke. Vi <span class='v'>imate</span> mačke. Oni <span class='v'>imajo</span> mačke. <i>(We/You/They have cats)</i>",
            "v3": "Mi <span class='v'>delamo</span>. Vi <span class='v'>delate</span>. Oni <span class='v'>delajo</span>. <i>(We/You/They work)</i>",
            "v4": "Mi <span class='v'>govorimo</span> angleško. Vi <span class='v'>govorite</span> angleško. Oni <span class='v'>govorijo</span> angleško. <i>(We/You/They speak English)</i>",
            "v5": "Mi <span class='v'>gremo</span> na kavo. Vi <span class='v'>greste</span> na kavo. Oni <span class='v'>grejo</span> na kavo. <i>(We/You/They go for a coffee)</i>",
            "v6": "Mi <span class='v'>jemo</span> pico. Vi <span class='v'>jeste</span> pico. Oni <span class='v'>jejo</span> pico. <i>(We/You/They eat pizza)</i>",
            "v7": "Mi <span class='v'>spimo</span> na kavču. Vi <span class='v'>spite</span> na kavču. Oni <span class='v'>spijo</span> na kavču. <i>(We/You/They sleep on the couch)</i>",
            "v8": "Mi <span class='v'>živimo</span> v Kopru. Vi <span class='v'>živite</span> v Kopru. Oni <span class='v'>živijo</span> v Kopru. <i>(We/You/They live in Koper)</i>"
        }
    }
},
{
    "name": "future",
    "singular": {
        "female": {
            "v1": "Jaz <span class='v'>bom</span> tukaj. Ti <span class='v'>boš</span> tukaj. Ona <span class='v'>bo</span> tukaj. <i>(I/You/She will be here)</i>",
            "v2": "Jaz <span class='v'>bom imela</span> mačke. Ti <span class='v'>boš imela</span> mačke. Ona <span class='v'>bo imela</span> mačke. <i>(I/You/She will have cats)</i>",
            "v3": "Jaz <span class='v'>bom delala</span>. Ti <span class='v'>boš delala</span>. Ona <span class='v'>bo delala</span>. <i>(I/You/She will work)</i>",
            "v4": "Jaz <span class='v'>bom govorila</span> angleško. Ti <span class='v'>boš govorila</span> angleško. On <span class='v'>bo govorila</span> angleško. <i>(I/You/She will speak English)</i>",
            "v5": "Jaz <span class='v'>bom šla</span> na kavo. Ti <span class='v'>boš šla</span> na kavo. Ona <span class='v'>bo šla</span> na kavo. <i>(I/You/She will go for a coffee)</i>",
            "v6": "Jaz <span class='v'>bom jedla</span> pico. Ti <span class='v'>boš jedla</span> pico. Ona <span class='v'>bo jedla</span> pico. <i>(I/You/She will eat a pizza)</i>",
            "v7": "Jaz <span class='v'>bom spala</span> na kavču. Ti <span class='v'>boš spala</span> na kavču. Ona <span class='v'>bo spala</span> na kavču. <i>(I/You/She will sleep on the couch)</i>",
            "v8": "Jaz <span class='v'>bom živela</span> v Kopru. Ti <span class='v'>boš živela</span> v Kopru. Ona <span class='v'>bo živela</span> v Kopru. <i>(I/You/She will live in Koper)</i>"
        },
        "neutral": {
            "v1": "Dekle <span class='v'>bo</span> tukaj. <i>(The girl will be here)</i>",
            "v2": "Dekle <span class='v'>bo imelo</span> mačke. <i>(The girl will have cats)</i>",
            "v3": "Dekle <span class='v'>bo delalo</span>. <i>(The girl will work)</i>",
            "v4": "Dekle <span class='v'>bo govorilo</span> angleško. <i>(The girl will speak English)</i>",
            "v5": "Dekle <span class='v'>bo šlo</span> na kavo. <i>(The girl will go for a coffee)</i>",
            "v6": "Dekle <span class='v'>bo jedlo</span> pico. <i>(The girl will eat a pizza)</i>",
            "v7": "Dekle <span class='v'>bo spalo</span> na kavču. <i>(The girl will sleep on the couch)</i>",
            "v8": "Dekle <span class='v'>bo živelo</span> v Kopru. <i>(The girl will live in Koper)</i>"
        },
        "male": {
            "v1": "Jaz <span class='v'>bom</span> tukaj. Ti <span class='v'>boš</span> tukaj. On <span class='v'>bo</span> tukaj. <i>(I/You/He will be here)</i>",
            "v2": "Jaz <span class='v'>bom imel</span> mačke. Ti <span class='v'>boš imel</span> mačke. On <span class='v'>bo imel</span> mačke. <i>(I/You/He will have cats)</i>",
            "v3": "Jaz <span class='v'>bom delal</span>. Ti <span class='v'>boš delal</span>. On <span class='v'>bo delal</span>. <i>(I/You/He will work)</i>",
            "v4": "Jaz <span class='v'>bom govoril</span> angleško. Ti <span class='v'>boš govoril</span> angleško. On <span class='v'>bo govoril</span> angleško. <i>(I/You/He will speak English)</i>",
            "v5": "Jaz <span class='v'>bom šel</span> na kavo. Ti <span class='v'>boš šel</span> na kavo. On <span class='v'>bo šel</span> na kavo. <i>(I/You/He will go for a coffee)</i>",
            "v6": "Jaz <span class='v'>bom jedel</span> pico. Ti <span class='v'>boš jedel</span> pico. On <span class='v'>bo jedel</span> pico. <i>(I/You/He will eat a pizza)</i>",
            "v7": "Jaz <span class='v'>bom spal</span> na kavču. Ti <span class='v'>boš spal</span> na kavču. On <span class='v'>bo spal</span> na kavču. <i>(I/You/He will sleep on the couch)</i>",
            "v8": "Jaz <span class='v'>bom živel</span> v Kopru. Ti <span class='v'>boš živel</span> v Kopru. On <span class='v'>bo živel</span> v Kopru. <i>(I/You/He will live in Koper)</i>"
        }
    },
    "dual": {
        "female": {
            "v1": "Medve <span class='v'>bova</span> tukaj. Vedve <span class='v'>bosta</span> tukaj. Onidve <span class='v'>bosta</span> tukaj. <i>(We/You/They will both be here)</i>",
            "v2": "Medve <span class='v'>bova imeli</span> mačke. Vedve <span class='v'>bosta imeli</span> mačke. Onidve <span class='v'>bosta imeli</span> mačke. <i>(We/You/They will both have cats)</i>",
            "v3": "Medve <span class='v'>bova delali</span>. Vedve <span class='v'>bosta delali</span>. Onidve <span class='v'>bosta delali</span>. <i>(We/You/They will both work)</i>",
            "v4": "Medve <span class='v'>bova govorili</span> angleško. Vedve <span class='v'>bosta govorili</span> angleško. Onidve <span class='v'>bosta govorili</span> angleško. <i>(We/You/They will both speak English)</i>",
            "v5": "Medve <span class='v'>bova šli</span> na kavo. Vedve <span class='v'>bosta šli</span> na kavo. Onidve <span class='v'>bosta šli</span> na kavo. <i>(We/You/They will both go for a coffee)</i>",
            "v6": "Medve <span class='v'>bova jedli</span> pico. Vedve <span class='v'>bosta jedli</span> pico. Onidve <span class='v'>bosta jedli</span> pico. <i>(We/You/They will both eat a pizza)</i>",
            "v7": "Medve <span class='v'>bova spali</span> na kavču. Vedve <span class='v'>bosta spali</span> na kavču. Onidve <span class='v'>bosta spali</span> na kavču. <i>(We/You/They will both sleep on the couch)</i>",
            "v8": "Medve <span class='v'>bova živeli</span> v Kopru. Vedve <span class='v'>bosta živeli</span> v Kopru. Onidve <span class='v'>bosta živeli</span> v Kopru. <i>(We/You/They will both live in Koper)</i>"
        },
        "neutral": {
            "v1": "Dekleti <span class='v'>bosta</span> tukaj. <i>(The two girls will be here)</i>",
            "v2": "Dekleti <span class='v'>bosta imeli</span> mačke. <i>(The two girls will have cats)</i>",
            "v3": "Dekleti <span class='v'>bosta delali</span>. <i>(The two girls will work)</i>",
            "v4": "Dekleti <span class='v'>bosta govorili</span> angleško. <i>(The two girls will speak English)</i>",
            "v5": "Dekleti <span class='v'>bosta šli</span> na kavo. <i>(The two girls will go for a coffee)</i>",
            "v6": "Dekleti <span class='v'>bosta jedli</span> pico. <i>(The two girls will eat a pizza)</i>",
            "v7": "Dekleti <span class='v'>bosta spali</span> na kavču. <i>(The two girls will sleep on the couch)</i>",
            "v8": "Dekleti <span class='v'>bosta živeli</span> v Kopru. <i>(The two girls will live in Koper)</i>"
        },
        "male": {
            "v1": "Midva <span class='v'>bova</span> tukaj. Vidva <span class='v'>bosta</span> tukaj. Onadva <span class='v'>bosta</span> tukaj. <i>(We/You/They will both be here)</i>",
            "v2": "Midva <span class='v'>bova imela</span> mačke. Vidva <span class='v'>bosta imela</span> mačke. Onadva <span class='v'>bosta imela</span> mačke. <i>(We/You/They will both have cats)</i>",
            "v3": "Midva <span class='v'>bova delala</span>. Vidva <span class='v'>bosta delala</span>. Onadva <span class='v'>bosta delala</span>. <i>(We/You/They will both work)</i>",
            "v4": "Midva <span class='v'>bova govorila</span> angleško. Vidva <span class='v'>bosta govorila</span> angleško. Onadva <span class='v'>bosta govorila</span> angleško. <i>(We/You/They will both speak English)</i>",
            "v5": "Midva <span class='v'>bova šla</span> na kavo. Vidva <span class='v'>bosta šla</span> na kavo. Onadva <span class='v'>bosta šla</span> na kavo. <i>(We/You/They will both go for a coffee)</i>",
            "v6": "Midva <span class='v'>bova jedla</span> pico. Vidva <span class='v'>bosta jedla</span> pico. Onadva <span class='v'>bosta jedla</span> pico. <i>(We/You/They will both eat a pizza)</i>",
            "v7": "Midva <span class='v'>bova spala</span> na kavču. Vidva <span class='v'>bosta spala</span> na kavču. Onadva <span class='v'>bosta spala</span> na kavču. <i>(We/You/They will both sleep on the couch)</i>",
            "v8": "Midva <span class='v'>bova živela</span> v Kopru. Vidva <span class='v'>bosta živela</span> v Kopru. Onadva <span class='v'>bosta živela</span> v Kopru. <i>(We/You/They will both live in Koper)</i>"
        }
    },
    "plural": {
        "female": {
            "v1": "Me <span class='v'>bomo</span> tukaj. Ve <span class='v'>boste</span> tukaj. One <span class='v'>bodo</span> tukaj. <i>(We/You/They will be here)</i>",
            "v2": "Me <span class='v'>bomo imele</span> mačke. Ve <span class='v'>boste imele</span> mačke. One <span class='v'>bodo imele</span> mačke. <i>(We/You/They will have cats)</i>",
            "v3": "Me <span class='v'>bomo delale</span>. Ve <span class='v'>boste delale</span>. One <span class='v'>bodo delale</span>. <i>(We/You/They will work)</i>",
            "v4": "Me <span class='v'>bomo govorile</span> angleško. Ve <span class='v'>boste govorile</span> angleško. One <span class='v'>bodo govorile</span> angleško. <i>(We/You/They will speak English)</i>",
            "v5": "Me <span class='v'>bomo šle</span> na kavo. Ve <span class='v'>boste šle</span> na kavo. One <span class='v'>bodo šle</span> na kavo. <i>(We/You/They will go for a coffee)</i>",
            "v6": "Me <span class='v'>bomo jedle</span> pico. Ve <span class='v'>boste jedle</span> pico. One <span class='v'>bodo jedle</span> pico. <i>(We/You/They will eat a pizza)</i>",
            "v7": "Me <span class='v'>bomo spale</span> na kavču. Ve <span class='v'>boste spale</span> na kavču. One <span class='v'>bodo spale</span> na kavču. <i>(We/You/They will sleep on the couch)</i>",
            "v8": "Me <span class='v'>bomo živele</span> v Kopru. Ve <span class='v'>boste živele</span> v Kopru. One <span class='v'>bodo živele</span> v Kopru. <i>(We/You/They will live in Koper)</i>"
        },
        "neutral": {
            "v1": "Dekleta <span class='v'>bodo</span> tukaj. <i>(The girls will be here)</i>",
            "v2": "Dekleta <span class='v'>bodo imela</span> mačke. <i>(The girls will have cats)</i>",
            "v3": "Dekleta <span class='v'>bodo delala</span>. <i>(The girls will work)</i>",
            "v4": "Dekleta <span class='v'>bodo govorila</span> angleško. <i>(The girls will speak English)</i>",
            "v5": "Dekleta <span class='v'>bodo šla</span> na kavo. <i>(The girls will go for a coffee)</i>",
            "v6": "Dekleta <span class='v'>bodo jedla</span> pico. <i>(The girls will eat a pizza)</i>",
            "v7": "Dekleta <span class='v'>bodo spala</span> na kavču. <i>The girls will sleep on the couch)</i>",
            "v8": "Dekleta <span class='v'>bodo živela</span> v Kopru. <i>(The girls will live in Koper)</i>"
        },
        "male": {
            "v1": "Mi <span class='v'>bomo</span> tukaj. Vi <span class='v'>boste</span> tukaj. Oni <span class='v'>bodo</span> tukaj. <i>(We/You/They will be here)</i>",
            "v2": "Mi <span class='v'>bomo imeli</span> mačke. Vi <span class='v'>boste imeli</span> mačke. Oni <span class='v'>bodo imeli</span> mačke. <i>(We/You/They will have cats)</i>",
            "v3": "Mi <span class='v'>bomo delali</span>. Vi <span class='v'>boste delali</span>. Oni <span class='v'>bodo delali</span>. <i>(We/You/They will work)</i>",
            "v4": "Mi <span class='v'>bomo govorili</span> angleško. Vi <span class='v'>boste govorili</span> angleško. Oni <span class='v'>bodo govorili</span> angleško. <i>(We/You/They will speak English)</i>",
            "v5": "Mi <span class='v'>bomo šli</span> na kavo. Vi <span class='v'>boste šli</span> na kavo. Oni <span class='v'>bodo šli</span> na kavo. <i>(We/You/They will go for a coffee)</i>",
            "v6": "Mi <span class='v'>bomo jedli</span> pico. Vi <span class='v'>boste jedli</span> pico. Oni <span class='v'>bodo jedli</span> pico. <i>(We/You/They will eat a pizza)</i>",
            "v7": "Mi <span class='v'>bomo spali</span> na kavču. Vi <span class='v'>boste spali</span> na kavču. Oni <span class='v'>bodo spali</span> na kavču. <i>(We/You/They will sleep on the couch)</i>",
            "v8": "Mi <span class='v'>bomo živeli</span> v Kopru. Vi <span class='v'>boste živeli</span> v Kopru. Oni <span class='v'>bodo živeli</span> v Kopru. <i>(We/You/They will live in Koper)</i>"
        }
    }
}
]

// current state
var params = {
    tense: "present",
    number: "singular",
    gender: "female"
};

$('.label-tense').on('change', function() {
    var cbx = $('input', this);
    if(cbx.prop('checked', false)) {
        $('.label-tense').removeClass('active');
        $(this).addClass('active');
        cbx.prop('checked', true);
        $('input[name="' + cbx.prop("name") + '"]').not(cbx).prop('checked', false);
        params.tense = cbx.prop("value");
        updateText();
    }
});

$('.label-number').on('change', function() {
    var cbx = $('input', this);
    if(cbx.prop('checked', false)) {
        $('.label-number').removeClass('active');
        $(this).addClass('active');
        cbx.prop('checked', true);
        $('input[name="' + cbx.prop("name") + '"]').not(cbx).prop('checked', false);
        params.number = cbx.prop("value");
        updateText();
    }
});

$('.label-gender').on('change', function() {
    var cbx = $('input', this);
    if(cbx.prop('checked', false)) {
        $('.label-gender').removeClass('active');
        $(this).addClass('active');
        cbx.prop('checked', true);
        $('input[name="' + cbx.prop("name") + '"]').not(cbx).prop('checked', false);
        params.gender = cbx.prop("value");
        updateText();
    }
});

// // One single value possible when selecting number
// $('input[type="checkbox"][name="number"]').on('change', function() {
//     if($(this).prop('checked', false)) {
//         $(this).prop('checked', true);
//         $('input[name="' + this.name + '"]').not(this).prop('checked', false);
//         params.number = this.value;
//         updateText();
//     }
// });

// // One single value possible when selecting gender
// $('input[type="checkbox"][name="gender"]').on('change', function() {
//     if($(this).prop('checked', false)) {
//         $(this).toggleClass('active');
//         $(this).prop('checked', true);
//         $('input[name="' + this.name + '"]').not(this).prop('checked', false);
//         params.gender = this.value;
//         updateText();
//     }
// });


function updateText() {
    // console.log(params);
    for (i = 0; i < wordList.length; i++) {
        document.getElementById(wordList[i]).innerHTML = getNewWord(wordList[i]);
    }
}

function getNewWord(word) {
    return (words.filter(d => d.name == params.tense)[0][params.number][params.gender][word]);
}

updateText();