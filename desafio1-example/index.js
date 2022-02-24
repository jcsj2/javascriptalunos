//https://snyk.io/vuln/npm:jquery@3.4.1

const axios = require('axios')
const cheerio = require('cheerio')

async function search (packageName, version) {
    const url = `https://snyk.io/vuln/npm:${encodeURIComponent(packageName)}@${version}`;

    try {

        // pra ver se existe elementos filhos a esse
        // if ($(this).find('.blablabla').length)

        // como pegar atributos como href e src
        // $(this).find('.linkOuInput').attr('href')

        const { data } = await axios(url)
        const html = data
        const $ = cheerio.load(html)
        
        if (hasVulnerabilities($)) {
            console.log(`${packageName} ${version} has vulnerabilities`)
            $('.table--comfortable', html).each(function () {
                // console.log($(this).find('tbody').find('tr').text())
                $(this).find('tbody').find('tr').each(function () {
                    console.log($(this).find('strong').text() + " - " + $(this).find('.semver').text())
                })
            })
            console.log("======  ======")
        }

    } catch (err) {
        console.log(packageName + " error ")
    }

    
} 

function hasVulnerabilities(cheerioLoaded) {
    return !cheerioLoaded.text().includes('No known vulnerabilities have been found for this package in Snyk\'s vulnerability database.')
}

search('jquery', '3.4.1')
search('adm-zip', '0.4.9')
search('adm-zip', '0.5.6')