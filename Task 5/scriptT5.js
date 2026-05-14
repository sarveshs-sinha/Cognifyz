
        // Get the container where posts will be displayed
        const postsContainer = document.getElementById('posts-container');
        const loadingMessage = document.getElementById('loading-message');

        /**
         * Fetches data from the specified API endpoint and displays it.
         * @param {string} url - The URL of the API endpoint.
         */
        async function fetchAndDisplayPosts(url) {
            try {
                // Show loading message
                loadingMessage.style.display = 'block';
                postsContainer.innerHTML = '<div class="loading-message" id="loading-message">Loading posts...</div>';

                // Fetch data from the API
                const response = await fetch(url);

                // Check if the request was successful
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Parse the JSON data
                const posts = await response.json();

                // Clear loading message
                loadingMessage.style.display = 'none';
                postsContainer.innerHTML = ''; // Clear previous content

                // Display the first 5 posts
                posts.slice(0, 5).forEach(post => {
                    // Create a new div element for each post
                    const postCard = document.createElement('div');
                    postCard.classList.add('post-card'); // Add custom class for styling

                    // Create an h2 element for the post title
                    const titleElement = document.createElement('h2');
                    titleElement.textContent = post.title;

                    // Create a p element for the post body
                    const bodyElement = document.createElement('p');
                    bodyElement.textContent = post.body;

                    // Append the title and body to the post card
                    postCard.appendChild(titleElement);
                    postCard.appendChild(bodyElement);

                    // Append the post card to the posts container
                    postsContainer.appendChild(postCard);
                });

            } catch (error) {
                // Handle any errors that occur during the fetch operation
                console.error('Error fetching or parsing data:', error);
                postsContainer.innerHTML = `
                    <div class="error-message">
                        Failed to load posts. Please try again later.
                        <br>
                        Error: ${error.message}
                    </div>
                `;
            }
        }

        // Call the function to fetch and display posts when the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', () => {
            fetchAndDisplayPosts('https://jsonplaceholder.typicode.com/posts');
        });
