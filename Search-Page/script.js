document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const filterSelect = document.getElementById("filter");
    const searchForm = document.getElementById("search-form");
    const resultsList = document.getElementById("results-list");
    const infoParagraph = document.getElementById("info-paragraph");
  
    // Mock data
    const mockData = [
      { id: 1, title: "Know About Rukaiya Khan", category: "Intro", content: "I am Rukaiya Khan,offering solid foundation on WEB DEVELOPMENT and desire to grow in field.With my qualities and skills i believe i will be effectively contribute to you team." },
      { id: 2, title: "Healthy Eating Tips", category: "health", content: "Essential tips for maintaining a balanced and healthy diet." },
      { id: 3, title: "Best Laptops 2024", category: "tech", content: "A list of the best laptops for 2024, with detailed specifications." },
      { id: 4, title: "Mindfulness for Daily Life", category: "lifestyle", content: "Incorporating mindfulness into your everyday routine for better mental health." },
      { id: 5, title: "Top Online Learning Platforms", category: "education", content: "Explore the best platforms for online education and skill development." },
      { id: 6, title: "Home Workouts for Beginners", category: "health", content: "Simple and effective home workouts for beginners to stay fit." },
    ];
  
   
    const categoryDescriptions = {
      Intro: "I am Rukaiya Khan,offering solid foundation on WEB DEVELOPMENT and desire to grow in field.With my qualities and skills i believe i will be effectively contribute to you team",
      lifestyle: "Discover tips and insights to enhance your everyday life, from mindfulness practices to productivity hacks.",
      health: "Stay informed about wellness, fitness, and health tips to lead a balanced and healthy lifestyle.",
      education: "Learn about new learning platforms, tools, and educational trends that empower lifelong learners.",
    };
  
    
    const renderResults = (data) => {
      resultsList.innerHTML = ""; 
      if (data.length === 0) {
        alert("No results found for your search.");
        return;
      }
      data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.title} (${item.category})`;
        li.dataset.id = item.id; 
        resultsList.appendChild(li);
  
        
        li.addEventListener("click", () => {
          showMoreInfo(item.id);
        });
      });
    };
  
    
    const updateParagraph = (query, category) => {
      if (!query && !category) {
        infoParagraph.textContent = "Browse through our collection of articles and resources from various categories.";
        return;
      }
  
      if (category && categoryDescriptions[category]) {
        infoParagraph.textContent = `You searched for "${query || "all topics"}" in the "${category}" category. ${categoryDescriptions[category]}`;
      } else {
        infoParagraph.textContent = `You searched for "${query || "all topics"}". Explore our resources to find relevant content.`;
      }
    };
  
    
    const showMoreInfo = (id) => {
      const selectedItem = mockData.find(item => item.id === id);
      if (selectedItem) {
        alert(`Title: ${selectedItem.title}\nCategory: ${selectedItem.category}\nContent: ${selectedItem.content}`);
      }
    };
  
    
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const searchQuery = searchInput.value.toLowerCase().trim();
      const selectedFilter = filterSelect.value;
  
      
      const filteredData = mockData.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery);
        const matchesFilter = selectedFilter ? item.category === selectedFilter : true;
        return matchesSearch && matchesFilter;
      });
  
      if (filteredData.length === 0) {
        resultsList.innerHTML = ""; 
      }
  
      renderResults(filteredData);
      updateParagraph(searchQuery, selectedFilter);
    });
  });
  