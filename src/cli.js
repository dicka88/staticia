import progress from './progress'
import splash from './splash'
import './config'
import yargs from 'yargs'
const argv = yargs
.command('{folder}', 'Generate static file html from spesific directory')
.option('template', {
    description: 'Change template for index.html',
    type: 'string',
})
.help()
.alias('help', 'h')
.argv

export function cli(){
  var args = argv["_"]
  if (args.length > 0) {
    var args0 = args[0] === "." ? "" : args[0]
    if (args0.split('/').length > 1 || args0.split('\\').length > 1) {
      throw new Error("Invalid directory name")
    }
    progress(args0, argv["template"])
  }
  else
    splash()
}
