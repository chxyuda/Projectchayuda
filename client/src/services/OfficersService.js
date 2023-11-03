import Api from '@/services/Api'

export default {
    index() {
        return Api().get('officers')
    },
    show(officerId){
        return Api().get('officer/'+officerId)
    },
    post(officer){
        return Api().post('officer', officer)
    },
    put(officer){
        return Api().put('officer/'+officer.id, officer)
    },
    delete(officer){
        return Api().delete('officer/'+officer.id, officer)
    },
}