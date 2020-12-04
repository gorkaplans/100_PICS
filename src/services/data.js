import firebase from 'firebase/app';
import 'firebase/firestore';



function getCollection(collection) {
  return firebase.firestore().collection(collection);
}

function parseDocument(doc) {
  return {
    id: doc.id,
    ...doc.data()
  }
}

export async function addObjectWithId(collection, id, obj) {
  try {
    const db = getCollection(collection);
    await db.doc(id).set(obj);
    return true;
  } catch (error) {
    console.log("addObjectWithId -> error", error)
    return false;
  }
}

export async function addObject(collection, obj) {
  try {
    const db = getCollection(collection);
    const result = await db.add(obj)
    return result.id;
  } catch (error) {
    console.log("addObject -> error", error)
    return null;
  }
}

export async function getObjectById(collection, id) {
  try {
    const db = getCollection(collection);
    const obj = await db.doc(id).get();
    if (obj.exists) {
      return parseDocument(obj);
    }
    return null;
    
  } catch (error) {
    console.log("getObjectById -> error", error)
  }
}

export async function updateObjectById(collection, id, updateFields) {
  try {
    const db = getCollection(collection);
    const obj = db.doc(id);
    await obj.update(updateFields);
    return true;
  } catch(error) {
    console.log("updateObjectById -> error", error)
    return false;
  }
}

export async function removeObjectById(collection, id) {
  try {
    const db = getCollection(collection);
    const obj = db.doc(id);
    await obj.delete();
    return true;
  } catch(error) {
    console.log("removeObjectById -> error", error)
    return false;
  }
}

export async function listObjects(collection, filter) {
  try {
    let db = getCollection(collection);
    if (filter) {
      db = db.where(filter.field, filter.condition, filter.value);
    
    }
    const querySnapshot = await db.get();
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(parseDocument(doc));
    })
    return data;
    
  } catch (error) {
    console.log("listObjects -> error", error)
    return [];
  }
}

export async function listUserExcursions(id) {
  try {
    let db = getCollection('excursions');
    
    db = db.where('userId', '==', id);
    
    const querySnapshot = await db.get();
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(parseDocument(doc));
    })
    return data;
    
  } catch (error) {
    console.log("listObjects -> error", error)
    return [];
  }
}




export async function listExcursions(id, limit) {
  try {
    let db = getCollection('excursions');
    
    db = db.where('mountainId', '==', id).orderBy('date', 'desc').limit(limit);
    
    const querySnapshot = await db.get();
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(parseDocument(doc));
    })
    return data;
    
  } catch (error) {
    console.log("listObjects -> error", error)
    return [];
  }
}


///Funcion qe devuelve una montaña con id 

export async function getMountainById(id){
  const mountainPageId = await getObjectById('mountains',id) 
  return mountainPageId

}


/// ==> Filter all mountaints on firebae by home filter params

export async function listMountainsByFilter(collection, formData, userLocation) {
  try {
    let db = getCollection(collection);
    const { dificult, time, altitude, checks, distance } = formData

    const checksTrue = Object.keys(checks).filter(name => checks[name])



    db = db.where('difficulty', '==', dificult)
      .where('time', 'array-contains', Number(time))
      .where('altitude', '<=', Number(altitude))
      

 
    const querySnapshot = await db.get();
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(parseDocument(doc));
    })

    ///filtra con los checks
    const dataFilter = data.filter(d => checksTrue.every(ct => d.checks.includes(ct)));
    console.log("listMountainsByFilter -> dataFilter", dataFilter)

    
    ///filtra la distancia
    const dataFilterdistance = dataFilter.filter(m => getDistanceBetweenUserCoordsAndMountainCoors(m.coords.w_,m.coords.T_,userLocation[0],userLocation[1]) <= Number(distance))
    
    return dataFilterdistance;

  } catch (error) {
    console.log("listMountainsByFilter -> error", error)
    return [];
  }
}


/// torna totes les muntanyes 

export async function getAllMountains(){
    const db = listObjects('mountains')

    return db
}


 
/// Funció que calcula la distancia entre geoPoints
function getDistanceBetweenUserCoordsAndMountainCoors(lat1,lon1,lat2,lon2){
  function rad(x){return x*Math.PI/180;}
  var R = 6378.137; //Radio de la tierra en km
  var dLat = rad( lat2 - lat1 );
  var dLong = rad( lon2 - lon1 );
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d.toFixed(0);
}








