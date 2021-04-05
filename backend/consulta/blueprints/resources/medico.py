import json

from flask import jsonify, request
from flask_restplus import Resource

from consulta.blueprints.services.medico import MedicoService


class MedicoResource(Resource):
    def get(self, id_espec):
        medico = MedicoService()

        retorno = medico.listar_por_especialidade(id_espec)
        return jsonify(retorno)
