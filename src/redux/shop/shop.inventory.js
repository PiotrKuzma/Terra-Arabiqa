const shopInventory = {
  kawa: {
    id: 1,
    title: "Kawa Prażona",
    routeName: "kawa",
    items: [
      {
        id: 2,
        name: "Arabica Cubano",
        imageUrl:
          "https://images.unsplash.com/photo-1565273975703-c096791fd3ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        price: 25,
        description: "Długi Opis Arabica Cubano"
      },
      {
        id: 3,
        name: "Arabica Medelin",
        imageUrl:
          "https://images.unsplash.com/photo-1565273975263-a5457a80c06a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        price: 18,
        description: "Długi Opis Arabica Medelin"
      },
      {
        id: 4,
        name: "Arabica Etiopia",
        imageUrl:
          "https://images.unsplash.com/photo-1527158581131-2624a418a1ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 35,
        description: "Długi Opis Arabica Etiopia"
      },
      {
        id: 5,
        name: "Arabica Brazylia",
        imageUrl:
          "https://images.unsplash.com/photo-1565273975921-c884f2b703df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        price: 25,
        description: "Długi Opis Arabica Brazylia"
      },
      {
        id: 6,
        name: "Arabica Colombia",
        imageUrl:
          "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
        price: 18,
        description: "Długi Opis Arabica Colombia"
      },
      {
        id: 7,
        name: "Arabica Kostaryka",
        imageUrl:
          "https://images.unsplash.com/photo-1519177827-eaba5b224092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
        price: 14,
        description: "Długi Opis Arabica Kostaryka"
      },
      {
        id: 8,
        name: "4 Żywioły",
        imageUrl:
          "https://images.unsplash.com/photo-1546696830-392e84305564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 18,
        description: "Długi Opis Arabica 4 żywioły"
      },
    ],
  },
  kawiarki: {
    id: 9,
    title: "Kawiarki",
    routeName: "kawiarki",
    items: [
      {
        id: 10,
        name: "Aeropress",
        imageUrl:
          "https://images.unsplash.com/photo-1496198183329-402041b2487b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=816&q=80",
        price: 220,
        description: "Długi Opis Aeropress"
      },
      {
        id: 11,
        name: "Chemex Classic",
        imageUrl:
          "https://images.unsplash.com/photo-1522737799611-b1119d527dc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 280,
        description: "Długi Opis Chemex"
      },
      {
        id: 12,
        name: "Drip Hario",
        imageUrl:
          "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1056&q=80",
        price: 110,
        description: "Długi Opis Drip Hario"
      },
      {
        id: 13,
        name: "Kawiarka Bialetti",
        imageUrl:
          "https://images.unsplash.com/photo-1572119243889-4939ec2ced2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 160,
        description: "Długi Opis Kawiarki Bialetti"
      },
      {
        id: 14,
        name: "French Press Bialetti",
        imageUrl:
          "https://images.unsplash.com/photo-1524424177250-5f178b523ebc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 160,
        description: "Długi Opis French Press Bialetti"
      },
    ],
  },
  akcesoria: {
    id: 15,
    title: "Akcesoria",
    routeName: "akcesoria",
    items: [
      {
        id: 16,
        name: "Czajnik Stalowy",
        imageUrl:
          "https://images.unsplash.com/photo-1545341122-731b14aa40f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 125,
        description: "Długi Opis Czajnika Stalowego"
      },
      {
        id: 17,
        name: "Filtry Papierowe Chemex x100",
        imageUrl:
          "https://images.unsplash.com/photo-1517032172944-b38d9b92bc20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 90,
        description: "Długi Opis Filtrów Papierowych Chemex"
      },
      {
        id: 18,
        name: "Filtry Papierowe Drip x60",
        imageUrl:
          "https://images.unsplash.com/photo-1519307608401-1a6a9083c4a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 90,
        description: "Długi Opis Filtrów Papierowych Drip"
      },
      {
        id: 19,
        name: "Młynek do Kawy",
        imageUrl:
          "https://images.unsplash.com/photo-1581446974083-41ed1a460587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 165,
        description: "Długi Opis Młynka do kawy"
      },
      {
        id: 26,
        name: "Kubek Drwala",
        imageUrl:
          "https://images.unsplash.com/photo-1494370996914-b82d7a825734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 165,
        description: "Długi Opis Kubka Drwala"
      },
    ],
  },
  zestawy: {
    id: 27,
    title: "Zestawy",
    routeName: "zestawy",
    items: [
      {
        id: 28,
        name: "Podróżnik",
        imageUrl:
          "https://images.unsplash.com/photo-1529385232332-276282a2ce5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        price: 25,
        description: "Długi Opis Zestawy Podróżnik"
      },
      {
        id: 29,
        name: "Gościnny Lans",
        imageUrl:
          "https://images.unsplash.com/photo-1515592302748-6c5ea17e2f0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 20,
        description: "Długi Opis Gościnnego Lansu"
      },
      {
        id: 30,
        name: "Mieszanka Arabik 8x 100g",
        imageUrl:
          "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 80,
        description: "Długi Opis Mieszanki Arabik"
      }
    ],
  },
};

export default shopInventory;
