<template>
    <div>
        <b-button pill variant="outline-primary"  v-b-modal.select-place-table
        class = "query-condition-button" size="sm">{{$t('selectPlace.selectButton')}}</b-button>
        <b-modal id="select-place-table" title="Select Place from Database" size = "xl">
            <b-row>
                <b-col :cols = 4 style = "text-align:right">
                    <b-card>
                        <b-form-group label-cols="4" label="Place English Name" label-for="select-place-input-en-name">
                            <b-form-input id="select-place-input-en-name"></b-form-input>
                        </b-form-group>
                        <b-form-group label-cols="4" label="地点名称-中文" label-for="select-place-input-ch-name">
                            <b-form-input id="select-place-input-ch-name"></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <b-button variant="primary">Search</b-button>
                        </b-form-group>
                    </b-card>

                    <b-card>
                        <b-form-group label-cols="4" label="Place English Name" label-for="select-place-input-en-name">
                            <b-form-input id="select-place-input-en-name"></b-form-input>
                        </b-form-group>
                        <b-form-group label-cols="4" label="地点名称-中文" label-for="select-place-input-ch-name">
                            <b-form-input id="select-place-input-ch-name"></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <b-button variant="primary">Select Places Belonging To</b-button>
                        </b-form-group>
                        <b-form-group>
                            <b-button variant="primary">Clear Places Belonging To</b-button>
                        </b-form-group>
                        <b-form-group>
                            <b-button variant="primary">Search</b-button>
                        </b-form-group>
                    </b-card>

                    <b-card>
                        <b-form-group label-cols="4" label="Place English Name" label-for="select-place-input-en-name">
                            <b-form-input id="select-place-input-en-name"></b-form-input>
                        </b-form-group>
                        <b-form-group label-cols="4" label="Place Chinese Name" label-for="select-place-input-ch-name">
                            <b-form-input id="select-place-input-ch-name"></b-form-input>
                        </b-form-group>
                        <b-form-group label-cols="4" label="From" label-for="select-place-input-ch-name">
                            <b-form-input id="select-place-input-ch-name"></b-form-input>
                        </b-form-group>
                        <b-form-group label-cols="4" label="To" label-for="select-place-input-ch-name">
                            <b-form-input id="select-place-input-ch-name"></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <b-button variant="primary">Filter</b-button>
                        </b-form-group>
                        <b-form-group>
                            <b-button variant="primary">Clear Filter</b-button>   
                        </b-form-group>   
                    </b-card>              
                </b-col>
                <b-col :cols = 8>
                    <b-table 
                        :items= "items" 
                        :fields= "fields" 
                        sticky-header = "1000px"
                        head-variant="light" 
                        ref="selectableTable"
                        selectable
                        select-mode="multi"
                        @row-selected="onRowSelected"
                        responsive="sm">
                        <template v-slot:cell(selected)="{ rowSelected }">
                            <template v-if="rowSelected">
                            <span aria-hidden="true">&check;</span>
                            <span class="sr-only">Selected</span>
                            </template>
                            <template v-else>
                            <span aria-hidden="true">&nbsp;</span>
                            <span class="sr-only">Not selected</span>
                            </template>
                        </template>
                    </b-table>
                </b-col>
            </b-row>
        </b-modal>
    </div>
</template>

