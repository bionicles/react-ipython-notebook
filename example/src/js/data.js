var data =
{
 "cells": [
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# Ribbon Plots in Python"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/plain": [
       "'1.8.8'"
      ]
     },
     "execution_count": 2,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "import plotly\n",
    "plotly.__version__"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "##### Ribbon Plot"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 3,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<iframe id=\"igraph\" scrolling=\"no\" style=\"border:none;\"seamless=\"seamless\" src=\"https://plot.ly/~chelsea_lyn/8748.embed\" height=\"525px\" width=\"100%\"></iframe>"
      ],
      "text/plain": [
       "<plotly.tools.PlotlyDisplay object>"
      ]
     },
     "execution_count": 3,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "import plotly.plotly as py\n",
    "import plotly.graph_objs as go\n",
    "import urllib\n",
    "\n",
    "import numpy as np\n",
    "\n",
    "url = \"https://raw.githubusercontent.com/plotly/datasets/master/spectral.csv\"\n",
    "f = urllib.urlopen(url)\n",
    "spectra=np.loadtxt(f, delimiter=',')\n",
    "\n",
    "traces = []\n",
    "y_raw = spectra[:, 0] # wavelength\n",
    "sample_size = spectra.shape[1]-1 \n",
    "for i in range(1, sample_size):\n",
    "    z_raw = spectra[:, i]\n",
    "    x = []\n",
    "    y = []\n",
    "    z = []\n",
    "    ci = int(255/sample_size*i) # ci = \"color index\"\n",
    "    for j in range(0, len(z_raw)):\n",
    "        z.append([z_raw[j], z_raw[j]])\n",
    "        y.append([y_raw[j], y_raw[j]])\n",
    "        x.append([i*2, i*2+1])\n",
    "    traces.append(dict(\n",
    "        z=z,\n",
    "        x=x,\n",
    "        y=y,\n",
    "        colorscale=[ [i, 'rgb(%d,%d,255)'%(ci, ci)] for i in np.arange(0,1.1,0.1) ],\n",
    "        showscale=False,\n",
    "        type='surface',\n",
    "    ))\n",
    "\n",
    "fig = { 'data':traces, 'layout':{'title':'Ribbon Plot'} }\n",
    "py.iplot(fig, filename='ribbon-plot-python')"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 5,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<link href=\"//fonts.googleapis.com/css?family=Open+Sans:600,400,300,200|Inconsolata|Ubuntu+Mono:400,700\" rel=\"stylesheet\" type=\"text/css\" />"
      ],
      "text/plain": [
       "<IPython.core.display.HTML object>"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    },
    {
     "data": {
      "text/html": [
       "<link rel=\"stylesheet\" type=\"text/css\" href=\"http://help.plot.ly/documentation/all_static/css/ipython-notebook-custom.css\">"
      ],
      "text/plain": [
       "<IPython.core.display.HTML object>"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    },
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "\u001b[33mYou are using pip version 7.1.0, however version 7.1.2 is available.\n",
      "You should consider upgrading via the 'pip install --upgrade pip' command.\u001b[0m\n",
      "Requirement already up-to-date: publisher in /Users/Chelsea/venv2.7/lib/python2.7/site-packages\n"
     ]
    }
   ],
   "source": [
    "from IPython.display import display, HTML\n",
    "\n",
    "display(HTML('<link href=\"//fonts.googleapis.com/css?family=Open+Sans:600,400,300,200|Inconsolata|Ubuntu+Mono:400,700\" rel=\"stylesheet\" type=\"text/css\" />'))\n",
    "display(HTML('<link rel=\"stylesheet\" type=\"text/css\" href=\"http://help.plot.ly/documentation/all_static/css/ipython-notebook-custom.css\">'))\n",
    "\n",
    "! pip install publisher --upgrade\n",
    "import publisher\n",
    "publisher.publish(\n",
    "    'ribbon.ipynb', 'python/dendrogram', 'Python Ribbon Plots | plotly',\n",
    "    'How to make ribbon plots in Python. ',\n",
    "    name = 'Ribbon Plots',\n",
    "    thumbnail='/images/ribbon-plot.png', language='python',\n",
    "    page_type='example_index', has_thumbnail='true', display_as='3d_charts', order=5)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {
    "collapsed": true
   },
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 2",
   "language": "python",
   "name": "python2"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 2
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython2",
   "version": "2.7.9"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 0
}

export default data;
