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

/* export function setupCollectionObserver(collection, filter, onChange) {
  let db = getCollection(collection);
  if (filter) {
    db = db.where(filter.field, filter.condition, filter.value);
  }
  const unsubscribe = db.onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(parseDocument(doc));
    });
    onChange(data);
  });
  return unsubscribe;
} */

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


/// ==> Filter all mountaints on firebae by home filter params

export async function listMountainsByFilter(collection, formData) {
  try {
    let db = getCollection(collection);
    const { dificult, time, altitude, checks } = formData

    const checksTrue = Object.keys(checks).filter(name => checks[name])

    console.log(checksTrue)


    db = db.where('difficulty', '==', dificult)
      .where('time', 'array-contains', Number(time))
      .where('altitude', '<=', Number(altitude))
      

 
    const querySnapshot = await db.get();
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(parseDocument(doc));
    })

    const dataFilter = data.filter(d => checksTrue.every(ct => d.checks.includes(ct)));

    /// filtar distancia 
   

    ///dataFilter.forEach(mountain => getDistanceBetweenUserCoordsAndMountainCoors(m.coords[0],m.coords[1],))

    ///
    return dataFilter;

  } catch (error) {
    console.log("listMountainsByFilter -> error", error)
    return [];
  }
}


/// 

function getDistanceBetweenUserCoordsAndMountainCoors(lat1,lon1,lat2,lon2){
  function rad(x){return x*Math.PI/180;}
  var R = 6378.137; //Radio de la tierra en km
 var dLat = rad( lat2 - lat1 );
 var dLong = rad( lon2 - lon1 );
var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
 var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
 var d = R * c;
return d.toFixed(3); //Retorna tres decimales
}