<script>
export default {
    name:'selectPlace',
  data () {
    return {
      /*表格子數據放這裡*/
        fields: [
          {
            key: 'name',
            label:'Name',
            sortable: true
          },
          {
            key: 'nameCh',
            label:'姓名',
            sortable: true
          },
          {
            key: 'indexYear',
            label: 'Index Year',
            sortable: true,
          },
          {
            key: 'female',
            label:'Female',
            sortable: true
          },
          {
            key: 'placeType',
            label:'地名類',
            sortable: true
          },
          {
            key: 'personPlace',
            label: 'Place(Person)',
            sortable: true,
          },
          {
            key: 'personPlaceCh',
            label: '地名(人)',
            sortable: true,
          },
            {
            key: 'selected',
            sortable: false,
          }
        ],
        items: [
          {name:'Liu Jun',nameCh:'劉俊',indexYear:'1086',female:false,placeType:'籍貫',personPlace:'Nan Yang',personPlaceCh:'南陽'},
          {name:'Jiang Can',nameCh:'蔣璨',indexYear:'1114',female:false,placeType:'籍貫',personPlace:'Yi Xing',personPlaceCh:'宜興'},        
          {name:'Jiang Can',nameCh:'蔣璨',indexYear:'1114',female:false,placeType:'籍貫',personPlace:'Yi Xing',personPlaceCh:'宜興'},       
          {name:'Jiang Can',nameCh:'蔣璨',indexYear:'1114',female:false,placeType:'籍貫',personPlace:'Yi Xing',personPlaceCh:'宜興'}, 
          {name:'Jiang Can',nameCh:'蔣璨',indexYear:'1114',female:false,placeType:'籍貫',personPlace:'Yi Xing',personPlaceCh:'宜興'}, 
          {name:'Jiang Can',nameCh:'蔣璨',indexYear:'1114',female:false,placeType:'籍貫',personPlace:'Yi Xing',personPlaceCh:'宜興'}, 
          {name:'Jiang Can',nameCh:'蔣璨',indexYear:'1114',female:false,placeType:'籍貫',personPlace:'Yi Xing',personPlaceCh:'宜興'}, 
          {name:'Jiang Can',nameCh:'蔣璨',indexYear:'1114',female:false,placeType:'籍貫',personPlace:'Yi Xing',personPlaceCh:'宜興'}, 
          {name:'Jiang Can',nameCh:'蔣璨',indexYear:'1114',female:false,placeType:'籍貫',personPlace:'Yi Xing',personPlaceCh:'宜興'}, 
          {name:'Liu Jun',nameCh:'劉俊',indexYear:'1086',female:false,placeType:'籍貫',personPlace:'Nan Yang',personPlaceCh:'南陽'},
          {name:'Jiang Can',nameCh:'蔣璨',indexYear:'1114',female:false,placeType:'籍貫',personPlace:'Yi Xing',personPlaceCh:'宜興'},        
          {name:'Jiang Can',nameCh:'蔣璨',indexYear:'1114',female:false,placeType:'籍貫',personPlace:'Yi Xing',personPlaceCh:'宜興'},       
          {name:'Jiang Can',nameCh:'蔣璨',indexYear:'1114',female:false,placeType:'籍貫',personPlace:'Yi Xing',personPlaceCh:'宜興'}, 
          {name:'Jiang Can',nameCh:'蔣璨',indexYear:'1114',female:false,placeType:'籍貫',personPlace:'Yi Xing',personPlaceCh:'宜興'}, 
          {name:'Jiang Can',nameCh:'蔣璨',indexYear:'1114',female:false,placeType:'籍貫',personPlace:'Yi Xing',personPlaceCh:'宜興'}, 
          {name:'Jiang Can',nameCh:'蔣璨',indexYear:'1114',female:false,placeType:'籍貫',personPlace:'Yi Xing',personPlaceCh:'宜興'}, 
          {name:'Jiang Can',nameCh:'蔣璨',indexYear:'1114',female:false,placeType:'籍貫',personPlace:'Yi Xing',personPlaceCh:'宜興'}, 
          {name:'Jiang Can',nameCh:'蔣璨',indexYear:'1114',female:false,placeType:'籍貫',personPlace:'Yi Xing',personPlaceCh:'宜興'},
        ],
        //选中的人物出现在这里
        selected : []
    }
  },
  methods: {
      onRowSelected(items) {
        this.selected = items
        //要把选中的结果传递给调用的父组件
        console.log(this.selected)
      },
      selectAllRows() {
        this.$refs.selectableTable.selectAllRows()
      },
      clearSelected() {
        this.$refs.selectableTable.clearSelected()
      }
  }
}
</script>

<style scoped>
.query-condition-button{
  width:224px;
  margin:6px 0;
}
</style>