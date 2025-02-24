const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

// Use express.json() middleware to parse JSON request bodies
router.use(express.json());

const JUDGE0_API_URL = `http://${process.env.VM_IP_ADDRESS}:2358`;

// Endpoint to get the result of a submission
router.get('/result/:token', async (req, res) => {
    const { token } = req.params;
    console.log(token); 

    try {
        const response = await axios.get(`${JUDGE0_API_URL}/submissions/${token}?base64_encoded=false&fields=stdout,time,memory,stderr,token,compile_output,message,status&page=4&per_page=2`,{
            headers: {
                'Content-Type': 'application/json',
            }   
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching submission result:', error.message);
        res.status(500).json({ error: 'Error fetching submission result' });
    }
});

// Endpoint to submit code for execution with expected output
router.post('/execute', async (req, res) => {
    const { source_code, language_id, stdin, expected_output } = req.body;
    console.log(source_code, language_id, stdin, expected_output);  
    console.log(JUDGE0_API_URL);

    try {
        const response = await axios.post(`${JUDGE0_API_URL}/submissions/?base64_encoded=false`, {
            source_code,
            language_id,
            stdin,
            expected_output
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error submitting code for execution:', error.message);
        res.status(500).json({ error: 'Error submitting code for execution' });
    }
});

module.exports = router;