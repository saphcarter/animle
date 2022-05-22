var classification_animals = []
/// doug linking whatever
//link to html
//make another function and use guess num as variable to decide what hint to show


var Names = ['Woylie', 'Southern Snapping Turtle', 'Hawksbill Turtle', 'Grey Nurse Shark', 'Sawfish', 'Mountain Pygmy Possum', 'Regent Honey Eater', 'Western Brown Snake', 'Red Kangaroo', 'Koala', 'Rock Wallaby', 'Wombat', 'Wedge Tailed Eagle', 'Pelican', 'Funnel Web Spider', 'Brush Tail Possum ', 'Echidna', 'Numbat', 'Emu', 'Western Australian Dhufish', 'Platapus', 'Sea Gull', 'Whale Shark', 'Dingo', 'Little Penguin', 'Quokka', 'Salt water Crocodile', 'Tasmanian Devil', 'Green Tree Frog', 'Frill Necked Lizard', 'Blue Tongued Lizard', 'Taipan', 'Cassowary', 'Goanna', 'Bilby', 'Kookaburra', 'Dugong', 'Gang Gang Cockatoo']

var Classification = ['Mammal', 'Reptile', 'Reptile', 'Fish', 'Fish', 'Mammal', 'Bird', 'Reptile', 'Mammal', 'Mammal', 'Mammal', 'Mammal', 'Bird', 'Bird', 'Arachnid', 'Mammal', 'Mammal', 'Mammal', 'Bird', 'Fish', 'Mammal', 'Bird', 'Fish', 'Mammal', 'Bird', 'Bird', 'Reptile', 'Mammal', 'Reptile', 'Reptile', 'Reptile', 'Reptile', 'Bird', 'Reptile', 'Mammal', 'Bird', 'Mammal', 'Bird'] 

var Tail = [True, True, True, True, True, True, True, True, True, True, False, True, True, True, True, False, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True]

var Wings = [False, False, False, False, False, False, False, True, False, False, False, False, False, True, True, False, False, False, False, True, False, False, True, False, False, True, False, False, False, False, False, False, False, True, False, False, True, False, True]

var Flippers = [False, True, True, True, True, False, False, False, False, False, False, False, False, False, False, False, False, False, False, True, True, False, True, False, True, False, False, False, False, False, False, False, False, False, False, False, True, False]

var Size = ['S', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'L', 'M', 'M', 'M', 'M', 'M', 'XS', 'S', 'S', 'S', 'L', 'M', 'M', 'S', 'XL', 'M', 'S', 'S', 'XL', 'S', 'XS', 'S', 'S', 'M', 'L', 'M', 'S', 'S', 'L', 'S']

var Climate = ['Scrubland', 'Temporate', 'Coral Reef', 'Temporate Ocean', 'Tropical', 'Alpine', 'Temporate', 'Desert|Temporate|Scrubland', 'Desert|Scrubland', 'Temporate', 'Scrubland|Subtropical', 'Temporate', 'Dessert|Scrubland', 'Temporate Ocean', 'Temporate', 'Temporate', 'Dessert|Scrubland', 'Dessert|Scrubland', 'Dessert|Scrubland', 'Temporate Ocean', 'Temporate', 'Everywhere', 'Coral Reef', 'Dessert|Scrubland', 'Temporate', 'Temporate', 'Tropical|Equatorial', 'Temporate', 'Tropical', 'Dessert|Scrubland', 'Temporate|Scrubland', 'Dessert|Scrubland|Subtropical', 'Sub Tropical| Tropical', 'Dessert|Scrubland', 'Dessert|Scrubland', 'Temporate|Scrubland', 'Coral Reef', 'Temporate']

var Endangered = ['CE', 'CE', 'CE', 'CE', 'CE', 'CE', 'CE', 'LC', 'LC', 'VU', 'EN', 'VU', 'LC', 'LC', 'LC', 'VU', 'VU', 'CE', 'LC', 'VU', 'EN', 'LC', 'VU', 'LC', 'LC', 'VU', 'LC', 'EN', 'LC', 'LC', 'EN', 'LC', 'VU', 'LC', 'EN', 'LC', 'VU', 'EN']
