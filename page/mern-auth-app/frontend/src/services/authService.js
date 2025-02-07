export const registerUser = async (userData) => {
    try {
        const response = await axios.post('/api/auth/register', userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post('/api/auth/login', credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};