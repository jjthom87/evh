/*
  A pivot table is another way of doing a many to many relationship between 2 tables
  A pivot table consists of 2 fields, 1 field from each table you're joining
  Each record in a pivot table represents a join relationship between those 2 tables
*/
USE first_sql;

/*
  Lets create 2 tables that we'll eventually join together using a pivot table
  you dont necessarily need an id
*/
CREATE TABLE classes_for_animals (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT NOT NULL
);

CREATE TABLE animals (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  species VARCHAR(255) NOT NULL,
  binomial_name VARCHAR(255) NOT NULL
);

/*
  Let's insert records into both of those tables
*/
INSERT INTO classes_for_animals (name, description) VALUES ('invertebrates', 'The first animals to evolve, as far back as a billion years ago, invertebrates are characterized by their lack of backbones and internal skeletons as well as their relatively simple anatomy and behavior, at least compared with those of most vertebrates. Today, invertebrates account for a whopping 97 percent of all animal species, a widely varied group that includes insects, worms, arthropods, sponges, mollusks, octopuses, and countless other families');
INSERT INTO classes_for_animals (name, description) VALUES ('fish', 'The first true vertebrates on Earth, fish evolved from invertebrate ancestors about 500 million years ago and have dominated the world\'s oceans, lakes, and rivers ever since. There are three main types of fish: bony fish, which includes such familiar species as tuna and salmon; cartilaginous fish, which includes sharks, rays, and skates; and jawless fish, a small family made up entirely of hagfish and lampreys). Fish breathe using gills and are equipped with "lateral lines," interconnected networks of receptors along the head and body that detect water currents and even electricity');
INSERT INTO classes_for_animals (name, description) VALUES ('amphibians', 'When the first amphibians evolved from their tetrapod ancestors 400 million years ago, they quickly became the dominant vertebrates on Earth. However, their reign wasn\'t destined to last; the frogs, toads, salamanders, and caecilians (legless amphibians) that make up this group have long since been surpassed by reptiles, birds, and mammals. Amphibians are characterized by their semi-aquatic lifestyles (they must stay near bodies of water to maintain the moisture of their skin and to lay eggs), and today they are among the most endangered animals in the world.');
INSERT INTO classes_for_animals (name, description) VALUES ('reptiles', 'Reptiles, like amphibians, make up a fairly small proportion of terrestrial animals, but as dinosaurs they ruled the Earth for over 150 million years. There are four basic types of reptiles: crocodiles and alligators; turtles and tortoises; snakes; and lizards. Reptiles are characterized by their cold-blooded metabolisms—they fuel themselves by exposure to the sun—their scaly skin, and their leathery eggs, which they, unlike amphibians, can lay some distance from bodies of water.');
INSERT INTO classes_for_animals (name, description) VALUES ('birds', 'Birds evolved from dinosaurs—not once, but probably multiple times—during the Mesozoic Era. Today they are by far the most prolific flying vertebrates, numbering 10,000 species across 30 separate orders. Birds are characterized by their coats of feathers, their warm-blooded metabolisms, their memorable songs (at least in certain species), and their ability to adapt to a wide range of habitats—witness the ostriches of the Australian plains and the penguins of the Antarctic coastline.');
INSERT INTO classes_for_animals (name, description) VALUES ('mammals', 'It\'s natural for people to consider mammals the pinnacle of evolution. After all, humans are mammals, and so were our ancestors. But In fact, mammals are among the least diverse animal groups: There are only about 5,000 species overall. Mammals are characterized by their hair or fur, which all species possess during some stage of their life cycles; the milk with which they suckle their young, and their warm-blooded metabolisms, which, as with birds, allows them to inhabit a wide range of habitats, ranging from deserts to oceans to arctic tundra.');

INSERT INTO animals (name, species, binomial_name) VALUES ('humpback whale', 'M. novaeangliae', 'Megaptera novaeangliae');
INSERT INTO animals (name, species, binomial_name) VALUES ('octopus', 'Octopus vulgaris', 'Octopus vulgaris');
INSERT INTO animals (name, species, binomial_name) VALUES ('pyjama shark', 'P. africanum', 'Poroderma africanum');
INSERT INTO animals (name, species, binomial_name) VALUES ('american bullfrog', 'L. catesbeianus', 'Lithobates catesbeianus');
INSERT INTO animals (name, species, binomial_name) VALUES ('king cobra', 'O. hannah', 'Ophiophagus hannah');
INSERT INTO animals (name, species, binomial_name) VALUES ('sun parakeet', 'A. solstitialis', 'Aratinga solstitialis');
INSERT INTO animals (name, species, binomial_name) VALUES ('american crow', 'C. brachyrhynchos', 'Corvus brachyrhynchos');

/*
  Now lets create a table to create a many-to-many-join between these 2 tables
*/
CREATE TABLE animals_classes (
  animal_id INT NOT NULL,
  class_id INT NOT NULL,
  FOREIGN KEY (animal_id) REFERENCES animals(id),
  FOREIGN KEY (class_id) REFERENCES classes_for_animals(id)
);

/*
  Manually getting the id values from both tables and inputting them into the pivot table here
*/
INSERT INTO animals_classes (animal_id, class_id) VALUES (1, 6);
INSERT INTO animals_classes (animal_id, class_id) VALUES (2, 1);
INSERT INTO animals_classes (animal_id, class_id) VALUES (3, 2);
INSERT INTO animals_classes (animal_id, class_id) VALUES (4, 3);
INSERT INTO animals_classes (animal_id, class_id) VALUES (5, 4);
INSERT INTO animals_classes (animal_id, class_id) VALUES (6, 5);
INSERT INTO animals_classes (animal_id, class_id) VALUES (7, 5);

/*
  Query to get all of the animals that are part of the bird class
  the bird's id is 5 in the 'classes_for_animals' table
*/
SELECT animals.name
FROM animals
INNER JOIN animals_classes ON animals_classes.animal_id=animals.id
WHERE animals_classes.class_id=5;
