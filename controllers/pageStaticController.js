const pageStaticController = {
    viewPage: (req, res) => {
        return res.render('index');
    },
    about: (req, res) => {
        return res.render('PessoaFisica/sobrenos');
    },
    life: (req, res) => {
        return res.render('PessoaFisica/vida');
    },
    personalAccidents: (req, res) => {
        return res.render('PessoaFisica/acidentesPessoais');
    },
    plannedProtection: (req, res) => {
        return res.render('PessoaFisica/protecaoPlanejada');
    },
    
    privatePension: (req, res) => {
        return res.render('PessoaFisica/previdenciaPrivada');
    },
    
    protectionAndMonitoring: (req, res) => {
        return res.render('PessoaFisica/protecaoMonitoramento');
    },
    healthForPet: (req, res) => {
        return res.render('PessoaFisica/healthForPet');
    },
    consortium: (req, res) => {
        return res.render('PessoaFisica/consorcio');
    },
    easyCar: (req, res) => {
        return res.render('PessoaFisica/carroFacil');
    },
    
    vidaColetivo: (req, res) => {
        return res.render('PessoaJuridica/vidaColetivo');
    },
    acidentesPessoaisColetivo: (req, res) => {
        return res.render('PessoaJuridica/acidentesPessoaisColetivo');
    },
    saudeOdonto: (req, res) => {
        return res.render('PessoaJuridica/saudeOdonto');
    },
    contato: (req, res) => {
        return res.render('PessoaFisica/contato');
    }



}
module.exports = pageStaticController 
