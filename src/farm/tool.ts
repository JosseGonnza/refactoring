import {Material} from './material'

export class Tool {
  material: string
  improvement: string

  constructor(material: string = 'stone', improvement: string = '') {
    this.material = material
    this.improvement = improvement
  }


  improveToCooper(cooperBars: Material, woods: Material) {
    if(this.material !== 'stone') {
      throw new Error('Cannot improve tool to cooper')
    }

    if(cooperBars.name != 'cooper bar') {
      throw new Error('You need cooper bars to improve this tool to cooper')
    }

    if(cooperBars.quantity < 5 || woods.quantity < 5) {
      throw new Error('Not enough materials to improve to cooper')
    }

    this.material = 'cooper'
    this.improvement = this.getCooperImprovement()
  }

  improveToSteel(ironBars: Material, woods: Material) {
    if(this.material !== 'cooper') {
      throw new Error('Cannot improve tool to steel')
    }

    if(ironBars.name != 'iron bar') {
      throw new Error('You need iron bars to improve this tool to steel')
    }

    if(ironBars.quantity < 5 || woods.quantity < 5) {
      throw new Error('Not enough materials to improve to steel')
    }

    this.material = 'steel'
    this.improvement = this.getSteelImprovement()
  }

  getCooperImprovement() {
    return ''
  }

  getSteelImprovement() {
    return ''
  }
}