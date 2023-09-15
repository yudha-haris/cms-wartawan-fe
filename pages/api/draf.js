export default (req, res) => {
    if (req.method === 'POST') {
      // Parse the incoming JSON data
      const data = JSON.parse(req.body);
  
      // Perform any necessary processing here (e.g., save the data to a database)
  
      // Respond with a success message
      res.status(201).json({ message: 'Post created successfully', data });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  };