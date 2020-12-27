--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: bank; Type: TABLE; Schema: public; Owner: jaredthomas
--

CREATE TABLE bank (
    id integer NOT NULL,
    balance character varying(255) DEFAULT '0'::character varying NOT NULL,
    user_id integer
);


ALTER TABLE bank OWNER TO jaredthomas;

--
-- Name: bank_id_seq; Type: SEQUENCE; Schema: public; Owner: jaredthomas
--

CREATE SEQUENCE bank_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE bank_id_seq OWNER TO jaredthomas;

--
-- Name: bank_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jaredthomas
--

ALTER SEQUENCE bank_id_seq OWNED BY bank.id;


--
-- Name: bought_songs; Type: TABLE; Schema: public; Owner: jaredthomas
--

CREATE TABLE bought_songs (
    id integer NOT NULL,
    user_id integer NOT NULL,
    song_id integer NOT NULL
);


ALTER TABLE bought_songs OWNER TO jaredthomas;

--
-- Name: bought_songs_id_seq; Type: SEQUENCE; Schema: public; Owner: jaredthomas
--

CREATE SEQUENCE bought_songs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE bought_songs_id_seq OWNER TO jaredthomas;

--
-- Name: bought_songs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jaredthomas
--

ALTER SEQUENCE bought_songs_id_seq OWNED BY bought_songs.id;


--
-- Name: songs; Type: TABLE; Schema: public; Owner: jaredthomas
--

CREATE TABLE songs (
    id integer NOT NULL,
    song_artist character varying(255) NOT NULL,
    song_name character varying(255) NOT NULL,
    price integer NOT NULL,
    lyrics text
);


ALTER TABLE songs OWNER TO jaredthomas;

--
-- Name: songs_id_seq; Type: SEQUENCE; Schema: public; Owner: jaredthomas
--

CREATE SEQUENCE songs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE songs_id_seq OWNER TO jaredthomas;

--
-- Name: songs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jaredthomas
--

ALTER SEQUENCE songs_id_seq OWNED BY songs.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: jaredthomas
--

CREATE TABLE users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);


ALTER TABLE users OWNER TO jaredthomas;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: jaredthomas
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_id_seq OWNER TO jaredthomas;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jaredthomas
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: bank id; Type: DEFAULT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY bank ALTER COLUMN id SET DEFAULT nextval('bank_id_seq'::regclass);


--
-- Name: bought_songs id; Type: DEFAULT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY bought_songs ALTER COLUMN id SET DEFAULT nextval('bought_songs_id_seq'::regclass);


