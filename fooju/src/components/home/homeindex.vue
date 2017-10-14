<template>
    <div>
      <mt-index-list>
        <mt-index-section index="item" v-for="item in py" :key="item">
          <mt-cell title="item2" v-for="item2 in pycontent" :key="item2"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
</template>


<script>
    import {indexlist, indexsection} from 'mint-ui'
    import {regionlist} from '../../api/config'
    export default{
      data () {
        return {
          py: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
          pycontent: [],
          tableData2: []
        }
      },
      components: {
        indexlist,
        indexsection
      },
      mounted () {
        this.getdata()
      },
      methods: {
        getdata () {
          var self = this
          regionlist().then(function (res) {
            if (res.data && res.data.code === 200) {
              self.tableData2 = res.data.data
            }
          })
        }
      }
    }
</script>


<style>

</style>
