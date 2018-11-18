<template>
    <div>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="20"
                label="Name"
                required
                
            ></v-text-field>
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                required
                
            ></v-text-field>
             <v-text-field
                v-model="height"
                label="Height"
                required
                
            ></v-text-field>
             <v-text-field
                v-model="weight"
                label="Weight"
                required
                
            ></v-text-field>
            <v-select
                v-model="position"
                :items="positions"
                :rules="positionRules"
                label="Position"
                required
                
            ></v-select>

        </v-form>

    </div>
</template>


<script>
export default {
    data () {

        return {
            playerData: {
                name: '',
                nameRules: [
                     v => !!v || 'Name is required',
                     v => (v && v.length <= 20) || 'Name must be less than 20 characters'
                    ],
                email: '',
                emailRules: [
                     v => !!v || 'E-mail is required',
                     v => /.+@.+/.test(v) || 'E-mail must be valid'
                     ],
                height: '',
                weight: '',
                position: null,
                positions: [
                    'Shooting Guard',
                    'Point Guard',
                    'Power Forward',
                    'Small Forward',
                    'Center'
                ],
                positionRules: [v => !!v || 'Select Position']

            }
        }
    }
}
</script>


<style>

</style>
