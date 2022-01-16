function createMultipleDataList(data){
    let multiple = searchData.appendChild(document.createElement('option'));
    multiple.setAttribute('value', data.properties.label + ' , ' + data.properties.context )
  }
  export default createMultipleDataList