--
-- Name: songs id; Type: DEFAULT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY songs ALTER COLUMN id SET DEFAULT nextval('songs_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Data for Name: bank; Type: TABLE DATA; Schema: public; Owner: jaredthomas
--

COPY bank (id, balance, user_id) FROM stdin;
4	17	6
5	17	7
6	0	8
7	17	9
8	17	10
9	17	11
10	0	19
3	8	5
\.


--
-- Name: bank_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jaredthomas
--

SELECT pg_catalog.setval('bank_id_seq', 10, true);


--
-- Data for Name: bought_songs; Type: TABLE DATA; Schema: public; Owner: jaredthomas
--

COPY bought_songs (id, user_id, song_id) FROM stdin;
3	5	5
4	5	4
5	6	8
6	7	7
7	5	1
8	5	6
13	5	3
14	5	8
15	5	9
16	9	5
17	10	3
18	11	1
19	5	7
20	10	5
\.


--
-- Name: bought_songs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jaredthomas
--

SELECT pg_catalog.setval('bought_songs_id_seq', 21, true);


--
-- Data for Name: songs; Type: TABLE DATA; Schema: public; Owner: jaredthomas
--

COPY songs (id, song_artist, song_name, price, lyrics) FROM stdin;
3	Ton Loc	Funky Cold Medina	3	Alright, dig it\nCold coolin at a bar, and I'm lookin for some action\nBut like Mike Jagger said, I can't get no satisfaction\nThe girls are all around, but none of them want to get with me\nMy threads are fresh and I'm lookin def, yo, what's up with L-o-see?\nThe girls is all jockin at the other end of the bar\nHavin drinks with some no-name chump, when they know that I'm the star\nSo I got up and strolled over to the other side of the cantina\nI asked the guy, "Why you so fly?" he said, "Funky Cold Medina"\nFunky Cold Medina\nThis brother told me a secret on how to get more chicks\nPut a little Medina in your glass, and the girls'll come real quick\nIt's better than any alcohol or aphrodisiac\nA couple of sips of this love potion, and she'll be on your lap\nSo I gave some to my dog when he began to beg\nThen he licked his bowl and he looked at me and did the wild thing on my leg\nHe used to scratch and bite me, before he was much much meaner\nBut now all the poodles run to my house for the Funky Cold Medina\nYou know what I'm sayin?\nI got every dog in my neighborhood breakin down my door\nI got Spuds McKenzie\nAlex from Stroh's\nThey won't leave my dog alone with that Medina, pal\nI went up to this girl, she said, "Hi, my name is Sheena"\nI thought she'd be good to go with a little Funky Cold Medina\nShe said, "I'd like a drink, " I said, "Ehm - ok, I'll go get it"\nThen a couple sips she cold licked her lips, and I knew that she was with it\nSo I took her to my crib, and everything went well as planned\nBut when she got undressed, it was a big old mess, Sheena was a man\nSo I threw him out, I don't fool around with no Oscar Meyer wiener\nYou must be sure that the girl is pure for the Funky Cold Medina\nYou know, ain't no plans with a man\nThis is the 80's, and I'm down with the ladies\nYa know?\nBreak it down\nBack in the saddle, lookin for a little affection\nI took a shot as a contestant on _The Love Connection_\nThe audience voted, and you know they picked a winner\nI took my date to the Hilton for Medina and some dinner\nShe had a few drinks, I'm thinkin soon what I'll be gettin\nInstead she started talkin 'bout plans for our weddin\nI said, "Wait, slow down, love, not so fast says, I'll be seein ya"\nThat's why I found you don't play around with the Funky Cold Medina\nYa know what I'm sayin\nThat Medina's a monster, y'all\nFunky Cold Medina
4	Seven Mary Three	Cumbersome	3	She calls me Goliath and I wear the David mask\nI guess the stones are coming too fast for her now\nYou know I'd like to believe this nervousness will pass\nAll the stones that are thrown are building up a wall\nI have become cumbersome to this world\nI have become cumbersome to my girl\nI'd like to believe we could reconcile the past\nResurrect those bridges with an ancient glance\nBut my old stone face can't seem to bring her down\nShe remembers bridges, burns them to the ground\nI have become cumbersome to this world\nI have become cumbersome to my girl\nToo heavy too light, too black or too white, too wrong or too right, today or\nTonight\nCumbersome\nToo rich or too poor, she's wanting me less and I'm wanting her more\nThe bitter taste is cumbersome\nThere is a balance between two worlds\nOne with an arrow and a cross\nRegardless of the balance life has become\nCumbersome\nToo heavy too light, too black or too white, too wrong or too right, today or\nTonight\nCumbersome\nToo rich or too poor, she's wanting me less and I'm wanting her more\nThe bitter taste is cumbersome\nNo, yeah I know now, know\nKnow now, know yeah\nYour life has become cumbersome
5	Muse	Madness	3	I, I can't get these memories out of my mind\nAnd some kind of madness has started to evolve\nI, I tried so hard to let you go\nBut some kind of madness is swallowing me whole, yeah\nI have finally seen the light\nAnd I have finally realized\nWhat you mean\nOh oh oh\nAnd now, I need to know is this real love\nOr is it just madness keeping us afloat?\nAnd when I look back at all the crazy fights we had\nLike some kind of madness\nWas taking control\nYeah\nAnd now I have finally seen the light\nAnd I have finally realized\nWhat you need\nMm\nAnd now I have finally seen the end (Finally seen the end)\nAnd I'm not expecting you to care (Expecting you to care)\nBut I have finally seen the light (Finally seen the light)\nI have finally realized (Realized)\nI need to love\nI need to love\nCome to me,\nTrust in your dream\nCome on and rescue me\nYes I have known, I can be wrong\nMaybe I'm too headstrong\nOur love is\nMadness
6	Ted Nugent	Stranglehold	3	Here I come again now baby\nLike a dog in heat\nTell it's me by the clamor now baby\nI like to tap the streets\n\nNow I've been smoking for so long \nYou know I'm here to stay\nGot you in a stranglehold baby \nYou best get out of the way\n\nThe road I cruise is a bitch now baby \nYou know you can't turn me 'round\nAnd if a house gets in my way baby\nYou know I'll burn it down\n\nYou remember the night that you left me\nYou put me in my place\nGot you in a stranglehold now baby\nYou're gone, I crushed your face\n\nYeah, sometimes you want to get higher \nA sometimes you gotta start low\nSome people think they gonna die someday\nI got news you never got to go old\n\nCome on, come on up\nCome on, come on up\nCome on, come on up\nCome on, come on up\nCome on, come on baby\nCome on, come on, come on, come on up\nCome on, come on, come on, come on baby\nCome on, come on, come on \n\nThe road I cruise is a bitch now baby \nYou know you can't turn me 'round\nYeah and if a house gets in my way\nYou know I'll burn it down\nYou remember the night that you left me\nYou put me in my place\nI got you in a stranglehold now baby\nLast night I crushed your face
10	Wild Cherry	Play That Funky Music	3	Hey do it now yeah hey\nYeah, there was a funky singer\nPlayin' in a rock and roll band\nAnd never had no problems yeah\nBurnin' down one night stands\nAnd everything around me, yeah\nGot to stop to feelin' so low\nAnd I decided quickly, yes I did\nTo disco down and check out the show\nYeah they was\nDancin' and singin' and movin' to the groovin'\nAnd just when it hit me somebody turned around and shouted\nPlay that funky music white boy\nPlay that funky music right\nPlay that funky music white boy\nLay down that boogie and play that funky music till you die\nTill you die, oh till you die\nI tried to understand this\nI thought that they were out of their minds\nHow could I be so foolish (How could I)\nTo not see I was the one behind\nSo still I kept on fighting\nWell, loosing every step of the way\nI said, I must go back there (I got to go back)\nAnd check to see if things still the same\nYeah they was dancin' and singin' and movin' to the groovin'\nAnd just when it hit me somebody turned around and shouted\nPlay that funky music white boy\nPlay that funky music right\nPlay that funky music white boy\nLay down the boogie and play that funky music till you die\nTill you die, ya\nTill you die\nNow first it wasn't easy\nChangin' Rock and Roll and minds and things were getting shaky\nI thought I'd have to leave it behind\nBut now its so much better (it's so much better)\nI'm funking out in every way\nBut I'll never lose that feelin' (no I won't)\nOf how I learned my lesson that day\nWhen they were dancin' and singin' and movin' to the groovin'\nAnd just when it hit me somebody turned around and shouted\nPlay that funky music white boy\nPlay that funky music right\nPlay that funky music white boy\nLay down the boogie and play that funky music till you die\nTill you die\nOh' till you die\nThey shouted play that funky music\n(Play that funky music)\nPlay that funky music\n(You Gotta keep on playin' funky music)\nPlay that funky music\n(Play that funky music)\nPlay that funky music\n(Come and take you higher, ya)\nPlay that funky music white boy\nPlay that funky music right, ya\nPlay that funky music white boy\nPlay that funky music right\nPlay that funky music white boy\nPlay that funky music right
7	Right Said Fred	Im Too Sexy	3	I'm too sexy for my love\nToo sexy for my love\nLove's going to leave me\nI'm too sexy for my shirt \nToo sexy for my shirt\nSo sexy it hurts\nAnd I'm too sexy for Milan \nToo sexy for Milan\nNew York, and Japan\nI'm too sexy for your party\nToo sexy for your party\nNo way I'm disco dancing\n'Cause I'm a model, you know what I mean\nAnd I do my little turn on the catwalk\nYeah, on the catwalk \nOn the catwalk, yeah\nI shake my little tush on the catwalk\nI'm too sexy for my car \nToo sexy for my car\nToo sexy by far\nAnd I'm too sexy for my hat\nToo sexy for my hat \nWhat do you think about that?\n'Cause I'm a model, you know what I mean\nAnd I do my little turn on the catwalk\nYeah, on the catwalk \nOn the catwalk, yeah\nI shake my little tush on the catwalk\nToo sexy for my\nToo sexy for my\nToo sexy for my\n'Cause I'm a model, you know what I mean\nAnd I do my little turn on the catwalk\nYeah, on the catwalk \nOn the catwalk \nYeah, I shake my little tush on the catwalk\nToo sexy for my cat \nToo sexy for my cat\nPoor pussy \nPoor pussy cat\nI'm too sexy for my love \nToo sexy for my love\nLove's going to leave me\nAnd I'm too sexy for this song
8	Limp Bizkit	Nookie	3	I came into this world as a reject\nLook into these eyes\nThen you'll see the size of these flames\nDwellin on the past\nIts burnin' up my brain\nEveryone that burns has to learn from the pain\nHey I think about the day\nMy girlie ran away with my pay\nWhen fellas come to play\nNo she stuck with my homeez that she fucked\nAnd I'm just a sucker with a lump in my throat\nHey, like a chump\nShould I be feelin' bad? No\nShould I be feelin good? No\nIts kinda sad I'm the laughin' stock of the neighborhood\nYou would think that I'd be movin' on\nBut I'm a sucker like I said\nFucked up in the head, not!!\nMaybe she just made a mistake\nI should give her a break\nMy heart will ache either way\nHey, what the hell\nWatcha want me to say\nI wont lie that I cant deny\n\nI did it all for the nookie\nCome on\nThe nookie\nCome on\nSo you can take that cookie\nAnd Stick it up your, yeah!\nStick it up your, yeah!\nStick it up your, yeah!\n\nI did it all for the nookie\nCome on\nThe nookie\nCome on\nSo you can take that cookie\nAnd Stick it up your, yeah!\nStick it up your, yeah!\nStick it up your, yeah!\n\nWhy did it take so long?\nWhy did I wait so long, huh\nTo figure it out? but I did it\nAnd I'm the only one underneath the sun who didn't get it\nI cant believe that I can be deceived\nBy my so called girl, but in reality\nHad hidden agenda\nShe put my tender heart in a blender\nAnd still I surrendered\nHey, like a chump\n\nI did it all for the nookie\nCome on\nThe nookie\nCome on\nSo you can take that cookie\nAnd Stick it up your, yeah!\nStick it up your, yeah!\nStick it up your, yeah!\n\nI did it all for the nookie\nCome on\nThe nookie\nCome on\nSo you can take that cookie\nAnd Stick it up your, yeah!\nStick it up your, yeah!\nStick it up your, yeah!\n\nI'm only human\nIts so easy for your friends to give you their advice\nThey tell you to let it go\nBut its easier said then done\nI appreciate it\nI do, but just leave me alone\nLeave me alone\nJust leave me alone!!\nJust leave me alone!\nAint nothin' gonna change\nIf you can go away\nIm just gonna stay here and always be the same\nAint nothin' gonna change\nIf you can go away\nIm just gonna stay here and always be the same\nAint nothin' gonna change\nIf you can go away\nIm just gonna stay here and always be the same\n\nI did it all for the nookie\nCome on\nThe nookie\nCome on\nSo you can take that cookie\nAnd Stick it up your, yeah!\nStick it up your, yeah!\nStick it up your, yeah!\n\nI did it all for the nookie\nCome on\nThe nookie\nCome on\nSo you can take that cookie\nAnd Stick it up your, yeah!\nStick it up your, yeah!\nStick it up your, yeah!
9	Beastie Boys	So What Cha Want	3	Well, just plug me in just like I was Eddie Harris\nYou're eating crazy cheese like you would think I'm from Paris\nYou know I get fly, you think I get high\nYou know that I'm gone and I'm-a tell you all why\n\nSo tell me who are you dissing, maybe I'm missing\nThe reason that you're smilin' or wildin', so listen\nIn my head, I just want to take 'em down\nImagination set loose and I'm gonna shake 'em down\n\nLet it flow like a mud-slide\nWhen I get on, I like to ride and glide\nI've got depth of perception in my text, y'all\nI get props at my mention cause I vex, y'all\n\nSo what'cha, what'cha, what'cha want? (what'cha want?)\nI get so funny with my money that you flaunt\nI said, "Where'd you get your information from, " huh?\nYou think that you can front when revelation comes?\n(Yeah, you can't front on that)\n\nWell they call me Mike D, the ever-loving man\nI'm like Spoonie Gee, I'm the metropolitician\nYou scream and you holler, 'bout my Chevy Impala\nBut the sweat is getting wet around the ring around your collar\n\nBut like a dream I'm flowing without no stopping\nSweeter than a cherry pie with Reddi Whip topping\nFrom mic-to-mic, kickin' it wall-to-wall\nWell, I'll be calling out you people like a casting call\n\nAh, well, it's wack when you're jacked in the back of a ride\nWith your know, with your flow, when you're out getting by\nBelieve me, what you see is what you get\nAnd you see me, I'm comin' off as you can bet\n\nWell I think I'm losing my mind, this time\nThis time I'm losing my mind, that's right\nSaid I think I'm losing my mind, this time\nThis time, I'm losing my mind\n\nBut little do you know about something that I talk about\nI'm tired of driving, it's due time that I walkabout\nBut in the meantime, I'm wise to the demise\nI've got eyes in the back of my head so I realize\n\nWell, I'm Dr. Spock, I'm here to rock, y'all\nI want you off the wall, if you're playing the wall\nI said what'cha, what'cha, what'cha want? (what'cha want?)\nI said what'cha, what'cha, what'cha want? (what'cha want?)\n\nY'all suckers write me checks and then they bounce\nSo I reach into my pocket for the fresh amount\nSee, I'm the long-leaner, Vincent the Cleaner\nI'm the illest motherfucker from here to Gardena\n\nWell, I'm as cool as a cucumber in a bowl of hot sauce\nYou've got the rhyme and reason, but got no cause\nBut if you're hot to trot, you think you're slicker than grease\nI've got news for you crews, you'll be sucking like a leech\n\nYeah, you can't front on that\n\nSo what'cha, what'cha, what'cha want? (what'cha want?)\nSo what'cha, what'cha, what'cha want? (what'cha want?)\nI said, what'cha, what'cha, what'cha want? (what'cha want?)\nI said, what'cha, what'cha, what'cha want? (what'cha want?)
12	311	Creatures	3	My name is volatile \nI've been this way a long while \nI'd surely like to rest \nBut the energy gets the best of me \nIt's been a wild ride \nI wouldn't change a minute \nI can't slow down inside \nGuess that's why I live it\nThe years of mischief \nFollowed by weeks of thrift \nI land on earth's hard face \nNo legs could keep that pace \nAnd through the rest I sift\nIs there ever a time\nWhen the state of sleeping willingly leaves my mind\nHighly frustrated want to feel elated \nCome Monday morn you feel checkmated \nYou can be uncool and become the rule \nExceptions were made to drown\nI'm not used to it, you'd think I'd be by now \nThe ins the outs the ups and the downs\nI want to make a mess \nI want to blow off stress \nI want to stoke the fire \nJust creatures for a while \nI want to make a mess\nI want to blow off stress\nI want to stoke the fire\nJust creatures, Just creatures\nIt comes and goes and comes and goes\nSometimes I go a little crazy \nSometimes I go a little crazy just like you I do\nI know what you we're gonna say \nBut were afraid to cause dismay \nYou're lyrics switched around \nThe mixture watered down \nAnd now a pointless display\nIt's something one won't understand \nUnless there in it with me hand and hand\nDon't buy the fear don't buy that my dear \nThe things you love you must keep near and \nCarry on and you won't feel withdrawn \nEven if you're coming down\nSometimes it's wearable sometimes is bearable \nI careen towards balance til' the glass is full\nI want to make a mess \nI want to blow off stress \nI want to stoke the fire \nJust creatures for a while \nI want to make a mess \nI want to blow off stress \nI want to stoke the fire \nJust creatures, just creatures\nIt comes and goes and comes and goes \nSometimes\nSometimes I get a little out there\nSometimes I go off\nSometimes just like you\nI go a little crazy \nSometimes I go a little crazy just like you I do \nSometimes I go a little crazy\nSometimes I go a little crazy just like you I do
1	Young MC	Bust A Move	4	This here's a tail for all the fellas\nTryin; to do what those ladies tell us\nGet shot down cause ya over-zealous\nPlay hard to get females get jealous\nOkay smarty go to a party\nGirls are scantily clad and showin; body\nA chick walks by you wish you could sex her\nBut you're standing on the wall like you was Poindexter\nNext days function high class luncheon\nFood is served and you're stone-cold munchin'\nMusic comes on people start to dance\nBut then you ate so much you nearly split your pants\nA girl starts walking guys start gawking\nSits down next to you and starts talking\nSays she wants to dance cause she likes to groove\nSo come on fatso and just bust a move\nYou're on a mission and your wishin'\nSomeone could cure your lonely condition\nLookin' for love in all the wrong places\nNo fine girls just ugly faces\nFrom frustration first inclination\nIs to become a monk and leave the situation\nBut every dark tunnel has a light of hope\nSo don't hang yourself, with a celibate rope\nYour movie's showin', so you're goin\nCould care less about the five you're blowin'\nTheater gets dark just to start the show\nThen ya spot a fine woman sittin' in your row\nShe's dressed in yellow, she says "Hello,\ncome sit next to me you fine fellow."\nYou run over there without a second to lose\nAnd what comes next hey bust a move\nIn this city ladies look pretty\nGuys tell jokes so they can seem witty\nTell a funny joke just to get some play\nThen you try to make a move and she says, "No way"\nGirls are fakin' goodness sakin'\nThey want the man who brings home the bacon\nGot no money and you got no car\nThen you got no women and there you are\nSome girls are sadistic, materialistic\nLookin' for a man makes them opportunistic\nThey're lyin' on a beach perpetrating a tan\nSo a brother with the money can be their man\nSo on the beach you're strollin' real high rollin'\nEverything you have is yours and not stolen\nA girl runs up with somethin' to prove\nSo don't just stand there bust a move\nYour best friend Harry has a brother Larry\nIn five days from now he's gonna marry\nHe's hopin' you can make it there if you can\nCause in the ceremony you'll be the best man\nYou say neat-o, check your libido\nAnd roll to the church in your new tuxedo\nThe bride walks down just to start the wedding\nAnd there's one more girl you won't be getting\nSo you start thinkin' then you start blinking\nThe bridesmaid looks and thinks that you're winking\nShe thinks your kinda cute so she winks back\nAnd now your feelin' really fine cause the girl is stacked\nReception's jumpin' bass is pumpin'\nYou look at the girl and your heart starts thumpin'\nSays she wants to dance to a different groove\nNow you know what to do G bust a move
\.


--
-- Name: songs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jaredthomas
--

SELECT pg_catalog.setval('songs_id_seq', 12, true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: jaredthomas
--

COPY users (id, name, username, password) FROM stdin;
5	Jared	jjthom87	abcd
6	pat	bateman	abcd
7	a	b	c
8	John	johnnyb	abcd
9	xyz	trs	abcd
10	jacko	jacko-t	abcd
11	bob	bobsaget	abcd
13	rick	rick_moranis	abc
19	bill	bilbo	baggins
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jaredthomas
--

SELECT pg_catalog.setval('users_id_seq', 19, true);


--
-- Name: bank bank_pkey; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY bank
    ADD CONSTRAINT bank_pkey PRIMARY KEY (id);


--
-- Name: bought_songs bought_songs_pkey; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY bought_songs
    ADD CONSTRAINT bought_songs_pkey PRIMARY KEY (id);


--
-- Name: songs songs_pkey; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY songs
    ADD CONSTRAINT songs_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: bank bank_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY bank
    ADD CONSTRAINT bank_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id);


--
-- Name: bought_songs bought_songs_song_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY bought_songs
    ADD CONSTRAINT bought_songs_song_id_fkey FOREIGN KEY (song_id) REFERENCES songs(id) ON DELETE CASCADE;


--
-- Name: bought_songs bought_songs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY bought_songs
    ADD CONSTRAINT bought_songs_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

