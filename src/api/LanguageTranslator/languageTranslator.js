import axios from "axios";

export async function languageTranslator(sourceLanguage, targetLanguage, text){
    try {
        const response = await axios.get('https://api.mymemory.translated.net/get', {
          params: {
            q: text,
            langpair: `${sourceLanguage}|${targetLanguage}`,
          },
        })
        return {
            status: 200,
            response: response.data.responseData.translatedText
        }
      } catch (error) {
        return {
            error: error,
            status: 404,
            message: "Not found"
        }
      }
}