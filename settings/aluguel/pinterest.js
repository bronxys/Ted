// Arquivo corrigido para melhorar a segurança e tratamento de erros
const fetch = require("node-fetch");

/**
 * Busca imagens no Pinterest com base no texto fornecido
 * @param {string} texto - Texto para buscar imagens
 * @returns {Promise<Buffer>} - Buffer da imagem encontrada
 */
async function buscarImagemPinterest(texto) {
    try {
        if (!texto) {
            throw new Error("Digite o nome da imagem que você quer buscar");
        }
        
        // Codificar o texto para URL
        const textoEncoded = encodeURIComponent(texto);
        
        // URL da API com o texto codificado
        const url = `https://blacksystemofc.com.br/api/pinterest2?text=${textoEncoded}&apikey=tedbot560683`;
        
        // Fazer a requisição
        const response = await fetch(url);
        
        // Verificar se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
        }
        
        // Obter o buffer da imagem
        const buffer = await response.buffer();
        
        return buffer;
    } catch (error) {
        console.error("Erro ao buscar imagem no Pinterest:", error);
        throw new Error("Erro ao buscar imagem no Pinterest");
    }
}

module.exports = { buscarImagemPinterest };
