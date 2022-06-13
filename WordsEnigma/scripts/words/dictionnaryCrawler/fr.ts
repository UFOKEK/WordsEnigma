import axios, { AxiosResponse } from 'axios'
import https from 'https';
import * as cheerio from 'cheerio';

export const urlLeDictionnaire = "https://www.le-dictionnaire.com/definition/";
export const urlWiktionary = "https://fr.wiktionary.org/wiki/";

async function fetchData(url: string): Promise<any> {
    // make http call to url
    let response: void | AxiosResponse<any, any> = await axios(url, { timeout: 50000, httpsAgent: new https.Agent({ keepAlive: true }) }).catch((err) => console.log("Error occurred while fetching data " + url));
    if (response) {
        // console.log(`${url} fetched`);
        let status: number = response?.status;
        if (status !== 200) {
            console.log("Error occurred while fetching data: " + url);
            return;
        }
    } else {
        console.log("Error occurred while fetching data " + url);
        return;
    }
    return response;
}

async function getDefitionFromWiktionary(word: String): Promise<string> {
    return await fetchData(urlWiktionary + word).then((res) => {
        if (res) {
            let data = res.data;
            if (data) {
                const $ = cheerio.load(data);
                const list_def = $('#mw-content-text > div.mw-parser-output > ol');
                let definition: string = ""
                for (let i = 0; i < list_def.length; i++) {
                    const def_li_text = $(list_def[i]).text().replace(/\s+/g, ' ');
                    definition += def_li_text;
                }
                return definition;
            } else {
                console.log("Error occurred while fetching data " + word);
                return;
            }
        } else {
            console.log("Error occurred while fetching data " + word);
        }
    });
}

async function getDefinitionFromLeDictionnaire(word: String): Promise<any> {
    return await fetchData(urlLeDictionnaire + word).then((res) => {
        if (res) {
            let data = res.data;
            if (data) {
                const $ = cheerio.load(data);
                const maincontent = $('#maincontent');
                const defbox = maincontent.find('div.defbox');
                let definition: string = ""
                for (let i = 0; i < defbox.length; i++) {
                    const def_ul = defbox.find('div.motboxinfo + ul');
                    for (let i = 0; i < def_ul.length; i++) {
                        const def_li_text = $(def_ul[i]).text().replace(/\s+/g, ' ');
                        definition += def_li_text;
                    }
                }
                return {
                    definition: definition,
                    source: urlLeDictionnaire + word
                };
            } else {
                console.log("Error occurred while fetching data " + word);
                return { definition: null, source: null };
            }
        } else {
            console.log("Error occurred while fetching data " + word);
        }
    })
}


export async function getDefinition(word: String): Promise<any> {
    return await getDefinitionFromLeDictionnaire(word).then((res) => {
        if (res) {
            return {
                definition: res,
                source: urlWiktionary + word
            };
        } else {
            return getDefitionFromWiktionary(word).then((res) => {
                if (res) {
                    return {
                        definiton: res,
                        source: urlWiktionary + word
                    };
                } else {
                    return {
                        definition: null,
                        source:  null
                    };
                }
            });
        }
    });

}