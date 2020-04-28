<template>
    <form class="col-6" name="form-td" id ="form-td" @submit.prevent="enviar">
        <fieldset>
            <legend>Datos de usuario</legend>
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" 
                    v-model="alumno.nombre" id="nombre">
            </div>
            <div class="form-group">
                <label for="apellidos">Apellidos</label>
                <input type="text" class="form-control" 
                    v-model="alumno.apellidos" id="apellidos">
            </div>
            <div class="form-group">
                <label for="dni">DNI</label>
                <input type="text" class="form-control" 
                    v-model="alumno.dni" id="dni">
                </div>  
            <div class="form-group">
                <label for="email">Correo</label>
                <input type="email" class="form-control" 
                    v-model="alumno.email" id="email"
                required>
            </div>
            <div class="form-group">
                <label for="nacim">Fecha de nacimiento</label>
                <input type="date" class="form-control" 
                    v-model="alumno.nacim" id="nacim">
            </div>
            <div class="form-group">
                <label for="coment">Comentarios</label>
                <textarea class="form-control" 
                    v-model="alumno.coment" id="coment" rows="3"></textarea>
            </div>
        </fieldset>    
        <fieldset>
            <legend>Datos del curso</legend>
            <div class="form-check">
                <label class="form-check-label">
                <input type="checkbox" class="form-check-input" 
                    v-model="alumno.conditions" :value="'isOk'" id="isOk">
                Estoy de acuerdo con las condiciones ....
                </label>
            </div>
            <div class="form-check">
                <label class="form-check-label">
                <input type="checkbox" class="form-check-input" 
                    v-model="alumno.conditions" value="isOkInfo" id="isOkInfo">
                Estoy de acuerdo con recibir información periodicamente
                </label>
            </div> 
            <div class="form-radio">
                <legend>Turno</legend>
                    <div class="form-check" v-for="item in turnos" :key="item.id">
                        <label class="form-check-label" :title="item.info">
                            <input type="radio" class="form-check-input" name="turno"
                            v-model="alumno.turno" :value="item" required> {{ item.name}}
                        </label>
                    </div>
                <!-- <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="turno" id=""
                        value="mañana" required> Mañana
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="turno" id="" 
                        value="tarde">Tarde
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="turno" id="" 
                        value="noche"> Noche
                    </label>
                </div> -->
            </div>  
            <div class="form-group" >
            <label for="curso">Selecciona el tema</label>
                <select class="form-control" v-model="alumno.curso" id="curso" required>
                    <option v-for="item in cursos" :key="item.id" 
                        :title="item.info" :value="item">
                        {{ item.name }}
                    </option>
                    <!-- <option value=""></option>
                    <option value="angular">Angular</option>
                    <option value="react">React</option>
                    <option value="vue">Vue</option> -->
                </select>
            </div>
        </fieldset>
        <button type="submit" class="btn btn-primary">
            Enviar</button>
    </form>        
</template>

<script>

const cursos = [
  { id: 'JS01', name: 'Angular', info: 'Aprendiendo angular' },
  { id: 'JS02', name: 'React', info: 'Aprendiendo react' },
  { id: 'JS03', name: 'Vue', info: 'Aprendiendo vue' }
]

const turnos = [
  { id: 'M', name: 'Mañana', info: '9:00 - 15:00' },
  { id: 'T', name: 'Tarde', info: '15:00 - 21:00' },
  { id: 'C', name: 'Completo', info: '9:00 - 14:00 | 16:00 - 18:00' }
]

const createAlumno = () => {
    return {
    nombre: '',
    apellidos: '',
    dni: '',
    email: '',
    nacim: null,
    coment: '',
    conditions: [],
    turno: null,
    curso: null
  }
}


export default {
    data: function () {
        return {
            cursos,
            turnos,
            alumno: createAlumno()
        }
    },
    mounted() {
        this.alumno.nombre ='Carlos'
    },
    methods: {
        enviar() {
            console.log(this.alumno)
            console.log(JSON.parse(JSON.stringify(this.alumno)))
        }
    }
}
</script>

<style>
form {
    margin-left: 3rem;
    width: 50%;
}
 fieldset {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
}
.form-group {
    display: flex;
    flex-direction: column;
    padding: 0.2rem;
}
.form-group label {
    color: maroon;
    padding-bottom: 0.3rem;
}
.form-group input, .form-group select {
    border: none;
    border-bottom: 1px solid rgb(190, 190, 190);
    margin-bottom: 1rem;
}
.form-check {
    display: flex;
    flex-direction: column;
    padding: 0.1rem;
}
.form-radio legend {
    color: maroon;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
}
</style>