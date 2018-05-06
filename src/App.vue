<template>
  <div id="app">
    <h1>NIST 800-53 Report for
    <input class="project-input"v-model="projectName" placeholder="My Project"/>
    </h1>
    <div class="container">
      <div class="workspace">
        <h2>Search for controls and add notes</h2>
        <div class="workspace-container">
          <div class="filter-inputs">
            <label for="searchTerm">Search: </label>
            <input
              class="search-input"
              name="searchTerm"
              id="searchTerm" 
              type='text'
              v-model="searchTerm"
              >
            <div></div>
            <label for="family">Limit to families: </label>
            <select
              class="family-selector"
              name="family"
              id="family"
              multiple
              v-model="selectedFamilies"
              >
              <option value="AC">Access Control</option>
              <option value="AU">Audit and Accountability</option>
              <option value="AT">Awareness and Training</option>
              <option value="CM">Configuration Management</option>
              <option value="CP">Contingency Planning</option>
              <option value="IA">Identification and Authentication</option>
              <option value="IR">Incident Response</option>
              <option value="MA">Maintenance</option>
              <option value="MP">Media Protection</option>
              <option value="PS">Personnel Security</option>
              <option value="PE">Physical and Environmental Protection</option>
              <option value="PL">Planning</option>
              <option value="PM">Program Management</option>
              <option value="RA">Risk Assessment</option>
              <option value="CA">Security Assessment and Authorization</option>
              <option value="SC">System and Communications Protection</option>
              <option value="SI">System and Information Integrity</option>
              <option value="SA">System and Services Acquisition</option>
            </select>
          </div>
          <div class="filter-results">
            <ControlItem
              v-for="control in filteredControls"
              :key="control.name"
              :control="control"
              :editable="true"
              />
          </div>
        </div>
      </div>
      <div class="results">
        <div class="header">
          <h2>Review notes and export as CSV</h2>
          <a target="_blank" :download="downloadName" :href="computedCsv">Export</a>
        </div>
        <div class="controlContainer">
          <ControlItem
            v-for="control in controlsWithNotes"
            :key="control.name"
            :control="control"
            :editable="false"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Fuse from 'fuse.js';

import ControlItem from '@/components/ControlItem.vue';
import { Control, controls } from '@/controls';

@Component({
  components: {
    ControlItem,
  },
})
export default class App extends Vue {
  private controls: Control[] = controls;
  private selectedFamilies: string[] = [];
  private searchTerm: string = '';
  private projectName: string = '';

  get filteredControls(): Control[] {
    // do family filter first
    let filtered = this.controls;
    if (this.selectedFamilies.length !== 0) {
      filtered = this.controls.filter((c) =>
        this.selectedFamilies.includes(c.name.slice(0, 2)));
    }

    // now search
    if (this.searchTerm === '') {
      return filtered;
    }
    const fuse = new Fuse(filtered, {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        'description',
      ],
    });
    return fuse.search(this.searchTerm);
  }
  get controlsWithNotes(): Control[] {
    return this.controls.filter((c) => c.notes !== '');
  }
  get computedCsv(): string {
    const csvControls = this.controlsWithNotes
      .map((c) => `${c.name},${c.description},${c.notes}`)
      .reduce((total, item) => `${total}\n${item}`, '');
    return 'data:text/csv;base64,' + btoa(csvControls);
  }
  get downloadName(): string {
    const name = this.projectName === '' ? 'MyProject' : this.projectName;
    return `${name}_800-53_notes.csv`;
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
.project-input {
  font-size: 1em;
}
.container {
  display: flex;
  flex-direction: row;
  .workspace {
    flex: 3;
    .workspace-container {
      display: flex;
      flex-direction: row;
      .filter-inputs {
        flex: 1;
        .family-selector {
          font-size: 0.8em;
          height: 25em;
        }
        .search-input {
          margin-bottom: 1em;
        }
      }
      .filter-results {
        flex: 3;
      }
    }
  }
  .results {
    border-left: 1px solid gray;
    padding-left: 1em;
    margin-left: 3em;
    margin-right: 4em;
    flex: 2;
  }
}
</style>
