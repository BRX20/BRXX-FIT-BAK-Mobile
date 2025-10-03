import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply
} from 'fastify'
import { CreateNutritionController } from './controllers/CreateNutritionController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
        
        let responseText = "```json\n{\n  \"nome\": \"Jonas\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 33,\n  \"altura\": 1.85,\n  \"peso\": 98,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"07:00\",\n      \"nome\": \"Cafe da Manha\",\n      \"alimentos\": [\n        \"4 ovos inteiros\",\n        \"100g de aveia em flocos (seca) cozida em agua ou leite desnatado\",\n        \"1 banana media\",\n        \"1 colher de sopa de pasta de amendoim integral sem acucar\",\n        \"Cafe preto sem acucar\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da Manha\",\n      \"alimentos\": [\n        \"200g de iogurte natural desnatado sem acucar\",\n        \"1 maca media\",\n        \"30g de castanhas de caju ou amendoas\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"200g de peito de frango grelhado ou cozido\",\n        \"200g de arroz integral cozido\",\n        \"Salada verde a vontade (alface, rucula, pepino)\",\n        \"2 conchas medias de feijao\",\n        \"1 colher de sopa de azeite extra virgem na salada\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da Tarde / Pre-Treino\",\n      \"alimentos\": [\n        \"180g de batata doce cozida\",\n        \"150g de carne magra moida (patinho) ou frango desfiado\"\n      ]\n    },\n    {\n      \"horario\": \"18:00\",\n      \"nome\": \"Pos-Treino\",\n      \"alimentos\": [\n        \"Shake com 30g de Whey Protein e agua\",\n        \"1 banana grande\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"200g de salmao assado/grelhado ou tilapia grelhada\",\n        \"150g de legumes cozidos (brocolis, couve-flor, cenoura)\",\n        \"50g de quinoa cozida\",\n        \"Se for tilapia, adicionar 1 colher de sopa de azeite extra virgem\"\n      ]\n    },\n    {\n      \"horario\": \"23:00\",\n      \"nome\": \"Ceia\",\n      \"alimentos\": [\n        \"200g de queijo cottage desnatado\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey Protein (apos o treino, 30g com agua)\",\n    \"Creatina (5g por dia, qualquer horario)\",\n    \"Multivitaminico (1 dose por dia, junto a uma refeicao)\",\n    \"Omega 3 (2-3 capsulas por dia, junto as refeicoes)\",\n    \"Caseina (opcional, 30g antes de dormir com agua ou leite desnatado)\"\n  ]\n}\n```"

        try{

            //Extrair o JSON
            let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();

            let jsonObject = JSON.parse(jsonString)

            return reply.send({ data: jsonObject });   

        }catch(err){
          console.log(err)
    }

        reply.send({ ok: true })
    })

    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateNutritionController().handle(request, reply)
  })
    
}