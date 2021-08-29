<!--
 * @Author: xiaolu
 * @Date: 2021-08-22 14:34:41
 * @LastEditors: xiaolu
 * @LastEditTime: 2021-08-26 09:33:00
 * @Description:
-->
<template>
  <div class="height-100% bg-page">
    <a-button
      class="margin-left-25 margin-top-25 box-shadow font-size-middle border-radius-large"
      @click="changeTheme"
    >
      换肤按钮
    </a-button>
    <div class="width-100% height-100%">
      <div>
        <div class="font-size-middle margin-left-25 margin-top-25">
          字体颜色：
        </div>
        <div class="width-100% flex-around margin-top-10">
          <div
            v-for="(item,index) in fontColors"
            :key="index"
            :class="['font-size-large',item.color]"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="font-size-middle margin-left-25 margin-top-20">
          字体大小：
        </div>
        <div class="width-100% flex-around margin-top-10">
          <div
            v-for="(item,index) in fontSizes"
            :key="index"
            :class="[item.fontSize]"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref,reactive } from 'vue'

let flag = true

const fontColors = reactive([
	// {
	// 	name: 'body 字体颜色',
	// 	color: 'text-color'
	// },
	{
		name: '禁用字体颜色',
		color: 'text-disabled-color'
	},
	{
		name: '错误字体颜色',
		color: 'text-error-color'
	}
]
)
const fontSizes = reactive([
	{
		name: 'mini 大小',
		fontSize: 'font-size-mini'
	},
	{
		name: 'small 字体',
		fontSize: 'font-size-small'
	},
	// {
	// 	name: 'middle 字体',
	// 	fontSize: 'font-size-middle'
	// },
	{
		name: 'large 字体',
		fontSize: 'font-size-large'
	}
]
)


function changeTheme(){
	if(flag){
		document.documentElement.setAttribute('data-theme', 'theme')

	}else{
		document.documentElement.setAttribute('data-theme', '')
	}
	flag = !flag
}

</script>

