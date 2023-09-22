import React from "react";
import axios from "axios";
import { useState  } from "react";
var i;
const sym = [];
const Fom = ()=>{
    const [resu , setResu] = useState("")

   const handl = (e)=>{
    if(e.target.checked==true){
        sym.push(e.target.name.trim())
        console.log(sym)
    }
   else{
    
    for(i=0;i<sym.length;i++){
        if(e.target.name==sym[i]){
            sym[i] = "0"
            console.log("Removed")
            break
        }
    }
   }

   }
    const handle = (e)=>{
        e.preventDefault();

        const symp = [];
        for(i=0;i<sym.length;i++){
            if(sym[i]!="0"){
                symp.push(sym[i]);
            }
        }
        console.log(symp)
    const con = {
      method: "post",
      url: "http://localhost:5000/api",
      data: {
        exp:symp
      },
    };
    axios(con)
      .then((resu) =>  
        setResu("You Might Have "+resu.data)
    )
      .catch((reu) => console.log(reu));
    }
    return(
    <div className="flex flex-col ml-20">
     <div> <input type='checkbox' name='itching ' onChange={handl}/>  <label for=' itching '> itching </label></div>
  <div> <input type='checkbox' name='skin_rash ' onChange={handl}/>  <label for='  skin_rash '>  skin_rash </label></div>
  <div> <input type='checkbox' name='continuous_sneezing ' onChange={handl}/>  <label for='  continuous_sneezing '>  continuous_sneezing </label></div>
  <div> <input type='checkbox' name='shivering ' onChange={handl}/>  <label for='  shivering '>  shivering </label></div>
  <div> <input type='checkbox' name='stomach_pain ' onChange={handl}/>  <label for='  stomach_pain '>  stomach_pain </label></div>
  <div> <input type='checkbox' name='acidity ' onChange={handl}/>  <label for='  acidity '>  acidity </label></div>
  <div> <input type='checkbox' name='vomiting ' onChange={handl}/>  <label for='  vomiting '>  vomiting </label></div>
  <div> <input type='checkbox' name='indigestion ' onChange={handl}/>  <label for='  indigestion '>  indigestion </label></div>
  <div> <input type='checkbox' name='muscle_wasting ' onChange={handl}/>  <label for='  muscle_wasting '>  muscle_wasting </label></div>
  <div> <input type='checkbox' name='patches_in_throat ' onChange={handl}/>  <label for='  patches_in_throat '>  patches_in_throat </label></div>
  <div> <input type='checkbox' name='fatigue ' onChange={handl}/>  <label for='  fatigue '>  fatigue </label></div>
  <div> <input type='checkbox' name='weight_loss ' onChange={handl}/>  <label for='  weight_loss '>  weight_loss </label></div>
  <div> <input type='checkbox' name='sunken_eyes ' onChange={handl}/>  <label for='  sunken_eyes '>  sunken_eyes </label></div>
  <div> <input type='checkbox' name='cough ' onChange={handl}/>  <label for='  cough '>  cough </label></div>
  <div> <input type='checkbox' name='headache ' onChange={handl}/>  <label for='  headache '>  headache </label></div>
  <div> <input type='checkbox' name='chest_pain ' onChange={handl}/>  <label for='  chest_pain '>  chest_pain </label></div>
  <div> <input type='checkbox' name='back_pain ' onChange={handl}/>  <label for='  back_pain '>  back_pain </label></div>
  <div> <input type='checkbox' name='weakness_in_limbs ' onChange={handl}/>  <label for='  weakness_in_limbs '>  weakness_in_limbs </label></div>
 <div> <input type='checkbox' name='chills ' onChange={handl}/>  <label for='  chills '>  chills </label></div>
  <div> <input type='checkbox' name='joint_pain ' onChange={handl}/>  <label for='  joint_pain '>  joint_pain </label></div>
  <div> <input type='checkbox' name='yellowish_skin ' onChange={handl}/>  <label for='  yellowish_skin '>  yellowish_skin </label></div>
  <div> <input type='checkbox' name='constipation ' onChange={handl}/>  <label for='  constipation '>  constipation </label></div>
  <div> <input type='checkbox' name='pain_during_bowel_movements ' onChange={handl}/>  <label for='  pain_during_bowel_movements '>  pain_during_bowel_movements </label></div>
  <div> <input type='checkbox' name='breathlessness ' onChange={handl}/>  <label for='  breathlessness '>  breathlessness </label></div>
  <div> <input type='checkbox' name='cramps ' onChange={handl}/>  <label for='  cramps '>  cramps </label></div>
  <div> <input type='checkbox' name='weight_gain ' onChange={handl}/>  <label for='  weight_gain '>  weight_gain </label></div>
  <div> <input type='checkbox' name='mood_swings ' onChange={handl}/>  <label for='  mood_swings '>  mood_swings </label></div>
  <div> <input type='checkbox' name='neck_pain ' onChange={handl}/>  <label for='  neck_pain '>  neck_pain </label></div>
  <div> <input type='checkbox' name='muscle_weakness ' onChange={handl}/>  <label for='  muscle_weakness '>  muscle_weakness </label></div>
  <div> <input type='checkbox' name='stiff_neck ' onChange={handl}/>  <label for='  stiff_neck '>  stiff_neck </label></div>
  <div> <input type='checkbox' name='pus_filled_pimples ' onChange={handl}/>  <label for='  pus_filled_pimples '>  pus_filled_pimples </label></div>
  <div> <input type='checkbox' name='burning_micturition ' onChange={handl}/>  <label for='  burning_micturition '>  burning_micturition </label></div>
  <div> <input type='checkbox' name='bladder_discomfort ' onChange={handl}/>  <label for='  bladder_discomfort '>  bladder_discomfort </label></div>
  <div> <input type='checkbox' name='high_fever ' onChange={handl}/>  <label for='  high_fever '>  high_fever </label></div>
  <div> <input type='checkbox' name='nodal_skin_eruptions ' onChange={handl}/>  <label for='  nodal_skin_eruptions '>  nodal_skin_eruptions </label></div>
  <div> <input type='checkbox' name='ulcers_on_tongue ' onChange={handl}/>  <label for='  ulcers_on_tongue '>  ulcers_on_tongue </label></div>
  <div> <input type='checkbox' name='loss_of_appetite ' onChange={handl}/>  <label for='  loss_of_appetite '>  loss_of_appetite </label></div>
  <div> <input type='checkbox' name='restlessness ' onChange={handl}/>  <label for='  restlessness '>  restlessness </label></div>
  <div> <input type='checkbox' name='dehydration ' onChange={handl}/>  <label for='  dehydration '>  dehydration </label></div>
  <div> <input type='checkbox' name='dizziness ' onChange={handl}/>  <label for='  dizziness '>  dizziness </label></div>
  <div> <input type='checkbox' name='weakness_of_one_body_side ' onChange={handl}/>  <label for='  weakness_of_one_body_side '>  weakness_of_one_body_side </label></div>
  <div> <input type='checkbox' name='lethargy ' onChange={handl}/>  <label for='  lethargy '>  lethargy </label></div>
  <div> <input type='checkbox' name='nausea ' onChange={handl}/>  <label for='  nausea '>  nausea </label></div>
  <div> <input type='checkbox' name='abdominal_pain ' onChange={handl}/>  <label for='  abdominal_pain '>  abdominal_pain </label></div>
  <div> <input type='checkbox' name='pain_in_anal_region ' onChange={handl}/>  <label for='  pain_in_anal_region '>  pain_in_anal_region </label></div>
  <div> <input type='checkbox' name='sweating ' onChange={handl}/>  <label for='  sweating '>  sweating </label></div>
  <div> <input type='checkbox' name='bruising ' onChange={handl}/>  <label for='  bruising '>  bruising </label></div>
  <div> <input type='checkbox' name='cold_hands_and_feets ' onChange={handl}/>  <label for='  cold_hands_and_feets '>  cold_hands_and_feets </label></div>
  <div> <input type='checkbox' name='anxiety ' onChange={handl}/>  <label for='  anxiety '>  anxiety </label></div>
  <div> <input type='checkbox' name='knee_pain ' onChange={handl}/>  <label for='  knee_pain '>  knee_pain </label></div>
  <div> <input type='checkbox' name='swelling_joints ' onChange={handl}/>  <label for='  swelling_joints '>  swelling_joints </label></div>
  <div> <input type='checkbox' name='blackheads ' onChange={handl}/>  <label for='  blackheads '>  blackheads </label></div>
  <div> <input type='checkbox' name='foul_smell_of urine ' onChange={handl}/>  <label for='  foul_smell_of urine '>  foul_smell_of urine </label></div>
  <div> <input type='checkbox' name='skin_peeling ' onChange={handl}/>  <label for='  skin_peeling '>  skin_peeling </label></div>
  <div> <input type='checkbox' name='blister ' onChange={handl}/>  <label for='  blister '>  blister </label></div>
  <div> <input type='checkbox' name='dischromic _patches ' onChange={handl}/>  <label for='  dischromic _patches '>  dischromic _patches </label></div>
  <div> <input type='checkbox' name='watering_from_eyes ' onChange={handl}/>  <label for='  watering_from_eyes '>  watering_from_eyes </label></div>
  <div> <input type='checkbox' name='extra_marital_contacts ' onChange={handl}/>  <label for='  extra_marital_contacts '>  extra_marital_contacts </label></div>
  <div> <input type='checkbox' name='diarrhoea ' onChange={handl}/>  <label for='  diarrhoea '>  diarrhoea </label></div>
  <div> <input type='checkbox' name='loss_of_balance ' onChange={handl}/>  <label for='  loss_of_balance '>  loss_of_balance </label></div>
  <div> <input type='checkbox' name='blurred_and_distorted_vision ' onChange={handl}/>  <label for='  blurred_and_distorted_vision '>  blurred_and_distorted_vision </label></div>
  <div> <input type='checkbox' name='altered_sensorium ' onChange={handl}/>  <label for='  altered_sensorium '>  altered_sensorium </label></div>
  <div> <input type='checkbox' name='dark_urine ' onChange={handl}/>  <label for='  dark_urine '>  dark_urine </label></div>
  <div> <input type='checkbox' name='swelling_of_stomach ' onChange={handl}/>  <label for='  swelling_of_stomach '>  swelling_of_stomach </label></div>
  <div> <input type='checkbox' name='bloody_stool ' onChange={handl}/>  <label for='  bloody_stool '>  bloody_stool </label></div>
  <div> <input type='checkbox' name='obesity ' onChange={handl}/>  <label for='  obesity '>  obesity </label></div>
  <div> <input type='checkbox' name='hip_joint_pain ' onChange={handl}/>  <label for='  hip_joint_pain '>  hip_joint_pain </label></div>
  <div> <input type='checkbox' name='movement_stiffness ' onChange={handl}/>  <label for='  movement_stiffness '>  movement_stiffness </label></div>
  <div> <input type='checkbox' name='spinning_movements ' onChange={handl}/>  <label for='  spinning_movements '>  spinning_movements </label></div>
  <div> <input type='checkbox' name='scurring ' onChange={handl}/>  <label for='  scurring '>  scurring </label></div>
  <div> <input type='checkbox' name='continuous_feel_of_urine ' onChange={handl}/>  <label for='  continuous_feel_of_urine '>  continuous_feel_of_urine </label></div>
  <div> <input type='checkbox' name='silver_like_dusting ' onChange={handl}/>  <label for='  silver_like_dusting '>  silver_like_dusting </label></div>
  <div> <input type='checkbox' name='red_sore_around_nose ' onChange={handl}/>  <label for='  red_sore_around_nose '>  red_sore_around_nose </label></div>
  <div> <input type='checkbox' name='spotting_ urination ' onChange={handl}/>  <label for='  spotting_ urination '>  spotting_ urination </label></div>
  <div> <input type='checkbox' name='passage_of_gases ' onChange={handl}/>  <label for='  passage_of_gases '>  passage_of_gases </label></div>
  <div> <input type='checkbox' name='irregular_sugar_level ' onChange={handl}/>  <label for='  irregular_sugar_level '>  irregular_sugar_level </label></div>
  <div> <input type='checkbox' name='family_history ' onChange={handl}/>  <label for='  family_history '>  family_history </label></div>
  <div> <input type='checkbox' name='lack_of_concentration ' onChange={handl}/>  <label for='  lack_of_concentration '>  lack_of_concentration </label></div>
  <div> <input type='checkbox' name='excessive_hunger ' onChange={handl}/>  <label for='  excessive_hunger '>  excessive_hunger </label></div>
  <div> <input type='checkbox' name='yellowing_of_eyes ' onChange={handl}/>  <label for='  yellowing_of_eyes '>  yellowing_of_eyes </label></div>
  <div> <input type='checkbox' name='distention_of_abdomen ' onChange={handl}/>  <label for='  distention_of_abdomen '>  distention_of_abdomen </label></div>
  <div> <input type='checkbox' name='irritation_in_anus ' onChange={handl}/>  <label for='  irritation_in_anus '>  irritation_in_anus </label></div>
  <div> <input type='checkbox' name='swollen_legs ' onChange={handl}/>  <label for='  swollen_legs '>  swollen_legs </label></div>
  <div> <input type='checkbox' name='painful_walking ' onChange={handl}/>  <label for='  painful_walking '>  painful_walking </label></div>
  <div> <input type='checkbox' name='small_dents_in_nails ' onChange={handl}/>  <label for='  small_dents_in_nails '>  small_dents_in_nails </label></div>
  <div> <input type='checkbox' name='yellow_crust_ooze ' onChange={handl}/>  <label for='  yellow_crust_ooze '>  yellow_crust_ooze </label></div>
  <div> <input type='checkbox' name='internal_itching ' onChange={handl}/>  <label for='  internal_itching '>  internal_itching </label></div>
  <div> <input type='checkbox' name='mucoid_sputum ' onChange={handl}/>  <label for='  mucoid_sputum '>  mucoid_sputum </label></div>
  <div> <input type='checkbox' name='history_of_alcohol_consumption ' onChange={handl}/>  <label for='  history_of_alcohol_consumption '>  history_of_alcohol_consumption </label></div>
  <div> <input type='checkbox' name='swollen_blood_vessels ' onChange={handl}/>  <label for='  swollen_blood_vessels '>  swollen_blood_vessels </label></div>
  <div> <input type='checkbox' name='unsteadiness ' onChange={handl}/>  <label for='  unsteadiness '>  unsteadiness </label></div>
  <div> <input type='checkbox' name='inflammatory_nails ' onChange={handl}/>  <label for='  inflammatory_nails '>  inflammatory_nails </label></div>
  <div> <input type='checkbox' name='depression ' onChange={handl}/>  <label for='  depression '>  depression </label></div>
  <div> <input type='checkbox' name='fluid_overload ' onChange={handl}/>  <label for='  fluid_overload '>  fluid_overload </label></div>
  <div> <input type='checkbox' name='swelled_lymph_nodes ' onChange={handl}/>  <label for='  swelled_lymph_nodes '>  swelled_lymph_nodes </label></div>
  <div> <input type='checkbox' name='malaise ' onChange={handl}/>  <label for='  malaise '>  malaise </label></div>
  <div> <input type='checkbox' name='prominent_veins_on_calf ' onChange={handl}/>  <label for='  prominent_veins_on_calf '>  prominent_veins_on_calf </label></div>
  <div> <input type='checkbox' name='puffy_face_and_eyes ' onChange={handl}/>  <label for='  puffy_face_and_eyes '>  puffy_face_and_eyes </label></div>
  <div> <input type='checkbox' name='fast_heart_rate ' onChange={handl}/>  <label for='  fast_heart_rate '>  fast_heart_rate </label></div>
  <div> <input type='checkbox' name='irritability ' onChange={handl}/>  <label for='  irritability '>  irritability </label></div>
  <div> <input type='checkbox' name='muscle_pain ' onChange={handl}/>  <label for='  muscle_pain '>  muscle_pain </label></div>
  <div> <input type='checkbox' name='mild_fever ' onChange={handl}/>  <label for='  mild_fever '>  mild_fever </label></div>
  <div> <input type='checkbox' name='yellow_urine ' onChange={handl}/>  <label for='  yellow_urine '>  yellow_urine </label></div>
  <div> <input type='checkbox' name='phlegm ' onChange={handl}/>  <label for='  phlegm '>  phlegm </label></div>
  <div> <input type='checkbox' name='enlarged_thyroid ' onChange={handl}/>  <label for='  enlarged_thyroid '>  enlarged_thyroid </label></div>
  <div> <input type='checkbox' name='increased_appetite ' onChange={handl}/>  <label for='  increased_appetite '>  increased_appetite </label></div>
  <div> <input type='checkbox' name='visual_disturbances ' onChange={handl}/>  <label for='  visual_disturbances '>  visual_disturbances </label></div>
  <div> <input type='checkbox' name='brittle_nails ' onChange={handl}/>  <label for='  brittle_nails '>  brittle_nails </label></div>
  <div> <input type='checkbox' name='drying_and_tingling_lips ' onChange={handl}/>  <label for='  drying_and_tingling_lips '>  drying_and_tingling_lips </label></div>
  <div> <input type='checkbox' name='polyuria ' onChange={handl}/>  <label for='  polyuria '>  polyuria </label></div>
  <div> <input type='checkbox' name='pain_behind_the_eyes ' onChange={handl}/>  <label for='  pain_behind_the_eyes '>  pain_behind_the_eyes </label></div>
  <div> <input type='checkbox' name='toxic_look_(typhos) ' onChange={handl}/>  <label for='  toxic_look_(typhos) '>  toxic_look_(typhos) </label></div>
  <div> <input type='checkbox' name='throat_irritation ' onChange={handl}/>  <label for='  throat_irritation '>  throat_irritation </label></div>
  <div> <input type='checkbox' name='swollen_extremeties ' onChange={handl}/>  <label for='  swollen_extremeties '>  swollen_extremeties </label></div>
  <div> <input type='checkbox' name='slurred_speech ' onChange={handl}/>  <label for='  slurred_speech '>  slurred_speech </label></div>
  <div> <input type='checkbox' name='red_spots_over_body ' onChange={handl}/>  <label for='  red_spots_over_body '>  red_spots_over_body </label></div>
  <div> <input type='checkbox' name='belly_pain ' onChange={handl}/>  <label for='  belly_pain '>  belly_pain </label></div>
  <div> <input type='checkbox' name='receiving_blood_transfusion ' onChange={handl}/>  <label for='  receiving_blood_transfusion '>  receiving_blood_transfusion </label></div>
  <div> <input type='checkbox' name='acute_liver_failure ' onChange={handl}/>  <label for='  acute_liver_failure '>  acute_liver_failure </label></div>
  <div> <input type='checkbox' name='redness_of_eyes ' onChange={handl}/>  <label for='  redness_of_eyes '>  redness_of_eyes </label></div>
  <div> <input type='checkbox' name='rusty_sputum ' onChange={handl}/>  <label for='  rusty_sputum '>  rusty_sputum </label></div>
  <div> <input type='checkbox' name='abnormal_menstruation ' onChange={handl}/>  <label for='  abnormal_menstruation '>  abnormal_menstruation </label></div>
  <div> <input type='checkbox' name='receiving_unsterile_injections ' onChange={handl}/>  <label for='  receiving_unsterile_injections '>  receiving_unsterile_injections </label></div>
  <div> <input type='checkbox' name='coma ' onChange={handl}/>  <label for='  coma '>  coma </label></div>
  <div> <input type='checkbox' name='sinus_pressure ' onChange={handl}/>  <label for='  sinus_pressure '>  sinus_pressure </label></div>
  <div> <input type='checkbox' name='palpitations ' onChange={handl}/>  <label for='  palpitations '>  palpitations </label></div>
  <div> <input type='checkbox' name='stomach_bleeding ' onChange={handl}/>  <label for='  stomach_bleeding '>  stomach_bleeding </label></div>
  <div> <input type='checkbox' name='runny_nose ' onChange={handl}/>  <label for='  runny_nose '>  runny_nose </label></div>
  <div> <input type='checkbox' name='congestion ' onChange={handl}/>  <label for='  congestion '>  congestion </label></div>
  <div> <input type='checkbox' name='blood_in_sputum ' onChange={handl}/>  <label for='  blood_in_sputum '>  blood_in_sputum </label></div>
  <div> <input type='checkbox' name='loss_of_smell ' onChange={handl}/>  <label for='  loss_of_smell '>  loss_of_smell </label></div>


        <button type="submit" onClick={handle} >Submit</button>
        <h1>{resu}</h1>
        </div>
    )
}
export default Fom

 