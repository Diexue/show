// components/form-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propData:{
      type:Array
    },
    propStyle:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _formSubmit(e){
      console.log('e',e)
      this.triggerEvent('formSubmit',{data:e.detail.value})
    }
  }
})
